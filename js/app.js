(function () {
  window.GeorgianApp = window.GeorgianApp || {};

  if (window.GeorgianApp._appInitialized) {
    return;
  }
  window.GeorgianApp._appInitialized = true;

  const THEME_STORAGE_KEY = 'georgian_cards_theme';
  const ALPHABET = window.GeorgianApp.ALPHABET || [];
  const CARDS = window.GeorgianApp.CARDS || [];
  const VISUAL_GROUPS = window.GeorgianApp.VISUAL_GROUPS || [];
  const MINIMAL_PAIRS = window.GeorgianApp.MINIMAL_PAIRS || [];
  const Storage = window.GeorgianApp.Storage;
  const AudioEngine = window.GeorgianApp.Audio;

  // Векторные иконки (строго без эмодзи)
  const ICONS = {
    speaker: '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.5 7.5h3.2L11 4v12l-4.3-3.5H3.5v-5z" stroke-linejoin="round"/><path d="M14 7.2a4.2 4.2 0 0 1 0 5.6M16.2 5a7.3 7.3 0 0 1 0 10" stroke-linecap="round"/></svg>',
    slow: '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10" cy="10" r="7.2"/><path d="M10 6.2v4.2l2.8 1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    flip: '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h10.5l-2.8-2.8M16 13H5.5l2.8 2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    spark: '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 2.5v3M10 14.5v3M2.5 10h3M14.5 10h3M4.8 4.8l2.1 2.1M13.1 13.1l2.1 2.1M15.2 4.8l-2.1 2.1M6.9 13.1l-2.1 2.1" stroke-linecap="round"/></svg>',
    award: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 21l5-2.6L17 21l-1.5-7" stroke-linejoin="round"/></svg>'
  };

  const FILTER_EXPLAINERS = {
    all: 'В грузинском письме Мхедрули ровно <strong>33 буквы</strong> и ни одной заглавной! Для каждой буквы подготовлено по <strong>5 карточек живой лексики</strong> (всего 165 карточек и 495 озвученных предложений).',
    vowel: 'В грузинском всего <strong>5 чистых гласных</strong> (ა, ე, ი, ო, უ). Они никогда не редуцируются: безударное «ო» всегда звучит чётко как [о], а «ე» не смягчает согласные.',
    consonant: '<strong>Звонкие и щелевые согласные</strong> никогда не оглушаются на конце слов и в сочетаниях. Обратите особое внимание на мягкое гортанное «ღ» [ɣ] и слитные аффрикаты «ძ» [dz] и «ჯ» [dʒ].',
    aspirated: '<strong>Придыхательные согласные [ʰ]</strong> (თ, ფ, ქ, ც, ჩ и лёгкий выдох ჰ) произносятся с ощутимым воздушным выдохом. Поднесите ладонь к губам — вы почувствуете тёплый поток воздуха!',
    ejective: '<strong>Горловые / абруптивные согласные [ʼ]</strong> (კ, პ, ტ, წ, ჭ, ყ) — визитная карточка кавказской фонетики! Голосовая щель смыкается, и звук рождается резким сухим щелчком во рту <em>без выдоха</em>.',
    confusable: '<strong>Коварные визуальные близнецы Мхедрули:</strong> сфокусируйтесь на положении буквы относительно базовой линии и числе верхних дуг (например, 1 прогиб = ღ, 2 ушка = დ, 3 арки = ლ).'
  };

  const CATEGORIES_ORDER = [
    'Еда',
    'Город',
    'Природа',
    'Действия',
    'Прилагательные',
    'Эмоции',
    'Транспорт',
    'Быт'
  ];

  const state = {
    activeView: 'dashboard',
    alphabetFilter: 'all',
    deckMode: 'leitner',
    sessionQueue: [],
    sessionIndex: 0,
    isFlipped: false,
    hintVisible: false,
    trainerTab: 'visual',
    selectedStrokeLetter: 'ყ',
    mpFilter: 'all',
    quizState: null,
    seenQuizIds: {
      letter: new Set(),
      photo: new Set(),
      builder: new Set(),
      antonym: new Set(),
      blitz: new Set(),
      daily: new Set()
    },
    activeCanvasCtx: null
  };

  /* ========================================================================
     УПРАВЛЕНИЕ ТЕМОЙ + CIRCULAR REVEAL (VIEW TRANSITIONS API)
     ======================================================================== */
  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function getCalligraphyInkColor(theme) {
    return theme === 'dark' ? '#F59E0B' : '#D97706';
  }

  function applyTheme(theme, persist) {
    const normalized = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', normalized);

    const meta = document.getElementById('meta-theme-color');
    if (meta) {
      meta.setAttribute('content', normalized === 'dark' ? '#0B0D12' : '#F8FAFC');
    }

    const labelEl = document.getElementById('theme-switcher-label');
    if (labelEl) {
      labelEl.textContent = normalized === 'dark' ? 'Тёмная' : 'Светлая';
    }

    const btnEl = document.getElementById('btn-theme-toggle');
    if (btnEl) {
      btnEl.setAttribute('aria-pressed', normalized === 'dark' ? 'true' : 'false');
    }

    if (state.activeCanvasCtx) {
      state.activeCanvasCtx.strokeStyle = getCalligraphyInkColor(normalized);
    }

    if (persist) {
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, normalized);
      } catch (_) {}
    }
  }

  function toggleThemeWithCircularReveal(event) {
    const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    AudioEngine.haptic(12);

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || prefersReduced) {
      applyTheme(next, true);
      return;
    }

    // Координаты центра расширяющегося круга прямо из точки клика (или центра кнопки при нажатии с клавиатуры)
    const btn = document.getElementById('btn-theme-toggle');
    let x = window.innerWidth - 48;
    let y = 34;
    if (event && typeof event.clientX === 'number' && (event.clientX !== 0 || event.clientY !== 0)) {
      x = event.clientX;
      y = event.clientY;
    } else if (btn) {
      const r = btn.getBoundingClientRect();
      x = r.left + r.width / 2;
      y = r.top + r.height / 2;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const rootEl = document.documentElement;
    rootEl.classList.add('is-theme-transitioning');

    const transition = document.startViewTransition(function () {
      applyTheme(next, true);
    });

    transition.ready
      .then(function () {
        rootEl.animate(
          {
            clipPath: [
              'circle(0px at ' + x + 'px ' + y + 'px)',
              'circle(' + endRadius + 'px at ' + x + 'px ' + y + 'px)'
            ]
          },
          {
            duration: 560,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      })
      .catch(function () {});

    transition.finished
      .then(function () {
        rootEl.classList.remove('is-theme-transitioning');
      })
      .catch(function () {
        rootEl.classList.remove('is-theme-transitioning');
      });
  }

  function initThemeSwitcher() {
    applyTheme(getCurrentTheme(), false);

    const btn = document.getElementById('btn-theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleThemeWithCircularReveal);
    }

    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = function (e) {
        let saved = null;
        try {
          saved = window.localStorage.getItem(THEME_STORAGE_KEY);
        } catch (_) {}
        if (saved !== 'dark' && saved !== 'light') {
          applyTheme(e.matches ? 'dark' : 'light', false);
        }
      };
      if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', listener);
      }
    }
  }

  /* ========================================================================
     INTERACTIVE SPOTLIGHT & 3D TILT НА КАРТОЧКАХ (ЕДИНОЕ ДЕЛЕГИРОВАНИЕ)
     ======================================================================== */
  function initInteractiveSpotlight() {
    const heroIntro = document.querySelector('.hero-intro');
    if (heroIntro) {
      heroIntro.classList.add('spotlight-card', 'stagger-item');
      heroIntro.style.setProperty('--stagger-idx', '0');
    }

    let lastHoveredCard = null;

    function resetTilt(el) {
      if (!el) return;
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    }

    document.addEventListener('pointermove', function (e) {
      if (e.pointerType && e.pointerType !== 'mouse') return;

      const card = e.target.closest('.spotlight-card');
      if (lastHoveredCard && lastHoveredCard !== card) {
        resetTilt(lastHoveredCard);
      }
      lastHoveredCard = card;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', relX + 'px');
      card.style.setProperty('--mouse-y', relY + 'px');

      // Деликатный 3D-наклон на плитках алфавита и карточках викторин
      if (card.classList.contains('letter-tile') || card.classList.contains('quiz-mode-card')) {
        const normX = (relX / Math.max(1, rect.width)) - 0.5;
        const normY = (relY / Math.max(1, rect.height)) - 0.5;
        const maxDeg = card.classList.contains('letter-tile') ? 5.2 : 3.4;
        card.style.setProperty('--tilt-x', (-normY * maxDeg).toFixed(2) + 'deg');
        card.style.setProperty('--tilt-y', (normX * maxDeg).toFixed(2) + 'deg');
      }
    }, { passive: true });

    document.addEventListener('pointerleave', function () {
      if (lastHoveredCard) {
        resetTilt(lastHoveredCard);
        lastHoveredCard = null;
      }
    }, { passive: true });
  }

  /* ========================================================================
     ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ РЕНДЕРИНГА И ТЕКСТА
     ======================================================================== */
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function highlightGeoWord(wordGeo, targetLetter) {
    if (!targetLetter) return escapeHtml(wordGeo);
    return Array.from(wordGeo)
      .map(function (ch) {
        if (ch === targetLetter) {
          return '<span class="hl-letter">' + escapeHtml(ch) + '</span>';
        }
        return escapeHtml(ch);
      })
      .join('');
  }

  function highlightLatinTranslit(translit, letterObj) {
    if (!letterObj || !letterObj.translitLat) return escapeHtml(translit);
    const pat = letterObj.translitLat;
    const idx = translit.toLowerCase().indexOf(pat.toLowerCase());
    if (idx === -1) return escapeHtml(translit);
    const before = translit.slice(0, idx);
    const match = translit.slice(idx, idx + pat.length);
    const after = translit.slice(idx + pat.length);
    return escapeHtml(before) + '<span class="hl-letter">' + escapeHtml(match) + '</span>' + escapeHtml(after);
  }

  function getLetterMeta(letterChar) {
    return ALPHABET.find(function (a) { return a.letter === letterChar; }) || ALPHABET[0];
  }

  function showToast(message) {
    const wrap = document.getElementById('toast-container');
    if (!wrap) return;
    const el = document.createElement('div');
    el.className = 'toast-msg';
    el.textContent = message;
    wrap.appendChild(el);
    setTimeout(function () {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.25s ease';
      setTimeout(function () { el.remove(); }, 260);
    }, 3400);
  }

  function notifyBadges(badges) {
    if (!badges || !badges.length) return;
    badges.forEach(function (b) {
      showToast('Открыто достижение: «' + b.title + '»!');
    });
    updateHeaderAndDashboardStats();
  }

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  /* ========================================================================
     ЕДИНОЕ ГЛОБАЛЬНОЕ ДЕЛЕГИРОВАНИЕ КНОПОК ЗВУКА
     ======================================================================== */
  function initAudioDelegation() {
    document.addEventListener('click', function (e) {
      const letterBtn = e.target.closest('[data-play-letter-idx]');
      if (letterBtn) {
        e.preventDefault();
        e.stopPropagation();
        const idx = Number(letterBtn.getAttribute('data-play-letter-idx'));
        const ch = letterBtn.getAttribute('data-play-letter-char') || '';
        AudioEngine.playLetter(idx, ch, letterBtn);
        return;
      }

      const seqBtn = e.target.closest('[data-play-seq-left]');
      if (seqBtn) {
        e.preventDefault();
        e.stopPropagation();
        AudioEngine.playSequence([
          { src: seqBtn.getAttribute('data-play-seq-left') },
          { src: seqBtn.getAttribute('data-play-seq-right') }
        ], seqBtn);
        return;
      }

      const audioBtn = e.target.closest('[data-play-src]');
      if (audioBtn) {
        e.preventDefault();
        e.stopPropagation();
        const src = audioBtn.getAttribute('data-play-src');
        const fallback = audioBtn.getAttribute('data-play-fallback') || '';
        const isSlow = audioBtn.getAttribute('data-play-slow') === '1';
        AudioEngine.play(src, {
          slow: isSlow,
          button: audioBtn,
          fallbackText: fallback
        });
      }
    });
  }

  /* ========================================================================
     НАВИГАЦИЯ МЕЖДУ ЭКРАНАМИ С FADE + SLIDE АНИМАЦИЕЙ
     ======================================================================== */
  function switchView(viewName) {
    AudioEngine.stop();
    if (state.quizState && state.quizState.timerId && viewName !== 'quizzes') {
      clearInterval(state.quizState.timerId);
      state.quizState.timerId = null;
    }

    state.activeView = viewName;
    document.querySelectorAll('.view-section').forEach(function (sec) {
      const isMatch = sec.id === 'view-' + viewName;
      sec.classList.remove('is-active');
      if (isMatch) {
        // Форсируем перезапуск плавной анимации экрана при смене вкладки
        void sec.offsetWidth;
        sec.classList.add('is-active');
      }
    });
    document.querySelectorAll('[data-nav]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-nav') === viewName);
    });

    if (viewName === 'dashboard') {
      updateHeaderAndDashboardStats();
      renderAlphabetGrid();
    } else if (viewName === 'cards') {
      populateDeckSelector();
      if (!state.sessionQueue.length) {
        startCardSession(state.deckMode || 'leitner');
      } else {
        renderActiveCard();
      }
    } else if (viewName === 'trainer') {
      renderTrainerView();
    } else if (viewName === 'quizzes') {
      renderQuizHub();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ========================================================================
     РАЗДЕЛ 1: ДАШБОРД, СТАТИСТИКА, СЛОВО ДНЯ И СЕТКА 33 БУКВ
     ======================================================================== */
  function updateHeaderAndDashboardStats() {
    const sum = Storage.getSummary();
    const pct = sum.totalWords ? Math.round((sum.learnedWords / sum.totalWords) * 100) : 0;

    document.getElementById('hdr-streak').textContent = sum.streak + ' дн.';
    document.getElementById('hdr-learned').textContent = sum.learnedWords + ' / ' + sum.totalWords;
    document.getElementById('hdr-badges-count').textContent = sum.badgesCount;

    document.getElementById('due-cards-count').textContent = sum.dueCount;
    document.getElementById('dash-level-title').textContent = sum.levelTitle;
    document.getElementById('dash-learned-words').textContent = sum.learnedWords;
    const totalEl = document.getElementById('dash-total-words');
    if (totalEl) totalEl.textContent = sum.totalWords;
    document.getElementById('dash-progress-pct').textContent = pct + '%';
    document.getElementById('dash-progress-fill').style.width = pct + '%';
    document.getElementById('dash-mastered-letters').textContent = sum.masteredLetters;
  }

  function renderWordOfDay() {
    const box = document.getElementById('word-of-day-card');
    if (!box || !CARDS.length) return;

    box.classList.add('spotlight-card', 'stagger-item');
    box.style.setProperty('--stagger-idx', '2');

    const featuredIds = [
      'card_24_1', 'card_23_1', 'card_12_1', 'card_29_1', 'card_08_1',
      'card_18_1', 'card_30_1', 'card_03_3', 'card_15_3', 'card_32_4'
    ];
    const daySeed = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
    const targetId = featuredIds[daySeed % featuredIds.length];
    const card = CARDS.find(function (c) { return c.id === targetId; }) || CARDS[0];
    const letterMeta = getLetterMeta(card.letter);

    box.innerHTML =
      '<div class="wod-photo-wrap">' +
        '<img src="' + escapeHtml(card.imageUrl) + '" alt="' + escapeHtml(card.translationRu) + '" loading="eager" />' +
        '<span class="wod-tag">Слово дня · Буква ' + escapeHtml(card.letter) + '</span>' +
      '</div>' +
      '<div class="wod-body">' +
        '<div>' +
          '<div class="wod-top-row">' +
            '<div>' +
              '<p class="wod-geo" lang="ka">' + highlightGeoWord(card.wordGeo, card.letter) + '</p>' +
              '<div class="wod-translit">' + highlightLatinTranslit(card.translitLat, letterMeta) + ' · ' + escapeHtml(card.ipa) + ' · «' + escapeHtml(card.translitRu) + '»</div>' +
            '</div>' +
            '<button class="btn-audio" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '" aria-label="Прослушать слово дня">' +
              ICONS.speaker +
            '</button>' +
          '</div>' +
          '<p class="wod-meaning">' + escapeHtml(card.translationRu) + ' <span style="color:var(--slate-muted);font-weight:400">/ ' + escapeHtml(card.translationEn) + '</span></p>' +
          '<p style="margin:6px 0 0;font-size:0.84rem;color:var(--slate-muted)">Антоним: <strong lang="ka">' + escapeHtml(card.antonym.wordGeo) + '</strong> (' + escapeHtml(card.antonym.translationRu) + ')</p>' +
        '</div>' +
        '<div class="wod-footer">' +
          '<span style="font-size:0.78rem;color:var(--slate-muted)">' + escapeHtml(card.category || letterMeta.groupLabel) + '</span>' +
          '<button class="btn btn-outline btn-sm" id="btn-wod-open" type="button">Открыть карточку</button>' +
        '</div>' +
      '</div>';

    document.getElementById('btn-wod-open').addEventListener('click', function () {
      AudioEngine.stop();
      startCardSession(card.letter, card.id);
      switchView('cards');
    });
  }

  function renderAlphabetGrid() {
    const grid = document.getElementById('alphabet-grid');
    const explainer = document.getElementById('filter-explainer');
    if (!grid) return;

    explainer.innerHTML = FILTER_EXPLAINERS[state.alphabetFilter] || FILTER_EXPLAINERS.all;

    const filtered = ALPHABET.filter(function (item) {
      if (state.alphabetFilter === 'all') return true;
      if (state.alphabetFilter === 'confusable') return item.isConfusablePair;
      return item.group === state.alphabetFilter;
    });

    const badgeClassMap = {
      vowel: 'badge-vowel',
      consonant: 'badge-consonant',
      aspirated: 'badge-aspirated',
      ejective: 'badge-ejective'
    };

    const shortGroupLabel = {
      vowel: 'Гласная',
      consonant: 'Согласная',
      aspirated: 'Придых. [ʰ]',
      ejective: 'Абруптив [ʼ]'
    };

    grid.innerHTML = filtered.map(function (item, i) {
      const st = Storage.getLetterStats(item.letter);
      const pct = st.total ? Math.round((st.learned / st.total) * 100) : 0;
      const staggerDelayIdx = Math.min(i, 22);
      const confNote = state.alphabetFilter === 'confusable' && item.confusableWith.length
        ? '<div style="font-size:0.73rem;color:var(--accent-bright);margin-bottom:5px">Сравните с: <strong lang="ka">' + escapeHtml(item.confusableWith.join(' · ')) + '</strong></div>'
        : '';

      return (
        '<div class="letter-tile spotlight-card stagger-item ' + (st.isMastered ? 'is-mastered' : '') + '" style="--stagger-idx:' + staggerDelayIdx + '" data-letter-open="' + escapeHtml(item.letter) + '" role="button" tabindex="0" aria-label="Буква ' + escapeHtml(item.nameRu) + '">' +
          '<div>' +
            '<div class="tile-top">' +
              '<span class="tile-index">№ ' + item.index + '</span>' +
              '<span class="tile-badge ' + (badgeClassMap[item.group] || 'badge-consonant') + '">' + (shortGroupLabel[item.group] || '') + '</span>' +
            '</div>' +
            '<div class="tile-glyph-stage">' +
              '<span class="tile-glyph" lang="ka">' + escapeHtml(item.letter) + '</span>' +
              '<button class="tile-audio-mini" type="button" data-play-letter-idx="' + item.index + '" data-play-letter-char="' + escapeHtml(item.letter) + '" title="Послушать название и звук буквы" aria-label="Послушать букву ' + escapeHtml(item.nameRu) + '">' +
                ICONS.speaker +
              '</button>' +
            '</div>' +
            '<div class="tile-meta">' +
              '<span class="tile-name" lang="ka">' + escapeHtml(item.nameGeo) + ' <span style="font-weight:400;color:var(--slate-muted)">(' + escapeHtml(item.nameRu) + ')</span></span>' +
              '<span class="tile-ipa">' + escapeHtml(item.ipa) + '</span>' +
            '</div>' +
            confNote +
          '</div>' +
          '<div class="tile-progress-row">' +
            '<div class="tile-progress-track"><div class="tile-progress-fill" style="width:' + pct + '%"></div></div>' +
            '<span class="tile-progress-text">' + st.learned + '/' + st.total + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  /* ========================================================================
     РАЗДЕЛ 2: УМНЫЕ КАРТОЧКИ (3D ФИЗИКА ВЕСА + LEITNER SYSTEM)
     ======================================================================== */
  function populateDeckSelector() {
    const sel = document.getElementById('select-card-deck');
    if (!sel) return;

    const sum = Storage.getSummary();
    let html =
      '<optgroup label="Режимы повторения">' +
        '<option value="leitner">Умная сессия Лейтнера (по 25 из ' + sum.dueCount + ' к повтору)</option>' +
        '<option value="all">Весь словарь подряд (все ' + CARDS.length + ' карточек)</option>' +
      '</optgroup>' +
      '<optgroup label="По жизненным темам">';

    CATEGORIES_ORDER.forEach(function (cat) {
      const catCards = CARDS.filter(function (c) { return c.category === cat; });
      const learned = catCards.filter(function (c) { return Storage.isCardLearned(c.id); }).length;
      html += '<option value="cat:' + escapeHtml(cat) + '">Тема: ' + escapeHtml(cat) + ' (' + learned + '/' + catCards.length + ')</option>';
    });

    html += '</optgroup><optgroup label="По буквам алфавита (33 буквы × 5 слов)">';

    ALPHABET.forEach(function (item) {
      const st = Storage.getLetterStats(item.letter);
      html += '<option value="' + escapeHtml(item.letter) + '">' +
        item.index + '. ' + item.letter + ' (' + item.nameGeo + ' · ' + item.translitRu + ') — ' + st.learned + '/' + st.total +
        '</option>';
    });

    html += '</optgroup>';
    sel.innerHTML = html;
    sel.value = state.deckMode;
  }

  function startCardSession(mode, focusCardId) {
    AudioEngine.stop();
    state.deckMode = mode || 'leitner';
    state.isFlipped = false;
    state.hintVisible = false;

    if (state.deckMode === 'leitner') {
      state.sessionQueue = Storage.getLeitnerQueue(25);
    } else if (state.deckMode === 'all') {
      state.sessionQueue = CARDS.slice();
    } else if (state.deckMode.indexOf('cat:') === 0) {
      const catName = state.deckMode.slice(4);
      state.sessionQueue = CARDS.filter(function (c) { return c.category === catName; });
    } else {
      const letterCards = CARDS.filter(function (c) { return c.letter === state.deckMode; });
      state.sessionQueue = letterCards.length ? letterCards.slice() : Storage.getLeitnerQueue(25);
    }

    state.sessionIndex = 0;
    if (focusCardId) {
      const foundIdx = state.sessionQueue.findIndex(function (c) { return c.id === focusCardId; });
      if (foundIdx !== -1) state.sessionIndex = foundIdx;
    }

    populateDeckSelector();
    renderActiveCard();
  }

  function flipActiveCard(forceState) {
    const cardEl = document.getElementById('flip-card');
    if (!cardEl || state.sessionIndex >= state.sessionQueue.length) return;
    const nextFlipped = typeof forceState === 'boolean' ? forceState : !state.isFlipped;
    if (nextFlipped === state.isFlipped) return;

    AudioEngine.stop();
    state.isFlipped = nextFlipped;

    cardEl.classList.remove('anim-to-back', 'anim-to-front');
    void cardEl.offsetWidth;
    cardEl.classList.toggle('is-flipped', state.isFlipped);
    cardEl.classList.add(state.isFlipped ? 'anim-to-back' : 'anim-to-front');

    AudioEngine.haptic(14);
  }

  function renderSessionComplete() {
    AudioEngine.stop();
    const front = document.getElementById('card-front-content');
    const back = document.getElementById('card-back-content');
    const cardEl = document.getElementById('flip-card');
    cardEl.classList.remove('is-flipped', 'anim-to-back', 'anim-to-front');
    state.isFlipped = false;

    let titleText = 'Сессия интервального повторения завершена!';
    if (state.deckMode === 'all') {
      titleText = 'Вы прошли все ' + CARDS.length + ' карточек словаря!';
    } else if (state.deckMode.indexOf('cat:') === 0) {
      titleText = 'Все карточки темы «' + state.deckMode.slice(4) + '» пройдены!';
    } else if (state.deckMode !== 'leitner') {
      titleText = 'Все 5 карточек буквы «' + state.deckMode + '» пройдены!';
    }

    let nextLetterBtnHtml = '';
    if (state.deckMode.length === 1) {
      const curMeta = getLetterMeta(state.deckMode);
      const nextMeta = ALPHABET[curMeta.index % ALPHABET.length];
      nextLetterBtnHtml = '<button class="btn btn-ghost" id="btn-session-next-letter" type="button">Следующая буква: ' + escapeHtml(nextMeta.letter) + ' (' + escapeHtml(nextMeta.nameGeo) + ')</button>';
    }

    front.innerHTML =
      '<div class="front-body" style="text-align:center;padding:42px 28px;align-items:center">' +
        '<div class="qm-icon-box" style="width:62px;height:62px;border-radius:50%">' + ICONS.award + '</div>' +
        '<h3 style="font-family:var(--font-editorial);font-size:1.6rem;margin:4px 0">' + escapeHtml(titleText) + '</h3>' +
        '<p style="color:var(--slate-muted);max-width:46ch;margin:0 0 12px">Отличная работа! Теперь закрепите произношение, написание и антонимы в игровом мини-квизе.</p>' +
        '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px">' +
          '<button class="btn btn-primary" id="btn-finish-to-quiz" type="button">Закрепить в мини-квизе</button>' +
          '<button class="btn btn-outline" id="btn-restart-deck" type="button">Новая порция / повтор</button>' +
          nextLetterBtnHtml +
        '</div>' +
      '</div>';
    back.innerHTML = '';

    document.getElementById('session-counter-label').textContent = 'Сессия завершена';
    document.getElementById('session-progress-fill').style.width = '100%';

    document.getElementById('btn-finish-to-quiz').addEventListener('click', function () {
      const forced = state.deckMode.length === 1 ? state.deckMode : null;
      switchView('quizzes');
      startQuiz('daily', forced);
    });
    document.getElementById('btn-restart-deck').addEventListener('click', function () {
      startCardSession(state.deckMode);
    });
    const nextBtn = document.getElementById('btn-session-next-letter');
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        const curMeta = getLetterMeta(state.deckMode);
        const nextMeta = ALPHABET[curMeta.index % ALPHABET.length];
        startCardSession(nextMeta.letter);
      });
    }
  }

  function renderActiveCard() {
    AudioEngine.stop();

    const cardEl = document.getElementById('flip-card');
    const front = document.getElementById('card-front-content');
    const back = document.getElementById('card-back-content');
    if (!cardEl || !front || !back) return;

    if (state.sessionIndex >= state.sessionQueue.length) {
      renderSessionComplete();
      return;
    }

    const card = state.sessionQueue[state.sessionIndex];
    const letterMeta = getLetterMeta(card.letter);
    const prog = Storage.getCardProgress(card.id);

    cardEl.classList.remove('is-flipped', 'anim-to-back', 'anim-to-front');
    cardEl.style.transform = '';
    state.isFlipped = false;
    state.hintVisible = false;

    const total = state.sessionQueue.length;
    const currentNum = state.sessionIndex + 1;
    document.getElementById('session-counter-label').textContent =
      'Карточка ' + currentNum + ' из ' + total + ' (всего в словаре: ' + CARDS.length + ')';
    document.getElementById('session-progress-fill').style.width = Math.round((currentNum / total) * 100) + '%';

    const boxLabel = prog.box === 0 ? 'Новая' : ('Бокс ' + prog.box + '/5');
    const categoryText = card.category ? (card.category + ' · ') : '';
    const artTip = card.articulationTip
      ? (escapeHtml(card.articulationTip) + ' (' + escapeHtml(letterMeta.groupLabel) + ')')
      : escapeHtml(letterMeta.articulation);

    // ЛИЦЕВАЯ СТОРОНА (FRONT)
    front.innerHTML =
      '<div class="front-photo-box" data-flip-trigger="true" title="Нажмите, чтобы перевернуть карточку">' +
        '<img src="' + escapeHtml(card.imageUrl) + '" alt="' + escapeHtml(card.imageCaption) + '" />' +
        '<div class="front-photo-overlay">' +
          '<div class="front-top-badges">' +
            '<span class="glass-pill" lang="ka">Буква ' + escapeHtml(card.letter) + ' · ' + escapeHtml(letterMeta.nameGeo) + '</span>' +
            '<span class="glass-pill">' + escapeHtml(categoryText + card.difficulty + ' · ' + boxLabel) + '</span>' +
          '</div>' +
          '<div class="photo-caption-bar">' +
            '<span>' + escapeHtml(card.imageCaption) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="front-body">' +
        '<div class="front-word-block" data-flip-trigger="true">' +
          '<p class="front-word-geo" lang="ka">' + highlightGeoWord(card.wordGeo, card.letter) + '</p>' +
          '<div class="front-transcription-row">' +
            '<span>' + highlightLatinTranslit(card.translitLat, letterMeta) + '</span>' +
            '<span class="ipa-chip">' + escapeHtml(card.ipa) + '</span>' +
            '<span>«' + escapeHtml(card.translitRu) + '»</span>' +
            '<span style="color:var(--accent-bright);font-weight:600">' + escapeHtml(letterMeta.groupLabel) + '</span>' +
          '</div>' +
        '</div>' +

        '<div class="audio-controls-row">' +
          '<button class="btn-audio" id="btn-card-audio-norm" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '">' +
            ICONS.speaker +
            '<span>Обычная скорость</span>' +
          '</button>' +
          '<button class="btn-audio btn-audio-slow" id="btn-card-audio-slow" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '" data-play-slow="1">' +
            ICONS.slow +
            '<span>Замедленно (0.6×)</span>' +
          '</button>' +
        '</div>' +

        '<div class="articulation-note">' +
          '<strong>Артикуляция в слове (' + escapeHtml(card.letter) + '):</strong> ' + artTip +
        '</div>' +

        '<div id="card-semantic-hint" class="hint-box is-hidden">' +
          '<strong>Намёк:</strong> ' + escapeHtml(card.semanticHint) +
        '</div>' +

        '<div class="front-footer-actions">' +
          '<button class="btn btn-ghost btn-sm" id="btn-toggle-hint" type="button">' +
            ICONS.spark +
            '<span>Показать намёк</span>' +
          '</button>' +
          '<button class="btn btn-primary btn-sm" id="btn-flip-to-back" type="button">' +
            ICONS.flip +
            '<span>Перевернуть карточку</span>' +
          '</button>' +
        '</div>' +
      '</div>';

    // ОБОРОТНАЯ СТОРОНА (BACK)
    const examplesHtml = (card.examples || []).map(function (ex) {
      return (
        '<div class="example-item">' +
          '<div>' +
            '<div class="example-geo" lang="ka">' + highlightGeoWord(ex.geo, card.letter) + '</div>' +
            '<div class="example-gloss">' + escapeHtml(ex.gloss) + '</div>' +
            '<div class="example-ru">' + escapeHtml(ex.ru) + '</div>' +
          '</div>' +
          '<button class="tile-audio-mini" style="position:static;flex-shrink:0;width:34px;height:34px" type="button" data-play-src="' + escapeHtml(ex.audio) + '" data-play-fallback="' + escapeHtml(ex.geo) + '" aria-label="Прослушать пример">' +
            ICONS.speaker +
          '</button>' +
        '</div>'
      );
    }).join('');

    back.innerHTML =
      '<div class="back-body">' +
        '<div class="back-header">' +
          '<div class="back-translations">' +
            '<div><span class="back-word-mini" lang="ka">' + highlightGeoWord(card.wordGeo, card.letter) + '</span> <span class="ipa-chip">' + escapeHtml(card.ipa) + '</span></div>' +
            '<h3>' + escapeHtml(card.translationRu) + '</h3>' +
            '<div class="back-translation-en">EN: ' + escapeHtml(card.translationEn) + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;align-items:center">' +
            '<button class="btn-audio btn-sm" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '">' + ICONS.speaker + '<span>Слушать</span></button>' +
            '<button class="btn btn-ghost btn-sm" id="btn-flip-to-front" type="button">' + ICONS.flip + '<span>Лицевая</span></button>' +
          '</div>' +
        '</div>' +

        '<div class="antonym-pair-panel">' +
          '<div class="panel-mini-title">Контекст и связанная пара — Антоним</div>' +
          '<div class="antonym-cards-row">' +
            '<div class="mini-pair-card">' +
              '<img src="' + escapeHtml(card.imageUrl) + '" alt="' + escapeHtml(card.translationRu) + '" />' +
              '<div class="mini-pair-info">' +
                '<div class="mini-pair-geo" lang="ka">' + highlightGeoWord(card.wordGeo, card.letter) + '</div>' +
                '<div class="mini-pair-ru">' + escapeHtml(card.translationRu) + '</div>' +
              '</div>' +
              '<button class="tile-audio-mini" style="position:static;flex-shrink:0" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '" aria-label="Слушать основное слово">' + ICONS.speaker + '</button>' +
            '</div>' +

            '<div class="antonym-arrow" aria-hidden="true">↔</div>' +

            '<div class="mini-pair-card">' +
              '<img src="' + escapeHtml(card.antonym.imageUrl) + '" alt="' + escapeHtml(card.antonym.translationRu) + '" />' +
              '<div class="mini-pair-info">' +
                '<div class="mini-pair-geo" lang="ka">' + escapeHtml(card.antonym.wordGeo) + '</div>' +
                '<div class="mini-pair-ru">' + escapeHtml(card.antonym.translationRu) + ' · ' + escapeHtml(card.antonym.translitRu) + '</div>' +
              '</div>' +
              '<button class="tile-audio-mini" style="position:static;flex-shrink:0" type="button" data-play-src="' + escapeHtml(card.antonym.audioNormal) + '" data-play-fallback="' + escapeHtml(card.antonym.wordGeo) + '" aria-label="Слушать антоним">' + ICONS.speaker + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div>' +
          '<div class="panel-mini-title">Примеры в живой речи (' + (card.examples || []).length + ' фразы с пословным разбором)</div>' +
          '<div class="examples-list">' + examplesHtml + '</div>' +
        '</div>' +

        '<div class="notes-grid">' +
          '<div class="note-box">' +
            '<strong>Грамматика и фонетика</strong>' +
            escapeHtml(card.grammarMarker) +
          '</div>' +
          '<div class="note-box note-box-cultural">' +
            '<strong>Культурный код Грузии</strong>' +
            escapeHtml(card.culturalNote) +
          '</div>' +
        '</div>' +

        '<div class="leitner-actions">' +
          '<div class="leitner-caption">Оцените запоминание (система интервального повторения Лейтнера):</div>' +
          '<div class="leitner-buttons-grid">' +
            '<button class="btn-leitner btn-leitner-hard" data-grade="hard" type="button">' +
              '<span class="btn-leitner-title"><span class="dot dot-crimson"></span>Не помню</span>' +
              '<span class="btn-leitner-sub">Повтор через 2 шага</span>' +
            '</button>' +
            '<button class="btn-leitner btn-leitner-medium" data-grade="medium" type="button">' +
              '<span class="btn-leitner-title"><span class="dot dot-amber"></span>С трудом</span>' +
              '<span class="btn-leitner-sub">В конце сессии</span>' +
            '</button>' +
            '<button class="btn-leitner btn-leitner-know" data-grade="know" type="button">' +
              '<span class="btn-leitner-title"><span class="dot dot-green"></span>Знаю!</span>' +
              '<span class="btn-leitner-sub">В выученные (+интервал)</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    front.querySelectorAll('[data-flip-trigger]').forEach(function (el) {
      el.addEventListener('click', function () { flipActiveCard(true); });
    });
    document.getElementById('btn-flip-to-back').addEventListener('click', function () { flipActiveCard(true); });
    document.getElementById('btn-flip-to-front').addEventListener('click', function () { flipActiveCard(false); });

    document.getElementById('btn-toggle-hint').addEventListener('click', function (e) {
      const hintEl = document.getElementById('card-semantic-hint');
      state.hintVisible = !state.hintVisible;
      hintEl.classList.toggle('is-hidden', !state.hintVisible);
      e.currentTarget.querySelector('span').textContent = state.hintVisible ? 'Скрыть намёк' : 'Показать намёк';
    });

    back.querySelectorAll('[data-grade]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleCardGrade(btn.getAttribute('data-grade'));
      });
    });
  }

  function handleCardGrade(grade) {
    if (state.sessionIndex >= state.sessionQueue.length) return;
    AudioEngine.stop();

    const card = state.sessionQueue[state.sessionIndex];
    const res = Storage.gradeCard(card.id, grade);

    AudioEngine.haptic(grade === 'know' ? [15, 30, 20] : 28);
    notifyBadges(res.unlockedBadges);

    if (grade === 'hard' && state.sessionQueue.length < 220 && !card._requeuedHard) {
      const copy = Object.assign({ _requeuedHard: true }, card);
      const insertPos = Math.min(state.sessionQueue.length, state.sessionIndex + 3);
      state.sessionQueue.splice(insertPos, 0, copy);
    } else if (grade === 'medium' && !card._requeuedMedium) {
      const copy = Object.assign({ _requeuedMedium: true }, card);
      state.sessionQueue.push(copy);
    }

    state.sessionIndex += 1;
    updateHeaderAndDashboardStats();
    populateDeckSelector();
    renderActiveCard();
  }

  function initSwipeGestures() {
    const scene = document.getElementById('flip-scene');
    const cardEl = document.getElementById('flip-card');
    const badgeL = document.getElementById('swipe-badge-left');
    const badgeR = document.getElementById('swipe-badge-right');
    if (!scene || !cardEl) return;

    cardEl.addEventListener('animationend', function (e) {
      if (e.target === cardEl) {
        cardEl.classList.remove('anim-to-back', 'anim-to-front');
      }
    });

    let startX = 0;
    let startY = 0;
    let deltaX = 0;
    let tracking = false;

    scene.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1 || state.sessionIndex >= state.sessionQueue.length) return;
      if (e.target.closest('button')) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      deltaX = 0;
      tracking = true;
    }, { passive: true });

    scene.addEventListener('touchmove', function (e) {
      if (!tracking) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dx) < 24) return;
      deltaX = dx;
      if (Math.abs(dx) > 18) {
        const baseRotY = state.isFlipped ? 180 : 0;
        const tilt = Math.max(-12, Math.min(12, dx / 14));
        cardEl.classList.remove('anim-to-back', 'anim-to-front');
        cardEl.style.transition = 'none';
        cardEl.style.transform = 'translateX(' + (dx * 0.55) + 'px) rotateZ(' + (tilt * 0.4) + 'deg) rotateY(' + baseRotY + 'deg)';
        badgeR.style.opacity = dx > 45 ? String(Math.min(1, (dx - 45) / 60)) : '0';
        badgeL.style.opacity = dx < -45 ? String(Math.min(1, (-dx - 45) / 60)) : '0';
      }
    }, { passive: true });

    scene.addEventListener('touchend', function () {
      if (!tracking) return;
      tracking = false;
      cardEl.style.transition = '';
      badgeL.style.opacity = '0';
      badgeR.style.opacity = '0';

      if (deltaX > 95) {
        handleCardGrade('know');
      } else if (deltaX < -95) {
        handleCardGrade('hard');
      } else {
        cardEl.style.transform = state.isFlipped ? 'rotateY(180deg)' : '';
      }
    });
  }

  /* ========================================================================
     РАЗДЕЛ 3: АЛФАВИТНЫЙ ТРЕНАЖЁР И ПУТАНИЦА БУКВ
     ======================================================================== */
  function renderTrainerView() {
    AudioEngine.stop();
    state.activeCanvasCtx = null;

    document.querySelectorAll('[data-trainer-tab]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-trainer-tab') === state.trainerTab);
    });
    document.getElementById('trainer-panel-visual').classList.toggle('is-active', state.trainerTab === 'visual');
    document.getElementById('trainer-panel-stroke').classList.toggle('is-active', state.trainerTab === 'stroke');
    document.getElementById('trainer-panel-minimal').classList.toggle('is-active', state.trainerTab === 'minimal');

    if (state.trainerTab === 'visual') {
      renderVisualPairsPanel();
    } else if (state.trainerTab === 'stroke') {
      renderStrokeOrderPanel();
    } else if (state.trainerTab === 'minimal') {
      renderMinimalPairsPanel();
    }
  }

  function renderVisualPairsPanel() {
    const panel = document.getElementById('trainer-panel-visual');
    panel.innerHTML =
      '<div class="visual-groups-grid">' +
      VISUAL_GROUPS.map(function (grp, gIdx) {
        const glyphsHtml = grp.letters.map(function (ch, idx) {
          const meta = getLetterMeta(ch);
          return (
            '<div class="vg-glyph-item" data-play-letter-idx="' + meta.index + '" data-play-letter-char="' + escapeHtml(ch) + '" title="Нажмите, чтобы услышать букву">' +
              '<span class="vg-glyph-char vg-color-' + idx + '" lang="ka">' + escapeHtml(ch) + '</span>' +
              '<span class="vg-glyph-label" style="font-size:0.8rem;font-weight:600;color:var(--slate-muted)">' + escapeHtml(meta.nameGeo) + ' ' + escapeHtml(meta.ipa) + '</span>' +
            '</div>'
          );
        }).join('');

        const rowsHtml = grp.distinctions.map(function (d, idx) {
          return (
            '<div class="vg-dist-row">' +
              '<span class="vg-dist-letter vg-color-' + idx + '" lang="ka">' + escapeHtml(d.letter) + '</span>' +
              '<span style="font-weight:600">' + escapeHtml(d.sound) + '</span>' +
              '<span style="color:var(--slate-muted)">' + escapeHtml(d.marker) + '</span>' +
              '<button class="btn btn-ghost btn-sm" style="padding:4px 9px;font-size:0.78rem" data-vg-cards="' + escapeHtml(d.letter) + '" type="button">' + escapeHtml(d.word) + '</button>' +
            '</div>'
          );
        }).join('');

        return (
          '<article class="visual-group-card spotlight-card stagger-item" style="--stagger-idx:' + gIdx + '">' +
            '<div class="vg-header">' +
              '<div>' +
                '<h3 class="vg-title">' + escapeHtml(grp.title) + '</h3>' +
                '<p class="vg-subtitle">' + escapeHtml(grp.subtitle) + '</p>' +
              '</div>' +
              '<button class="btn btn-outline btn-sm" data-overlay-toggle="' + escapeHtml(grp.id) + '" type="button">Наложить контуры</button>' +
            '</div>' +
            '<div class="vg-compare-stage" id="vg-stage-' + escapeHtml(grp.id) + '">' +
              glyphsHtml +
            '</div>' +
            '<p style="margin:0;font-size:0.88rem;color:var(--slate);line-height:1.5">' + escapeHtml(grp.tip) + '</p>' +
            '<div class="vg-distinctions-list">' + rowsHtml + '</div>' +
          '</article>'
        );
      }).join('') +
      '</div>';

    panel.querySelectorAll('[data-overlay-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const id = btn.getAttribute('data-overlay-toggle');
        const stage = document.getElementById('vg-stage-' + id);
        const active = stage.classList.toggle('is-overlay-mode');
        btn.textContent = active ? 'Разделить рядом' : 'Наложить контуры';
      });
    });

    panel.querySelectorAll('[data-vg-cards]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        startCardSession(btn.getAttribute('data-vg-cards'));
        switchView('cards');
      });
    });
  }

  function renderStrokeOrderPanel() {
    AudioEngine.stop();
    const panel = document.getElementById('trainer-panel-stroke');
    const meta = getLetterMeta(state.selectedStrokeLetter);

    const zoneNames = {
      middle: 'Средний регистр (между базовой и средней линиями)',
      ascender: 'Верхний выносной элемент (поднимается к верхней линии)',
      descender: 'Нижний выносной элемент (опускается под базовую линию)',
      full: 'Полный рост (занимает и верхнюю, и нижнюю зоны строки)'
    };

    panel.innerHTML =
      '<div class="stroke-trainer-layout">' +
        '<div class="stroke-picker-card spotlight-card">' +
          '<h3 style="margin:0 0 6px;font-family:var(--font-editorial)">Выберите букву для прописи</h3>' +
          '<p style="margin:0;font-size:0.85rem;color:var(--slate-muted)">Нажмите на любую из 33 букв, чтобы увидеть анимацию контура и обвести её от руки.</p>' +
          '<div class="mini-letter-picker">' +
            ALPHABET.map(function (a) {
              return '<button class="picker-char-btn ' + (a.letter === meta.letter ? 'is-active' : '') + '" data-pick-stroke="' + escapeHtml(a.letter) + '" type="button" lang="ka">' + escapeHtml(a.letter) + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +

        '<div class="stroke-canvas-card spotlight-card">' +
          '<div class="canvas-workbench">' +
            '<div>' +
              '<div class="calligraphy-pad-wrap">' +
                '<svg class="calligraphy-svg-guide" viewBox="0 0 270 270" aria-hidden="true">' +
                  '<line x1="0" y1="46" x2="270" y2="46" stroke="var(--guide-outer)" stroke-dasharray="4 4" />' +
                  '<line x1="0" y1="96" x2="270" y2="96" stroke="var(--guide-mid)" />' +
                  '<line x1="0" y1="186" x2="270" y2="186" stroke="var(--guide-base)" stroke-width="1.8" />' +
                  '<line x1="0" y1="234" x2="270" y2="234" stroke="var(--guide-outer)" stroke-dasharray="4 4" />' +
                  '<text x="14" y="180" fill="var(--accent-bright)" opacity="0.82" font-size="10" font-weight="600">базовая линия</text>' +
                  '<text id="svg-stroke-glyph" class="stroke-anim-text is-animating" x="135" y="182" text-anchor="middle" lang="ka">' + escapeHtml(meta.letter) + '</text>' +
                '</svg>' +
                '<canvas id="calligraphy-canvas" class="calligraphy-canvas" width="270" height="270"></canvas>' +
              '</div>' +
              '<div style="display:flex;justify-content:center;gap:8px;margin-top:10px">' +
                '<button class="btn btn-ghost btn-sm" id="btn-replay-stroke" type="button">Анимация контура</button>' +
                '<button class="btn btn-ghost btn-sm" id="btn-clear-canvas" type="button">Очистить</button>' +
                '<button class="btn btn-primary btn-sm" id="btn-check-canvas" type="button">Проверить</button>' +
              '</div>' +
            '</div>' +

            '<div style="display:flex;flex-direction:column;gap:12px">' +
              '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px">' +
                '<div>' +
                  '<span class="eyebrow-badge" style="margin-bottom:4px">Буква № ' + meta.index + ' · ' + escapeHtml(meta.groupLabel) + '</span>' +
                  '<h3 style="margin:0;font-size:1.5rem;font-family:var(--font-geo-serif)" lang="ka">' + escapeHtml(meta.letter) + ' — ' + escapeHtml(meta.nameGeo) + ' (' + escapeHtml(meta.nameRu) + ')</h3>' +
                '</div>' +
                '<button class="btn-audio btn-sm" type="button" data-play-letter-idx="' + meta.index + '" data-play-letter-char="' + escapeHtml(meta.letter) + '">' + ICONS.speaker + '<span>' + escapeHtml(meta.ipa) + '</span></button>' +
              '</div>' +

              '<div class="articulation-note">' +
                '<strong>Расположение в строке:</strong> ' + escapeHtml(zoneNames[meta.lineZone] || '') +
              '</div>' +
              '<div class="articulation-note">' +
                '<strong>Порядок и пластика штриха:</strong> ' + escapeHtml(meta.strokeHint) +
              '</div>' +
              '<div id="calligraphy-result-box" class="articulation-note" style="background:var(--accent-soft);border-color:var(--accent-border)">' +
                'Обведите полупрозрачный контур буквы прямо на холсте мышкой или пальцем и нажмите <strong>«Проверить»</strong>.' +
              '</div>' +
              '<div>' +
                '<button class="btn btn-outline btn-sm" id="btn-stroke-to-cards" type="button">Учить 5 карточек буквы «' + escapeHtml(meta.letter) + '»</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    panel.querySelectorAll('[data-pick-stroke]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.selectedStrokeLetter = btn.getAttribute('data-pick-stroke');
        renderStrokeOrderPanel();
      });
    });

    document.getElementById('btn-stroke-to-cards').addEventListener('click', function () {
      startCardSession(meta.letter);
      switchView('cards');
    });

    document.getElementById('btn-replay-stroke').addEventListener('click', function () {
      const g = document.getElementById('svg-stroke-glyph');
      g.classList.remove('is-animating');
      void g.offsetWidth;
      g.classList.add('is-animating');
    });

    initCalligraphyCanvas(meta.letter);
  }

  function initCalligraphyCanvas(letterChar) {
    const canvas = document.getElementById('calligraphy-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    state.activeCanvasCtx = ctx;

    let drawing = false;
    let hasStrokes = false;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 13;
    ctx.strokeStyle = getCalligraphyInkColor(getCurrentTheme());

    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((e.clientX - rect.left) / rect.width) * canvas.width,
        y: ((e.clientY - rect.top) / rect.height) * canvas.height
      };
    }

    canvas.addEventListener('pointerdown', function (e) {
      drawing = true;
      hasStrokes = true;
      ctx.strokeStyle = getCalligraphyInkColor(getCurrentTheme());
      if (canvas.setPointerCapture) {
        try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
      }
      const p = getPos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    });

    canvas.addEventListener('pointermove', function (e) {
      if (!drawing) return;
      const p = getPos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });

    function endStroke() {
      drawing = false;
    }

    canvas.addEventListener('pointerup', endStroke);
    canvas.addEventListener('pointercancel', endStroke);
    canvas.addEventListener('pointerleave', endStroke);

    document.getElementById('btn-clear-canvas').addEventListener('click', function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hasStrokes = false;
      document.getElementById('calligraphy-result-box').innerHTML =
        'Холст очищен. Обведите контур буквы «' + escapeHtml(letterChar) + '» плавным движением.';
    });

    document.getElementById('btn-check-canvas').addEventListener('click', function () {
      const resBox = document.getElementById('calligraphy-result-box');
      if (!hasStrokes) {
        resBox.innerHTML = 'Сначала проведите линию по контуру буквы на холсте слева!';
        return;
      }

      const refCanvas = document.createElement('canvas');
      refCanvas.width = 270;
      refCanvas.height = 270;
      const rctx = refCanvas.getContext('2d');
      rctx.font = '600 168px "Noto Serif Georgian", serif';
      rctx.textAlign = 'center';
      rctx.fillStyle = '#000';
      rctx.strokeStyle = '#000';
      rctx.lineWidth = 16;
      rctx.strokeText(letterChar, 135, 182);
      rctx.fillText(letterChar, 135, 182);

      const userData = ctx.getImageData(0, 0, 270, 270).data;
      const refData = rctx.getImageData(0, 0, 270, 270).data;

      let refPixels = 0;
      let hitPixels = 0;
      let outsidePixels = 0;

      for (let i = 3; i < refData.length; i += 4) {
        const inRef = refData[i] > 40;
        const inUser = userData[i] > 40;
        if (inRef) {
          refPixels++;
          if (inUser) hitPixels++;
        } else if (inUser) {
          outsidePixels++;
        }
      }

      const coverage = refPixels > 0 ? hitPixels / refPixels : 0;
      const penalty = refPixels > 0 ? Math.min(0.45, (outsidePixels / refPixels) * 0.35) : 0;
      const score = Math.max(12, Math.min(99, Math.round((coverage * 1.35 - penalty) * 100)));

      if (score >= 60) {
        AudioEngine.haptic([15, 35, 18]);
        const unlocked = Storage.recordCalligraphySuccess();
        notifyBadges(unlocked);
        resBox.innerHTML = '<strong style="color:var(--green)">Точность контура: ' + score + '% — Прекрасный почерк!</strong> Вы отлично уловили пропорции и посадку буквы «' + escapeHtml(letterChar) + '» на строке.';
      } else {
        resBox.innerHTML = '<strong>Точность контура: ' + score + '%.</strong> Попробуйте вести линию ближе к янтарному силуэту буквы, обращая внимание на выносные элементы.';
      }
    });
  }

  function matchesMpFilter(mp, filterKey) {
    if (filterKey === 'all') return true;
    const cat = (mp.category || '').toLowerCase();
    if (filterKey === 'guttural') {
      return cat.indexOf('заднеязыч') !== -1 || cat.indexOf('гортан') !== -1 || cat.indexOf('горлов') !== -1 || cat.indexOf('увуляр') !== -1 || cat.indexOf('дыхан') !== -1;
    }
    if (filterKey === 'labial-dental') {
      return cat.indexOf('губн') !== -1 || cat.indexOf('зубн') !== -1;
    }
    if (filterKey === 'sibilant') {
      return cat.indexOf('свистящ') !== -1 || cat.indexOf('шипящ') !== -1;
    }
    return true;
  }

  function renderMinimalPairsPanel() {
    const panel = document.getElementById('trainer-panel-minimal');
    const visiblePairs = MINIMAL_PAIRS.filter(function (mp) {
      return matchesMpFilter(mp, state.mpFilter);
    });

    panel.innerHTML =
      '<div class="filter-bar" style="margin-bottom:18px">' +
        '<button class="filter-chip ' + (state.mpFilter === 'all' ? 'is-active' : '') + '" data-mp-filter="all" type="button">Все пары (' + MINIMAL_PAIRS.length + ')</button>' +
        '<button class="filter-chip ' + (state.mpFilter === 'guttural' ? 'is-active' : '') + '" data-mp-filter="guttural" type="button">Гортанные и заднеязычные (ყ, ქ, კ, ღ, ხ, ჰ)</button>' +
        '<button class="filter-chip ' + (state.mpFilter === 'labial-dental' ? 'is-active' : '') + '" data-mp-filter="labial-dental" type="button">Губные и зубные (პ/ფ/ბ, ტ/თ/დ)</button>' +
        '<button class="filter-chip ' + (state.mpFilter === 'sibilant' ? 'is-active' : '') + '" data-mp-filter="sibilant" type="button">Свистящие и шипящие (წ/ც/ძ, ჭ/ჩ/ჯ)</button>' +
      '</div>' +
      '<div class="minimal-pairs-grid">' +
      visiblePairs.map(function (mp, mIdx) {
        const leftImg = 'assets/photos/' + mp.left.photoKey + '.jpg';
        const rightImg = 'assets/photos/' + mp.right.photoKey + '.jpg';
        const leftAud = 'assets/audio/' + mp.left.audioKey + '.mp3';
        const rightAud = 'assets/audio/' + mp.right.audioKey + '.mp3';

        return (
          '<article class="mp-card spotlight-card stagger-item" style="--stagger-idx:' + Math.min(mIdx, 18) + '" data-mp-id="' + escapeHtml(mp.id) + '">' +
            '<div>' +
              '<span class="eyebrow-badge" style="margin-bottom:6px">' + escapeHtml(mp.category || 'Минимальная пара') + '</span>' +
              '<h3 style="margin:0 0 5px;font-family:var(--font-editorial);font-size:1.15rem">' + escapeHtml(mp.contrastTitle) + '</h3>' +
              '<p style="margin:0;font-size:0.86rem;color:var(--slate-muted)">' + escapeHtml(mp.explanation) + '</p>' +
            '</div>' +

            '<div class="mp-words-duo">' +
              '<div class="mp-side">' +
                '<img src="' + escapeHtml(leftImg) + '" alt="' + escapeHtml(mp.left.translationRu) + '" loading="lazy" />' +
                '<div class="mp-side-body">' +
                  '<div class="mp-word-geo" lang="ka">' + highlightGeoWord(mp.left.wordGeo, mp.left.letter) + '</div>' +
                  '<div style="font-size:0.8rem;color:var(--slate-muted)">' + escapeHtml(mp.left.ipa) + ' · «' + escapeHtml(mp.left.translitRu) + '»</div>' +
                  '<div style="font-weight:600;font-size:0.9rem">' + escapeHtml(mp.left.translationRu) + '</div>' +
                  '<button class="btn-audio btn-sm" style="margin-top:4px;justify-content:center" data-play-src="' + escapeHtml(leftAud) + '" data-play-fallback="' + escapeHtml(mp.left.wordGeo) + '" type="button">' + ICONS.speaker + '<span>Слушать</span></button>' +
                '</div>' +
              '</div>' +

              '<div class="mp-side">' +
                '<img src="' + escapeHtml(rightImg) + '" alt="' + escapeHtml(mp.right.translationRu) + '" loading="lazy" />' +
                '<div class="mp-side-body">' +
                  '<div class="mp-word-geo" lang="ka">' + highlightGeoWord(mp.right.wordGeo, mp.right.letter) + '</div>' +
                  '<div style="font-size:0.8rem;color:var(--slate-muted)">' + escapeHtml(mp.right.ipa) + ' · «' + escapeHtml(mp.right.translitRu) + '»</div>' +
                  '<div style="font-weight:600;font-size:0.9rem">' + escapeHtml(mp.right.translationRu) + '</div>' +
                  '<button class="btn-audio btn-sm" style="margin-top:4px;justify-content:center" data-play-src="' + escapeHtml(rightAud) + '" data-play-fallback="' + escapeHtml(mp.right.wordGeo) + '" type="button">' + ICONS.speaker + '<span>Слушать</span></button>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px solid var(--border-warm)">' +
              '<button class="btn btn-ghost btn-sm" data-play-seq-left="' + escapeHtml(leftAud) + '" data-play-seq-right="' + escapeHtml(rightAud) + '" type="button">Сравнить подряд А ↔ Б</button>' +
              '<button class="btn btn-outline btn-sm" data-mp-ear-test="' + escapeHtml(mp.id) + '" type="button">Проверить слух</button>' +
            '</div>' +
            '<div class="articulation-note is-hidden" id="ear-box-' + escapeHtml(mp.id) + '"></div>' +
          '</article>'
        );
      }).join('') +
      '</div>';

    panel.querySelectorAll('[data-mp-filter]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        AudioEngine.stop();
        state.mpFilter = chip.getAttribute('data-mp-filter');
        renderMinimalPairsPanel();
      });
    });

    panel.querySelectorAll('[data-mp-ear-test]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const mpId = btn.getAttribute('data-mp-ear-test');
        const mp = MINIMAL_PAIRS.find(function (x) { return x.id === mpId; });
        if (!mp) return;
        const secretSide = Math.random() < 0.5 ? 'left' : 'right';
        const chosen = mp[secretSide];
        const audSrc = 'assets/audio/' + chosen.audioKey + '.mp3';
        const earBox = document.getElementById('ear-box-' + mpId);
        earBox.classList.remove('is-hidden');
        earBox.innerHTML =
          '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px">' +
            '<span>Какое из двух слов сейчас прозвучало?</span>' +
            '<div style="display:flex;gap:8px">' +
              '<button class="btn btn-ghost btn-sm" type="button" data-play-src="' + escapeHtml(audSrc) + '" data-play-fallback="' + escapeHtml(chosen.wordGeo) + '">' + ICONS.speaker + '</button>' +
              '<button class="btn btn-outline btn-sm" data-ear-pick="left" type="button" lang="ka">' + escapeHtml(mp.left.wordGeo) + '</button>' +
              '<button class="btn btn-outline btn-sm" data-ear-pick="right" type="button" lang="ka">' + escapeHtml(mp.right.wordGeo) + '</button>' +
            '</div>' +
          '</div>';

        AudioEngine.play(audSrc, { fallbackText: chosen.wordGeo });

        earBox.querySelectorAll('[data-ear-pick]').forEach(function (pickBtn) {
          pickBtn.addEventListener('click', function () {
            AudioEngine.stop();
            const guess = pickBtn.getAttribute('data-ear-pick');
            if (guess === secretSide) {
              const unlocked = Storage.recordEarTestSuccess();
              notifyBadges(unlocked);
              earBox.innerHTML = '<strong style="color:var(--green)">Верно!</strong> Прозвучало слово <strong lang="ka">' + escapeHtml(chosen.wordGeo) + '</strong> (' + escapeHtml(chosen.translationRu) + ') с буквой «' + escapeHtml(chosen.letter) + '».';
            } else {
              earBox.innerHTML = '<strong style="color:var(--crimson)">Почти!</strong> На самом деле звучало <strong lang="ka">' + escapeHtml(chosen.wordGeo) + '</strong> (' + escapeHtml(chosen.translationRu) + '). Послушайте оба слова подряд ещё раз!';
            }
          });
        });
      });
    });
  }

  /* ========================================================================
     РАЗДЕЛ 4: ВИКТОРИНЫ И ИГРОВЫЕ ТЕСТЫ (5 МЕХАНИК БЕЗ ПОВТОРОВ)
     ======================================================================== */
  const QUIZ_MODES = [
    {
      id: 'letter',
      title: '1. Выбери правильную букву',
      desc: 'Звучит грузинское слово (12 раундов) — угадайте изучаемую букву среди визуально и фонетически похожих.',
      metricLabel: 'Лучший результат',
      unit: '%'
    },
    {
      id: 'photo',
      title: '2. Аудио-фото сопоставление',
      desc: 'Диктор произносит грузинское слово — выберите верный снимок из 4 реальных фотографий Грузии.',
      metricLabel: 'Лучший результат',
      unit: '%'
    },
    {
      id: 'builder',
      title: '3. Конструктор слов',
      desc: 'Соберите грузинское слово по буквам-кубикам под фотографией, тренируя сложные сочетания согласных.',
      metricLabel: 'Лучший результат',
      unit: '%'
    },
    {
      id: 'antonym',
      title: '4. Найди антоним',
      desc: 'Дана карточка слова из 165 пар: подберите к ней противоположную по смыслу карточку-антоним.',
      metricLabel: 'Лучший результат',
      unit: '%'
    },
    {
      id: 'blitz',
      title: '5. Быстрый блиц (30 секунд)',
      desc: 'Динамичный режим на скорость по всему словарю: за 30 секунд определите, соответствует ли слово фотографии.',
      metricLabel: 'Рекорд за 30 сек',
      unit: ' очк.'
    },
    {
      id: 'daily',
      title: 'Викторина дня (Большой микс)',
      desc: 'Комбинированный челлендж из 12 разнообразных заданий на слух, буквы, правописание и антонимы.',
      metricLabel: 'Лучший результат',
      unit: '%'
    }
  ];

  function renderQuizHub() {
    AudioEngine.stop();
    if (state.quizState && state.quizState.timerId) {
      clearInterval(state.quizState.timerId);
      state.quizState.timerId = null;
    }

    document.getElementById('quiz-hub').classList.remove('is-hidden');
    document.getElementById('quiz-arena').classList.add('is-hidden');
    const grid = document.getElementById('quiz-modes-grid');
    const sum = Storage.getSummary();

    grid.innerHTML = QUIZ_MODES.map(function (m, idx) {
      const best = sum.quizBest[m.id] || 0;
      return (
        '<article class="quiz-mode-card spotlight-card stagger-item" style="--stagger-idx:' + idx + '">' +
          '<div>' +
            '<div class="qm-icon-box">' + ICONS.award + '</div>' +
            '<h3 class="qm-title">' + escapeHtml(m.title) + '</h3>' +
            '<p class="qm-desc">' + escapeHtml(m.desc) + '</p>' +
          '</div>' +
          '<div class="qm-footer">' +
            '<span style="font-size:0.82rem;color:var(--slate-muted)">' + escapeHtml(m.metricLabel) + ': <strong>' + best + escapeHtml(m.unit) + '</strong></span>' +
            '<button class="btn btn-primary btn-sm" data-start-quiz="' + escapeHtml(m.id) + '" type="button">Играть</button>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    grid.querySelectorAll('[data-start-quiz]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        startQuiz(btn.getAttribute('data-start-quiz'));
      });
    });
  }

  function getQuizPool(forcedLetter) {
    if (forcedLetter) {
      const meta = getLetterMeta(forcedLetter);
      const exactLetter = CARDS.filter(function (c) { return c.letter === forcedLetter; });
      const neighbors = CARDS.filter(function (c) { return meta.confusableWith.indexOf(c.letter) !== -1; });
      const combined = exactLetter.concat(shuffle(neighbors).slice(0, 7));
      if (combined.length >= 5) return combined;
    }

    const scope = (document.getElementById('quiz-scope-select') || {}).value || 'all';
    let filtered = CARDS.slice();

    if (scope === 'ejective') {
      filtered = CARDS.filter(function (c) {
        const g = getLetterMeta(c.letter).group;
        return g === 'ejective' || g === 'aspirated';
      });
    } else if (scope === 'confusable') {
      filtered = CARDS.filter(function (c) {
        return getLetterMeta(c.letter).isConfusablePair;
      });
    } else if (scope.indexOf('cat:') === 0) {
      const catName = scope.slice(4);
      filtered = CARDS.filter(function (c) { return c.category === catName; });
    } else if (scope === 'learned') {
      const learned = CARDS.filter(function (c) { return Storage.getCardProgress(c.id).box >= 1; });
      if (learned.length >= 8) filtered = learned;
    }

    return filtered.length >= 8 ? filtered : CARDS.slice();
  }

  function pickNonRepeatingCards(modeKey, rawPool, count) {
    const seenSet = state.seenQuizIds[modeKey] || new Set();
    state.seenQuizIds[modeKey] = seenSet;

    let unseen = shuffle(rawPool.filter(function (c) { return !seenSet.has(c.id); }));
    if (unseen.length < count) {
      const chosenIds = new Set(unseen.map(function (c) { return c.id; }));
      seenSet.clear();
      unseen.forEach(function (c) { seenSet.add(c.id); });
      const rest = shuffle(rawPool.filter(function (c) { return !chosenIds.has(c.id); }));
      unseen = unseen.concat(rest);
    }

    const picked = unseen.slice(0, Math.min(count, rawPool.length));
    picked.forEach(function (c) { seenSet.add(c.id); });
    return picked;
  }

  function startQuiz(modeId, forcedLetter) {
    AudioEngine.stop();
    if (state.quizState && state.quizState.timerId) {
      clearInterval(state.quizState.timerId);
    }

    const rawPool = getQuizPool(forcedLetter);
    document.getElementById('quiz-hub').classList.add('is-hidden');
    const arena = document.getElementById('quiz-arena');
    arena.classList.remove('is-hidden');

    if (modeId === 'blitz') {
      const blitzDeck = pickNonRepeatingCards('blitz', rawPool, Math.min(60, rawPool.length));
      state.quizState = {
        mode: 'blitz',
        pool: blitzDeck,
        score: 0,
        answered: 0,
        secondsLeft: 30,
        timerId: null
      };
      renderBlitzQuestion();
      state.quizState.timerId = setInterval(function () {
        state.quizState.secondsLeft -= 1;
        const tEl = document.getElementById('blitz-timer-val');
        if (tEl) tEl.textContent = state.quizState.secondsLeft + ' сек';
        if (state.quizState.secondsLeft <= 0) {
          clearInterval(state.quizState.timerId);
          state.quizState.timerId = null;
          finishQuiz();
        }
      }, 1000);
      return;
    }

    const desiredCount = forcedLetter ? Math.min(10, rawPool.length) : Math.min(12, rawPool.length);
    const chosenCards = pickNonRepeatingCards(modeId, rawPool, desiredCount);
    const subModes = ['letter', 'photo', 'builder', 'antonym'];

    const questions = chosenCards.map(function (card, idx) {
      const qType = modeId === 'daily' ? subModes[idx % subModes.length] : modeId;
      return { card: card, type: qType };
    });

    state.quizState = {
      mode: modeId,
      questions: questions,
      qIndex: 0,
      score: 0,
      locked: false,
      timerId: null
    };

    renderStandardQuizQuestion();
  }

  function renderStandardQuizQuestion() {
    AudioEngine.stop();
    const qs = state.quizState;
    const arena = document.getElementById('quiz-arena');
    if (!qs || qs.qIndex >= qs.questions.length) {
      finishQuiz();
      return;
    }

    qs.locked = false;
    const current = qs.questions[qs.qIndex];
    const card = current.card;
    const qType = current.type;
    const stepText = 'Вопрос ' + (qs.qIndex + 1) + ' из ' + qs.questions.length;

    let bodyHtml = '';

    if (qType === 'letter') {
      const meta = getLetterMeta(card.letter);
      const distractors = shuffle(meta.confusableWith.length >= 3
        ? meta.confusableWith
        : ALPHABET.map(function (a) { return a.letter; }).filter(function (l) { return l !== card.letter; })
      ).slice(0, 3);
      const options = shuffle([card.letter].concat(distractors));
      const maskedWord = card.wordGeo.replace(new RegExp(card.letter, 'g'), ' _ ');

      bodyHtml =
        '<h3 class="qa-question-title">Послушайте слово и выберите пропущенную букву</h3>' +
        '<div style="text-align:center;margin-bottom:14px">' +
          '<div style="font-family:var(--font-geo-serif);font-size:2.2rem;font-weight:700;margin-bottom:8px" lang="ka">' + escapeHtml(maskedWord) + '</div>' +
          '<div style="color:var(--slate-muted);margin-bottom:12px">Перевод: <strong>' + escapeHtml(card.translationRu) + '</strong></div>' +
          '<div class="audio-controls-row">' +
            '<button class="btn-audio" id="qa-replay-audio" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '">' + ICONS.speaker + '<span>Прослушать слово</span></button>' +
            '<button class="btn-audio btn-audio-slow" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '" data-play-slow="1">' + ICONS.slow + '<span>Замедленно</span></button>' +
          '</div>' +
        '</div>' +
        '<div class="qa-options-letters">' +
          options.map(function (ch) {
            return '<button class="qa-letter-btn" data-qa-choice="' + escapeHtml(ch) + '" type="button" lang="ka">' + escapeHtml(ch) + '</button>';
          }).join('') +
        '</div>';
    } else if (qType === 'photo') {
      const usedUrls = new Set([card.imageUrl]);
      const others = [];
      shuffle(CARDS).forEach(function (c) {
        if (others.length < 3 && c.id !== card.id && !usedUrls.has(c.imageUrl)) {
          usedUrls.add(c.imageUrl);
          others.push(c);
        }
      });
      const options = shuffle([card].concat(others));

      bodyHtml =
        '<h3 class="qa-question-title">Прослушайте грузинское слово и выберите верную фотографию</h3>' +
        '<div class="audio-controls-row" style="margin-bottom:14px">' +
          '<button class="btn-audio" id="qa-replay-audio" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '">' + ICONS.speaker + '<span>Слушать слово</span></button>' +
          '<button class="btn-audio btn-audio-slow" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '" data-play-slow="1">' + ICONS.slow + '<span>Замедленно</span></button>' +
        '</div>' +
        '<div class="qa-photo-grid">' +
          options.map(function (opt) {
            return (
              '<button class="qa-photo-option" data-qa-choice="' + escapeHtml(opt.id) + '" type="button">' +
                '<img src="' + escapeHtml(opt.imageUrl) + '" alt="Вариант ответа" />' +
              '</button>'
            );
          }).join('') +
        '</div>';
    } else if (qType === 'builder') {
      const targetChars = Array.from(card.wordGeo);
      const extraLetters = shuffle(getLetterMeta(card.letter).confusableWith).slice(0, targetChars.length <= 4 ? 2 : 1);
      const cubePool = shuffle(targetChars.concat(extraLetters));
      current._cubePool = cubePool;
      current._pickedIndices = [];

      bodyHtml =
        '<h3 class="qa-question-title">Соберите грузинское слово из букв-кубиков</h3>' +
        '<div style="max-width:340px;margin:0 auto 12px;border-radius:14px;overflow:hidden;border:1px solid var(--border-warm)">' +
          '<img src="' + escapeHtml(card.imageUrl) + '" alt="' + escapeHtml(card.translationRu) + '" style="width:100%;height:155px;object-fit:cover" />' +
        '</div>' +
        '<div style="text-align:center;margin-bottom:8px">' +
          '<strong style="font-size:1.15rem">' + escapeHtml(card.translationRu) + '</strong> <span style="color:var(--slate-muted)">(' + escapeHtml(card.translationEn) + ')</span>' +
          '<div style="margin-top:8px"><button class="btn-audio btn-sm" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '">' + ICONS.speaker + '<span>Подсказка звуком</span></button></div>' +
        '</div>' +
        '<div class="word-builder-slots" id="wb-slots"></div>' +
        '<div class="word-builder-tiles" id="wb-tiles"></div>';
    } else if (qType === 'antonym') {
      const correctAnt = card.antonym;
      const otherAnts = [];
      const seenWords = new Set([correctAnt.wordGeo, card.wordGeo]);
      shuffle(CARDS).forEach(function (c) {
        if (otherAnts.length < 3 && !seenWords.has(c.antonym.wordGeo)) {
          seenWords.add(c.antonym.wordGeo);
          otherAnts.push(c.antonym);
        }
      });
      const options = shuffle([correctAnt].concat(otherAnts));

      bodyHtml =
        '<h3 class="qa-question-title">Выберите антоним (противоположность) к слову</h3>' +
        '<div class="mini-pair-card" style="max-width:380px;margin:0 auto 16px;padding:12px">' +
          '<img src="' + escapeHtml(card.imageUrl) + '" alt="' + escapeHtml(card.translationRu) + '" style="width:72px;height:72px" />' +
          '<div class="mini-pair-info">' +
            '<div style="font-family:var(--font-geo-serif);font-size:1.55rem;font-weight:700" lang="ka">' + escapeHtml(card.wordGeo) + '</div>' +
            '<div style="color:var(--slate-muted);font-size:0.9rem">' + escapeHtml(card.translationRu) + ' · ' + escapeHtml(card.ipa) + '</div>' +
          '</div>' +
          '<button class="tile-audio-mini" style="position:static" type="button" data-play-src="' + escapeHtml(card.audioNormal) + '" data-play-fallback="' + escapeHtml(card.wordGeo) + '">' + ICONS.speaker + '</button>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px">' +
          options.map(function (opt) {
            return (
              '<button class="qa-option-card" data-qa-choice="' + escapeHtml(opt.wordGeo) + '" type="button">' +
                '<img src="' + escapeHtml(opt.imageUrl) + '" alt="' + escapeHtml(opt.translationRu) + '" />' +
                '<div>' +
                  '<div style="font-family:var(--font-geo-serif);font-size:1.25rem;font-weight:700" lang="ka">' + escapeHtml(opt.wordGeo) + '</div>' +
                  '<div style="font-size:0.82rem;color:var(--slate-muted)">«' + escapeHtml(opt.translitRu) + '»</div>' +
                '</div>' +
              '</button>'
            );
          }).join('') +
        '</div>';
    }

    arena.innerHTML =
      '<div class="qa-topbar">' +
        '<button class="btn btn-ghost btn-sm" id="qa-exit-btn" type="button">К списку игр</button>' +
        '<span style="font-weight:600;font-size:0.9rem">' + stepText + '</span>' +
        '<span style="font-weight:700;color:var(--green)">Счёт: ' + qs.score + '</span>' +
      '</div>' +
      bodyHtml +
      '<div id="qa-feedback-bar" class="is-hidden" style="margin-top:18px;padding-top:14px;border-top:1px solid var(--border-warm);display:flex;align-items:center;justify-content:space-between;gap:12px"></div>';

    document.getElementById('qa-exit-btn').addEventListener('click', renderQuizHub);

    if (qType === 'letter' || qType === 'photo') {
      const autoBtn = document.getElementById('qa-replay-audio');
      AudioEngine.play(card.audioNormal, { button: autoBtn, fallbackText: card.wordGeo });
    }

    if (qType === 'builder') {
      bindWordBuilder(current);
    } else {
      arena.querySelectorAll('[data-qa-choice]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (qs.locked) return;
          qs.locked = true;
          AudioEngine.stop();
          const val = btn.getAttribute('data-qa-choice');
          const expected = qType === 'letter' ? card.letter : (qType === 'photo' ? card.id : card.antonym.wordGeo);
          const isOk = val === expected;

          arena.querySelectorAll('[data-qa-choice]').forEach(function (b) {
            b.disabled = true;
            if (b.getAttribute('data-qa-choice') === expected) {
              b.classList.add('is-correct-choice');
            }
          });
          if (!isOk) btn.classList.add('is-wrong-choice');

          showQuizFeedback(isOk, card, qType === 'antonym'
            ? (card.wordGeo + ' (' + card.translationRu + ') ↔ ' + card.antonym.wordGeo + ' (' + card.antonym.translationRu + ')')
            : (card.wordGeo + ' — ' + card.translationRu));
        });
      });
    }
  }

  function bindWordBuilder(current) {
    const card = current.card;
    const targetChars = Array.from(card.wordGeo);
    const slotsWrap = document.getElementById('wb-slots');
    const tilesWrap = document.getElementById('wb-tiles');

    function redraw() {
      slotsWrap.innerHTML = targetChars.map(function (_, slotIdx) {
        const pickedPoolIdx = current._pickedIndices[slotIdx];
        const ch = pickedPoolIdx !== undefined ? current._cubePool[pickedPoolIdx] : '';
        return '<button class="wb-slot ' + (ch ? 'is-filled' : '') + '" data-slot-remove="' + slotIdx + '" type="button" lang="ka">' + escapeHtml(ch) + '</button>';
      }).join('');

      tilesWrap.innerHTML = current._cubePool.map(function (ch, poolIdx) {
        const used = current._pickedIndices.indexOf(poolIdx) !== -1;
        return '<button class="wb-tile-btn" data-pool-idx="' + poolIdx + '" ' + (used || state.quizState.locked ? 'disabled' : '') + ' type="button" lang="ka">' + escapeHtml(ch) + '</button>';
      }).join('');

      slotsWrap.querySelectorAll('[data-slot-remove]').forEach(function (sBtn) {
        sBtn.addEventListener('click', function () {
          if (state.quizState.locked) return;
          const idx = Number(sBtn.getAttribute('data-slot-remove'));
          if (idx < current._pickedIndices.length) {
            current._pickedIndices.splice(idx, 1);
            redraw();
          }
        });
      });

      tilesWrap.querySelectorAll('[data-pool-idx]').forEach(function (tBtn) {
        tBtn.addEventListener('click', function () {
          if (state.quizState.locked) return;
          const pIdx = Number(tBtn.getAttribute('data-pool-idx'));
          current._pickedIndices.push(pIdx);
          redraw();

          if (current._pickedIndices.length === targetChars.length) {
            state.quizState.locked = true;
            const builtWord = current._pickedIndices.map(function (i) { return current._cubePool[i]; }).join('');
            const isOk = builtWord === card.wordGeo;
            AudioEngine.play(card.audioNormal, { fallbackText: card.wordGeo });
            showQuizFeedback(isOk, card, 'Правильное написание: ' + card.wordGeo + ' (' + card.translitRu + ')');
          }
        });
      });
    }

    redraw();
  }

  function showQuizFeedback(isOk, card, detailText) {
    const qs = state.quizState;
    if (isOk) {
      qs.score += 1;
      AudioEngine.haptic([14, 30, 16]);
    } else {
      AudioEngine.haptic(35);
    }

    const fb = document.getElementById('qa-feedback-bar');
    fb.classList.remove('is-hidden');
    fb.innerHTML =
      '<div>' +
        '<strong style="color:' + (isOk ? 'var(--green)' : 'var(--crimson)') + '">' + (isOk ? 'Правильно!' : 'Обратите внимание:') + '</strong> ' +
        '<span lang="ka">' + escapeHtml(detailText) + '</span>' +
      '</div>' +
      '<button class="btn btn-primary btn-sm" id="qa-next-btn" type="button">' +
        (qs.qIndex + 1 < qs.questions.length ? 'Дальше' : 'Завершить') +
      '</button>';

    document.getElementById('qa-next-btn').addEventListener('click', function () {
      AudioEngine.stop();
      qs.qIndex += 1;
      renderStandardQuizQuestion();
    });
  }

  function renderBlitzQuestion() {
    AudioEngine.stop();
    const qs = state.quizState;
    const arena = document.getElementById('quiz-arena');
    if (!qs || qs.secondsLeft <= 0) return;

    const card = qs.pool[qs.answered % qs.pool.length];
    const isTrueMatch = Math.random() < 0.5;
    const shownPhotoCard = isTrueMatch
      ? card
      : shuffle(CARDS.filter(function (c) { return c.id !== card.id && c.imageUrl !== card.imageUrl; }))[0];

    arena.innerHTML =
      '<div class="qa-topbar">' +
        '<button class="btn btn-ghost btn-sm" id="blitz-exit-btn" type="button">Выйти</button>' +
        '<span class="qa-timer-pill" id="blitz-timer-val">' + qs.secondsLeft + ' сек</span>' +
        '<span style="font-weight:700;color:var(--green)">Очки: ' + qs.score + '</span>' +
      '</div>' +
      '<h3 class="qa-question-title">Соответствует ли фотография грузинскому слову?</h3>' +
      '<div style="max-width:420px;margin:0 auto;border:1px solid var(--border-warm);border-radius:16px;overflow:hidden;background:var(--bg-surface-alt)">' +
        '<img src="' + escapeHtml(shownPhotoCard.imageUrl) + '" alt="Кадр блица" style="width:100%;height:210px;object-fit:cover" />' +
        '<div style="padding:16px;text-align:center">' +
          '<div style="font-family:var(--font-geo-serif);font-size:2rem;font-weight:700" lang="ka">' + escapeHtml(card.wordGeo) + '</div>' +
          '<div style="color:var(--slate-muted);font-size:0.9rem">«' + escapeHtml(card.translitRu) + '»</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:420px;margin:18px auto 0">' +
        '<button class="btn-leitner btn-leitner-hard" id="blitz-btn-false" style="padding:14px" type="button">Неверно (←)</button>' +
        '<button class="btn-leitner btn-leitner-know" id="blitz-btn-true" style="padding:14px" type="button">Верно (→)</button>' +
      '</div>';

    document.getElementById('blitz-exit-btn').addEventListener('click', function () {
      if (qs.timerId) clearInterval(qs.timerId);
      renderQuizHub();
    });

    function answerBlitz(userSaysTrue) {
      if (qs.secondsLeft <= 0) return;
      qs.answered += 1;
      if (userSaysTrue === isTrueMatch) {
        qs.score += 1;
        AudioEngine.haptic(12);
      } else {
        AudioEngine.haptic(35);
      }
      renderBlitzQuestion();
    }

    document.getElementById('blitz-btn-false').addEventListener('click', function () { answerBlitz(false); });
    document.getElementById('blitz-btn-true').addEventListener('click', function () { answerBlitz(true); });
    qs._answerBlitz = answerBlitz;
  }

  function finishQuiz() {
    AudioEngine.stop();
    const qs = state.quizState;
    const arena = document.getElementById('quiz-arena');
    if (!qs) return;
    if (qs.timerId) {
      clearInterval(qs.timerId);
      qs.timerId = null;
    }

    const total = qs.mode === 'blitz' ? qs.answered : qs.questions.length;
    const unlocked = Storage.recordQuizScore(qs.mode, qs.score, total);
    notifyBadges(unlocked);

    const summaryLine = qs.mode === 'blitz'
      ? ('Вы набрали ' + qs.score + ' верных ответов из ' + total + ' за 30 секунд!')
      : ('Правильных ответов: ' + qs.score + ' из ' + total + ' (' + Math.round((qs.score / Math.max(1, total)) * 100) + '%). В следующем раунде вас ждут новые слова без повторов!');

    arena.innerHTML =
      '<div style="text-align:center;padding:26px 12px">' +
        '<div class="qm-icon-box" style="width:64px;height:64px;border-radius:50%;margin:0 auto 12px">' + ICONS.award + '</div>' +
        '<h3 style="font-family:var(--font-editorial);font-size:1.65rem;margin:0 0 8px">Викторина завершена!</h3>' +
        '<p style="color:var(--slate-muted);font-size:1.02rem;max-width:48ch;margin:0 auto 22px">' + escapeHtml(summaryLine) + '</p>' +
        '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px">' +
          '<button class="btn btn-primary" id="btn-quiz-retry" type="button">Новые вопросы</button>' +
          '<button class="btn btn-outline" id="btn-quiz-all-modes" type="button">Другие викторины</button>' +
          '<button class="btn btn-ghost" id="btn-quiz-to-cards" type="button">К умным карточкам</button>' +
        '</div>' +
      '</div>';

    document.getElementById('btn-quiz-retry').addEventListener('click', function () {
      startQuiz(qs.mode);
    });
    document.getElementById('btn-quiz-all-modes').addEventListener('click', renderQuizHub);
    document.getElementById('btn-quiz-to-cards').addEventListener('click', function () {
      switchView('cards');
    });
  }

  /* ========================================================================
     МОДАЛЬНОЕ ОКНО ДОСТИЖЕНИЙ И СТАТИСТИКИ ЛЕЙТНЕРА
     ======================================================================== */
  function openBadgesModal() {
    AudioEngine.stop();
    const modal = document.getElementById('badges-modal');
    const body = document.getElementById('badges-modal-body');
    const sum = Storage.getSummary();
    const unlockedIds = Storage.getUnlockedBadges();

    body.innerHTML =
      '<div style="background:var(--bg-parchment);padding:14px 16px;border-radius:14px;margin-bottom:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;text-align:center">' +
        '<div><div style="font-size:0.75rem;color:var(--slate-muted)">Новые</div><strong>' + sum.boxCounts[0] + '</strong></div>' +
        '<div><div style="font-size:0.75rem;color:var(--crimson)">Бокс 1 (Повтор)</div><strong>' + sum.boxCounts[1] + '</strong></div>' +
        '<div><div style="font-size:0.75rem;color:var(--amber)">Бокс 2 (В работе)</div><strong>' + sum.boxCounts[2] + '</strong></div>' +
        '<div><div style="font-size:0.75rem;color:var(--green)">Боксы 3–5 (Знаю)</div><strong>' + sum.learnedWords + ' / ' + sum.totalWords + '</strong></div>' +
      '</div>' +
      '<div class="badges-grid">' +
        Storage.BADGES_CATALOG.map(function (b) {
          const isUn = unlockedIds.indexOf(b.id) !== -1;
          return (
            '<div class="badge-award-card ' + (isUn ? 'is-unlocked' : '') + '">' +
              '<div style="color:var(--accent-bright);margin-bottom:6px">' + ICONS.award + '</div>' +
              '<div style="font-weight:700;font-size:0.92rem;margin-bottom:4px">' + escapeHtml(b.title) + '</div>' +
              '<div style="font-size:0.8rem;color:var(--slate-muted)">' + escapeHtml(b.desc) + '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>' +
      '<div style="margin-top:20px;padding-top:14px;border-top:1px solid var(--border-warm);display:flex;justify-content:space-between;align-items:center">' +
        '<span style="font-size:0.8rem;color:var(--slate-muted)">Прогресс и выбранная тема сохраняются в вашем браузере.</span>' +
        '<button class="btn btn-ghost btn-sm" id="btn-reset-progress" type="button">Сбросить прогресс</button>' +
      '</div>';

    modal.classList.remove('is-hidden');

    document.getElementById('btn-reset-progress').addEventListener('click', function () {
      if (window.confirm('Сбросить весь сохранённый прогресс изучения и достижения?')) {
        Storage.resetProgress();
        updateHeaderAndDashboardStats();
        renderAlphabetGrid();
        openBadgesModal();
        showToast('Прогресс сброшен.');
      }
    });
  }

  /* ========================================================================
     ИНИЦИАЛИЗАЦИЯ И ГЛОБАЛЬНЫЕ ОБРАБОТЧИКИ
     ======================================================================== */
  function init() {
    initThemeSwitcher();
    initInteractiveSpotlight();
    initAudioDelegation();

    const alphaGrid = document.getElementById('alphabet-grid');
    if (alphaGrid) {
      alphaGrid.addEventListener('click', function (e) {
        if (e.target.closest('[data-play-letter-idx]')) return;
        const tile = e.target.closest('[data-letter-open]');
        if (!tile) return;
        const ch = tile.getAttribute('data-letter-open');
        startCardSession(ch);
        switchView('cards');
      });

      alphaGrid.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        if (e.target.closest('[data-play-letter-idx]')) return;
        const tile = e.target.closest('[data-letter-open]');
        if (!tile) return;
        e.preventDefault();
        const ch = tile.getAttribute('data-letter-open');
        startCardSession(ch);
        switchView('cards');
      });
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        AudioEngine.stop();
      }
    });
    window.addEventListener('pagehide', function () {
      AudioEngine.stop();
    });

    document.querySelectorAll('[data-nav]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchView(btn.getAttribute('data-nav'));
      });
    });

    document.getElementById('btn-home-logo').addEventListener('click', function () {
      switchView('dashboard');
    });

    document.querySelectorAll('[data-filter]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        AudioEngine.stop();
        state.alphabetFilter = chip.getAttribute('data-filter');
        document.querySelectorAll('[data-filter]').forEach(function (c) {
          c.classList.toggle('is-active', c === chip);
        });
        renderAlphabetGrid();
      });
    });

    document.getElementById('btn-study-all').addEventListener('click', function () {
      startCardSession('leitner');
      switchView('cards');
    });

    const browse165Btn = document.getElementById('btn-browse-all-165');
    if (browse165Btn) {
      browse165Btn.addEventListener('click', function () {
        startCardSession('all');
        switchView('cards');
      });
    }

    document.getElementById('btn-daily-quiz').addEventListener('click', function () {
      switchView('quizzes');
      startQuiz('daily');
    });

    document.getElementById('btn-jump-confusables').addEventListener('click', function () {
      state.trainerTab = 'visual';
      switchView('trainer');
    });

    document.getElementById('btn-back-to-alphabet').addEventListener('click', function () {
      switchView('dashboard');
    });

    document.getElementById('select-card-deck').addEventListener('change', function (e) {
      startCardSession(e.target.value);
    });

    document.getElementById('btn-letter-quiz').addEventListener('click', function () {
      const forced = state.deckMode.length === 1 ? state.deckMode : null;
      switchView('quizzes');
      startQuiz('daily', forced);
    });

    document.getElementById('btn-prev-card').addEventListener('click', function () {
      if (state.sessionIndex > 0) {
        AudioEngine.stop();
        state.sessionIndex -= 1;
        renderActiveCard();
      }
    });

    document.getElementById('btn-next-card').addEventListener('click', function () {
      if (state.sessionIndex + 1 < state.sessionQueue.length) {
        AudioEngine.stop();
        state.sessionIndex += 1;
        renderActiveCard();
      }
    });

    document.querySelectorAll('[data-trainer-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        AudioEngine.stop();
        state.trainerTab = btn.getAttribute('data-trainer-tab');
        renderTrainerView();
      });
    });

    document.getElementById('btn-open-badges').addEventListener('click', openBadgesModal);
    document.getElementById('btn-close-badges').addEventListener('click', function () {
      AudioEngine.stop();
      document.getElementById('badges-modal').classList.add('is-hidden');
    });
    document.getElementById('badges-modal').addEventListener('click', function (e) {
      if (e.target.id === 'badges-modal') {
        AudioEngine.stop();
        e.currentTarget.classList.add('is-hidden');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.repeat) return;
      if (e.target && ['INPUT', 'SELECT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1) return;

      if (state.activeView === 'cards' && state.sessionIndex < state.sessionQueue.length) {
        const card = state.sessionQueue[state.sessionIndex];
        if (e.code === 'Space') {
          e.preventDefault();
          flipActiveCard();
        } else if (e.key === 'a' || e.key === 'A' || e.key === 'ф' || e.key === 'Ф') {
          const normBtn = document.getElementById('btn-card-audio-norm');
          AudioEngine.play(card.audioNormal, { button: normBtn, fallbackText: card.wordGeo });
        } else if (e.key === 's' || e.key === 'S' || e.key === 'ы' || e.key === 'Ы') {
          const slowBtn = document.getElementById('btn-card-audio-slow');
          AudioEngine.play(card.audioNormal, { slow: true, button: slowBtn, fallbackText: card.wordGeo });
        } else if (e.key === '1') {
          handleCardGrade('hard');
        } else if (e.key === '2') {
          handleCardGrade('medium');
        } else if (e.key === '3') {
          handleCardGrade('know');
        } else if (e.key === 'ArrowLeft' && state.sessionIndex > 0) {
          AudioEngine.stop();
          state.sessionIndex -= 1;
          renderActiveCard();
        } else if (e.key === 'ArrowRight' && state.sessionIndex + 1 < state.sessionQueue.length) {
          AudioEngine.stop();
          state.sessionIndex += 1;
          renderActiveCard();
        }
      } else if (state.activeView === 'quizzes' && state.quizState && state.quizState.mode === 'blitz' && state.quizState._answerBlitz) {
        if (e.key === 'ArrowLeft') state.quizState._answerBlitz(false);
        if (e.key === 'ArrowRight') state.quizState._answerBlitz(true);
      }
    });

    initSwipeGestures();
    updateHeaderAndDashboardStats();
    renderWordOfDay();
    renderAlphabetGrid();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

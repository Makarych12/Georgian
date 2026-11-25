(function () {
  window.GeorgianApp = window.GeorgianApp || {};

  const STORAGE_KEY = 'georgian_cards_platform_v1';

  // Интервалы Лейтнера (в миллисекундах)
  const LEITNER_INTERVALS = {
    1: 0,                        // Не помню — повторить немедленно
    2: 6 * 60 * 60 * 1000,       // С трудом — через 6 часов
    3: 24 * 60 * 60 * 1000,      // Знаю (Бокс 3) — 1 день
    4: 4 * 24 * 60 * 60 * 1000,  // Знаю (Бокс 4) — 4 дня
    5: 14 * 24 * 60 * 60 * 1000  // Мастерство (Бокс 5) — 14 дней
  };

  const BADGES_CATALOG = [
    {
      id: 'first_card',
      title: 'აი ია · Первый шаг',
      desc: 'Освоить первую грузинскую карточку до уровня «Знаю!».'
    },
    {
      id: 'vowels_master',
      title: 'Голос Колхиды',
      desc: 'Освоить все 5 гласных букв грузинского алфавита (ა, ე, ი, ო, უ).'
    },
    {
      id: 'ejective_tamer',
      title: 'Укротитель гортанных звуков',
      desc: 'Выучить не менее 4 карточек с абруптивными согласными (კ, პ, ტ, წ, ჭ, ყ).'
    },
    {
      id: 'ear_detective',
      title: 'Тонкий слух',
      desc: 'Пройти проверку слуха в тренажёре минимальных пар.'
    },
    {
      id: 'calligrapher',
      title: 'Перо каллиграфа',
      desc: 'Обвести букву Мхедрули на холсте прописи с точностью от 60%.'
    },
    {
      id: 'antonym_sage',
      title: 'Мастер контрастов',
      desc: 'Набрать 80% и выше в викторине «Найди антоним».'
    },
    {
      id: 'blitz_lightning',
      title: 'Молния Кавкасиони',
      desc: 'Дать 8 или более верных ответов за 30 секунд в «Быстром блице».'
    },
    {
      id: 'kakheti_harvest',
      title: 'Кахетинский урожай',
      desc: 'Довести 20 грузинских слов до статуса выученных.'
    },
    {
      id: 'mkhedruli_guardian',
      title: 'Хранитель Мхедрули',
      desc: 'Освоить карточки всех 33 букв грузинского алфавита!'
    }
  ];

  function todayStr() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function defaultState() {
    return {
      cards: {}, // cardId -> { box: 0..5, nextReview: timestamp, reviews: 0 }
      streak: 1,
      lastVisit: todayStr(),
      badges: [],
      quizBest: {
        letter: 0,
        photo: 0,
        builder: 0,
        antonym: 0,
        blitz: 0,
        daily: 0
      },
      earTestsPassed: 0,
      calligraphyPassed: 0
    };
  }

  let memoryState = defaultState();

  function load() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        memoryState = Object.assign(defaultState(), parsed);
        memoryState.cards = memoryState.cards || {};
        memoryState.badges = memoryState.badges || [];
        memoryState.quizBest = Object.assign(defaultState().quizBest, parsed.quizBest || {});
      }
    } catch (_) {}
    updateStreak();
    return memoryState;
  }

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryState));
    } catch (_) {}
  }

  function updateStreak() {
    const today = todayStr();
    if (memoryState.lastVisit === today) return;

    const prev = new Date(memoryState.lastVisit + 'T00:00:00');
    const curr = new Date(today + 'T00:00:00');
    const diffDays = Math.round((curr - prev) / (24 * 60 * 60 * 1000));

    if (diffDays === 1) {
      memoryState.streak = (memoryState.streak || 1) + 1;
    } else if (diffDays > 1) {
      memoryState.streak = 1;
    }
    memoryState.lastVisit = today;
    save();
  }

  function getCardProgress(cardId) {
    return memoryState.cards[cardId] || { box: 0, nextReview: 0, reviews: 0 };
  }

  function isCardLearned(cardId) {
    return getCardProgress(cardId).box >= 3;
  }

  // grade: 'hard' (Не помню), 'medium' (С трудом), 'know' (Знаю!)
  function gradeCard(cardId, grade) {
    const prev = getCardProgress(cardId);
    let newBox = prev.box;

    if (grade === 'hard') {
      newBox = 1;
    } else if (grade === 'medium') {
      newBox = 2;
    } else if (grade === 'know') {
      newBox = prev.box < 3 ? 3 : Math.min(5, prev.box + 1);
    }

    const now = Date.now();
    const interval = LEITNER_INTERVALS[newBox] || 0;
    memoryState.cards[cardId] = {
      box: newBox,
      nextReview: now + interval,
      reviews: (prev.reviews || 0) + 1
    };

    const unlockedNow = evaluateBadges();
    save();
    return { box: newBox, unlockedBadges: unlockedNow };
  }

  function getLetterStats(letterChar) {
    const allCards = (window.GeorgianApp.CARDS || []).filter(function (c) {
      return c.letter === letterChar;
    });
    const learned = allCards.filter(function (c) {
      return isCardLearned(c.id);
    }).length;
    return {
      total: allCards.length,
      learned: learned,
      isMastered: allCards.length > 0 && learned === allCards.length
    };
  }

  function getSummary() {
    const allCards = window.GeorgianApp.CARDS || [];
    const alphabet = window.GeorgianApp.ALPHABET || [];
    const now = Date.now();

    let learnedWords = 0;
    let dueCount = 0;
    const boxCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    allCards.forEach(function (c) {
      const p = getCardProgress(c.id);
      boxCounts[p.box] = (boxCounts[p.box] || 0) + 1;
      if (p.box >= 3) learnedWords++;
      if (p.box < 3 || p.nextReview <= now) dueCount++;
    });

    let masteredLetters = 0;
    alphabet.forEach(function (a) {
      if (getLetterStats(a.letter).isMastered) masteredLetters++;
    });

    let levelTitle = 'სტუმარი · Новичок (A0)';
    if (learnedWords >= 120) {
      levelTitle = 'ოსტატი · Мастер Мхедрули (A2)';
    } else if (learnedWords >= 60) {
      levelTitle = 'მცოდნე · Знаток Грузии (A1+)';
    } else if (learnedWords >= 20) {
      levelTitle = 'მოსწავლე · Ученик (A1)';
    } else if (learnedWords >= 1) {
      levelTitle = 'მგზავრი · Путник (A0+)';
    }

    return {
      totalWords: allCards.length,
      learnedWords: learnedWords,
      dueCount: dueCount,
      masteredLetters: masteredLetters,
      totalLetters: alphabet.length,
      streak: memoryState.streak || 1,
      badgesCount: memoryState.badges.length,
      totalBadges: BADGES_CATALOG.length,
      levelTitle: levelTitle,
      boxCounts: boxCounts,
      quizBest: memoryState.quizBest
    };
  }

  function getLeitnerQueue(limit) {
    const allCards = (window.GeorgianApp.CARDS || []).slice();
    const now = Date.now();

    // Сортировка: сначала Бокс 1 (ошибки), затем Бокс 2, затем новые (Бокс 0), затем просроченные Боксы 3-5
    allCards.sort(function (a, b) {
      const pa = getCardProgress(a.id);
      const pb = getCardProgress(b.id);
      const dueA = pa.box === 0 || pa.nextReview <= now ? 0 : 1;
      const dueB = pb.box === 0 || pb.nextReview <= now ? 0 : 1;
      if (dueA !== dueB) return dueA - dueB;

      const orderWeight = { 1: 1, 2: 2, 0: 3, 3: 4, 4: 5, 5: 6 };
      return (orderWeight[pa.box] || 6) - (orderWeight[pb.box] || 6);
    });

    return allCards.slice(0, limit || 16);
  }

  function unlockBadge(badgeId) {
    if (memoryState.badges.indexOf(badgeId) === -1) {
      memoryState.badges.push(badgeId);
      save();
      return BADGES_CATALOG.find(function (b) { return b.id === badgeId; }) || null;
    }
    return null;
  }

  function evaluateBadges() {
    const newlyUnlocked = [];
    const allCards = window.GeorgianApp.CARDS || [];
    const alphabet = window.GeorgianApp.ALPHABET || [];

    const learnedCards = allCards.filter(function (c) { return isCardLearned(c.id); });

    if (learnedCards.length >= 1) {
      const b = unlockBadge('first_card');
      if (b) newlyUnlocked.push(b);
    }
    if (learnedCards.length >= 20) {
      const b = unlockBadge('kakheti_harvest');
      if (b) newlyUnlocked.push(b);
    }

    const vowels = ['ა', 'ე', 'ი', 'ო', 'უ'];
    const allVowelsMastered = vowels.every(function (v) {
      return getLetterStats(v).isMastered;
    });
    if (allVowelsMastered) {
      const b = unlockBadge('vowels_master');
      if (b) newlyUnlocked.push(b);
    }

    const ejectives = ['კ', 'პ', 'ტ', 'წ', 'ჭ', 'ყ'];
    const learnedEjectives = learnedCards.filter(function (c) {
      return ejectives.indexOf(c.letter) !== -1;
    }).length;
    if (learnedEjectives >= 4) {
      const b = unlockBadge('ejective_tamer');
      if (b) newlyUnlocked.push(b);
    }

    const all33 = alphabet.length === 33 && alphabet.every(function (a) {
      return getLetterStats(a.letter).isMastered;
    });
    if (all33) {
      const b = unlockBadge('mkhedruli_guardian');
      if (b) newlyUnlocked.push(b);
    }

    return newlyUnlocked;
  }

  function recordQuizScore(modeKey, score, total) {
    const pct = total > 0 ? Math.round((score / total) * 100) : score;
    const unlocked = [];

    if (modeKey === 'blitz') {
      if (score > (memoryState.quizBest.blitz || 0)) {
        memoryState.quizBest.blitz = score;
      }
      if (score >= 8) {
        const b = unlockBadge('blitz_lightning');
        if (b) unlocked.push(b);
      }
    } else {
      if (pct > (memoryState.quizBest[modeKey] || 0)) {
        memoryState.quizBest[modeKey] = pct;
      }
      if (modeKey === 'antonym' && pct >= 80) {
        const b = unlockBadge('antonym_sage');
        if (b) unlocked.push(b);
      }
    }
    save();
    return unlocked;
  }

  function recordEarTestSuccess() {
    memoryState.earTestsPassed = (memoryState.earTestsPassed || 0) + 1;
    const b = unlockBadge('ear_detective');
    save();
    return b ? [b] : [];
  }

  function recordCalligraphySuccess() {
    memoryState.calligraphyPassed = (memoryState.calligraphyPassed || 0) + 1;
    const b = unlockBadge('calligrapher');
    save();
    return b ? [b] : [];
  }

  function resetProgress() {
    memoryState = defaultState();
    save();
  }

  load();

  window.GeorgianApp.Storage = {
    BADGES_CATALOG: BADGES_CATALOG,
    getCardProgress: getCardProgress,
    isCardLearned: isCardLearned,
    gradeCard: gradeCard,
    getLetterStats: getLetterStats,
    getSummary: getSummary,
    getLeitnerQueue: getLeitnerQueue,
    recordQuizScore: recordQuizScore,
    recordEarTestSuccess: recordEarTestSuccess,
    recordCalligraphySuccess: recordCalligraphySuccess,
    getUnlockedBadges: function () { return memoryState.badges.slice(); },
    resetProgress: resetProgress
  };
})();

(function () {
  window.GeorgianApp = window.GeorgianApp || {};

  // Защита от повторной инициализации: строго один глобальный Singleton на всё приложение
  if (window.GeorgianApp.Audio && window.GeorgianApp.Audio._isSingleton) {
    return;
  }

  // Единый глобальный экземпляр HTMLAudioElement (Singleton)
  const player = new Audio();
  player.preload = 'auto';

  let playbackToken = 0;
  let activeBtn = null;
  let seqTimeout = null;

  function applyPitchPreservation(audioEl, rate) {
    audioEl.defaultPlaybackRate = rate;
    audioEl.playbackRate = rate;
    if ('preservesPitch' in audioEl) audioEl.preservesPitch = true;
    if ('mozPreservesPitch' in audioEl) audioEl.mozPreservesPitch = true;
    if ('webkitPreservesPitch' in audioEl) audioEl.webkitPreservesPitch = true;
  }

  function clearActiveButtons() {
    if (activeBtn) {
      activeBtn.classList.remove('is-playing');
      activeBtn = null;
    }
    document.querySelectorAll('.is-playing').forEach(function (el) {
      el.classList.remove('is-playing');
    });
  }

  function setActiveButton(btnEl) {
    clearActiveButtons();
    if (btnEl) {
      activeBtn = btnEl;
      btnEl.classList.add('is-playing');
    }
  }

  // Полная принудительная остановка любого текущего воспроизведения (Audio + Web Speech API)
  function stop() {
    playbackToken += 1;

    if (seqTimeout !== null) {
      clearTimeout(seqTimeout);
      seqTimeout = null;
    }

    // Снимаем старые колбэки до паузы, чтобы они не сработали асинхронно
    player.onended = null;
    player.onerror = null;
    player.onloadedmetadata = null;

    try {
      player.pause();
    } catch (_) {}

    try {
      player.currentTime = 0;
    } catch (_) {}

    if ('speechSynthesis' in window && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (_) {}
    }

    clearActiveButtons();
    return playbackToken;
  }

  function speakFallback(textGeo, rate, btnEl, onEnd, token) {
    if (token !== playbackToken) return;

    if (!('speechSynthesis' in window) || !window.speechSynthesis || !textGeo) {
      clearActiveButtons();
      if (onEnd && token === playbackToken) onEnd();
      return;
    }

    try {
      window.speechSynthesis.cancel();
    } catch (_) {}

    const utter = new SpeechSynthesisUtterance(textGeo);
    utter.lang = 'ka-GE';
    utter.rate = rate || 1.0;

    utter.onend = function () {
      if (token !== playbackToken) return;
      clearActiveButtons();
      if (onEnd) onEnd();
    };

    utter.onerror = function () {
      if (token !== playbackToken) return;
      clearActiveButtons();
      if (onEnd) onEnd();
    };

    setActiveButton(btnEl);
    window.speechSynthesis.speak(utter);
  }

  function playSingleOnSingleton(src, rate, fallbackText, btnEl, token, onDone) {
    if (token !== playbackToken) return;

    if (!src) {
      speakFallback(fallbackText, rate, btnEl, onDone, token);
      return;
    }

    setActiveButton(btnEl);

    player.onended = function () {
      if (token !== playbackToken) return;
      player.onended = null;
      player.onerror = null;
      if (onDone) {
        onDone();
      } else {
        clearActiveButtons();
      }
    };

    player.onerror = function () {
      if (token !== playbackToken) return;
      player.onended = null;
      player.onerror = null;
      speakFallback(fallbackText, rate, btnEl, onDone, token);
    };

    player.src = src;
    try {
      player.currentTime = 0;
    } catch (_) {}
    applyPitchPreservation(player, rate);

    player.onloadedmetadata = function () {
      if (token !== playbackToken) return;
      applyPitchPreservation(player, rate);
    };

    const playPromise = player.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function (err) {
        // Если воспроизведение было прервано новым кликом / pause() / сменой карточки — НЕ запускаем параллельный синтезатор!
        if (token !== playbackToken) return;
        if (err && (err.name === 'AbortError' || err.name === 'NotAllowedError')) {
          if (err.name === 'NotAllowedError') clearActiveButtons();
          return;
        }
        player.onended = null;
        player.onerror = null;
        speakFallback(fallbackText, rate, btnEl, onDone, token);
      });
    }
  }

  function play(src, options) {
    const opts = options || {};
    const slow = Boolean(opts.slow);
    const rate = slow ? 0.58 : 1.0;
    const btnEl = opts.button || null;
    const fallbackText = opts.fallbackText || '';
    const onEnd = opts.onEnd || null;

    // Принудительно останавливаем любой предыдущий звук перед стартом нового
    const token = stop();

    playSingleOnSingleton(src, rate, fallbackText, btnEl, token, function () {
      if (token !== playbackToken) return;
      clearActiveButtons();
      if (onEnd) onEnd();
    });
  }

  function playLetter(letterIndex, letterChar, btnEl) {
    const padded = String(letterIndex).padStart(2, '0');
    play('assets/audio/letter_' + padded + '.mp3', {
      button: btnEl,
      fallbackText: letterChar
    });
  }

  // Последовательное проигрывание (например, минимальные пары А ↔ Б) строго через тот же единый Singleton
  function playSequence(items, btnEl) {
    const token = stop();
    if (!items || !items.length) return;

    let idx = 0;

    function nextStep() {
      if (token !== playbackToken) return;
      if (idx >= items.length) {
        clearActiveButtons();
        return;
      }
      const item = items[idx++];
      playSingleOnSingleton(
        item.src,
        item.slow ? 0.58 : 1.0,
        item.fallbackText || '',
        btnEl,
        token,
        function () {
          if (token !== playbackToken) return;
          if (idx >= items.length) {
            clearActiveButtons();
            return;
          }
          seqTimeout = setTimeout(function () {
            seqTimeout = null;
            nextStep();
          }, 380);
        }
      );
    }

    nextStep();
  }

  function haptic(pattern) {
    if (navigator && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(pattern || 18);
      } catch (_) {}
    }
  }

  window.GeorgianApp.Audio = {
    _isSingleton: true,
    play: play,
    playLetter: playLetter,
    playSequence: playSequence,
    stop: stop,
    haptic: haptic
  };
})();

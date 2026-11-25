(function () {
  window.GeorgianApp = window.GeorgianApp || {};

  // Модуль 3.3: Визуальные пары сходства (Visual Pairs) и 24 Минимальные фонетические пары (Minimal Pairs)
  window.GeorgianApp.VISUAL_GROUPS = [
    {
      id: 'v-k-p',
      title: 'ვ · კ · პ — Главная ловушка новичков',
      subtitle: 'Дуги и хвостики: где проходит базовая линия строки?',
      letters: ['ვ', 'კ', 'პ'],
      tip: 'Смотрите на базовую линию и макушку! «ვ» (в) — чистая цифра 3 без верхнего хвостика, уходит вниз. «კ» (к’) — волнистый хвостик сверху и длинная петля вниз под строку. «პ» (п’) — стоит прямо НА базовой линии, а сверху имеет двойную шапочку.',
      distinctions: [
        { letter: 'ვ', sound: '[v] в', marker: 'Нет верхнего хвоста · нижняя петля под строкой', word: 'ვაზი (лоза)' },
        { letter: 'კ', sound: "[kʼ] к'", marker: 'Одиночный изгиб сверху · глубокая петля вниз', word: 'კარი (дверь)' },
        { letter: 'პ', sound: "[pʼ] п'", marker: 'Два зубчика сверху · стоит НА строке, не свисает', word: 'პური (хлеб)' }
      ]
    },
    {
      id: 'b-kh',
      title: 'ბ · ხ · ზ — Закрытый или открытый животик?',
      subtitle: 'Три буквы с высокой шейкой над строкой',
      letters: ['ბ', 'ხ', 'ზ'],
      tip: 'У «ბ» (б) нижний животик полностью ЗАКРЫТ в аккуратное яблочко. У «ხ» (х) правая сторона РАСКРЫТА в виде серпа/крючка. У «ზ» (з) сверху свернуто отдельное маленькое колечко.',
      distinctions: [
        { letter: 'ბ', sound: '[b] б', marker: 'Прямая/изогнутая шейка · закрытое кольцо внизу', word: 'ბაღი (сад)' },
        { letter: 'ხ', sound: '[x] х', marker: 'Высокая спинка · раскрытая справа дуга внизу', word: 'ხმელი (сухой)' },
        { letter: 'ზ', sound: '[z] з', marker: 'Маленькая петелька наверху · широкое кольцо внизу', word: 'ზღვა (море)' }
      ]
    },
    {
      id: 't-p-q',
      title: 'ტ · ფ · ყ — Петли и уходящие вниз ножки',
      subtitle: 'Скрипичный ключ, двойная петля и бокал для вина',
      letters: ['ტ', 'ფ', 'ყ'],
      tip: '«ტ» (т’) перекрещивается посередине как скрипичный ключ. «ფ» (пʰ) имеет круглую петлю слева и широкий хвост справа внизу. «ყ» (къ) похожа на винный бокал на стройной прямой ножке (запомните: ყ — ყურძენი, виноград!).',
      distinctions: [
        { letter: 'ტ', sound: "[tʼ] т'", marker: 'Верхний хвостик пересекает центральный круг', word: 'ტკბილი (сладкий)' },
        { letter: 'ფ', sound: '[pʰ] пʰ', marker: 'Два боковых полукружия + закруглённый хвост вниз', word: 'ფერადი (цветной)' },
        { letter: 'ყ', sound: "[qʼ] къ", marker: 'Чаша сверху на прямой ножке, уходящей под строку', word: 'ყურძენი (виноград)' }
      ]
    },
    {
      id: 'd-l-gh',
      title: 'დ · ლ · ღ — Правило «1 – 2 – 3 лепестка»',
      subtitle: 'Самый простой мнемонический приём для трёх букв с нижним правым хвостом',
      letters: ['ღ', 'დ', 'ლ'],
      tip: 'Просто сосчитайте верхние округлые дуги слева от длинного правого хвостика! 1 широкая ложбинка — «ღ» (гх), 2 аккуратных ушка — «დ» (д), 3 ровные арочки — «ლ» (л).',
      distinctions: [
        { letter: 'ღ', sound: '[ɣ] гх', marker: '1 плавный прогиб сверху + хвост под строку', word: 'ღვინო (вино)' },
        { letter: 'დ', sound: '[d] д', marker: '2 округлых ушка сверху + широкая дуга вниз', word: 'დიდი (большой)' },
        { letter: 'ლ', sound: '[l] л', marker: '3 арочных зубчика в ряд + хвост вниз', word: 'ლამაზი (красивый)' }
      ]
    },
    {
      id: 'sh-m-ch-ts',
      title: 'მ · შ · ჩ · წ — Буквы с кольцом внизу и короной сверху',
      subtitle: 'Все стоят на строке, вся разница — в форме «шапочки»!',
      letters: ['მ', 'შ', 'ჩ', 'წ'],
      tip: 'Смотрите только на макушку: один гладкий крючок влево — «მ» (м); два ровных ушка — «შ» (ш); косая веточка-развилка — «ჩ» (чʰ); высокая изогнутая шейка с волной — «წ» (ц’).',
      distinctions: [
        { letter: 'მ', sound: '[m] м', marker: 'Одиночный гладкий крючок сверху', word: 'მზე (солнце)' },
        { letter: 'შ', sound: '[ʃ] ш', marker: 'Две симметричные дуги сверху на ножке', word: 'შავი (чёрный)' },
        { letter: 'ჩ', sound: '[tʃʰ] чʰ', marker: 'Наклонный крестик/веточка сверху', word: 'ჩრდილი (тень)' },
        { letter: 'წ', sound: "[tsʼ] ц'", marker: 'Длинная волнистая шейка с петелькой', word: 'წყალი (вода)' }
      ]
    },
    {
      id: 's-dz-ts',
      title: 'ს · ძ · ც · ჭ — Зеркальные мачты и аффрикаты',
      subtitle: 'Слева или справа расположена вертикальная стойка?',
      letters: ['ს', 'ძ', 'ც', 'ჭ'],
      tip: '«ს» (с) и «ძ» (дз) — идеальные зеркальные близнецы: мачта СЛЕВА = ს, мачта СПРАВА = ძ! У «ც» (цʰ) чаша опускается ниже базовой линии, а у «ჭ» (ч’) сверху извилистый крючок.',
      distinctions: [
        { letter: 'ს', sound: '[s] с', marker: 'Прямая вертикальная мачта СЛЕВА', word: 'სტუმარი (гость)' },
        { letter: 'ძ', sound: '[dz] дз', marker: 'Прямая вертикальная мачта СПРАВА', word: 'ძველი (старый)' },
        { letter: 'ც', sound: '[tsʰ] цʰ', marker: 'Открытая округлая чаша с завитком под строкой', word: 'ცივი (холодный)' },
        { letter: 'ჭ', sound: "[tʃʼ] ч'", marker: 'Высокая фигурная верхушка с перехватом', word: 'ჭრელი (пёстрый)' }
      ]
    }
  ];

  // 24 минимальные и квазиминимальные фонетические пары на придыхательные, горловые, звонкие, свистящие и шипящие
  window.GeorgianApp.MINIMAL_PAIRS = [
    {
      id: 'mp-01',
      category: 'Заднеязычные: კ vs ქ',
      contrastTitle: 'კ [kʼ] (абруптивный) vs ქ [kʰ] (придыхательный)',
      explanation: 'Эталонная пара грузинской фонетики: сухой щелчок без выдоха в «კარი» (дверь) против воздушного выдоха в «ქარი» (ветер).',
      left: { letter: 'კ', wordGeo: 'კარი', ipa: '[kʼɑri]', translitRu: "к'ари", translationRu: 'Дверь', translationEn: 'Door', audioKey: 'card_10_1', photoKey: 'card_10_1' },
      right: { letter: 'ქ', wordGeo: 'ქარი', ipa: '[kʰɑri]', translitRu: 'кʰари', translationRu: 'Ветер', translationEn: 'Wind', audioKey: 'card_22_2', photoKey: 'card_22_2' }
    },
    {
      id: 'mp-02',
      category: 'Губные: პ vs ფ',
      contrastTitle: 'პ [pʼ] (абруптивный) vs ფ [pʰ] (придыхательный)',
      explanation: 'Плотное смыкание губ без воздуха в слове «პური» (хлеб) и мягкий выдох на губах в слове «ფული» (деньги).',
      left: { letter: 'პ', wordGeo: 'პური', ipa: '[pʼuri]', translitRu: "п'ури", translationRu: 'Хлеб (шоти)', translationEn: 'Bread', audioKey: 'mp_puri', photoKey: 'mp_puri' },
      right: { letter: 'ფ', wordGeo: 'ფული', ipa: '[pʰuli]', translitRu: 'пʰули', translationRu: 'Деньги', translationEn: 'Money', audioKey: 'mp_puli', photoKey: 'mp_puli' }
    },
    {
      id: 'mp-03',
      category: 'Зубные: ტ vs თ',
      contrastTitle: 'ტ [tʼ] (абруптивный) vs თ [tʰ] (придыхательный)',
      explanation: 'Резкий безаспиративный щелчок кончика языка в «ტბა» (озеро) против тёплого выдоха в «თმა» (волосы).',
      left: { letter: 'ტ', wordGeo: 'ტბა', ipa: '[tʼbɑ]', translitRu: "т'ба", translationRu: 'Озеро', translationEn: 'Lake', audioKey: 'card_19_2', photoKey: 'card_19_2' },
      right: { letter: 'თ', wordGeo: 'თმა', ipa: '[tʰmɑ]', translitRu: 'тʰма', translationRu: 'Волосы', translationEn: 'Hair', audioKey: 'mp_tma', photoKey: 'mp_tma', photoQuery: 'Long dark wavy hair portrait woman' }
    },
    {
      id: 'mp-04',
      category: 'Свистящие: წ vs ც',
      contrastTitle: 'წ [tsʼ] (абруптивный) vs ც [tsʰ] (придыхательный)',
      explanation: 'Острый свистящий щелчок «წ» даёт «год / талия», а воздушное «ც» с выдохом — «луговая коса».',
      left: { letter: 'წ', wordGeo: 'წელი', ipa: '[tsʼɛli]', translitRu: "ц'эли", translationRu: 'Год / Талия', translationEn: 'Year / Waist', audioKey: 'mp_tseli_ej', photoKey: 'mp_tseli_ej' },
      right: { letter: 'ც', wordGeo: 'ცელი', ipa: '[tsʰɛli]', translitRu: 'цʰэли', translationRu: 'Коса (для травы)', translationEn: 'Scythe', audioKey: 'mp_tseli_asp', photoKey: 'mp_tseli_asp' }
    },
    {
      id: 'mp-05',
      category: 'Шипящие: ჭ vs ჩ',
      contrastTitle: 'ჭ [tʃʼ] (абруптивный) vs ჩ [tʃʰ] (придыхательный)',
      explanation: 'Знаменитая минимальная пара: резкое гортанное «ჭირი» (невзгода) и воздушное «ჩირი» (сладкая вяленая хурма).',
      left: { letter: 'ჭ', wordGeo: 'ჭირი', ipa: '[tʃʼiri]', translitRu: "ч'ири", translationRu: 'Беда / Недуг', translationEn: 'Hardship', audioKey: 'mp_chiri_ej', photoKey: 'mp_chiri_ej', photoQuery: 'Dark storm clouds mountain pass' },
      right: { letter: 'ჩ', wordGeo: 'ჩირი', ipa: '[tʃʰiri]', translitRu: 'чʰири', translationRu: 'Сухофрукты (хурма)', translationEn: 'Dried fruit', audioKey: 'mp_chiri', photoKey: 'mp_chiri' }
    },
    {
      id: 'mp-06',
      category: 'Гортанные: ყ vs ქ',
      contrastTitle: 'ყ [qʼ] (увулярный щелчок) vs ქ [kʰ] (придыхательный)',
      explanation: 'Глубокий гортанный смычок в «ყველი» (сыр) против мягкого придыхательного «ქ» в «ქვეყანა» (страна).',
      left: { letter: 'ყ', wordGeo: 'ყველი', ipa: '[qʼvɛli]', translitRu: 'къвэли', translationRu: 'Сыр (сулугуни)', translationEn: 'Cheese', audioKey: 'mp_qveli', photoKey: 'mp_qveli' },
      right: { letter: 'ქ', wordGeo: 'ქვეყანა', ipa: '[kʰvɛqʼɑnɑ]', translitRu: 'кʰвэкъана', translationRu: 'Страна / Мир', translationEn: 'Country / World', audioKey: 'card_22_3', photoKey: 'card_22_3' }
    },
    {
      id: 'mp-07',
      category: 'Гортанные: ყ vs კ',
      contrastTitle: 'ყ [qʼ] (глубокий увулярный) vs კ [kʼ] (нёбный абруптив)',
      explanation: 'Оба звука абруптивные без выдоха, но «კ» щёлкает на мягком нёбе («კბილი» — зуб), а «ყ» — глубоко в гортани («ყბა» — челюсть)!',
      left: { letter: 'ყ', wordGeo: 'ყბა', ipa: '[qʼbɑ]', translitRu: 'къба', translationRu: 'Челюсть', translationEn: 'Jaw', audioKey: 'mp_qba', photoKey: 'mp_qba', photoQuery: 'Classical marble bust sculpture profile' },
      right: { letter: 'კ', wordGeo: 'კბილი', ipa: '[kʼbili]', translitRu: "к'били", translationRu: 'Зуб', translationEn: 'Tooth', audioKey: 'card_10_5', photoKey: 'card_10_5' }
    },
    {
      id: 'mp-08',
      category: 'Горловые щелевые: ყ vs ხ',
      contrastTitle: 'ყ [qʼ] (взрывной щелчок) vs ხ [x] (фрикативный хрип)',
      explanation: 'В слове «ყველი» гортань смыкается мгновенным щелчком, а в «ხელი» воздух свободно трётся о заднее нёбо.',
      left: { letter: 'ყ', wordGeo: 'ყველი', ipa: '[qʼvɛli]', translitRu: 'къвэли', translationRu: 'Сыр', translationEn: 'Cheese', audioKey: 'mp_qveli', photoKey: 'mp_qveli' },
      right: { letter: 'ხ', wordGeo: 'ხელი', ipa: '[xɛli]', translitRu: 'хэли', translationRu: 'Рука', translationEn: 'Hand', audioKey: 'mp_kheli', photoKey: 'mp_kheli' }
    },
    {
      id: 'mp-09',
      category: 'Горловые щелевые: ღ vs ხ',
      contrastTitle: 'ღ [ɣ] (звонкий велярный) vs ხ [x] (глухой увулярный)',
      explanation: 'Артикуляция почти в одной точке, но «ღ» в «ღამე» поёт голосовыми связками, а «ხ» в «ხამი/ხე» звучит глухо и упруго.',
      left: { letter: 'ღ', wordGeo: 'ღამე', ipa: '[ɣɑmɛ]', translitRu: 'гхамэ', translationRu: 'Ночь', translationEn: 'Night', audioKey: 'card_23_2', photoKey: 'card_23_2' },
      right: { letter: 'ხ', wordGeo: 'ხე', ipa: '[xɛ]', translitRu: 'хэ', translationRu: 'Дерево', translationEn: 'Tree', audioKey: 'card_31_3', photoKey: 'card_31_3' }
    },
    {
      id: 'mp-10',
      category: 'Дыхание vs хрип: ჰ vs ხ',
      contrastTitle: 'ჰ [h] (лёгкий выдох) vs ხ [x] (твёрдый заднеязычный)',
      explanation: '«ჰაერი» начинается невесомым тёплым дыханием (как англ. air/hat), а «ხმაური» — плотным хрипловатым «х».',
      left: { letter: 'ჰ', wordGeo: 'ჰაერი', ipa: '[hɑɛri]', translitRu: 'hаэри', translationRu: 'Воздух', translationEn: 'Air', audioKey: 'card_33_1', photoKey: 'card_33_1' },
      right: { letter: 'ხ', wordGeo: 'ხმაური', ipa: '[xmɑuri]', translitRu: 'хмаури', translationRu: 'Шум', translationEn: 'Noise', audioKey: 'card_31_2', photoKey: 'card_31_2' }
    },
    {
      id: 'mp-11',
      category: 'Губная тройка: ბ vs პ',
      contrastTitle: 'ბ [b] (звонкий) vs პ [pʼ] (глухой абруптивный)',
      explanation: 'Русскоязычному уху непривычный безаспиративный «პ» часто слышится как звонкое «б»! Сравните голос в «ბარი» и сухой щелчок в «პური».',
      left: { letter: 'ბ', wordGeo: 'ბარი', ipa: '[bɑri]', translitRu: 'бари', translationRu: 'Равнина / Долина', translationEn: 'Valley / Plain', audioKey: 'mp_bari', photoKey: 'mp_bari', photoQuery: 'Green fertile valley plain Georgia' },
      right: { letter: 'პ', wordGeo: 'პური', ipa: '[pʼuri]', translitRu: "п'ури", translationRu: 'Хлеб', translationEn: 'Bread', audioKey: 'mp_puri', photoKey: 'mp_puri' }
    },
    {
      id: 'mp-12',
      category: 'Губная тройка: ბ vs ფ',
      contrastTitle: 'ბ [b] (звонкий) vs ფ [pʰ] (глухой придыхательный)',
      explanation: 'Идеальная минимальная пара: звонкое «ბარი» (равнина/лопата) и придыхательное «ფარი» (щит).',
      left: { letter: 'ბ', wordGeo: 'ბარი', ipa: '[bɑri]', translitRu: 'бари', translationRu: 'Равнина', translationEn: 'Lowland plain', audioKey: 'mp_bari', photoKey: 'mp_bari' },
      right: { letter: 'ფ', wordGeo: 'ფარი', ipa: '[pʰɑri]', translitRu: 'пʰари', translationRu: 'Щит (хевсурский)', translationEn: 'Shield', audioKey: 'mp_pari', photoKey: 'mp_pari', photoQuery: 'Traditional Khevsureti round shield museum' }
    },
    {
      id: 'mp-13',
      category: 'Зубная тройка: დ vs ტ',
      contrastTitle: 'დ [d] (звонкий) vs ტ [tʼ] (глухой абруптивный)',
      explanation: 'Из-за отсутствия выдоха у «ტ» новички путают его с «დ»: в «დარი» (вёдро, ясная погода) работают связки, а в «ტარი» (рукоять) — нет!',
      left: { letter: 'დ', wordGeo: 'დარი', ipa: '[dɑri]', translitRu: 'дари', translationRu: 'Ясная погода', translationEn: 'Fair weather', audioKey: 'mp_dari', photoKey: 'mp_dari', photoQuery: 'Clear sunny sky meadow Georgia' },
      right: { letter: 'ტ', wordGeo: 'ტყე', ipa: '[tʼqʼɛ]', translitRu: "т'къэ", translationRu: 'Лес', translationEn: 'Forest', audioKey: 'card_19_3', photoKey: 'card_19_3' }
    },
    {
      id: 'mp-14',
      category: 'Зубная тройка: თ vs დ',
      contrastTitle: 'თ [tʰ] (придыхательный) vs დ [d] (звонкий)',
      explanation: 'Контраст воздушного глухого «თ» в слове «თოვლი» (снег) и плотного звонкого «დ» в слове «დილა» (утро).',
      left: { letter: 'თ', wordGeo: 'თოვლი', ipa: '[tʰɔvli]', translitRu: 'тʰовли', translationRu: 'Снег', translationEn: 'Snow', audioKey: 'card_08_3', photoKey: 'card_08_3' },
      right: { letter: 'დ', wordGeo: 'დილა', ipa: '[dilɑ]', translitRu: 'дила', translationRu: 'Утро', translationEn: 'Morning', audioKey: 'card_04_3', photoKey: 'card_04_3' }
    },
    {
      id: 'mp-15',
      category: 'Заднеязычная тройка: გ vs კ',
      contrastTitle: 'გ [ɡ] (звонкий) vs კ [kʼ] (глухой абруптивный)',
      explanation: 'Послушайте чистую минимальную пару: звонкое «გული» (сердце) и сухое абруптивное «კუდი» (хвост) / «კუნძული» (остров).',
      left: { letter: 'გ', wordGeo: 'გული', ipa: '[ɡuli]', translitRu: 'гули', translationRu: 'Сердце', translationEn: 'Heart', audioKey: 'card_03_2', photoKey: 'card_03_2' },
      right: { letter: 'კ', wordGeo: 'კუდი', ipa: '[kʼudi]', translitRu: "к'уди", translationRu: 'Хвост / Вершина', translationEn: 'Tail', audioKey: 'mp_kudi', photoKey: 'mp_kudi', photoQuery: 'Red fox bushy tail nature' }
    },
    {
      id: 'mp-16',
      category: 'Заднеязычная тройка: გ vs ქ',
      contrastTitle: 'გ [ɡ] (звонкий) vs ქ [kʰ] (глухой придыхательный)',
      explanation: 'Звонкое начало в «გალავანი / გზა» и мягкий воздушный выдох в слове «ქალაქი» (город).',
      left: { letter: 'გ', wordGeo: 'გზა', ipa: '[ɡzɑ]', translitRu: 'гза', translationRu: 'Дорога', translationEn: 'Road', audioKey: 'card_03_1', photoKey: 'card_03_1' },
      right: { letter: 'ქ', wordGeo: 'ქალაქი', ipa: '[kʰɑlɑkʰi]', translitRu: 'кʰалакʰи', translationRu: 'Город', translationEn: 'City', audioKey: 'card_22_4', photoKey: 'card_22_4' }
    },
    {
      id: 'mp-17',
      category: 'Свистящие аффрикаты: ძ vs წ',
      contrastTitle: 'ძ [dz] (звонкая аффриката) vs წ [tsʼ] (абруптивная)',
      explanation: 'Слитное звонкое «ძ» в «ძველი» (старый) против острого щелчка «წ» в «წვენი» (сок).',
      left: { letter: 'ძ', wordGeo: 'ძველი', ipa: '[dzvɛli]', translitRu: 'дзвэли', translationRu: 'Старый', translationEn: 'Old', audioKey: 'card_28_1', photoKey: 'card_28_1' },
      right: { letter: 'წ', wordGeo: 'წვენი', ipa: '[tsʼvɛni]', translitRu: "ц'вэни", translationRu: 'Сок', translationEn: 'Juice', audioKey: 'mp_tsveni', photoKey: 'mp_tsveni', photoQuery: 'Pomegranate juice glass fresh fruit' }
    },
    {
      id: 'mp-18',
      category: 'Свистящие аффрикаты: ძ vs ც',
      contrastTitle: 'ძ [dz] (звонкая аффриката) vs ც [tsʰ] (придыхательная)',
      explanation: 'Минимальная пара по звонкости и придыханию: «ძმა» (брат) начинается со звонкого [dz], а «ცა» (небо) — с воздушного [tsʰ].',
      left: { letter: 'ძ', wordGeo: 'ძმა', ipa: '[dzmɑ]', translitRu: 'дзма', translationRu: 'Брат', translationEn: 'Brother', audioKey: 'card_28_3', photoKey: 'card_28_3' },
      right: { letter: 'ც', wordGeo: 'ცა', ipa: '[tsʰɑ]', translitRu: 'цʰа', translationRu: 'Небо', translationEn: 'Sky', audioKey: 'card_27_2', photoKey: 'card_27_2' }
    },
    {
      id: 'mp-19',
      category: 'Свистящие: ს vs ც',
      contrastTitle: 'ს [s] (щелевой свистящий) vs ც [tsʰ] (аффриката с выдохом)',
      explanation: 'Плавный свист «ს» в слове «სახლი» (дом) против смычно-щелевого взрыва с выдохом «ც» в слове «ცეცხლი» (огонь).',
      left: { letter: 'ს', wordGeo: 'სახლი', ipa: '[sɑxli]', translitRu: 'сахли', translationRu: 'Дом', translationEn: 'House', audioKey: 'card_18_3', photoKey: 'card_18_3' },
      right: { letter: 'ც', wordGeo: 'ცეცხლი', ipa: '[tsʰɛtsʰxli]', translitRu: 'цʰэцʰхли', translationRu: 'Огонь', translationEn: 'Fire', audioKey: 'card_27_3', photoKey: 'card_27_3' }
    },
    {
      id: 'mp-20',
      category: 'Свистящие: ზ vs ძ',
      contrastTitle: 'ზ [z] (щелевой звонкий) vs ძ [dz] (звонкая аффриката)',
      explanation: 'Не разрывайте «ძ» на два звука, но обязательно делайте смычку кончиком языка: сравните «ზარი» (колокол) и «ძაღლი» (собака).',
      left: { letter: 'ზ', wordGeo: 'ზარი', ipa: '[zɑri]', translitRu: 'зари', translationRu: 'Колокол / Звонок', translationEn: 'Bell', audioKey: 'mp_zari', photoKey: 'mp_zari', photoQuery: 'Bronze church bell belfry Georgia' },
      right: { letter: 'ძ', wordGeo: 'ძაღლი', ipa: '[dzɑɣli]', translitRu: 'дзагхли', translationRu: 'Собака', translationEn: 'Dog', audioKey: 'card_28_4', photoKey: 'card_28_4' }
    },
    {
      id: 'mp-21',
      category: 'Шипящие аффрикаты: ჯ vs ჭ',
      contrastTitle: 'ჯ [dʒ] (звонкая аффриката) vs ჭ [tʃʼ] (абруптивная)',
      explanation: 'Классическая пара за грузинским столом: «ჯამი» (глиняная миска) со звонким [dʒ] и «ჭიქა» (бокал/стакан) с резким щелчком [tʃʼ]!',
      left: { letter: 'ჯ', wordGeo: 'ჯამი', ipa: '[dʒɑmi]', translitRu: 'джами', translationRu: 'Миска / Чаша', translationEn: 'Clay bowl', audioKey: 'card_32_3', photoKey: 'card_32_3' },
      right: { letter: 'ჭ', wordGeo: 'ჭიქა', ipa: '[tʃʼikʰɑ]', translitRu: "ч'икʰа", translationRu: 'Стакан / Бокал', translationEn: 'Glass / Cup', audioKey: 'card_30_3', photoKey: 'card_30_3' }
    },
    {
      id: 'mp-22',
      category: 'Шипящие аффрикаты: ჯ vs ჩ',
      contrastTitle: 'ჯ [dʒ] (звонкая) vs ჩ [tʃʰ] (глухая придыхательная)',
      explanation: 'Упругий звонкий старт в слове «ჯვარი» (крест / храм Джвари) и мягкий придыхательный «ჩ» в слове «ჩაი» (грузинский чай).',
      left: { letter: 'ჯ', wordGeo: 'ჯვარი', ipa: '[dʒvɑri]', translitRu: 'джвари', translationRu: 'Крест / Джвари', translationEn: 'Cross', audioKey: 'card_32_4', photoKey: 'card_32_4' },
      right: { letter: 'ჩ', wordGeo: 'ჩაი', ipa: '[tʃʰɑi]', translitRu: 'чʰаи', translationRu: 'Чай', translationEn: 'Tea', audioKey: 'card_26_3', photoKey: 'card_26_3' }
    },
    {
      id: 'mp-23',
      category: 'Шипящие: ჟ vs ჯ',
      contrastTitle: 'ჟ [ʒ] (плавный щелевой) vs ჯ [dʒ] (взрывная аффриката)',
      explanation: 'В слове «ჟოლო» (малина) звук плавно тянется как французское j, а в «ჯოხი» (палка/посох) начинается с плотного смычка языка.',
      left: { letter: 'ჟ', wordGeo: 'ჟოლო', ipa: '[ʒɔlɔ]', translitRu: 'жоло', translationRu: 'Малина', translationEn: 'Raspberry', audioKey: 'card_16_3', photoKey: 'card_16_3' },
      right: { letter: 'ჯ', wordGeo: 'ჯოხი', ipa: '[dʒɔxi]', translitRu: 'джохи', translationRu: 'Посох / Трость', translationEn: 'Staff / Stick', audioKey: 'mp_jokhi', photoKey: 'mp_jokhi', photoQuery: 'Wooden hiking staff mountain trail' }
    },
    {
      id: 'mp-24',
      category: 'Увулярные: ყ vs ღ',
      contrastTitle: 'ყ [qʼ] (глухой гортанный щелчок) vs ღ [ɣ] (мягкий звонкий рокот)',
      explanation: 'Оба звука рождаются глубоко у маленького язычка: «ყურძენი» (виноград) — сухой гортанный щелчок, а «ღვინო» (вино) — певучее звонкое течение!',
      left: { letter: 'ყ', wordGeo: 'ყურძენი', ipa: '[qʼurdzɛni]', translitRu: 'къурдзэни', translationRu: 'Виноград', translationEn: 'Grapes', audioKey: 'card_24_1', photoKey: 'card_24_1' },
      right: { letter: 'ღ', wordGeo: 'ღვინო', ipa: '[ɣvinɔ]', translitRu: 'гхвино', translationRu: 'Вино', translationEn: 'Wine', audioKey: 'card_23_1', photoKey: 'card_23_1' }
    }
  ];
})();

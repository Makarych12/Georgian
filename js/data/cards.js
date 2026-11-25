(function () {
  window.GeorgianApp = window.GeorgianApp || {};

  // Полная база 165 умных карточек (ровно по 5 карточек на каждую из 33 букв Мхедрули)
  window.GeorgianApp.CARDS = [
  {
    "id": "card_01_1",
    "letter": "ა",
    "letterIndex": 1,
    "wordGeo": "აისი",
    "translitLat": "aisi",
    "ipa": "[ɑisi]",
    "translitRu": "аиси",
    "translationRu": "Рассвет",
    "translationEn": "Dawn / Sunrise",
    "difficulty": "Начальный",
    "semanticHint": "Первые лучи солнца над вершинами Кавкасиони ранним утром.",
    "imageUrl": "assets/photos/card_01_1.jpg",
    "imageCaption": "Утренний рассвет над хребтами Большого Кавказа",
    "photoQuery": "Caucasus mountains sunrise Georgia",
    "audioNormal": "assets/audio/card_01_1.mp3",
    "antonym": {
      "wordGeo": "დაისი",
      "translitRu": "даиси",
      "ipa": "[dɑisi]",
      "translationRu": "Закат",
      "translationEn": "Sunset / Dusk",
      "imageUrl": "assets/photos/ant_daisi.jpg",
      "photoQuery": "Sunset mountains Tbilisi Georgia",
      "audioNormal": "assets/audio/ant_daisi.mp3"
    },
    "examples": [
      {
        "geo": "მთაში ლამაზი აისია.",
        "gloss": "მთაში (в горах) · ლამაზი (красивый) · აისია (рассвет есть)",
        "ru": "В горах красивый рассвет.",
        "audio": "assets/audio/card_01_1_ex1.mp3"
      },
      {
        "geo": "აისი მშვიდი და ნათელია.",
        "gloss": "აისი (рассвет) · მშვიდი (тихий) · და (и) · ნათელია (светлый есть)",
        "ru": "Рассвет тихий и светлый.",
        "audio": "assets/audio/card_01_1_ex2.mp3"
      },
      {
        "geo": "აისი ზღვაზე იწყება.",
        "gloss": "აისი (рассвет) · ზღვაზე (над морем) · იწყება (начинается)",
        "ru": "Рассвет начинается над морем.",
        "audio": "assets/audio/card_01_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: აის- · Мн. ч.: აისები. Короткое певучее слово почти целиком из гласных (ა-ი-ს-ი).",
    "culturalNote": "Пара «აისი — დაისი» звучит как музыкальная рифма. «Даиси» («Сумерки/Закат») — знаменитая классическая грузинская опера композитора Захария Палиашвили (1923).",
    "category": "Природа",
    "articulationTip": "Открытый звук «ა» звучит свободно и протяжно, плавно переходя в «ი»."
  },
  {
    "id": "card_01_2",
    "letter": "ა",
    "letterIndex": 1,
    "wordGeo": "ახალი",
    "translitLat": "akhali",
    "ipa": "[ɑxɑli]",
    "translitRu": "ахали",
    "translationRu": "Новый / Свежий",
    "translationEn": "New / Fresh",
    "difficulty": "Начальный",
    "semanticHint": "Встречается в названиях городов Ахалцихе («Новая крепость») и Ахалкалаки («Новый город»).",
    "imageUrl": "assets/photos/card_01_2.jpg",
    "imageCaption": "Современная архитектура Моста Мира на фоне Тбилиси",
    "photoQuery": "Bridge of Peace Tbilisi Georgia",
    "audioNormal": "assets/audio/card_01_2.mp3",
    "antonym": {
      "wordGeo": "ძველი",
      "translitRu": "дзвели",
      "ipa": "[dzvɛli]",
      "translationRu": "Старый / Старинный",
      "translationEn": "Old / Ancient",
      "imageUrl": "assets/photos/card_28_1.jpg",
      "photoQuery": "Old Tbilisi balconies architecture",
      "audioNormal": "assets/audio/card_28_1.mp3"
    },
    "examples": [
      {
        "geo": "ეს ახალი სახლია.",
        "gloss": "ეს (это) · ახალი (новый) · სახლია (дом есть)",
        "ru": "Это новый дом.",
        "audio": "assets/audio/card_01_2_ex1.mp3"
      },
      {
        "geo": "გილოცავთ ახალ წელს!",
        "gloss": "გილოცავთ (поздравляем) · ახალ (с новым) · წელს (годом)",
        "ru": "Поздравляем с Новым годом!",
        "audio": "assets/audio/card_01_2_ex2.mp3"
      },
      {
        "geo": "ახალი პური თბილია.",
        "gloss": "ახალი (свежий) · პური (хлеб) · თბილია (тёплый есть)",
        "ru": "Свежий хлеб — тёплый.",
        "audio": "assets/audio/card_01_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Прилагательное с усекаемой основой: ახალ- (в косвенных падежах: ახალ წელს). Две открытые гласные «ა».",
    "culturalNote": "Корень «ახალ-» легко узнать на карте Грузии: Ахалцихе — «Новая крепость», Ахалкалаки — «Новый город», Ахашени — «Новостройка».",
    "category": "Прилагательные",
    "articulationTip": "Две открытые гласные «ა» обрамляют упругий увулярный «ხ»: [ɑ-xɑ-li]."
  },
  {
    "id": "card_01_3",
    "letter": "ა",
    "letterIndex": 1,
    "wordGeo": "აივანი",
    "translitLat": "aivani",
    "ipa": "[ɑivɑni]",
    "translitRu": "аивани",
    "translationRu": "Балкон / Веранда",
    "translationEn": "Balcony / Veranda",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Начальный «ა» плавно перетекает в «ი», образуя певучий дифтонгоид [ɑi].",
    "semanticHint": "Ажурная деревянная резная терраса, нависающая над улочками Старого Тбилиси.",
    "imageUrl": "assets/photos/card_01_3.jpg",
    "imageCaption": "Резной деревянный балкон традиционного дома в Тбилиси",
    "photoQuery": "Tbilisi carved wooden balcony architecture",
    "audioNormal": "assets/audio/card_01_3.mp3",
    "antonym": {
      "wordGeo": "სარდაფი",
      "translitRu": "сардапʰи",
      "ipa": "[sɑrdɑpʰi]",
      "translationRu": "Подвал / Погреб",
      "translationEn": "Basement / Cellar",
      "imageUrl": "assets/photos/ant_sardapi.jpg",
      "photoQuery": "Old brick wine cellar basement arch",
      "audioNormal": "assets/audio/ant_sardapi.mp3"
    },
    "examples": [
      {
        "geo": "ჩვენს სახლს ხის აივანი აქვს.",
        "gloss": "ჩვენს სახლს (у нашего дома) · ხის (деревянный) · აივანი (балкон) · აქვს (есть)",
        "ru": "У нашего дома деревянный балкон.",
        "audio": "assets/audio/card_01_3_ex1.mp3"
      },
      {
        "geo": "დილით აივანზე ყავას ვსვამ.",
        "gloss": "დილით (утром) · აივანზე (на балконе) · ყავას (кофе) · ვსვამ (я пью)",
        "ru": "Утром я пью кофе на балконе.",
        "audio": "assets/audio/card_01_3_ex2.mp3"
      },
      {
        "geo": "აივნიდან მთაწმინდა ჩანს.",
        "gloss": "აივნიდან (с балкона) · მთაწმინდა (Мтацминда) · ჩანს (видна)",
        "ru": "С балкона видна гора Мтацминда.",
        "audio": "assets/audio/card_01_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: აივან- → აივნ- · Мн. ч.: აივნები, исх. п.: აივნიდან («с балкона»).",
    "culturalNote": "Тбилисский резной «აივანი» — символ открытости города: летом на балконах обедают, читают и переговариваются с соседями."
  },
  {
    "id": "card_01_4",
    "letter": "ა",
    "letterIndex": 1,
    "wordGeo": "ასვლა",
    "translitLat": "asvla",
    "ipa": "[ɑsvlɑ]",
    "translitRu": "асвла",
    "translationRu": "Подъём / Восхождение",
    "translationEn": "Going up / Ascent",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Чёткий гласный «ა» открывает звонко-щелевую связку «სვლ-» и завершается открытым «ა».",
    "semanticHint": "Подъём пешком к крепости Нарикала или посадка в вагон фуникулёра.",
    "imageUrl": "assets/photos/card_01_4.jpg",
    "imageCaption": "Каменная лестница подъёма к горному монастырю и крепости",
    "photoQuery": "Stone stairs climb fortress Narikala Georgia",
    "audioNormal": "assets/audio/card_01_4.mp3",
    "antonym": {
      "wordGeo": "ჩასვლა",
      "translitRu": "чʰасвла",
      "ipa": "[tʃʰɑsvlɑ]",
      "translationRu": "Спуск / Выход вниз",
      "translationEn": "Going down / Descent",
      "imageUrl": "assets/photos/ant_chasvla.jpg",
      "photoQuery": "Mountain trail going down valley path",
      "audioNormal": "assets/audio/ant_chasvla.mp3"
    },
    "examples": [
      {
        "geo": "მთაზე ასვლა დილით ჯობია.",
        "gloss": "მთაზე (на гору) · ასვლა (подъём) · დილით (утром) · ჯობია (лучше)",
        "ru": "Подниматься в гору лучше утром.",
        "audio": "assets/audio/card_01_4_ex1.mp3"
      },
      {
        "geo": "ფუნიკულიორით ასვლა სწრაფია.",
        "gloss": "ფუნიკულიორით (на фуникулёре) · ასვლა (подъём) · სწრაფია (быстрый)",
        "ru": "Подъём на фуникулёре очень быстрый.",
        "audio": "assets/audio/card_01_4_ex2.mp3"
      },
      {
        "geo": "ავტობუსში ასვლა წინა კარიდან.",
        "gloss": "ავტობუსში (в автобус) · ასვლა (посадка) · წინა კარიდან (через переднюю дверь)",
        "ru": "Посадка в автобус через переднюю дверь.",
        "audio": "assets/audio/card_01_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Отглагольное существительное (масдар) с пространственной приставкой ა- («вверх»): ასვლა (вверх) ↔ ჩასვლა (вниз).",
    "culturalNote": "Глагольные приставки направления в грузинском работают как компас: ა- (вверх), ჩა- (вниз), შე- (внутрь), გა- (наружу)!"
  },
  {
    "id": "card_01_5",
    "letter": "ა",
    "letterIndex": 1,
    "wordGeo": "ატამი",
    "translitLat": "at'ami",
    "ipa": "[ɑtʼɑmi]",
    "translitRu": "ат'ами",
    "translationRu": "Персик",
    "translationEn": "Peach",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Два открытых звука «ა» разделены сухим безаспиративным щелчком «ტ» [tʼ].",
    "semanticHint": "Сочный бархатистый фрукт, которым славятся летние сады Гурджаани в Кахетии.",
    "imageUrl": "assets/photos/card_01_5.jpg",
    "imageCaption": "Спелые бархатистые персики в летнем фруктовом саду",
    "photoQuery": "Ripe peaches orchard basket summer",
    "audioNormal": "assets/audio/card_01_5.mp3",
    "antonym": {
      "wordGeo": "ქლიავი",
      "translitRu": "кʰлиави",
      "ipa": "[kʰliɑvi]",
      "translationRu": "Слива / Ткемали",
      "translationEn": "Plum",
      "imageUrl": "assets/photos/ant_kliavi.jpg",
      "photoQuery": "Fresh plums tkemali harvest branch",
      "audioNormal": "assets/audio/ant_kliavi.mp3"
    },
    "examples": [
      {
        "geo": "კახური ატამი ძალიან წვნიანია.",
        "gloss": "კახური (кахетинский) · ატამი (персик) · ძალიან (очень) · წვნიანია (сочный)",
        "ru": "Кахетинский персик очень сочный.",
        "audio": "assets/audio/card_01_5_ex1.mp3"
      },
      {
        "geo": "ბაზარში ერთი კილო ატამი ვიყიდე.",
        "gloss": "ბაზარში (на рынке) · ერთი კილო (один килограмм) · ატამი (персиков) · ვიყიდე (я купил)",
        "ru": "На рынке я купил килограмм персиков.",
        "audio": "assets/audio/card_01_5_ex2.mp3"
      },
      {
        "geo": "ზაფხულში თეთრი ატამი მიყვარს.",
        "gloss": "ზაფხულში (летом) · თეთრი (белый) · ატამი (персик) · მიყვარს (люблю)",
        "ru": "Летом я люблю белые персики.",
        "audio": "assets/audio/card_01_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ატამ- → ატმ- · Мн. ч.: ატმები, род. п.: ატმის წვენი («персиковый сок»).",
    "culturalNote": "В июле вдоль трассы в Гурджаани и Телави тянутся целые аллеи корзин с ароматными кахетинскими персиками — «გურჯაანის ატამი»."
  },
  {
    "id": "card_02_1",
    "letter": "ბ",
    "letterIndex": 2,
    "wordGeo": "ბაღი",
    "translitLat": "baghi",
    "ipa": "[bɑɣi]",
    "translitRu": "багхи",
    "translationRu": "Сад",
    "translationEn": "Garden",
    "difficulty": "Начальный",
    "semanticHint": "Зелёный тенистый уголок с деревьями и цветами у подножия крепости Нарикала.",
    "imageUrl": "assets/photos/card_02_1.jpg",
    "imageCaption": "Национальный ботанический сад Грузии в Тбилиси",
    "photoQuery": "Tbilisi Botanical Garden waterfall",
    "audioNormal": "assets/audio/card_02_1.mp3",
    "antonym": {
      "wordGeo": "უდაბნო",
      "translitRu": "удабно",
      "ipa": "[udɑbnɔ]",
      "translationRu": "Пустыня / Полупустыня",
      "translationEn": "Desert",
      "imageUrl": "assets/photos/ant_udabno.jpg",
      "photoQuery": "David Gareja Udabno landscape Georgia",
      "audioNormal": "assets/audio/ant_udabno.mp3"
    },
    "examples": [
      {
        "geo": "ბოტანიკური ბაღი თბილისშია.",
        "gloss": "ბოტანიკური (ботанический) · ბაღი (сад) · თბილისშია (в Тбилиси есть)",
        "ru": "Ботанический сад находится в Тбилиси.",
        "audio": "assets/audio/card_02_1_ex1.mp3"
      },
      {
        "geo": "ბაღში ხეები ყვავის.",
        "gloss": "ბაღში (в саду) · ხეები (деревья) · ყვავის (цветут)",
        "ru": "В саду цветут деревья.",
        "audio": "assets/audio/card_02_1_ex2.mp3"
      },
      {
        "geo": "ბაღში სკამი დგას.",
        "gloss": "ბაღში (в саду) · სკამი (скамейка) · დგას (стоит)",
        "ru": "В саду стоит скамейка.",
        "audio": "assets/audio/card_02_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ბაღ- · Мн. ч.: ბაღები · Местный падеж с послелогом -ში: ბაღში («в саду»).",
    "culturalNote": "Антоним «უდაბნო» (пустыня) подарил название скальному монастырскому комплексу Давид-Гареджи и степям Вашловани на юго-востоке Грузии.",
    "category": "Город",
    "articulationTip": "Звонкое «ბ» произносится плотно губами, а в середине звучит мягкое гортанное «ღ»."
  },
  {
    "id": "card_02_2",
    "letter": "ბ",
    "letterIndex": 2,
    "wordGeo": "ბნელი",
    "translitLat": "bneli",
    "ipa": "[bnɛli]",
    "translitRu": "бнели",
    "translationRu": "Тёмный",
    "translationEn": "Dark",
    "difficulty": "Средний",
    "semanticHint": "Когда солнце скрылось за хребтом и в густом еловом лесу ещё не зажгли фонари.",
    "imageUrl": "assets/photos/card_02_2.jpg",
    "imageCaption": "Густой вечерний хвойный лес в горах Боржоми",
    "photoQuery": "Dark pine forest mountains mist",
    "audioNormal": "assets/audio/card_02_2.mp3",
    "antonym": {
      "wordGeo": "ნათელი",
      "translitRu": "натели",
      "ipa": "[nɑtʰɛli]",
      "translationRu": "Светлый / Ясный",
      "translationEn": "Bright / Light",
      "imageUrl": "assets/photos/card_13_1.jpg",
      "photoQuery": "Sunlit bright forest morning rays",
      "audioNormal": "assets/audio/card_13_1.mp3"
    },
    "examples": [
      {
        "geo": "ღამით ტყე ბნელია.",
        "gloss": "ღამით (ночью) · ტყე (лес) · ბნელია (тёмный есть)",
        "ru": "Ночью лес тёмный.",
        "audio": "assets/audio/card_02_2_ex1.mp3"
      },
      {
        "geo": "ბნელი ღრუბელი მოვიდა.",
        "gloss": "ბნელი (тёмная) · ღრუბელი (туча) · მოვიდა (пришла)",
        "ru": "Пришла тёмная туча.",
        "audio": "assets/audio/card_02_2_ex2.mp3"
      },
      {
        "geo": "ბნელი ოთახი გავანათეთ.",
        "gloss": "ბნელი (тёмную) · ოთახი (комнату) · გავანათეთ (мы осветили)",
        "ru": "Мы осветили тёмную комнату.",
        "audio": "assets/audio/card_02_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Начальное звонкое стечение двух согласных ბნ- [bn] произносится слитно без вставки лишнего гласного.",
    "culturalNote": "Обратите внимание на графику «ბ»: её нижний круг полностью замкнут, в отличие от похожей буквы «ხ» (х), раскрытой справа.",
    "category": "Прилагательные",
    "articulationTip": "Произнесите слитно звонкую пару «ბნ-» без вставки гласного призвука между ними."
  },
  {
    "id": "card_02_3",
    "letter": "ბ",
    "letterIndex": 2,
    "wordGeo": "ბაზარი",
    "translitLat": "bazari",
    "ipa": "[bɑzɑri]",
    "translitRu": "базари",
    "translationRu": "Рынок / Базар",
    "translationEn": "Market / Bazaar",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Звонкие «ბ», «ზ» и раскатистый «რ» делают слово ярким и полнозвучным.",
    "semanticHint": "Шумные ряды со свежим сулугуни, зеленью тархуна, чурчхелой и специями.",
    "imageUrl": "assets/photos/card_02_3.jpg",
    "imageCaption": "Фермерский продуктовый рынок со свежими овощами и сырами",
    "photoQuery": "Farmers market vegetables fruit stalls Georgia",
    "audioNormal": "assets/audio/card_02_3.mp3",
    "antonym": {
      "wordGeo": "სუპერმარკეტი",
      "translitRu": "sup'ermark'et'i",
      "ipa": "[supʼɛrmɑrkʼɛtʼi]",
      "translationRu": "Супермаркет",
      "translationEn": "Supermarket",
      "imageUrl": "assets/photos/ant_supermarketi.jpg",
      "photoQuery": "Modern supermarket grocery aisle interior",
      "audioNormal": "assets/audio/ant_supermarketi.mp3"
    },
    "examples": [
      {
        "geo": "დილით ბაზარში ახალი ყველი ვიყიდეთ.",
        "gloss": "დილით (утром) · ბაზარში (на рынке) · ახალი ყველი (свежий сыр) · ვიყიდეთ (мы купили)",
        "ru": "Утром на рынке мы купили свежий сыр.",
        "audio": "assets/audio/card_02_3_ex1.mp3"
      },
      {
        "geo": "თელავის ბაზარი ძალიან ფერადია.",
        "gloss": "თელავის (Телавский) · ბაზარი (рынок) · ძალიან (очень) · ფერადია (красочный)",
        "ru": "Рынок в Телави очень колоритный.",
        "audio": "assets/audio/card_02_3_ex2.mp3"
      },
      {
        "geo": "სად არის უახლოესი ბაზარი?",
        "gloss": "სად არის (где находится) · უახლოესი (ближайший) · ბაზარი (рынок)?",
        "ru": "Где находится ближайший рынок?",
        "audio": "assets/audio/card_02_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ბაზარ- → ბაზრ- · Мн. ч.: ბაზრები, но с послелогом -ში гласная сохраняется: ბაზარში.",
    "culturalNote": "Дезертирский рынок в Тбилиси, зелёный базар в Кутаиси и рынок в Телави — лучшие места для живой разговорной практики грузинского!"
  },
  {
    "id": "card_02_4",
    "letter": "ბ",
    "letterIndex": 2,
    "wordGeo": "ბედნიერი",
    "translitLat": "bednieri",
    "ipa": "[bɛdniɛri]",
    "translitRu": "бэдниэри",
    "translationRu": "Счастливый",
    "translationEn": "Happy",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "Плотное «ბ» в начале и чёткая звонкая связка «დნ-» в середине слова.",
    "semanticHint": "Радостное состояние души и главное пожелание на свадьбах и днях рождения.",
    "imageUrl": "assets/photos/card_02_4.jpg",
    "imageCaption": "Радостная встреча друзей на солнечной террасе в горах",
    "photoQuery": "Happy friends smiling outdoor mountain terrace",
    "audioNormal": "assets/audio/card_02_4.mp3",
    "antonym": {
      "wordGeo": "სევდიანი",
      "translitRu": "сэвдиани",
      "ipa": "[sɛvdiɑni]",
      "translationRu": "Грустный / Печальный",
      "translationEn": "Sad / Melancholic",
      "imageUrl": "assets/photos/card_18_5.jpg",
      "photoQuery": "Autumn rain window melancholy mood",
      "audioNormal": "assets/audio/card_18_5.mp3"
    },
    "examples": [
      {
        "geo": "დღეს ძალიან ბედნიერი ვარ!",
        "gloss": "დღეს (сегодня) · ძალიან (очень) · ბედნიერი (счастливый) · ვარ (я есть)",
        "ru": "Сегодня я очень счастлив!",
        "audio": "assets/audio/card_02_4_ex1.mp3"
      },
      {
        "geo": "იყავით მუდამ ბედნიერი!",
        "gloss": "იყავით (будьте) · მუდამ (всегда) · ბედნიერი (счастливы)",
        "ru": "Будьте всегда счастливы!",
        "audio": "assets/audio/card_02_4_ex2.mp3"
      },
      {
        "geo": "ბედნიერი მგზავრობა!",
        "gloss": "ბედნიერი (счастливого) · მგზავრობა (путешествия)",
        "ru": "Счастливого путешествия!",
        "audio": "assets/audio/card_02_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Образовано от корня ბედი («судьба, удача») → ბედნიერი («счастливый») → ბედნიერება («счастье»).",
    "culturalNote": "Буквальный смысл слова «ბედნიერი» — «наделённый доброй судьбой» (от слова ბედი — судьба)."
  },
  {
    "id": "card_02_5",
    "letter": "ბ",
    "letterIndex": 2,
    "wordGeo": "ბილეთი",
    "translitLat": "bileti",
    "ipa": "[bilɛtʰi]",
    "translitRu": "билэтʰи",
    "translationRu": "Билет",
    "translationEn": "Ticket",
    "difficulty": "Начальный",
    "category": "Транспорт",
    "articulationTip": "Начинается со звонкого «ბ», а заканчивается мягким придыхательным «თ» [tʰ].",
    "semanticHint": "Пропуск на поезд Тбилиси—Батуми, канатную дорогу Нарикала или спектакль театра Габриадзе.",
    "imageUrl": "assets/photos/card_02_5.jpg",
    "imageCaption": "Железнодорожный перрон и современный поезд на вокзале",
    "photoQuery": "Modern passenger train station platform Georgia",
    "audioNormal": "assets/audio/card_02_5.mp3",
    "antonym": {
      "wordGeo": "უბილეთო",
      "translitRu": "убилэтʰო",
      "ipa": "[ubilɛtʰɔ]",
      "translationRu": "Безбилетный",
      "translationEn": "Ticketless",
      "imageUrl": "assets/photos/ant_ubileto.jpg",
      "photoQuery": "Empty turnstile metro gate station",
      "audioNormal": "assets/audio/ant_ubileto.mp3"
    },
    "examples": [
      {
        "geo": "მატარებლის ორი ბილეთი მინდა.",
        "gloss": "მატარებლის (на поезд) · ორი (два) · ბილეთი (билета) · მინდა (хочу)",
        "ru": "Мне нужно два билета на поезд.",
        "audio": "assets/audio/card_02_5_ex1.mp3"
      },
      {
        "geo": "ბილეთი ონლაინ ვიყიდე.",
        "gloss": "ბილეთი (билет) · ონლაინ (онлайн) · ვიყიდე (я купил)",
        "ru": "Я купил билет онлайн.",
        "audio": "assets/audio/card_02_5_ex2.mp3"
      },
      {
        "geo": "რა ღირს საბაგიროს ბილეთი?",
        "gloss": "რა ღირს (сколько стоит) · საბაგიროს (канатной дороги) · ბილეთი (билет)?",
        "ru": "Сколько стоит билет на канатную дорогу?",
        "audio": "assets/audio/card_02_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ბილეთ- · Мн. ч.: ბილეთები. Обратите внимание на приставку отсутствия უ-...-ო в антониме უბილეთო.",
    "culturalNote": "В Тбилиси для проезда на метро, автобусах и канатке действует единая транспортная карта «Metromoney» или оплата банковской картой."
  },
  {
    "id": "card_03_1",
    "letter": "გ",
    "letterIndex": 3,
    "wordGeo": "გზა",
    "translitLat": "gza",
    "ipa": "[ɡzɑ]",
    "translitRu": "гза",
    "translationRu": "Дорога / Путь",
    "translationEn": "Road / Way",
    "difficulty": "Начальный",
    "semanticHint": "Серпантин через Крестовый перевал, ведущий путешественников к Казбеку.",
    "imageUrl": "assets/photos/card_03_1.jpg",
    "imageCaption": "Горный серпантин Военно-Грузинской дороги у Гудаури",
    "photoQuery": "Georgian Military Road mountains Caucasus",
    "audioNormal": "assets/audio/card_03_1.mp3",
    "antonym": {
      "wordGeo": "ჩიხი",
      "translitRu": "чихи",
      "ipa": "[tʃʰixi]",
      "translationRu": "Тупик",
      "translationEn": "Dead end / Blind alley",
      "imageUrl": "assets/photos/ant_chikhi.jpg",
      "photoQuery": "Narrow stone alley wall old town",
      "audioNormal": "assets/audio/ant_chikhi.mp3"
    },
    "examples": [
      {
        "geo": "გზა მშვიდობისა!",
        "gloss": "გზა (дорога) · მშვიდობისა (мира / благополучия)",
        "ru": "Счастливого пути! (букв. Дороги мира!)",
        "audio": "assets/audio/card_03_1_ex1.mp3"
      },
      {
        "geo": "მთის გზა გრძელია.",
        "gloss": "მთის (горная) · გზა (дорога) · გრძელია (длинная есть)",
        "ru": "Горная дорога длинная.",
        "audio": "assets/audio/card_03_1_ex2.mp3"
      },
      {
        "geo": "ეს გზა ბათუმში მიდის.",
        "gloss": "ეს (эта) · გზა (дорога) · ბათუმში (в Батуми) · მიდის (ведёт)",
        "ru": "Эта дорога ведёт в Батуми.",
        "audio": "assets/audio/card_03_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: გზ- · Мн. ч.: გზები (прибавление -ები вытесняет конечное -ა). Звонкая пара გზ- в начале слова.",
    "culturalNote": "Пожелание «გზა მშვიდობისა!» (Гза мшвидобиса) вы услышите повсюду в Грузии — от таксистов в Тбилиси до хозяев гестхаусов в горах.",
    "category": "Транспорт",
    "articulationTip": "Звонкие «გ» и «ზ» сливаются в единый упругий зачин слова [ɡzɑ]."
  },
  {
    "id": "card_03_2",
    "letter": "გ",
    "letterIndex": 3,
    "wordGeo": "გული",
    "translitLat": "guli",
    "ipa": "[ɡuli]",
    "translitRu": "гули",
    "translationRu": "Сердце / Душа",
    "translationEn": "Heart",
    "difficulty": "Начальный",
    "semanticHint": "Центр искренности, тепла и эмоций в десятках грузинских выражений.",
    "imageUrl": "assets/photos/card_03_2.jpg",
    "imageCaption": "Тёплое ремесленное гостеприимство и ручная керамика Грузии",
    "photoQuery": "Georgian pottery traditional craft hands",
    "audioNormal": "assets/audio/card_03_2.mp3",
    "antonym": {
      "wordGeo": "გონება",
      "translitRu": "гонеба",
      "ipa": "[ɡɔnɛbɑ]",
      "translationRu": "Разум / Рассудок",
      "translationEn": "Mind / Reason",
      "imageUrl": "assets/photos/ant_goneba.jpg",
      "photoQuery": "Ancient Georgian manuscript book museum",
      "audioNormal": "assets/audio/ant_goneba.mp3"
    },
    "examples": [
      {
        "geo": "მთელი გულით გილოცავ!",
        "gloss": "მთელი (всем) · გულით (сердцем) · გილოცავ (поздравляю тебя)",
        "ru": "Поздравляю от всего сердца!",
        "audio": "assets/audio/card_03_2_ex1.mp3"
      },
      {
        "geo": "მას კეთილი გული აქვს.",
        "gloss": "მას (у него/неё) · კეთილი (доброе) · გული (сердце) · აქვს (имеется)",
        "ru": "У него доброе сердце.",
        "audio": "assets/audio/card_03_2_ex2.mp3"
      },
      {
        "geo": "გული სიხარულით მევსება.",
        "gloss": "გული (сердце) · სიხარულით (радостью) · მევსება (наполняется)",
        "ru": "Сердце наполняется радостью.",
        "audio": "assets/audio/card_03_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: გულ- · Мн. ч.: გულები · Творительный падеж: გულით («сердцем»).",
    "culturalNote": "Грузинский язык «мыслит сердцем»: ერთგული (верный = «односердечный»), გულუხვი (щедрый = «обильный сердцем»), სიხარული и გულწრფელი (искренний).",
    "category": "Эмоции",
    "articulationTip": "Чистый взрывной звонкий «გ» перед глубоким «უ» и мягким «ლ»."
  },
  {
    "id": "card_03_3",
    "letter": "გ",
    "letterIndex": 3,
    "wordGeo": "გემრიელი",
    "translitLat": "gemrieli",
    "ipa": "[ɡɛmriɛli]",
    "translitRu": "гэмриэли",
    "translationRu": "Вкусный",
    "translationEn": "Delicious / Tasty",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Звонкий «გ» перед чистым «ე» и сонорная связка «მრ-» в середине слова.",
    "semanticHint": "Первое слово благодарности повару после горячих хинкали или хачапури!",
    "imageUrl": "assets/photos/card_03_3.jpg",
    "imageCaption": "Традиционный аджарский хачапури и грузинские блюда на столе",
    "photoQuery": "Khachapuri Georgian food table traditional",
    "audioNormal": "assets/audio/card_03_3.mp3",
    "antonym": {
      "wordGeo": "უგემური",
      "translitRu": "угэмури",
      "ipa": "[uɡɛmuri]",
      "translationRu": "Невкусный / Пресный",
      "translationEn": "Tasteless / Bland",
      "imageUrl": "assets/photos/ant_ugemuri.jpg",
      "photoQuery": "Plain dry crackers empty plate",
      "audioNormal": "assets/audio/ant_ugemuri.mp3"
    },
    "examples": [
      {
        "geo": "ხაჭაპური ძალიან გემრიელია!",
        "gloss": "ხაჭაპური (хачапури) · ძალიან (очень) · გემრიელია (вкусный есть)",
        "ru": "Хачапури невероятно вкусный!",
        "audio": "assets/audio/card_03_3_ex1.mp3"
      },
      {
        "geo": "გემრიელად მიირთვით!",
        "gloss": "გემრიელად (вкусно) · მიირთვით (отведайте)",
        "ru": "Приятного аппетита!",
        "audio": "assets/audio/card_03_3_ex2.mp3"
      },
      {
        "geo": "ბებია გემრიელ სადილს ამზადებს.",
        "gloss": "ბებია (бабушка) · გემრიელ (вкусный) · სადილს (обед) · ამზადებს (готовит)",
        "ru": "Бабушка готовит вкусный обед.",
        "audio": "assets/audio/card_03_3_ex3.mp3"
      }
    ],
    "grammarMarker": "От корня გემო («вкус») → გემრიელი («вкусный») ↔ უგემური («безвкусный»). Наречие: გემრიელად.",
    "culturalNote": "Фразу официанта «გემრიელად მიირთვით!» (Гемриелад мииртвит — «Приятного аппетита!») вы услышите в каждом грузинском кафе и духане."
  },
  {
    "id": "card_03_4",
    "letter": "გ",
    "letterIndex": 3,
    "wordGeo": "გასვლა",
    "translitLat": "gasvla",
    "ipa": "[ɡɑsvlɑ]",
    "translitRu": "гасвла",
    "translationRu": "Выход / Отправление",
    "translationEn": "Exit / Departure",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Чёткий звонкий «გ» перед «ა» и плавный трёхсогласный переход «სვლ-».",
    "semanticHint": "Надпись «გასასვლელი» над дверями метро и аэропорта, а также отправление поезда.",
    "imageUrl": "assets/photos/card_03_4.jpg",
    "imageCaption": "Арка выхода из исторического каменного двора на солнечную улицу",
    "photoQuery": "Archway exit sunlit street stone gate",
    "audioNormal": "assets/audio/card_03_4.mp3",
    "antonym": {
      "wordGeo": "შესვლა",
      "translitRu": "шэсвла",
      "ipa": "[ʃɛsvlɑ]",
      "translationRu": "Вход",
      "translationEn": "Entrance / Entry",
      "imageUrl": "assets/photos/card_25_4.jpg",
      "photoQuery": "Ornate entrance doorway historic building Tbilisi",
      "audioNormal": "assets/audio/card_25_4.mp3"
    },
    "examples": [
      {
        "geo": "მატარებლის გასვლა რვა საათზეა.",
        "gloss": "მატარებლის (поезда) · გასვლა (отправление) · რვა საათზეა (в восемь часов)",
        "ru": "Отправление поезда в восемь часов.",
        "audio": "assets/audio/card_03_4_ex1.mp3"
      },
      {
        "geo": "სად არის მეტროდან გასასვლელი?",
        "gloss": "სად არის (где находится) · მეტროდან (из метро) · გასასვლელი (выход)?",
        "ru": "Где выход из метро?",
        "audio": "assets/audio/card_03_4_ex2.mp3"
      },
      {
        "geo": "საღამოს ქალაქში გასვლა გვინდა.",
        "gloss": "საღამოს (вечером) · ქალაქში (в город) · გასვლა (выйти) · გვინდა (мы хотим)",
        "ru": "Вечером мы хотим выбраться в город.",
        "audio": "assets/audio/card_03_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Приставка გა- означает движение наружу: გასვლა («выход/выезд») → გასასვლელი («место выхода, табличка Exit»).",
    "culturalNote": "На всех станциях Тбилисского метрополитена запомните пару табличек: შესასვლელი (Вход) и გასასვლელი (Выход)!"
  },
  {
    "id": "card_03_5",
    "letter": "გ",
    "letterIndex": 3,
    "wordGeo": "გრილი",
    "translitLat": "grili",
    "ipa": "[ɡrili]",
    "translitRu": "грили",
    "translationRu": "Прохладный / Свежий",
    "translationEn": "Cool / Refreshing",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Звонкое сочетание «გრ-» с раскатистым «რ» и мягким «ლ» звучит по-настоящему освежающе.",
    "semanticHint": "Приятная вечерняя свежесть в горном ущелье после жаркого летнего полдня.",
    "imageUrl": "assets/photos/card_03_5.jpg",
    "imageCaption": "Прохладный тенистый каньон с изумрудной водой и мхом",
    "photoQuery": "Green canyon cool stream moss Georgia",
    "audioNormal": "assets/audio/card_03_5.mp3",
    "antonym": {
      "wordGeo": "ცხელი",
      "translitRu": "цʰхэли",
      "ipa": "[tsʰxɛli]",
      "translationRu": "Горячий / Жаркий",
      "translationEn": "Hot",
      "imageUrl": "assets/photos/card_27_4.jpg",
      "photoQuery": "Hot baking shotis puri tone oven fire",
      "audioNormal": "assets/audio/card_27_4.mp3"
    },
    "examples": [
      {
        "geo": "საღამოს გრილი ნიავი უბერავს.",
        "gloss": "საღამოს (вечером) · გრილი (прохладный) · ნიავი (ветерок) · უბერავს (веет)",
        "ru": "Вечером веет прохладный ветерок.",
        "audio": "assets/audio/card_03_5_ex1.mp3"
      },
      {
        "geo": "ტყეში ყოველთვის გრილი ჰაერია.",
        "gloss": "ტყეში (в лесу) · ყოველთვის (всегда) · გრილი (прохладный) · ჰაერია (воздух)",
        "ru": "В лесу всегда прохладный воздух.",
        "audio": "assets/audio/card_03_5_ex2.mp3"
      },
      {
        "geo": "დღეს გრილი ამინდია.",
        "gloss": "დღეს (сегодня) · გრილი (прохладная) · ამინდია (погода есть)",
        "ru": "Сегодня свежая прохладная погода.",
        "audio": "assets/audio/card_03_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Градация температур по-грузински: ყინულივით (ледяной) → ცივი (холодный) → გრილი (прохладный) → თბილი (тёплый) → ცხელი (горячий)!",
    "culturalNote": "Летом тбилисцы уезжают за «გრილი ჰაერი» (прохладным воздухом) в Коджори, Цхнети и Манглиси всего в получасе езды над столицей."
  },
  {
    "id": "card_04_1",
    "letter": "დ",
    "letterIndex": 4,
    "wordGeo": "დიდი",
    "translitLat": "didi",
    "ipa": "[didi]",
    "translitRu": "диди",
    "translationRu": "Большой / Великий",
    "translationEn": "Big / Great",
    "difficulty": "Начальный",
    "semanticHint": "Первое слово во фразе «Большое спасибо!» — დიდი მადლობა!",
    "imageUrl": "assets/photos/card_04_1.jpg",
    "imageCaption": "Величественный массив горы Казбек (Мкинварцвери, 5054 м)",
    "photoQuery": "Mount Kazbek Gergeti Trinity Georgia",
    "audioNormal": "assets/audio/card_04_1.mp3",
    "antonym": {
      "wordGeo": "პატარა",
      "translitRu": "п'ат'ара",
      "ipa": "[pʼɑtʼɑrɑ]",
      "translationRu": "Маленький",
      "translationEn": "Small / Little",
      "imageUrl": "assets/photos/card_15_1.jpg",
      "photoQuery": "Small mountain village chapel Georgia",
      "audioNormal": "assets/audio/card_15_1.mp3"
    },
    "examples": [
      {
        "geo": "დიდი მადლობა!",
        "gloss": "დიდი (большое) · მადლობა (спасибо / благодарность)",
        "ru": "Большое спасибо!",
        "audio": "assets/audio/card_04_1_ex1.mp3"
      },
      {
        "geo": "კავკასიონი დიდი მთაა.",
        "gloss": "კავკასიონი (Кавкасиони) · დიდი (большая) · მთაა (гора есть)",
        "ru": "Кавказ — большая гора (горная цепь).",
        "audio": "assets/audio/card_04_1_ex2.mp3"
      },
      {
        "geo": "თბილისი დიდი ქალაქია.",
        "gloss": "თბილისი (Тбилиси) · დიდი (большой) · ქალაქია (город есть)",
        "ru": "Тбилиси — большой город.",
        "audio": "assets/audio/card_04_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: დიდ- · Неизменяемое перед существительным в им. п.: დიდი ქალაქი (большой город). Обе буквы «დ» в слове выделяются двумя ушками сверху.",
    "culturalNote": "В грузинской истории эпитет «დიდი» носит царь Давид IV Строитель и эпоха Золотого века; а в быту «დიდი მადლობა» открывает любые двери.",
    "category": "Прилагательные",
    "articulationTip": "Два чётких звонких зубных «დ»: кончик языка упирается в верхние зубы."
  },
  {
    "id": "card_04_2",
    "letter": "დ",
    "letterIndex": 4,
    "wordGeo": "დღე",
    "translitLat": "dghe",
    "ipa": "[dɣɛ]",
    "translitRu": "дгхе",
    "translationRu": "День",
    "translationEn": "Day",
    "difficulty": "Средний",
    "semanticHint": "Светлое время суток; корень приветствия «Добрый день!» — შუადღე მშვიდობისა.",
    "imageUrl": "assets/photos/card_04_2.jpg",
    "imageCaption": "Солнечный день над черепичными крышами Сигнахи в Кахетии",
    "photoQuery": "Sighnaghi Kakheti sunny day Georgia",
    "audioNormal": "assets/audio/card_04_2.mp3",
    "antonym": {
      "wordGeo": "ღამე",
      "translitRu": "гхаме",
      "ipa": "[ɣɑmɛ]",
      "translationRu": "Ночь",
      "translationEn": "Night",
      "imageUrl": "assets/photos/card_23_2.jpg",
      "photoQuery": "Tbilisi night lights Narikala",
      "audioNormal": "assets/audio/card_23_2.mp3"
    },
    "examples": [
      {
        "geo": "დღეს მზიანი დღეა.",
        "gloss": "დღეს (сегодня) · მზიანი (солнечный) · დღეა (день есть)",
        "ru": "Сегодня солнечный день.",
        "audio": "assets/audio/card_04_2_ex1.mp3"
      },
      {
        "geo": "დღე და ღამე.",
        "gloss": "დღე (день) · და (и) · ღამე (ночь)",
        "ru": "День и ночь.",
        "audio": "assets/audio/card_04_2_ex2.mp3"
      },
      {
        "geo": "კარგი დღე გქონდეთ!",
        "gloss": "კარგი (хорошего) · დღე (дня) · გქონდეთ (пусть будет у вас)",
        "ru": "Хорошего вам дня!",
        "audio": "assets/audio/card_04_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: დღე- · Мн. ч.: დღეები (корневое -ე сохраняется перед -ები!). Слитное сочетание звонких დღ- [dɣ].",
    "culturalNote": "От слова «დღე» образованы и «დღეს» (сегодня), и «დღესასწაული» (праздник — буквально «чудесный, знаменательный день»).",
    "category": "Природа",
    "articulationTip": "Соедините звонкий зубной «დ» и мягкий велярный «ღ» в один плавный слог [dɣɛ]."
  },
  {
    "id": "card_04_3",
    "letter": "დ",
    "letterIndex": 4,
    "wordGeo": "დილა",
    "translitLat": "dila",
    "ipa": "[dilɑ]",
    "translitRu": "дила",
    "translationRu": "Утро",
    "translationEn": "Morning",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Плотный звонкий зубной «დ» перед высоким «ი» и певучим «ლა».",
    "semanticHint": "Первое слово ежедневного приветствия «Доброе утро!» — დილა მშვიდობისა!",
    "imageUrl": "assets/photos/card_04_3.jpg",
    "imageCaption": "Утренний туман и первые лучи солнца над долиной в Грузии",
    "photoQuery": "Morning mist valley sunrise Caucasus Georgia",
    "audioNormal": "assets/audio/card_04_3.mp3",
    "antonym": {
      "wordGeo": "საღამო",
      "translitRu": "сагхамо",
      "ipa": "[sɑɣɑmɔ]",
      "translationRu": "Вечер",
      "translationEn": "Evening",
      "imageUrl": "assets/photos/ant_saghamo.jpg",
      "photoQuery": "Warm evening twilight Tbilisi river lights",
      "audioNormal": "assets/audio/ant_saghamo.mp3"
    },
    "examples": [
      {
        "geo": "დილა მშვიდობისა!",
        "gloss": "დილა (утро) · მშვიდობისა (мира / доброе)",
        "ru": "Доброе утро!",
        "audio": "assets/audio/card_04_3_ex1.mp3"
      },
      {
        "geo": "დილით ადრე ვდგები.",
        "gloss": "დილით (утром) · ადრე (рано) · ვდგები (я встаю)",
        "ru": "Утром я встаю рано.",
        "audio": "assets/audio/card_04_3_ex2.mp3"
      },
      {
        "geo": "დილიდან საღამომდე ვმუშაობ.",
        "gloss": "დილიდან (с утра) · საღამომდე (до вечера) · ვმუშაობ (я работаю)",
        "ru": "Я работаю с утра до вечера.",
        "audio": "assets/audio/card_04_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: დილ- · Твор. п. времени: დილით («утром»), отправной п.: დილიდან («с утра»).",
    "culturalNote": "Все грузинские приветствия времени суток желают мира (მშვიდობა): დილა მშვიდობისა, შუადღე მშვიდობისა, საღამო მშვიდობისა!"
  },
  {
    "id": "card_04_4",
    "letter": "დ",
    "letterIndex": 4,
    "wordGeo": "დაბალი",
    "translitLat": "dabali",
    "ipa": "[dɑbɑli]",
    "translitRu": "дабали",
    "translationRu": "Низкий / Невысокий",
    "translationEn": "Low / Short",
    "difficulty": "Начальный",
    "category": "Прилагательные",
    "articulationTip": "Звонкие взрывные «დ» и «ბ» разделены чистыми открытыми гласными «ა».",
    "semanticHint": "Невысокий традиционный столик «табла» в старом доме или низменная долина Риони.",
    "imageUrl": "assets/photos/card_04_4.jpg",
    "imageCaption": "Холмистая зелёная низменность и невысокие сельские домики",
    "photoQuery": "Lowland green hills rural house Georgia",
    "audioNormal": "assets/audio/card_04_4.mp3",
    "antonym": {
      "wordGeo": "მაღალი",
      "translitRu": "maghali",
      "ipa": "[mɑɣɑli]",
      "translationRu": "Высокий",
      "translationEn": "High / Tall",
      "imageUrl": "assets/photos/card_12_2.jpg",
      "photoQuery": "High towers Ushguli Svaneti mountains",
      "audioNormal": "assets/audio/card_12_2.mp3"
    },
    "examples": [
      {
        "geo": "ოთახში დაბალი მაგიდა დგას.",
        "gloss": "ოთახში (в комнате) · დაბალი (низкий) · მაგიდა (стол) · დგას (стоит)",
        "ru": "В комнате стоит невысокий стол.",
        "audio": "assets/audio/card_04_4_ex1.mp3"
      },
      {
        "geo": "დღეს დაბალი ტემპერატურაა.",
        "gloss": "დღეს (сегодня) · დაბალი (низкая) · ტემპერატურაა (температура)",
        "ru": "Сегодня низкая температура.",
        "audio": "assets/audio/card_04_4_ex2.mp3"
      },
      {
        "geo": "დაბალ ხმაზე საუბრობენ.",
        "gloss": "დაბალ (на тихом/низком) · ხმაზე (голосе) · საუბრობენ (они беседуют)",
        "ru": "Они разговаривают вполголоса.",
        "audio": "assets/audio/card_04_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: დაბალ- → наречие места დაბლა («внизу / вниз») ↔ მაღლა («наверху / вверх»).",
    "culturalNote": "Колхидская низменность по-грузински называется «კოლხეთის დაბლობი» — от знакомого вам корня დაბალი!"
  },
  {
    "id": "card_04_5",
    "letter": "დ",
    "letterIndex": 4,
    "wordGeo": "დგომა",
    "translitLat": "dgoma",
    "ipa": "[dɡɔmɑ]",
    "translitRu": "дгома",
    "translationRu": "Стояние / Стоять",
    "translationEn": "Standing / To stand",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Два звонких взрывных «დგ-» [dɡ] произносятся слитно без паузы перед круглым «ო».",
    "semanticHint": "Ожидание на остановке, стояние древнего храма на утёсе или глагол «стоит» (დგას).",
    "imageUrl": "assets/photos/card_04_5.jpg",
    "imageCaption": "Древний монастырь Джвари, стоящий на вершине скалы над слиянием рек",
    "photoQuery": "Jvari Monastery standing cliff Mtskheta Georgia",
    "audioNormal": "assets/audio/card_04_5.mp3",
    "antonym": {
      "wordGeo": "ჯდომა",
      "translitRu": "дждома",
      "ipa": "[dʒdɔmɑ]",
      "translationRu": "Сидение / Сидеть",
      "translationEn": "Sitting / To sit",
      "imageUrl": "assets/photos/ant_jdoma.jpg",
      "photoQuery": "People sitting park bench shade trees",
      "audioNormal": "assets/audio/ant_jdoma.mp3"
    },
    "examples": [
      {
        "geo": "მცხეთაში ჯვრის მონასტერი მთაზე დგას.",
        "gloss": "მცხეთაში (в Мцхете) · ჯვრის მონასტერი (Джвари) · მთაზე (на горе) · დგას (стоит)",
        "ru": "В Мцхете на горе стоит монастырь Джвари.",
        "audio": "assets/audio/card_04_5_ex1.mp3"
      },
      {
        "geo": "რიგში დგომა არ მიყვარს.",
        "gloss": "რიგში (в очереди) · დგომა (стоять) · არ მიყვარს (не люблю)",
        "ru": "Я не люблю стоять в очереди.",
        "audio": "assets/audio/card_04_5_ex2.mp3"
      },
      {
        "geo": "გაჩერებაზე ავტობუსი დგას.",
        "gloss": "გაჩერებაზე (на остановке) · ავტობუსი (автобус) · დგას (стоит)",
        "ru": "На остановке стоит автобус.",
        "audio": "assets/audio/card_04_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Формы настоящего времени: მე ვდგავარ (я стою), ის დგას (он/предмет стоит). Антоним: მე ვზივარ (я сижу), ის ზის (он сидит).",
    "culturalNote": "В грузинском языке о зданиях, деревьях, мебели и автомобилях говорят «დგას» (стоит), а об одежде и мелких предметах — «დევს» (лежит)."
  },
  {
    "id": "card_05_1",
    "letter": "ე",
    "letterIndex": 5,
    "wordGeo": "ეზო",
    "translitLat": "ezo",
    "ipa": "[ɛzɔ]",
    "translitRu": "эзо",
    "translationRu": "Двор / Дворик",
    "translationEn": "Courtyard / Yard",
    "difficulty": "Начальный",
    "semanticHint": "Сердце старого Тбилиси с винтовой лестницей, бельевыми верёвками и виноградной беседкой.",
    "imageUrl": "assets/photos/card_05_1.jpg",
    "imageCaption": "Уютный традиционный тбилисский дворик с резными галереями",
    "photoQuery": "Old Tbilisi courtyard wooden balcony",
    "audioNormal": "assets/audio/card_05_1.mp3",
    "antonym": {
      "wordGeo": "ქუჩა",
      "translitRu": "кʰуча",
      "ipa": "[kʰutʃʰɑ]",
      "translationRu": "Улица",
      "translationEn": "Street",
      "imageUrl": "assets/photos/ant_kucha.jpg",
      "photoQuery": "Tbilisi street architecture Rustaveli",
      "audioNormal": "assets/audio/ant_kucha.mp3"
    },
    "examples": [
      {
        "geo": "თბილისური ეზო მყუდროა.",
        "gloss": "თბილისური (тбилисский) · ეზო (дворик) · მყუდროა (уютный есть)",
        "ru": "Тбилисский дворик уютный.",
        "audio": "assets/audio/card_05_1_ex1.mp3"
      },
      {
        "geo": "ეზოში ვაზი იზრდება.",
        "gloss": "ეზოში (во дворе) · ვაზი (лоза) · იზრდება (растёт)",
        "ru": "Во дворе растёт виноградная лоза.",
        "audio": "assets/audio/card_05_1_ex2.mp3"
      },
      {
        "geo": "ეზოში სუფთა ჰაერია.",
        "gloss": "ეზოში (во дворе) · სუფთა (чистый) · ჰაერია (воздух есть)",
        "ru": "Во дворе чистый воздух.",
        "audio": "assets/audio/card_05_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ეზო- · Мн. ч.: ეზოები (основы на -ო и -უ не теряют конечный гласный во мн. числе!).",
    "culturalNote": "Феномен «თბილისური ეზო» (тбилисского итальянского дворика) — это целый микромир добрососедства, где соседи вместе пьют кофе и угощают друг друга выпечкой.",
    "category": "Быт",
    "articulationTip": "Начальный «ე» звучит как чистое «э» без йотирования (не «езо», а «эзо»!)."
  },
  {
    "id": "card_05_2",
    "letter": "ე",
    "letterIndex": 5,
    "wordGeo": "ერთი",
    "translitLat": "erti",
    "ipa": "[ɛrtʰi]",
    "translitRu": "эрти",
    "translationRu": "Один / Единый",
    "translationEn": "One / Single",
    "difficulty": "Начальный",
    "semanticHint": "Начало грузинского счёта (ერთი, ორი, სამი...) и основа слова «единство».",
    "imageUrl": "assets/photos/card_05_2.jpg",
    "imageCaption": "Одинокая сторожевая башня на фоне горного ущелья",
    "photoQuery": "Single Svaneti tower Caucasus Georgia",
    "audioNormal": "assets/audio/card_05_2.mp3",
    "antonym": {
      "wordGeo": "ბევრი",
      "translitRu": "беври",
      "ipa": "[bɛvri]",
      "translationRu": "Много",
      "translationEn": "Many / A lot",
      "imageUrl": "assets/photos/ant_bevri.jpg",
      "photoQuery": "Ushguli many towers Svaneti Georgia",
      "audioNormal": "assets/audio/ant_bevri.mp3"
    },
    "examples": [
      {
        "geo": "ძალა ერთობაშია.",
        "gloss": "ძალა (сила) · ერთობაშია (в единстве есть)",
        "ru": "Сила в единстве.",
        "audio": "assets/audio/card_05_2_ex1.mp3"
      },
      {
        "geo": "ერთი ყავა, თუ შეიძლება.",
        "gloss": "ერთი (один) · ყავა (кофе) · თუ შეიძლება (если можно / пожалуйста)",
        "ru": "Один кофе, пожалуйста.",
        "audio": "assets/audio/card_05_2_ex2.mp3"
      },
      {
        "geo": "ერთი ბილეთი მინდა.",
        "gloss": "ერთი (один) · ბილეთი (билет) · მინდა (хочу)",
        "ru": "Мне нужен один билет.",
        "audio": "assets/audio/card_05_2_ex3.mp3"
      }
    ],
    "grammarMarker": "После числительных (и слова ბევრი — много!) существительное в грузинском языке всегда стоит в ЕДИНСТВЕННОМ числе: ბევრი სახლი (много домов).",
    "culturalNote": "«ძალა ერთობაშია» (Дзала эртобашиа — «Сила в единстве») из басни Сулхан-Саба Орбелиани начертано на государственном гербе Грузии.",
    "category": "Быт",
    "articulationTip": "Чистый гласный «ე» в начале, раскатистый «რ» и придыхательный «თ» на конце."
  },
  {
    "id": "card_05_3",
    "letter": "ე",
    "letterIndex": 5,
    "wordGeo": "ენა",
    "translitLat": "ena",
    "ipa": "[ɛnɑ]",
    "translitRu": "эна",
    "translationRu": "Язык / Речь",
    "translationEn": "Language / Tongue",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Начинается с чистого открытого «ე» [ɛ] без призвука «й»!",
    "semanticHint": "Ключевое слово в названии самой нашей цели: «ქართული ენა» — грузинский язык!",
    "imageUrl": "assets/photos/card_05_3.jpg",
    "imageCaption": "Каменный памятник грузинскому алфавиту и древним письменам",
    "photoQuery": "Georgian script monument calligraphy stone",
    "audioNormal": "assets/audio/card_05_3.mp3",
    "antonym": {
      "wordGeo": "დუმილი",
      "translitRu": "думили",
      "ipa": "[dumili]",
      "translationRu": "Молчание / Безмолвие",
      "translationEn": "Silence / Speechlessness",
      "imageUrl": "assets/photos/ant_dumili.jpg",
      "photoQuery": "Calm misty mountain peak silence",
      "audioNormal": "assets/audio/ant_dumili.mp3"
    },
    "examples": [
      {
        "geo": "მე ვსწავლობ ქართულ ენას.",
        "gloss": "მე (я) · ვსწავლობ (изучаю) · ქართულ (грузинский) · ენას (язык)",
        "ru": "Я изучаю грузинский язык.",
        "audio": "assets/audio/card_05_3_ex1.mp3"
      },
      {
        "geo": "ქართული ენა უძველესი და მდიდარია.",
        "gloss": "ქართული ენა (грузинский язык) · უძველესი (древнейший) · და მდიდარია (и богатый)",
        "ru": "Грузинский язык — древнейший и богатый.",
        "audio": "assets/audio/card_05_3_ex2.mp3"
      },
      {
        "geo": "რამდენი ენა იცით?",
        "gloss": "რამდენი (сколько) · ენა (языков) · იცით (вы знаете)?",
        "ru": "Сколько языков вы знаете?",
        "audio": "assets/audio/card_05_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ენ- · Мн. ч.: ენები («языки»). «Родной язык» по-грузински звучит необыкновенно тепло — დედაენა («материнский язык»)!",
    "culturalNote": "14 апреля в Грузии отмечают государственный День родного языка («დედაენის დღე») в честь событий 1978 года на проспекте Руставели."
  },
  {
    "id": "card_05_4",
    "letter": "ე",
    "letterIndex": 5,
    "wordGeo": "ექიმი",
    "translitLat": "ekimi",
    "ipa": "[ɛkʰimi]",
    "translitRu": "экʰими",
    "translationRu": "Врач / Доктор",
    "translationEn": "Doctor / Physician",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Чистое «ე» в начале, а во втором слоге — мягкое придыхательное «ქ» [kʰ].",
    "semanticHint": "Незаменимое слово в путешествии, аптеке и клинике.",
    "imageUrl": "assets/photos/card_05_4.jpg",
    "imageCaption": "Светлый современный медицинский кабинет со стетоскопом",
    "photoQuery": "Medical stethoscope doctor desk clinic",
    "audioNormal": "assets/audio/card_05_4.mp3",
    "antonym": {
      "wordGeo": "პაციენტი",
      "translitRu": "p'atsient'i",
      "ipa": "[pʼɑtsʰiɛntʼi]",
      "translationRu": "Пациент",
      "translationEn": "Patient",
      "imageUrl": "assets/photos/ant_patsienti.jpg",
      "photoQuery": "Waiting room clinic calm interior",
      "audioNormal": "assets/audio/ant_patsienti.mp3"
    },
    "examples": [
      {
        "geo": "ჩემი და კარგი ექიმია.",
        "gloss": "ჩემი და (моя сестра) · კარგი (хороший) · ექიმია (врач есть)",
        "ru": "Моя сестра — хороший врач.",
        "audio": "assets/audio/card_05_4_ex1.mp3"
      },
      {
        "geo": "ექიმთან ჩაწერა მინდა.",
        "gloss": "ექიმთან (к врачу) · ჩაწერა (записаться) · მინდა (хочу)",
        "ru": "Я хочу записаться к врачу.",
        "audio": "assets/audio/card_05_4_ex2.mp3"
      },
      {
        "geo": "სასწრაფოდ ექიმი გვჭირდება.",
        "gloss": "სასწრაფოდ (срочно) · ექიმი (врач) · გვჭირდება (нам нужен)",
        "ru": "Нам срочно нужен врач.",
        "audio": "assets/audio/card_05_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ექიმ- · Мн. ч.: ექიმები · С послелогом -თან («у / к одушевлённому лицу»): ექიმთან («у врача / к врачу»).",
    "culturalNote": "Традиция врачевания в Грузии восходит к средневековым лечебникам «Карабадини» XI–XV веков, хранящимся в Институте рукописей."
  },
  {
    "id": "card_05_5",
    "letter": "ე",
    "letterIndex": 5,
    "wordGeo": "ერთგული",
    "translitLat": "ertguli",
    "ipa": "[ɛrtʰɡuli]",
    "translitRu": "эртʰгули",
    "translationRu": "Верный / Преданный",
    "translationEn": "Loyal / Faithful",
    "difficulty": "Средний",
    "category": "Эмоции",
    "articulationTip": "Соедините два уже знакомых слова: «ერთი» (один) + «გული» (сердце) = [ɛrtʰ-ɡuli]!",
    "semanticHint": "Надёжный друг, спутник жизни или верный пёс, у которого «единое сердце».",
    "imageUrl": "assets/photos/card_05_5.jpg",
    "imageCaption": "Верный пёс рядом с путником на горной тропе Кавказа",
    "photoQuery": "Loyal dog hiker mountain trail Caucasus",
    "audioNormal": "assets/audio/card_05_5.mp3",
    "antonym": {
      "wordGeo": "მოღალატე",
      "translitRu": "moghalat'e",
      "ipa": "[mɔɣɑlɑtʼɛ]",
      "translationRu": "Неверный / Изменник",
      "translationEn": "Unfaithful / Traitor",
      "imageUrl": "assets/photos/ant_moghalate.jpg",
      "photoQuery": "Broken wooden bridge dark ravine",
      "audioNormal": "assets/audio/ant_moghalate.mp3"
    },
    "examples": [
      {
        "geo": "ძაღლი ადამიანის ერთგული მეგობარია.",
        "gloss": "ძაღლი (собака) · ადამიანის (человека) · ერთგული (верный) · მეგობარია (друг)",
        "ru": "Собака — верный друг человека.",
        "audio": "assets/audio/card_05_5_ex1.mp3"
      },
      {
        "geo": "მადლობა ერთგული მეგობრობისთვის!",
        "gloss": "მადლობა (спасибо) · ერთგული (за верную) · მეგობრობისთვის (дружбу)",
        "ru": "Спасибо за верную дружбу!",
        "audio": "assets/audio/card_05_5_ex2.mp3"
      },
      {
        "geo": "ის თავისი საქმის ერთგულია.",
        "gloss": "ის (он/она) · თავისი საქმის (своему делу) · ერთგულია (предан есть)",
        "ru": "Он предан своему делу.",
        "audio": "assets/audio/card_05_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Сложное прилагательное из корней ერთ- («один») + გულ- («сердце»). Существительное: ერთგულება («верность, преданность»).",
    "culturalNote": "В поэме Шота Руставели «Витязь в тигровой шкуре» верная побратимская дружба («ერთგულება») Автандила и Тариэла ставится превыше всех богатств мира."
  },
  {
    "id": "card_06_1",
    "letter": "ვ",
    "letterIndex": 6,
    "wordGeo": "ვაზი",
    "translitLat": "vazi",
    "ipa": "[vɑzi]",
    "translitRu": "вази",
    "translationRu": "Виноградная лоза",
    "translationEn": "Grapevine",
    "difficulty": "Начальный",
    "semanticHint": "Священное растение Грузии, ветви которого святая Нино перевязала своими волосами.",
    "imageUrl": "assets/photos/card_06_1.jpg",
    "imageCaption": "Ряды виноградной лозы в Алазанской долине Кахетии",
    "photoQuery": "Kakheti Georgia Georgian vineyards",
    "audioNormal": "assets/audio/card_06_1.mp3",
    "antonym": {
      "wordGeo": "ეკალი",
      "translitRu": "эк'али",
      "ipa": "[ɛkʼɑli]",
      "translationRu": "Колючка / Терновник",
      "translationEn": "Thorn / Bramble",
      "imageUrl": "assets/photos/ant_ekali.jpg",
      "photoQuery": "Wild thorn thistle plant dry",
      "audioNormal": "assets/audio/ant_ekali.mp3"
    },
    "examples": [
      {
        "geo": "ქართული ვაზი უძველესია.",
        "gloss": "ქართული (грузинская) · ვაზი (лоза) · უძველესია (древнейшая есть)",
        "ru": "Грузинская виноградная лоза — древнейшая.",
        "audio": "assets/audio/card_06_1_ex1.mp3"
      },
      {
        "geo": "შენ ხარ ვენახი.",
        "gloss": "შენ (ты) · ხარ (есть) · ვენახი (виноградник)",
        "ru": "Ты еси лоза виноградная (древний гимн XII века).",
        "audio": "assets/audio/card_06_1_ex2.mp3"
      },
      {
        "geo": "პაპამ ვაზი დარგო.",
        "gloss": "პაპამ (дедушка) · ვაზი (лозу) · დარგო (посадил)",
        "ru": "Дедушка посадил виноградную лозу.",
        "audio": "assets/audio/card_06_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ვაზ- · Мн. ч.: ვაზები. Буква «ვ» пишется двумя плавными дугами как цифра «3» без верхнего штриха.",
    "culturalNote": "В Грузии насчитывается более 525 автохтонных сортов виноградной лозы (Саперави, Ркацители, Киси, Хихви, Цоликоури) — почти четверть мирового генофонда.",
    "category": "Природа",
    "articulationTip": "Звонкий губно-зубной «ვ» легко открывает слог перед широким «ა»."
  },
  {
    "id": "card_06_2",
    "letter": "ვ",
    "letterIndex": 6,
    "wordGeo": "ვიწრო",
    "translitLat": "vits'ro",
    "ipa": "[vitsʼrɔ]",
    "translitRu": "виц'ро",
    "translationRu": "Узкий",
    "translationEn": "Narrow",
    "difficulty": "Средний",
    "semanticHint": "Таковы мощёные брусчаткой переулки в квартале Кала и Абанотубани.",
    "imageUrl": "assets/photos/card_06_2.jpg",
    "imageCaption": "Узкая мощёная улочка в историческом центре старого города",
    "photoQuery": "Narrow cobblestone street Old Tbilisi",
    "audioNormal": "assets/audio/card_06_2.mp3",
    "antonym": {
      "wordGeo": "ფართო",
      "translitRu": "пʰартʰо",
      "ipa": "[pʰɑrtʰɔ]",
      "translationRu": "Широкий / Просторный",
      "translationEn": "Wide / Broad",
      "imageUrl": "assets/photos/card_21_1.jpg",
      "photoQuery": "Alazani valley wide landscape Kakheti",
      "audioNormal": "assets/audio/card_21_1.mp3"
    },
    "examples": [
      {
        "geo": "ძველი უბნის ვიწრო ქუჩა.",
        "gloss": "ძველი (старого) · უბნის (района) · ვიწრო (узкая) · ქუჩა (улица)",
        "ru": "Узкая улочка старого квартала.",
        "audio": "assets/audio/card_06_2_ex1.mp3"
      },
      {
        "geo": "მთაში ვიწრო ბილიკია.",
        "gloss": "მთაში (в горах) · ვიწრო (узкая) · ბილიკია (тропинка есть)",
        "ru": "В горах узкая тропинка.",
        "audio": "assets/audio/card_06_2_ex2.mp3"
      },
      {
        "geo": "აქ ძალიან ვიწრო ხიდია.",
        "gloss": "აქ (здесь) · ძალიან (очень) · ვიწრო (узкий) · ხიდია (мост есть)",
        "ru": "Здесь очень узкий мост.",
        "audio": "assets/audio/card_06_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Прилагательное на -ო (не изменяется по падежам перед существительным!). Сочетание წრ- [tsʼr] тренирует чёткий переход от абруптива к «р».",
    "culturalNote": "Узкие улочки старого Тбилиси проектировались так, чтобы летом стены домов отбрасывали спасительную прохладную тень в полуденный зной.",
    "category": "Город",
    "articulationTip": "После звонкого «ვ» в середине слова звучит резкий свистящий щелчок «წ» [tsʼ]."
  },
  {
    "id": "card_06_3",
    "letter": "ვ",
    "letterIndex": 6,
    "wordGeo": "ვაშლი",
    "translitLat": "vashli",
    "ipa": "[vɑʃli]",
    "translitRu": "вашли",
    "translationRu": "Яблоко",
    "translationEn": "Apple",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Звонкий «ვ» в начале и мягкая шипящая связка «შლ-» во втором слоге.",
    "semanticHint": "Румяные плоды осенних садов Гори и Шида-Картли.",
    "imageUrl": "assets/photos/card_06_3.jpg",
    "imageCaption": "Спелые красные яблоки в саду после дождя",
    "photoQuery": "Red ripe apples orchard tree harvest",
    "audioNormal": "assets/audio/card_06_3.mp3",
    "antonym": {
      "wordGeo": "მსხალი",
      "translitRu": "мsxали",
      "ipa": "[msxɑli]",
      "translationRu": "Груша (парный садовый плод)",
      "translationEn": "Pear",
      "imageUrl": "assets/photos/ant_mskhali.jpg",
      "photoQuery": "Ripe pears branch autumn orchard",
      "audioNormal": "assets/audio/ant_mskhali.mp3"
    },
    "examples": [
      {
        "geo": "გორის ვაშლი ძალიან არომატულია.",
        "gloss": "გორის (горийское) · ვაშლი (яблоко) · ძალიან (очень) · არომატულია (ароматное)",
        "ru": "Горийские яблоки очень ароматные.",
        "audio": "assets/audio/card_06_3_ex1.mp3"
      },
      {
        "geo": "მაგიდაზე წითელი ვაშლი დევს.",
        "gloss": "მაგიდაზე (на столе) · წითელი (красное) · ვაშლი (яблоко) · დევს (лежит)",
        "ru": "На столе лежит красное яблоко.",
        "audio": "assets/audio/card_06_3_ex2.mp3"
      },
      {
        "geo": "ვაშლის ნამცხვარი მიყვარს.",
        "gloss": "ვაშლის (яблочный) · ნამცხვარი (пирог) · მიყვარს (я люблю)",
        "ru": "Я люблю яблочный пирог.",
        "audio": "assets/audio/card_06_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ვაშლ- · Мн. ч.: ვაშლები · Род. п.: ვაშლის წვენი («яблочный сок»).",
    "culturalNote": "Заповедник Вашловани на юго-востоке Грузии переводится как «Яблоневый край»: дикие фисташковые деревья там издали напоминают старые яблони!"
  },
  {
    "id": "card_06_4",
    "letter": "ვ",
    "letterIndex": 6,
    "wordGeo": "ვახშამი",
    "translitLat": "vakhshami",
    "ipa": "[vɑxʃɑmi]",
    "translitRu": "вахшами",
    "translationRu": "Ужин",
    "translationEn": "Dinner / Supper",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "После звонкого «ვ» и открытого «ა» энергично звучит пара «ხშ-» [xʃ].",
    "semanticHint": "Вечерняя трапеза в кругу семьи или друзей с видом на огни города.",
    "imageUrl": "assets/photos/card_06_4.jpg",
    "imageCaption": "Уютный вечерний ужин при тёплом свете ламп на веранде",
    "photoQuery": "Warm evening dinner table candles Georgian",
    "audioNormal": "assets/audio/card_06_4.mp3",
    "antonym": {
      "wordGeo": "საუზმე",
      "translitRu": "саузмэ",
      "ipa": "[sɑuzmɛ]",
      "translationRu": "Завтрак",
      "translationEn": "Breakfast",
      "imageUrl": "assets/photos/card_18_4.jpg",
      "photoQuery": "Morning breakfast coffee bread cheese table",
      "audioNormal": "assets/audio/card_18_4.mp3"
    },
    "examples": [
      {
        "geo": "ვახშამი რვა საათზე მზად იქნება.",
        "gloss": "ვახშამი (ужин) · რვა საათზე (в 8 часов) · მზად იქნება (будет готов)",
        "ru": "Ужин будет готов в восемь часов.",
        "audio": "assets/audio/card_06_4_ex1.mp3"
      },
      {
        "geo": "დღეს ვახშამზე მეგობრებს ველოდებით.",
        "gloss": "დღეს (сегодня) · ვახშამზე (на ужин) · მეგობრებს (друзей) · ველოდებით (ждём)",
        "ru": "Сегодня мы ждём друзей на ужин.",
        "audio": "assets/audio/card_06_4_ex2.mp3"
      },
      {
        "geo": "საუზმე, სადილი და ვახშამი.",
        "gloss": "საუზმე (завтрак) · სადილი (обед) · და ვახშამი (и ужин)",
        "ru": "Завтрак, обед и ужин.",
        "audio": "assets/audio/card_06_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ვახშამ- → ვახშმ- · Глагол: ვახშმობა («ужинать»). Сравните три приёма пищи: საუზმე, სადილი, ვახშამი.",
    "culturalNote": "Грузинский вечерний ужин редко обходится без свежей зелени («მწვანილი»), домашнего сыра и неспешной беседы."
  },
  {
    "id": "card_06_5",
    "letter": "ვ",
    "letterIndex": 6,
    "wordGeo": "ვარჯიში",
    "translitLat": "varjishi",
    "ipa": "[vɑrdʒiʃi]",
    "translitRu": "варджиши",
    "translationRu": "Тренировка / Упражнение",
    "translationEn": "Exercise / Practice",
    "difficulty": "Начальный",
    "category": "Действия",
    "articulationTip": "Звонкое «ვ» в начале, раскатистый «რ» и слитная звонкая аффриката «ჯ» [dʒ] перед «იშ».",
    "semanticHint": "И утренняя пробежка в парке Ваке, и практика грузинских букв в нашем тренажёре!",
    "imageUrl": "assets/photos/card_06_5.jpg",
    "imageCaption": "Утренняя пробежка и разминка на аллее зелёного парка",
    "photoQuery": "Morning jogging exercise green park trail",
    "audioNormal": "assets/audio/card_06_5.mp3",
    "antonym": {
      "wordGeo": "დასვენება",
      "translitRu": "дасвэнэба",
      "ipa": "[dɑsvɛnɛbɑ]",
      "translationRu": "Отдых / Отпуск",
      "translationEn": "Rest / Relaxation",
      "imageUrl": "assets/photos/ant_dasveneba.jpg",
      "photoQuery": "Hammock relaxing garden mountain view",
      "audioNormal": "assets/audio/ant_dasveneba.mp3"
    },
    "examples": [
      {
        "geo": "ყოველ დილით პარკში ვვარჯიშობ.",
        "gloss": "ყოველ დილით (каждое утро) · პარკში (в парке) · ვვარჯიშობ (я тренируюсь)",
        "ru": "Каждое утро я тренируюсь в парке.",
        "audio": "assets/audio/card_06_5_ex1.mp3"
      },
      {
        "geo": "გამოთქმაში ვარჯიში აუცილებელია.",
        "gloss": "გამოთქმაში (в произношении) · ვარჯიში (практика) · აუცილებელია (необходима)",
        "ru": "Практика в произношении необходима.",
        "audio": "assets/audio/card_06_5_ex2.mp3"
      },
      {
        "geo": "ვარჯიშის შემდეგ დასვენება სასიამოვნოა.",
        "gloss": "ვარჯიშის შემდეგ (после тренировки) · დასვენება (отдых) · სასიამოვნოა (приятен)",
        "ru": "После тренировки приятно отдохнуть.",
        "audio": "assets/audio/card_06_5_ex3.mp3"
      }
    ],
    "grammarMarker": "В 1-м лице глагола встречается двойное «ვვ-»: მე ვვარჯიშობ («я тренируюсь» — первое ვ- показатель «я», второе ვ- корень слова!).",
    "culturalNote": "Однокоренное слово სავარჯიშო означает «упражнение / тренажёр» в учебниках грузинского языка."
  },
  {
    "id": "card_07_1",
    "letter": "ზ",
    "letterIndex": 7,
    "wordGeo": "ზღვა",
    "translitLat": "zghva",
    "ipa": "[zɣvɑ]",
    "translitRu": "згхва",
    "translationRu": "Море",
    "translationEn": "Sea",
    "difficulty": "Сложный",
    "semanticHint": "Водная гладь у берегов Батуми, Кобулети и зелёного мыса Мцване-Концхи.",
    "imageUrl": "assets/photos/card_07_1.jpg",
    "imageCaption": "Галечное побережье Чёрного моря в Аджарии (Батуми)",
    "photoQuery": "Batumi Black Sea coast Georgia",
    "audioNormal": "assets/audio/card_07_1.mp3",
    "antonym": {
      "wordGeo": "ხმელეთი",
      "translitRu": "хмелети",
      "ipa": "[xmɛlɛtʰi]",
      "translationRu": "Суша / Материк",
      "translationEn": "Land / Dry land",
      "imageUrl": "assets/photos/ant_khmeleti.jpg",
      "photoQuery": "Caucasus highlands plateau Georgia",
      "audioNormal": "assets/audio/ant_khmeleti.mp3"
    },
    "examples": [
      {
        "geo": "შავი ზღვა თბილია.",
        "gloss": "შავი (Чёрное) · ზღვა (море) · თბილია (тёплое есть)",
        "ru": "Чёрное море тёплое.",
        "audio": "assets/audio/card_07_1_ex1.mp3"
      },
      {
        "geo": "ზაფხულში ზღვაზე მივდივართ.",
        "gloss": "ზაფხულში (летом) · ზღვაზე (на море) · მივდივართ (мы едем)",
        "ru": "Летом мы едем на море.",
        "audio": "assets/audio/card_07_1_ex2.mp3"
      },
      {
        "geo": "ზღვა დღეს მშვიდია.",
        "gloss": "ზღვა (море) · დღეს (сегодня) · მშვიდია (спокойное есть)",
        "ru": "Море сегодня спокойное.",
        "audio": "assets/audio/card_07_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ზღვ- · Мн. ч.: ზღვები. Знаменитый односложный кластер из 3 звонких согласных подряд: ზ-ღ-ვ [zɣv]!",
    "culturalNote": "Чтобы легко произнести «ზღვა», произнесите звонкое «з», плавно добавьте южное фрикативное «гх» и сразу округлите губы на «ва» — на одном звонком дыхании.",
    "category": "Природа",
    "articulationTip": "Произнесите тройной звонкий аккорд «ზ-ღ-ვ» слитно на одном дыхании!"
  },
  {
    "id": "card_07_2",
    "letter": "ზ",
    "letterIndex": 7,
    "wordGeo": "ზამთარი",
    "translitLat": "zamtari",
    "ipa": "[zɑmtʰɑri]",
    "translitRu": "замтʰари",
    "translationRu": "Зима",
    "translationEn": "Winter",
    "difficulty": "Начальный",
    "semanticHint": "Снежное время года на горнолыжных склонах Гудаури, Бакуриани и Тетнулди.",
    "imageUrl": "assets/photos/card_07_2.jpg",
    "imageCaption": "Заснеженные вершины и башни зимней Сванетии",
    "photoQuery": "Winter snow Svaneti mountains Georgia",
    "audioNormal": "assets/audio/card_07_2.mp3",
    "antonym": {
      "wordGeo": "ზაფხული",
      "translitRu": "запʰхули",
      "ipa": "[zɑpʰxuli]",
      "translationRu": "Лето",
      "translationEn": "Summer",
      "imageUrl": "assets/photos/ant_zapkhuli.jpg",
      "photoQuery": "Summer green meadow Caucasus Georgia",
      "audioNormal": "assets/audio/ant_zapkhuli.mp3"
    },
    "examples": [
      {
        "geo": "სვანეთში თოვლიანი ზამთარია.",
        "gloss": "სვანეთში (в Сванетии) · თოვლიანი (снежная) · ზამთარია (зима есть)",
        "ru": "В Сванетии снежная зима.",
        "audio": "assets/audio/card_07_2_ex1.mp3"
      },
      {
        "geo": "ზამთარი და ზაფხული.",
        "gloss": "ზამთარი (зима) · და (и) · ზაფხული (лето)",
        "ru": "Зима и лето.",
        "audio": "assets/audio/card_07_2_ex2.mp3"
      },
      {
        "geo": "ზამთარში თხილამურებით ვსრიალებთ.",
        "gloss": "ზამთარში (зимой) · თხილამურებით (на лыжах) · ვსრიალებთ (катаемся)",
        "ru": "Зимой мы катаемся на лыжах.",
        "audio": "assets/audio/card_07_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ზამთარ- → ზამთრ- (в род. п. ზამთრის — «зимний»). И «зима», и «лето» начинаются на букву «ზ»!",
    "culturalNote": "В Грузии в один и тот же день можно увидеть несколько климатических сезонов: цветущие пальмы у моря в Батуми и глубокий снег на перевалах Годердзи.",
    "category": "Природа",
    "articulationTip": "Звонкое свистящее «ზ» в начале и придыхательное «თ» после «მ» в середине."
  },
  {
    "id": "card_07_3",
    "letter": "ზ",
    "letterIndex": 7,
    "wordGeo": "ზაფხული",
    "translitLat": "zapkhuli",
    "ipa": "[zɑpʰxuli]",
    "translitRu": "запʰхули",
    "translationRu": "Лето",
    "translationEn": "Summer",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Звонкий «ზ» в начале и воздушная придыхательная связка «ფხ-» [pʰx] в середине.",
    "semanticHint": "Солнечный сезон морских купаний в Аджарии и походов в горы Рачи и Тушетии.",
    "imageUrl": "assets/photos/card_07_3.jpg",
    "imageCaption": "Цветущий зелёный альпийский луг в горах Кавказа летом",
    "photoQuery": "Summer alpine meadow wildflowers Caucasus Georgia",
    "audioNormal": "assets/audio/card_07_3.mp3",
    "antonym": {
      "wordGeo": "ზამთარი",
      "translitRu": "zamtari",
      "ipa": "[zɑmtʰɑri]",
      "translationRu": "Зима",
      "translationEn": "Winter",
      "imageUrl": "assets/photos/card_07_2.jpg",
      "photoQuery": "Snowy winter Svaneti towers Georgia",
      "audioNormal": "assets/audio/card_07_2.mp3"
    },
    "examples": [
      {
        "geo": "ზაფხული ჩემი საყვარელი დროა.",
        "gloss": "ზაფხული (лето) · ჩემი საყვარელი (моё любимое) · დროა (время года)",
        "ru": "Лето — моё любимое время года.",
        "audio": "assets/audio/card_07_3_ex1.mp3"
      },
      {
        "geo": "ზაფხულში მთაში მივდივართ.",
        "gloss": "ზაფხულში (летом) · მთაში (в горы) · მივდივართ (мы уезжаем)",
        "ru": "Летом мы едем в горы.",
        "audio": "assets/audio/card_07_3_ex2.mp3"
      },
      {
        "geo": "თბილისში ცხელი ზაფხული იცის.",
        "gloss": "თბილისში (в Тбилиси) · ცხელი (жаркое) · ზაფხული (лето) · იცის (бывает)",
        "ru": "В Тбилиси бывает жаркое лето.",
        "audio": "assets/audio/card_07_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Четыре времени года в грузинском: გაზაფხული (весна — букв. «предлетье»!), ზაფხული (лето), შემოდგომა (осень), ზამთარი (зима).",
    "culturalNote": "Обратите внимание, как красиво связаны весна и лето: «გაზაფხული» буквально означает «раскрытие / наступление лета»!"
  },
  {
    "id": "card_07_4",
    "letter": "ზ",
    "letterIndex": 7,
    "wordGeo": "ზრდილობიანი",
    "translitLat": "zrdilobiani",
    "ipa": "[zrdilɔbiɑni]",
    "translitRu": "зрдилобиани",
    "translationRu": "Вежливый / Воспитанный",
    "translationEn": "Polite / Courteous",
    "difficulty": "Сложный",
    "category": "Эмоции",
    "articulationTip": "Тройной звонкий кластер «ზ-რ-დ» [zrd] произносится мягко благодаря раскатистому «რ» в центре.",
    "semanticHint": "Человек, знающий тонкости уважительного грузинского обращения.",
    "imageUrl": "assets/photos/card_07_4.jpg",
    "imageCaption": "Приветливый бариста подаёт чашку кофе с улыбкой",
    "photoQuery": "Polite barista serving coffee warm cafe",
    "audioNormal": "assets/audio/card_07_4.mp3",
    "antonym": {
      "wordGeo": "უზრდელი",
      "translitRu": "узрадэли",
      "ipa": "[uzrdɛli]",
      "translationRu": "Невежливый / Невоспитанный",
      "translationEn": "Rude / Impolite",
      "imageUrl": "assets/photos/ant_uzrdeli.jpg",
      "photoQuery": "Closed wooden shutter grumpy door",
      "audioNormal": "assets/audio/ant_uzrdeli.mp3"
    },
    "examples": [
      {
        "geo": "ეს ახალგაზრდა ძალიან ზრდილობიანია.",
        "gloss": "ეს ახალგაზრდა (этот молодой человек) · ძალიან (очень) · ზრდილობიანია (вежливый)",
        "ru": "Этот молодой человек очень вежлив.",
        "audio": "assets/audio/card_07_4_ex1.mp3"
      },
      {
        "geo": "ზრდილობიანი სიტყვა გულს ათბობს.",
        "gloss": "ზრდილობიანი (вежливое) · სიტყვა (слово) · გულს (сердце) · ათბობს (согревает)",
        "ru": "Вежливое слово согревает сердце.",
        "audio": "assets/audio/card_07_4_ex2.mp3"
      },
      {
        "geo": "მომსახურება აქ ზრდილობიანია.",
        "gloss": "მომსახურება (обслуживание) · აქ (здесь) · ზრდილობიანია (вежливое)",
        "ru": "Обслуживание здесь очень тактичное.",
        "audio": "assets/audio/card_07_4_ex3.mp3"
      }
    ],
    "grammarMarker": "От глагола გაზრდა («растить, воспитывать») → ზრდილობა («вежливость, воспитанность») → ზრდილობიანი.",
    "culturalNote": "Три главных слова грузинской вежливости: გთხოვთ (пожалуйста / прошу), გმადლობთ (благодарю вас) и ბოდიში (извините)."
  },
  {
    "id": "card_07_5",
    "letter": "ზ",
    "letterIndex": 7,
    "wordGeo": "ზურგჩანთა",
    "translitLat": "zurgchanta",
    "ipa": "[zurɡtʃʰɑntʰɑ]",
    "translitRu": "зургчʰантʰа",
    "translationRu": "Рюкзак",
    "translationEn": "Backpack",
    "difficulty": "Средний",
    "category": "Транспорт",
    "articulationTip": "Звонкое начало «ზურგ-» стыкуется с двумя придыхательными согласными во второй половине «-ჩანთა».",
    "semanticHint": "Походная сумка за спиной для треккинга к озёрам Абуделаури или леднику Чалаади.",
    "imageUrl": "assets/photos/card_07_5.jpg",
    "imageCaption": "Путешественник с походным рюкзаком на фоне горных вершин",
    "photoQuery": "Hiker backpack looking Caucasus mountains Georgia",
    "audioNormal": "assets/audio/card_07_5.mp3",
    "antonym": {
      "wordGeo": "ჩემოდანი",
      "translitRu": "чʰэмодани",
      "ipa": "[tʃʰɛmɔdɑni]",
      "translationRu": "Чемодан (дорожный)",
      "translationEn": "Suitcase",
      "imageUrl": "assets/photos/ant_chemodani.jpg",
      "photoQuery": "Travel suitcase airport terminal floor",
      "audioNormal": "assets/audio/ant_chemodani.mp3"
    },
    "examples": [
      {
        "geo": "ჩემი ზურგჩანთა მსუბუქია.",
        "gloss": "ჩემი (мой) · ზურგჩანთა (рюкзак) · მსუბუქია (лёгкий есть)",
        "ru": "Мой рюкзак лёгкий.",
        "audio": "assets/audio/card_07_5_ex1.mp3"
      },
      {
        "geo": "ლაშქრობაში ზურგჩანთა მიმაქვს.",
        "gloss": "ლაშქრობაში (в поход) · ზურგჩანთა (рюкзак) · მიმაქვს (я беру с собой)",
        "ru": "В горный поход я беру рюкзак.",
        "audio": "assets/audio/card_07_5_ex2.mp3"
      },
      {
        "geo": "წყალი ზურგჩანთაში ჩავდე.",
        "gloss": "წყალი (воду) · ზურგჩანთაში (в рюкзак) · ჩავდე (я положил)",
        "ru": "Я положил бутылку воды в рюкзак.",
        "audio": "assets/audio/card_07_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Наглядное грузинское словосложение: ზურგი («спина») + ჩანთა («сумка») = ზურგჩანთა («заспинная сумка / рюкзак»)!",
    "culturalNote": "Пеший поход в горы по-грузински называется «ლაშქრობა» — один из самых любимых видов отдыха молодёжи в Грузии."
  },
  {
    "id": "card_08_1",
    "letter": "თ",
    "letterIndex": 8,
    "wordGeo": "თბილი",
    "translitLat": "tbili",
    "ipa": "[tʰbili]",
    "translitRu": "тʰбили",
    "translationRu": "Тёплый",
    "translationEn": "Warm",
    "difficulty": "Начальный",
    "semanticHint": "Именно от этого слова произошло название столицы Грузии — Тбилиси!",
    "imageUrl": "assets/photos/card_08_1.jpg",
    "imageCaption": "Кирпичные купола тёплых серных бань Абанотубани в Тбилиси",
    "photoQuery": "Abanotubani sulfur baths Tbilisi Georgia",
    "audioNormal": "assets/audio/card_08_1.mp3",
    "antonym": {
      "wordGeo": "ცივი",
      "translitRu": "цʰиви",
      "ipa": "[tsʰivi]",
      "translationRu": "Холодный",
      "translationEn": "Cold",
      "imageUrl": "assets/photos/card_27_1.jpg",
      "photoQuery": "Glacier ice Caucasus mountain stream",
      "audioNormal": "assets/audio/card_27_1.mp3"
    },
    "examples": [
      {
        "geo": "თბილისი თბილი ქალაქია.",
        "gloss": "თბილისი (Тбилиси) · თბილი (тёплый) · ქალაქია (город есть)",
        "ru": "Тбилиси — тёплый город.",
        "audio": "assets/audio/card_08_1_ex1.mp3"
      },
      {
        "geo": "თონის თბილი პური.",
        "gloss": "თონის (из печи тонэ) · თბილი (тёплый) · პური (хлеб)",
        "ru": "Тёплый хлеб из печи тонэ.",
        "audio": "assets/audio/card_08_1_ex2.mp3"
      },
      {
        "geo": "დღეს თბილი საღამოა.",
        "gloss": "დღეს (сегодня) · თბილი (тёплый) · საღამოა (вечер есть)",
        "ru": "Сегодня тёплый вечер.",
        "audio": "assets/audio/card_08_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: თბილ- · Начальное сочетание придыхательной თ [tʰ] со звонкой ბ [b]. До 1936 года писалось через древнюю букву «ტფილი» (отсюда старое «Тифлис»).",
    "culturalNote": "По преданию V века сокол царя Вахтанга Горгасали упал в горячий серный источник, и царь повелел заложить там новую столицу — «Тбилиси» («Тёплый источник»).",
    "category": "Прилагательные",
    "articulationTip": "Выдохните воздух на «თ» [tʰ] и сразу сомкните губы на звонком «ბ»."
  },
  {
    "id": "card_08_2",
    "letter": "თ",
    "letterIndex": 8,
    "wordGeo": "თეთრი",
    "translitLat": "tetri",
    "ipa": "[tʰɛtʰri]",
    "translitRu": "тʰэтʰри",
    "translationRu": "Белый",
    "translationEn": "White",
    "difficulty": "Начальный",
    "semanticHint": "Цвет горных снегов, белых вин Кахетии и название грузинской разменной монеты.",
    "imageUrl": "assets/photos/card_08_2.jpg",
    "imageCaption": "Белоснежная двуглавая вершина Ушбы на Большом Кавказе",
    "photoQuery": "Shkhara Ushba snow peak Georgia",
    "audioNormal": "assets/audio/card_08_2.mp3",
    "antonym": {
      "wordGeo": "შავი",
      "translitRu": "шави",
      "ipa": "[ʃɑvi]",
      "translationRu": "Чёрный",
      "translationEn": "Black",
      "imageUrl": "assets/photos/card_25_1.jpg",
      "photoQuery": "Magnetiti black sand Ureki sea",
      "audioNormal": "assets/audio/card_25_1.mp3"
    },
    "examples": [
      {
        "geo": "მწვერვალზე თეთრი თოვლია.",
        "gloss": "მწვერვალზე (на вершине) · თეთრი (белый) · თოვლია (снег есть)",
        "ru": "На вершине белый снег.",
        "audio": "assets/audio/card_08_2_ex1.mp3"
      },
      {
        "geo": "თეთრი და შავი არაგვი.",
        "gloss": "თეთრი (Белая) · და (и) · შავი (Чёрная) · არაგვი (Арагви)",
        "ru": "Белая и Чёрная Арагви.",
        "audio": "assets/audio/card_08_2_ex2.mp3"
      },
      {
        "geo": "თეთრი პერანგი აცვია.",
        "gloss": "თეთრი (белая) · პერანგი (рубашка) · აცვია (надета на нём)",
        "ru": "На нём белая рубашка.",
        "audio": "assets/audio/card_08_2_ex3.mp3"
      }
    ],
    "grammarMarker": "В слове дважды повторяется придыхательная буква «თ»: თ-ე-თ-რ-ი [tʰɛtʰri] — идеальное слово для тренировки мягкого выдоха!",
    "culturalNote": "Слово «თეთრი» также означает грузинскую монету (1 лари = 100 тетри) — в средневековой Грузии так называли серебряные («белые») монеты.",
    "category": "Прилагательные",
    "articulationTip": "Два придыхательных «თ» подряд в одном слове — лёгкий выдох на обоих слогах!"
  },
  {
    "id": "card_08_3",
    "letter": "თ",
    "letterIndex": 8,
    "wordGeo": "თოვლი",
    "translitLat": "tovli",
    "ipa": "[tʰɔvli]",
    "translitRu": "тʰовли",
    "translationRu": "Снег",
    "translationEn": "Snow",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Мягкий воздушный выдох «თ» [tʰ] переходит в круглое «ო» и плавную связку «ვლ-».",
    "semanticHint": "Белое пушистое покрывало на крышах Бакуриани и вершинах Гудаури.",
    "imageUrl": "assets/photos/card_08_3.jpg",
    "imageCaption": "Заснеженные ели и склоны горного курорта зимой",
    "photoQuery": "Fresh snow pine trees mountains Bakuriani Georgia",
    "audioNormal": "assets/audio/card_08_3.mp3",
    "antonym": {
      "wordGeo": "წვიმა",
      "translitRu": "ts'vima",
      "ipa": "[tsʼvimɑ]",
      "translationRu": "Дождь",
      "translationEn": "Rain",
      "imageUrl": "assets/photos/card_29_4.jpg",
      "photoQuery": "Rain drops cobblestones green street",
      "audioNormal": "assets/audio/card_29_4.mp3"
    },
    "examples": [
      {
        "geo": "გუდაურში უკვე თოვლი დევს.",
        "gloss": "გუდაურში (в Гудаური) · უკვე (уже) · თოვლი (снег) · დევს (лежит)",
        "ru": "В Гудаури уже лежит снег.",
        "audio": "assets/audio/card_08_3_ex1.mp3"
      },
      {
        "geo": "დღეს თოვს და ცივა.",
        "gloss": "დღეს (сегодня) · თოვს (идёт снег) · და ცივა (и холодно)",
        "ru": "Сегодня идёт снег и холодно.",
        "audio": "assets/audio/card_08_3_ex2.mp3"
      },
      {
        "geo": "ბავშვებს თოვლი უხარიათ.",
        "gloss": "ბავშვებს (детям) · თოვლი (снег) · უხარიათ (в радость есть)",
        "ru": "Дети радуются снегу.",
        "audio": "assets/audio/card_08_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Существительное: თოვლი («снег»), безличный глагол погоды: თოვს («снежит / идёт снег», ср. წვიმს — «идёт дождь»).",
    "culturalNote": "Новогоднего Деда Мороза в Грузии зовут «თოვლის ბაბუა» (Товлис Бабуа — «Снежный дедушка»); он носит белую чоху и сванскую шапку!"
  },
  {
    "id": "card_08_4",
    "letter": "თ",
    "letterIndex": 8,
    "wordGeo": "თევზი",
    "translitLat": "tevzi",
    "ipa": "[tʰɛvzi]",
    "translitRu": "тʰэвзи",
    "translationRu": "Рыба",
    "translationEn": "Fish",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Воздушный выдох «თ» [tʰ] в начале и звонкая пара «ვზ-» во втором слоге.",
    "semanticHint": "Речная форель («калмахи») в гранатовом соусе или черноморская барабулька в Батуми.",
    "imageUrl": "assets/photos/card_08_4.jpg",
    "imageCaption": "Запечённая речная форель с лимоном и зеленью на блюде",
    "photoQuery": "Grilled trout fish lemon herbs plate",
    "audioNormal": "assets/audio/card_08_4.mp3",
    "antonym": {
      "wordGeo": "ხორცი",
      "translitRu": "хорцʰи",
      "ipa": "[xɔrtsʰi]",
      "translationRu": "Мясо (альтернатива в меню)",
      "translationEn": "Meat",
      "imageUrl": "assets/photos/card_31_4.jpg",
      "photoQuery": "Georgian mtsvadi shashlik grilled meat skewers",
      "audioNormal": "assets/audio/card_31_4.mp3"
    },
    "examples": [
      {
        "geo": "ბათუმში ახალი თევზი გავსინჯეთ.",
        "gloss": "ბათუმში (в Батуми) · ახალი (свежую) · თევზი (рыбу) · გავსინჯეთ (мы попробовали)",
        "ru": "В Батуми мы попробовали свежую рыбу.",
        "audio": "assets/audio/card_08_4_ex1.mp3"
      },
      {
        "geo": "მთის მდინარეში კალმახი თევზია.",
        "gloss": "მთის მდინარეში (в горной реке) · კალმახი (форель) · თევზია (рыба водится)",
        "ru": "В горной реке водится форель.",
        "audio": "assets/audio/card_08_4_ex2.mp3"
      },
      {
        "geo": "თევზი გრილზე ძალიან გემრიელია.",
        "gloss": "თევზი (рыба) · გრილზე (на гриле) · ძალიან გემრიელია (очень вкусная)",
        "ru": "Рыба на гриле очень вкусная.",
        "audio": "assets/audio/card_08_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: თევზ- · Мн. ч.: თევზები · Глагол: თევზაობა («рыбалка / ловить рыбу»).",
    "culturalNote": "На батумском рыбном рынке выбранную вами свежую барабульку или кефаль тут же приготовят в соседнем ресторанчике с соусом ткемали."
  },
  {
    "id": "card_08_5",
    "letter": "თ",
    "letterIndex": 8,
    "wordGeo": "თავისუფალი",
    "translitLat": "tavisupali",
    "ipa": "[tʰɑvisupʰɑli]",
    "translitRu": "тʰависупʰали",
    "translationRu": "Свободный",
    "translationEn": "Free / Available",
    "difficulty": "Средний",
    "category": "Город",
    "articulationTip": "Две придыхательные согласные в слове: зубная «თ» [tʰ] в начале и губная «ფ» [pʰ] ближе к концу.",
    "semanticHint": "И свободное такси, и свободный столик в кафе, и главная площадь Тбилиси!",
    "imageUrl": "assets/photos/card_08_5.jpg",
    "imageCaption": "Площадь Свободы с золотой колонной в центре Тбилиси",
    "photoQuery": "Freedom Square Tbilisi monument Georgia",
    "audioNormal": "assets/audio/card_08_5.mp3",
    "antonym": {
      "wordGeo": "დაკავებული",
      "translitRu": "dak'avebuli",
      "ipa": "[dɑkʼɑvɛbuli]",
      "translationRu": "Занятый",
      "translationEn": "Busy / Occupied",
      "imageUrl": "assets/photos/ant_dakavebuli.jpg",
      "photoQuery": "Reserved sign cafe table cup",
      "audioNormal": "assets/audio/ant_dakavebuli.mp3"
    },
    "examples": [
      {
        "geo": "უკაცრავად, ეს მაგიდა თავისუფალია?",
        "gloss": "უკაცრავად (извините) · ეს მაგიდა (этот столик) · თავისუფალია (свободен)?",
        "ru": "Извините, этот столик свободен?",
        "audio": "assets/audio/card_08_5_ex1.mp3"
      },
      {
        "geo": "თავისუფლების მოედანი ცენტრშია.",
        "gloss": "თავისუფლების (Свободы) · მოედანი (площадь) · ცენტრშია (в центре есть)",
        "ru": "Площадь Свободы находится в центре.",
        "audio": "assets/audio/card_08_5_ex2.mp3"
      },
      {
        "geo": "ხვალ საღამოს თავისუფალი ვარ.",
        "gloss": "ხვალ (завтра) · საღამოს (вечером) · თავისუფალი (свободен) · ვარ (я есть)",
        "ru": "Завтра вечером я свободен.",
        "audio": "assets/audio/card_08_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Сложено из თავი («голова / сам») + უფალი («владыка, хозяин») = буквально «сам себе хозяин»! Существительное: თავისუფლება («свобода»).",
    "culturalNote": "Удивительная внутренняя форма слова: «თავისუფალი» дословно означает «господин своей собственной головы»!"
  },
  {
    "id": "card_09_1",
    "letter": "ი",
    "letterIndex": 9,
    "wordGeo": "ია",
    "translitLat": "ia",
    "ipa": "[iɑ]",
    "translitRu": "иа",
    "translationRu": "Фиалка",
    "translationEn": "Violet (flower)",
    "difficulty": "Начальный",
    "semanticHint": "Крошечное двубуквенное слово из первой строчки легендарного грузинского букваря!",
    "imageUrl": "assets/photos/card_09_1.jpg",
    "imageCaption": "Лесная весенняя фиалка среди мха и травы",
    "photoQuery": "Viola odorata wild violet flower",
    "audioNormal": "assets/audio/card_09_1.mp3",
    "antonym": {
      "wordGeo": "ნარშავი",
      "translitRu": "наршави",
      "ipa": "[nɑrʃɑvi]",
      "translationRu": "Чертополох (колючка)",
      "translationEn": "Thistle",
      "imageUrl": "assets/photos/ant_ekali.jpg",
      "photoQuery": "Thistle prickly flower plant",
      "audioNormal": "assets/audio/ant_narshavi.mp3"
    },
    "examples": [
      {
        "geo": "აი ია.",
        "gloss": "აი (вот) · ია (фиалка)",
        "ru": "Вот фиалка.",
        "audio": "assets/audio/card_09_1_ex1.mp3"
      },
      {
        "geo": "ტყეში ნაზი ია ყვავის.",
        "gloss": "ტყეში (в лесу) · ნაზი (нежная) · ია (фиалка) · ყვავის (цветёт)",
        "ru": "В лесу цветёт нежная фиалка.",
        "audio": "assets/audio/card_09_1_ex2.mp3"
      },
      {
        "geo": "გაზაფხულზე ია ამოდის.",
        "gloss": "გაზაფხულზე (весной) · ია (фиалка) · ამოდის (всходит)",
        "ru": "Весной распускается фиалка.",
        "audio": "assets/audio/card_09_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ი- · Мн. ч.: იები. Всего две гласные буквы — самое поэтичное короткое существительное грузинского языка.",
    "culturalNote": "Фраза «აი ია» («Вот фиалка») открывает букварь «Деда эна» («Родной язык») Якова Гогебашвили 1876 года. В Тбилиси ей даже установлен памятник в парке Дедаэна!",
    "category": "Природа",
    "articulationTip": "Плавный переход от высокого «ი» к открытому «ა» без согласной преграды."
  },
  {
    "id": "card_09_2",
    "letter": "ი",
    "letterIndex": 9,
    "wordGeo": "იაფი",
    "translitLat": "iapi",
    "ipa": "[iɑpʰi]",
    "translitRu": "иапʰи",
    "translationRu": "Дешёвый / Недорогой",
    "translationEn": "Cheap / Inexpensive",
    "difficulty": "Начальный",
    "semanticHint": "Полезнейшее слово на колоритных фермерских базарах Дезертирки, Телави и Кутаиси.",
    "imageUrl": "assets/photos/card_09_2.jpg",
    "imageCaption": "Щедрые прилавки со специями и фруктами на грузинском базаре",
    "photoQuery": "Georgian market spices churchkhela fruit",
    "audioNormal": "assets/audio/card_09_2.mp3",
    "antonym": {
      "wordGeo": "ძვირი",
      "translitRu": "дзвири",
      "ipa": "[dzviri]",
      "translationRu": "Дорогой / Ценный",
      "translationEn": "Expensive / Dear",
      "imageUrl": "assets/photos/card_14_1.jpg",
      "photoQuery": "Colchis gold jewelry museum Georgia",
      "audioNormal": "assets/audio/ant_dzviri.mp3"
    },
    "examples": [
      {
        "geo": "ბაზარში ხილი იაფია.",
        "gloss": "ბაზარში (на базаре) · ხილი (фрукты) · იაფია (недорогие есть)",
        "ru": "На рынке фрукты недорогие.",
        "audio": "assets/audio/card_09_2_ex1.mp3"
      },
      {
        "geo": "ეს ძვირია თუ იაფი?",
        "gloss": "ეს (это) · ძვირია (дорого) · თუ (или) · იაფი (дёшево)",
        "ru": "Это дорого или недорого?",
        "audio": "assets/audio/card_09_2_ex2.mp3"
      },
      {
        "geo": "ეს კაფე გემრიელი და იაფია.",
        "gloss": "ეს (это) · კაფე (кафе) · გემრიელი (вкусное) · და იაფია (и недорогое)",
        "ru": "Это кафе вкусное и недорогое.",
        "audio": "assets/audio/card_09_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Важно: буква «ფ» произносится как придыхательное [pʰ] («иапʰи»), а не как русское «ф»! В исконных грузинских словах звука [f] вообще нет.",
    "culturalNote": "На рынках Телави или Кутаиси вопрос «რა ღირს?» (Сколько стоит?) и улыбка почти всегда приводят к щедрой дегустации сыра и чурчхелы.",
    "category": "Город",
    "articulationTip": "После «ია» произнесите «ფ» как воздушное [pʰ] губами, никогда не кусая губу на «ф»!"
  },
  {
    "id": "card_09_3",
    "letter": "ი",
    "letterIndex": 9,
    "wordGeo": "იმედი",
    "translitLat": "imedi",
    "ipa": "[imɛdi]",
    "translitRu": "имэди",
    "translationRu": "Надежда",
    "translationEn": "Hope",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "Чистый гласный «ი» мягко переходит в сонорный «მ» и звонкий «დ».",
    "semanticHint": "Светлое чувство ожидания лучшего и популярное женское/нарицательное слово в Грузии.",
    "imageUrl": "assets/photos/card_09_3.jpg",
    "imageCaption": "Луч солнечного света, пробивающийся сквозь облака над горами",
    "photoQuery": "Sunbeam breaking through clouds mountains hope",
    "audioNormal": "assets/audio/card_09_3.mp3",
    "antonym": {
      "wordGeo": "უიმედობა",
      "translitRu": "уимэдоба",
      "ipa": "[uimɛdɔbɑ]",
      "translationRu": "Безнадёжность / Отчаяние",
      "translationEn": "Hopelessness",
      "imageUrl": "assets/photos/ant_uimedoba.jpg",
      "photoQuery": "Dark misty barren cliff winter",
      "audioNormal": "assets/audio/ant_uimedoba.mp3"
    },
    "examples": [
      {
        "geo": "იმედი მაქვს, მალე შევხვდებით.",
        "gloss": "იმედი მაქვს (надеюсь / надежду имею) · მალე (скоро) · შევხვდებით (встретимся)",
        "ru": "Надеюсь, мы скоро встретимся!",
        "audio": "assets/audio/card_09_3_ex1.mp3"
      },
      {
        "geo": "იმედი ბოლოს კვდება.",
        "gloss": "იმედი (надежда) · ბოლოს (последней) · კვდება (умирает)",
        "ru": "Надежда умирает последней.",
        "audio": "assets/audio/card_09_3_ex2.mp3"
      },
      {
        "geo": "შენ ჩემი დიდი იმედი ხარ.",
        "gloss": "შენ (ты) · ჩემი დიდი (моя большая) · იმედი ხარ (надежда есть)",
        "ru": "Ты — моя большая надежда.",
        "audio": "assets/audio/card_09_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Устойчивая конструкция «я надеюсь» строится через глагол обладания: იმედი მაქვს (букв. «у меня есть надежда»).",
    "culturalNote": "Конструкция «იმედი მაქვს» (или короче «იმედია» — «надеюсь») — одна из самых употребительных разговорных связок в живой речи."
  },
  {
    "id": "card_09_4",
    "letter": "ი",
    "letterIndex": 9,
    "wordGeo": "იღბალი",
    "translitLat": "ighbali",
    "ipa": "[iɣbɑli]",
    "translitRu": "игхбали",
    "translationRu": "Удача / Везение",
    "translationEn": "Luck / Good fortune",
    "difficulty": "Средний",
    "category": "Эмоции",
    "articulationTip": "После «ი» произнесите звонкое фрикативное «ღ» [ɣ], плавно переходя к взрывному «ბ».",
    "semanticHint": "Доброе попутное везение в дороге и начинаниях.",
    "imageUrl": "assets/photos/card_09_4.jpg",
    "imageCaption": "Четырёхлистный клевер в утренней росе на зелёном лугу",
    "photoQuery": "Green clover dew sunlit meadow luck",
    "audioNormal": "assets/audio/card_09_4.mp3",
    "antonym": {
      "wordGeo": "უიღბლობა",
      "translitRu": "уигхблоба",
      "ipa": "[uiɣblɔbɑ]",
      "translationRu": "Невезение / Неудача",
      "translationEn": "Bad luck / Misfortune",
      "imageUrl": "assets/photos/ant_uighbloba.jpg",
      "photoQuery": "Rain puddle umbrella windy street",
      "audioNormal": "assets/audio/ant_uighbloba.mp3"
    },
    "examples": [
      {
        "geo": "დიდი იღბალი გისურვებთ!",
        "gloss": "დიდი (большой) · იღბალი (удачи) · გისურვებთ (желаем вам)",
        "ru": "Желаем вам большой удачи!",
        "audio": "assets/audio/card_09_4_ex1.mp3"
      },
      {
        "geo": "დღეს ნამდვილად იღბლიანი დღეა.",
        "gloss": "დღეს (сегодня) · ნამდვილად (поистине) · იღბლიანი (удачный) · დღეა (день)",
        "ru": "Сегодня поистине удачный день.",
        "audio": "assets/audio/card_09_4_ex2.mp3"
      },
      {
        "geo": "მას კარგი იღბალი აქვს.",
        "gloss": "მას (у него) · კარგი (хорошая) · იღბალი (удача) · აქვს (есть)",
        "ru": "Ему сопутствует удача.",
        "audio": "assets/audio/card_09_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: იღბალ- → იღბლ- · Прилагательное с суффиксом -იანი: იღბლიანი («удачливый, везучий»).",
    "culturalNote": "Перед экзаменом или поездкой близким часто говорят «აბა, წარმატებები და იღბალი!» — «Успехов и доброй удачи!»"
  },
  {
    "id": "card_09_5",
    "letter": "ი",
    "letterIndex": 9,
    "wordGeo": "იატაკი",
    "translitLat": "iat'ak'i",
    "ipa": "[iɑtʼɑkʼi]",
    "translitRu": "иат'ак'и",
    "translationRu": "Пол (в доме)",
    "translationEn": "Floor",
    "difficulty": "Средний",
    "category": "Быт",
    "articulationTip": "Начинается с плавного «ია-», после чего чётко щёлкают два абруптива: «ტ» [tʼ] и «კ» [kʼ]!",
    "semanticHint": "Паркетный или каменный пол в комнате (противоположность потолку!).",
    "imageUrl": "assets/photos/card_09_5.jpg",
    "imageCaption": "Деревянный паркетный пол в светлом традиционном интерьере",
    "photoQuery": "Warm wooden parquet floor sunlit room interior",
    "audioNormal": "assets/audio/card_09_5.mp3",
    "antonym": {
      "wordGeo": "ჭერი",
      "translitRu": "ch'eri",
      "ipa": "[tʃʼɛri]",
      "translationRu": "Потолок",
      "translationEn": "Ceiling",
      "imageUrl": "assets/photos/card_30_4.jpg",
      "photoQuery": "Ornate wooden carved ceiling historic hall",
      "audioNormal": "assets/audio/card_30_4.mp3"
    },
    "examples": [
      {
        "geo": "ოთახში ხის თბილი იატაკია.",
        "gloss": "ოთახში (в комнате) · ხის (деревянный) · თბილი (тёплый) · იატაკია (пол есть)",
        "ru": "В комнате тёплый деревянный пол.",
        "audio": "assets/audio/card_09_5_ex1.mp3"
      },
      {
        "geo": "იატაკზე ქართული ხალიჩა აფენია.",
        "gloss": "იატაკზე (на полу) · ქართული ხალიჩა (грузинский ковёр) · აფენია (расстелен)",
        "ru": "На полу расстелен грузинский ковёр.",
        "audio": "assets/audio/card_09_5_ex2.mp3"
      },
      {
        "geo": "იატაკი სუფთა და პრიალაა.",
        "gloss": "იატაკი (пол) · სუფთა (чистый) · და პრიალაა (и блестящий)",
        "ru": "Пол чистый и блестящий.",
        "audio": "assets/audio/card_09_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: იატაკ- · С послелогом -ზე («на поверхности»): იატაკზე («на полу»). Не путайте იატაკი (пол) и სართული (этаж)!",
    "culturalNote": "В старинных крестьянских домах Восточной Грузии («дарбази») глинобитный пол и высокий ступенчатый купол-потолок «гвиргвини» создавали идеальную прохладу."
  },
  {
    "id": "card_10_1",
    "letter": "კ",
    "letterIndex": 10,
    "wordGeo": "კარი",
    "translitLat": "k'ari",
    "ipa": "[kʼɑri]",
    "translitRu": "к'ари",
    "translationRu": "Дверь / Ворота",
    "translationEn": "Door / Gate",
    "difficulty": "Средний",
    "semanticHint": "Классическая минимальная пара: с абруптивным კ — «дверь», а с придыхательным ქ — «ветер»!",
    "imageUrl": "assets/photos/card_10_1.jpg",
    "imageCaption": "Старинная резная деревянная парадная дверь в районе Сололаки",
    "photoQuery": "Carved wooden door Tbilisi heritage",
    "audioNormal": "assets/audio/card_10_1.mp3",
    "antonym": {
      "wordGeo": "კედელი",
      "translitRu": "к'эдэли",
      "ipa": "[kʼɛdɛli]",
      "translationRu": "Стена (глухая преграда)",
      "translationEn": "Wall",
      "imageUrl": "assets/photos/ant_kedeli.jpg",
      "photoQuery": "Ancient stone fortress wall Narikala",
      "audioNormal": "assets/audio/ant_kedeli.mp3"
    },
    "examples": [
      {
        "geo": "ჩვენი სახლის კარი ღიაა.",
        "gloss": "ჩვენი (нашего) · სახლის (дома) · კარი (дверь) · ღიაა (открыта есть)",
        "ru": "Дверь нашего дома открыта.",
        "audio": "assets/audio/card_10_1_ex1.mp3"
      },
      {
        "geo": "კარი დახურეთ, ქარი ქრის.",
        "gloss": "კარი (дверь) · დახურეთ (закройте) · ქარი (ветер) · ქრის (дует)",
        "ru": "Закройте дверь, дует ветер!",
        "audio": "assets/audio/card_10_1_ex2.mp3"
      },
      {
        "geo": "გთხოვთ, კარი გააღეთ.",
        "gloss": "გთხოვთ (пожалуйста) · კარი (дверь) · გააღეთ (откройте)",
        "ru": "Пожалуйста, откройте дверь.",
        "audio": "assets/audio/card_10_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: კარ- · Мн. ч.: კარები. Сравните во втором примере сразу оба слова рядом: კარი [kʼɑri] (дверь) и ქარი [kʰɑri] (ветер)!",
    "culturalNote": "Исторические парадные двери Сололаки и Чугурети в Тбилиси — настоящие шедевры деревянной резьбы эпохи модерна конца XIX века.",
    "category": "Быт",
    "articulationTip": "Сухой безаспиративный щелчок «კ» [kʼ] — следите, чтобы изо рта не выходил воздух!"
  },
  {
    "id": "card_10_2",
    "letter": "კ",
    "letterIndex": 10,
    "wordGeo": "კაცი",
    "translitLat": "k'atsi",
    "ipa": "[kʼɑtsʰi]",
    "translitRu": "к'ацʰи",
    "translationRu": "Мужчина / Человек",
    "translationEn": "Man / Person",
    "difficulty": "Начальный",
    "semanticHint": "Парное слово к «ქალი» (женщина) и корень слова «человечество» (კაცობრიობა).",
    "imageUrl": "assets/photos/card_10_2.jpg",
    "imageCaption": "Грузинский горец в традиционной войлочной шапке и чохе",
    "photoQuery": "Georgian man chokha traditional costume",
    "audioNormal": "assets/audio/card_10_2.mp3",
    "antonym": {
      "wordGeo": "ქალი",
      "translitRu": "кʰали",
      "ipa": "[kʰɑli]",
      "translationRu": "Женщина",
      "translationEn": "Woman",
      "imageUrl": "assets/photos/card_22_1.jpg",
      "photoQuery": "Georgian woman traditional dress dance",
      "audioNormal": "assets/audio/card_22_1.mp3"
    },
    "examples": [
      {
        "geo": "კარგი კაცი სოფლიდან.",
        "gloss": "კარგი (хороший/добрый) · კაცი (человек) · სოფლიდან (из деревни)",
        "ru": "Добрый человек из деревни.",
        "audio": "assets/audio/card_10_2_ex1.mp3"
      },
      {
        "geo": "კაცი და ქალი.",
        "gloss": "კაცი (мужчина) · და (и) · ქალი (женщина)",
        "ru": "Мужчина и женщина.",
        "audio": "assets/audio/card_10_2_ex2.mp3"
      },
      {
        "geo": "ეს კაცი ექიმია.",
        "gloss": "ეს (этот) · კაცი (мужчина) · ექიმია (врач есть)",
        "ru": "Этот мужчина — врач.",
        "audio": "assets/audio/card_10_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: კაც- · Мн. ч.: კაცები. В паре «კაცი — ქალი» отлично слышна разница между абруптивным კ [kʼ] и придыхательным ქ [kʰ]!",
    "culturalNote": "В Западной Грузии (Имеретии) находится знаменитый Столп Кацхи (კაცხის სვეტი) — 40-метровая известняковая скала-монолит с храмом на вершине.",
    "category": "Быт",
    "articulationTip": "Контраст внутри одного слова: сухой абруптив «კ» [kʼ] в начале и воздушное «ც» [tsʰ] во втором слоге."
  },
  {
    "id": "card_10_3",
    "letter": "კ",
    "letterIndex": 10,
    "wordGeo": "კაფე",
    "translitLat": "k'ape",
    "ipa": "[kʼɑpʰɛ]",
    "translitRu": "к'апʰэ",
    "translationRu": "Кафе / Кофейня",
    "translationEn": "Cafe",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Отличный контраст внутри короткого слова: первый слог с сухим абруптивом «კ» [kʼ], второй — с придыхательным «ფ» [pʰ]!",
    "semanticHint": "Уютное место со столиками на тротуаре на улице Ираклия II или в парке Фабрики.",
    "imageUrl": "assets/photos/card_10_3.jpg",
    "imageCaption": "Уютное уличное кафе с террасой в историческом квартале Тбилиси",
    "photoQuery": "Outdoor street cafe tables Old Tbilisi",
    "audioNormal": "assets/audio/card_10_3.mp3",
    "antonym": {
      "wordGeo": "სახლი",
      "translitRu": "sakhli",
      "ipa": "[sɑxli]",
      "translationRu": "Дом (домашняя обстановка)",
      "translationEn": "Home",
      "imageUrl": "assets/photos/card_18_3.jpg",
      "photoQuery": "Traditional Georgian house garden veranda",
      "audioNormal": "assets/audio/card_18_3.mp3"
    },
    "examples": [
      {
        "geo": "შევხვდეთ ჩვენს საყვარელ კაფეში.",
        "gloss": "შევხვდეთ (встретимся) · ჩვენს საყვარელ (в нашем любимом) · კაფეში (кафе)",
        "ru": "Давай встретимся в нашем любимом кафе.",
        "audio": "assets/audio/card_10_3_ex1.mp3"
      },
      {
        "geo": "ამ კაფეში საუკეთესო ყავაა.",
        "gloss": "ამ კაფეში (в этом кафе) · საუკეთესო (лучший) · ყავაა (кофе есть)",
        "ru": "В этом кафе готовят лучший кофе.",
        "audio": "assets/audio/card_10_3_ex2.mp3"
      },
      {
        "geo": "კაფეს ტერასა ყვავილებითაა მორთული.",
        "gloss": "კაფეს ტერასა (терраса кафе) · ყვავილებითაა (цветами) · მორთული (украшена)",
        "ru": "Терраса кафе украшена цветами.",
        "audio": "assets/audio/card_10_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа на -ე не усекается: კაფეში («в кафе»), კაფეები («кафе» во мн. ч.). Обратите внимание: европейское c/k в заимствованиях часто передаётся через «კ»!",
    "culturalNote": "В грузинском языке европейские слова (კაფე, კინო, ბანკი, პარკი, ტაქსი) почти всегда пишутся через абруптивные კ, პ, ტ — запомнив это правило, вы избежите десятков ошибок!"
  },
  {
    "id": "card_10_4",
    "letter": "კ",
    "letterIndex": 10,
    "wordGeo": "კითხვა",
    "translitLat": "k'itkhva",
    "ipa": "[kʼitʰxvɑ]",
    "translitRu": "к'итʰхва",
    "translationRu": "Чтение / Вопрос",
    "translationEn": "Reading / Question",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Сухой щелчок «კ» [kʼ] в начале и придыхательно-щелевой кластер «თხვ-» во втором слоге.",
    "semanticHint": "Удивительно ёмкое слово, означающее одновременно и «чтение книги», и «вопрос»!",
    "imageUrl": "assets/photos/card_10_4.jpg",
    "imageCaption": "Открытая книга и очки для чтения на деревянном столе у окна",
    "photoQuery": "Open book reading wooden table window light",
    "audioNormal": "assets/audio/card_10_4.mp3",
    "antonym": {
      "wordGeo": "პასუხი",
      "translitRu": "p'asukhi",
      "ipa": "[pʼɑsuxi]",
      "translationRu": "Ответ",
      "translationEn": "Answer / Reply",
      "imageUrl": "assets/photos/card_15_4.jpg",
      "photoQuery": "Handwriting letter pen notebook desk",
      "audioNormal": "assets/audio/card_15_4.mp3"
    },
    "examples": [
      {
        "geo": "მე უკვე შემიძლია ქართულად კითხვა!",
        "gloss": "მე (я) · უკვე (уже) · შემიძლია (могу) · ქართულად (по-грузински) · კითხვა (читать)!",
        "ru": "Я уже умею читать по-грузински!",
        "audio": "assets/audio/card_10_4_ex1.mp3"
      },
      {
        "geo": "ერთი კითხვა მაქვს თქვენთან.",
        "gloss": "ერთი (один) · კითხვა (вопрос) · მაქვს (имею) · თქვენთან (к вам)",
        "ru": "У меня к вам один вопрос.",
        "audio": "assets/audio/card_10_4_ex2.mp3"
      },
      {
        "geo": "კითხვა და პასუხი.",
        "gloss": "კითხვა (вопрос) · და პასუხი (и ответ)",
        "ru": "Вопрос и ответ.",
        "audio": "assets/audio/card_10_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Глагол в наст. вр. различает оттенки приставкой: მე ვკითხულობ წიგნს («я читаю книгу») и მე გეკითხებით («я спрашиваю вас»).",
    "culturalNote": "Сразу два базовых учебных значения в одной карточке: «წიგნის კითხვა» (чтение книги) и «კითხვის დასმა» (задать вопрос)."
  },
  {
    "id": "card_10_5",
    "letter": "კ",
    "letterIndex": 10,
    "wordGeo": "კბილი",
    "translitLat": "k'bili",
    "ipa": "[kʼbili]",
    "translitRu": "к'били",
    "translationRu": "Зуб / Зубчик",
    "translationEn": "Tooth / Clove",
    "difficulty": "Средний",
    "category": "Быт",
    "articulationTip": "Резкий щелчок «კ» [kʼ] без паузы переходит в звонкое «ბ» — классический гармонический комплекс «კბ-»!",
    "semanticHint": "Означает и зуб в медицине, и зубчик чеснока («ნივრის კბილი») в грузинской кулинарии.",
    "imageUrl": "assets/photos/card_10_5.jpg",
    "imageCaption": "Головки и зубчики свежего белого чеснока на кухонной доске",
    "photoQuery": "Fresh garlic cloves wooden board kitchen",
    "audioNormal": "assets/audio/card_10_5.mp3",
    "antonym": {
      "wordGeo": "ენა",
      "translitRu": "ena",
      "ipa": "[ɛnɑ]",
      "translationRu": "Язык (в пословице «зуб и язык»)",
      "translationEn": "Tongue",
      "imageUrl": "assets/photos/card_05_3.jpg",
      "photoQuery": "Georgian calligraphy manuscript book",
      "audioNormal": "assets/audio/card_05_3.mp3"
    },
    "examples": [
      {
        "geo": "კერძს ორი კბილი ნიორი სჭირდება.",
        "gloss": "კერძს (блюду) · ორი კბილი (два зубчика) · ნიორი (чеснока) · სჭირდება (нужно)",
        "ru": "Для блюда нужно два зубчика чеснока.",
        "audio": "assets/audio/card_10_5_ex1.mp3"
      },
      {
        "geo": "ბავშვს პირველი კბილი ამოუვიდა.",
        "gloss": "ბავშვს (у малыша) · პირველი კბილი (первый зуб) · ამოუვიდა (прорезался)",
        "ru": "У малыша прорезался первый зуб.",
        "audio": "assets/audio/card_10_5_ex2.mp3"
      },
      {
        "geo": "კბილის ექიმი კლინიკაში მუშაობს.",
        "gloss": "კბილის ექიმი (стоматолог) · კლინიკაში (в клинике) · მუშაობს (работает)",
        "ru": "Зубной врач работает в клинике.",
        "audio": "assets/audio/card_10_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: კბილ- · Мн. ч.: კბილები. Тот же корень мы видели в слове ტკბილი («сладкий» — приятный на зубок/вкус).",
    "culturalNote": "В грузинской кулинарии «კბილი ნიორი» (зубчик чеснока) — обязательный спутник сациви, чкмерули, лобио и пхали."
  },
  {
    "id": "card_11_1",
    "letter": "ლ",
    "letterIndex": 11,
    "wordGeo": "ლამაზი",
    "translitLat": "lamazi",
    "ipa": "[lɑmɑzi]",
    "translitRu": "ламази",
    "translationRu": "Красивый / Прекрасный",
    "translationEn": "Beautiful",
    "difficulty": "Начальный",
    "semanticHint": "Главный комплимент природе, архитектуре, музыке и людям Грузии.",
    "imageUrl": "assets/photos/card_11_1.jpg",
    "imageCaption": "Панорама монастыря Гергети на фоне облаков и горных пиков",
    "photoQuery": "Gergeti Trinity Church landscape Georgia",
    "audioNormal": "assets/audio/card_11_1.mp3",
    "antonym": {
      "wordGeo": "უშნო",
      "translitRu": "ушно",
      "ipa": "[uʃnɔ]",
      "translationRu": "Некрасивый / Невзрачный",
      "translationEn": "Ugly / Unsightly",
      "imageUrl": "assets/photos/ant_ushno.jpg",
      "photoQuery": "Ruined concrete abandoned grey wall",
      "audioNormal": "assets/audio/ant_ushno.mp3"
    },
    "examples": [
      {
        "geo": "საქართველო ძალიან ლამაზია.",
        "gloss": "საქართველო (Грузия) · ძალიან (очень) · ლამაზია (красивая есть)",
        "ru": "Грузия очень красивая.",
        "audio": "assets/audio/card_11_1_ex1.mp3"
      },
      {
        "geo": "რა ლამაზი ხედია!",
        "gloss": "რა (какой) · ლამაზი (красивый) · ხედია (вид есть)",
        "ru": "Какой красивый вид!",
        "audio": "assets/audio/card_11_1_ex2.mp3"
      },
      {
        "geo": "თბილისი ღამითაც ლამაზია.",
        "gloss": "თბილისი (Тбилиси) · ღამითაც (и ночью) · ლამაზია (красивый есть)",
        "ru": "Тбилиси красив и ночью.",
        "audio": "assets/audio/card_11_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ლამაზ- · Превосходная степень образуется префиксом უ-...-ესი: ულამაზესი («красивейший»). Три лепестка сверху = буква «ლ»!",
    "culturalNote": "Три арочных изгиба буквы «ლ» стали одним из символов грузинской каллиграфии — их часто стилизуют в виде трёх горных вершин или лепестков.",
    "category": "Прилагательные",
    "articulationTip": "Мягковатый альвеолярный «ლ» придаёт всему слову певучее звучание."
  },
  {
    "id": "card_11_2",
    "letter": "ლ",
    "letterIndex": 11,
    "wordGeo": "ლურჯი",
    "translitLat": "lurji",
    "ipa": "[lurdʒi]",
    "translitRu": "лурджи",
    "translationRu": "Синий",
    "translationEn": "Blue",
    "difficulty": "Начальный",
    "semanticHint": "Цвет высокогорного неба и знаменитых резных набивных грузинских скатертей.",
    "imageUrl": "assets/photos/card_11_2.jpg",
    "imageCaption": "Традиционная грузинская синяя скатерть «Лурджи супра» с орнаментом",
    "photoQuery": "Georgian blue tablecloth Lurji supra",
    "audioNormal": "assets/audio/card_11_2.mp3",
    "antonym": {
      "wordGeo": "ყვითელი",
      "translitRu": "къвитʰэли",
      "ipa": "[qʼvitʰɛli]",
      "translationRu": "Жёлтый / Золотистый",
      "translationEn": "Yellow",
      "imageUrl": "assets/photos/ant_qviteli.jpg",
      "photoQuery": "Golden autumn leaves Kakheti Georgia",
      "audioNormal": "assets/audio/ant_qviteli.mp3"
    },
    "examples": [
      {
        "geo": "ლურჯი სუფრა მაგიდაზეა.",
        "gloss": "ლურჯი (синяя) · სუფრა (скатерть) · მაგიდაზეა (на столе есть)",
        "ru": "Синяя скатерть лежит на столе.",
        "audio": "assets/audio/card_11_2_ex1.mp3"
      },
      {
        "geo": "კახეთის ლურჯი ცა.",
        "gloss": "კახეთის (Кахетии) · ლურჯი (синее) · ცა (небо)",
        "ru": "Синее небо Кахетии.",
        "audio": "assets/audio/card_11_2_ex2.mp3"
      },
      {
        "geo": "მას ლურჯი ქურთუკი აქვს.",
        "gloss": "მას (у него) · ლურჯი (синяя) · ქურთუკი (куртка) · აქვს (есть)",
        "ru": "У него синяя куртка.",
        "audio": "assets/audio/card_11_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ლურჯ- · На конце звонкая аффриката ჯ [dʒ] произносится слитно («лурджи»). Для голубого цвета есть отдельное слово — ცისფერი («цвета неба»).",
    "culturalNote": "«ლურჯი სუფრა» (Лурджи супра) — старинная хлопковая скатерть ручной набойки цвета индиго с оленями, птицами и рыбами, включённая в список наследия ЮНЕСКО.",
    "category": "Прилагательные",
    "articulationTip": "Плавное «ლ» в начале, чёткий «რ» и слитная звонкая аффриката «ჯ» [dʒ] на конце."
  },
  {
    "id": "card_11_3",
    "letter": "ლ",
    "letterIndex": 11,
    "wordGeo": "ლობიო",
    "translitLat": "lobio",
    "ipa": "[lɔbiɔ]",
    "translitRu": "лобио",
    "translationRu": "Фасоль / Лобио",
    "translationEn": "Beans / Lobio stew",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Мягкий «ლ» и два отчётливых круглых гласных «ო» — никогда не читайте как «лабио»!",
    "semanticHint": "Ароматное густое рагу из красной фасоли с кинзой и грецким орехом в глиняном горшочке «котани».",
    "imageUrl": "assets/photos/card_11_3.jpg",
    "imageCaption": "Традиционное грузинское лобио в глиняном горшочке со специями",
    "photoQuery": "Georgian lobio clay pot beans herbs",
    "audioNormal": "assets/audio/card_11_3.mp3",
    "antonym": {
      "wordGeo": "მჭადი",
      "translitRu": "mch'adi",
      "ipa": "[mtʃʼɑdi]",
      "translationRu": "Мчади (кукурузная лепёшка — неразлучная пара!)",
      "translationEn": "Cornbread (mchadi)",
      "imageUrl": "assets/photos/ant_mchadi.jpg",
      "photoQuery": "Golden cornbread patties rustic plate",
      "audioNormal": "assets/audio/ant_mchadi.mp3"
    },
    "examples": [
      {
        "geo": "ლობიო ქოთანში ძალიან გემრიელია.",
        "gloss": "ლობიო (лобио) · ქოთანში (в горшочке) · ძალიან გემრიელია (очень вкусное)",
        "ru": "Лобио в глиняном горшочке очень вкусное.",
        "audio": "assets/audio/card_11_3_ex1.mp3"
      },
      {
        "geo": "ცხელი ლობიო და მჭადი შევუკვეთეთ.",
        "gloss": "ცხელი (горячее) · ლობიო და მჭადი (лобио и мчади) · შევუკვეთეთ (мы заказали)",
        "ru": "Мы заказали горячее лобио и кукурузные лепёшки мчади.",
        "audio": "assets/audio/card_11_3_ex2.mp3"
      },
      {
        "geo": "რაჭული ლობიანი გიყვართ?",
        "gloss": "რაჭული (рачинский) · ლობიანი (лобиани) · გიყვართ (вы любите)?",
        "ru": "Вы любите рачинский пирог лобиани?",
        "audio": "assets/audio/card_11_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа на -ო сохраняется: ლობიოს წვნიანი. А закрытый пирог с фасолью называется ლობიანი (суффикс начинки -იანი!).",
    "culturalNote": "В горной Раче и Имеретии лобио в глиняном горшочке всегда подают с кукурузной лепёшкой «მჭადი» и квашеными бутонами джонджоли."
  },
  {
    "id": "card_11_4",
    "letter": "ლ",
    "letterIndex": 11,
    "wordGeo": "ლაპარაკი",
    "translitLat": "lap'arak'i",
    "ipa": "[lɑpʼɑrɑkʼi]",
    "translitRu": "лап'арак'и",
    "translationRu": "Разговор / Говорение",
    "translationEn": "Speaking / Talking",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Певучие сонорные «ლ» и «რ» чередуются с двумя чёткими абруптивами «პ» [pʼ] и «კ» [kʼ]!",
    "semanticHint": "Живая устная речь и ключ ко фразе «Вы говорите по-грузински?».",
    "imageUrl": "assets/photos/card_11_4.jpg",
    "imageCaption": "Двое друзей увлечённо беседуют за чашкой чая на улице города",
    "photoQuery": "Two friends talking cafe outdoor conversation",
    "audioNormal": "assets/audio/card_11_4.mp3",
    "antonym": {
      "wordGeo": "მოსმენა",
      "translitRu": "мосмэნა",
      "ipa": "[mɔsmɛnɑ]",
      "translationRu": "Слушание / Внимание",
      "translationEn": "Listening",
      "imageUrl": "assets/photos/ant_mosmena.jpg",
      "photoQuery": "Person headphones listening calm nature",
      "audioNormal": "assets/audio/ant_mosmena.mp3"
    },
    "examples": [
      {
        "geo": "ცოტა ქართულად ვლაპარაკობ.",
        "gloss": "ცოტა (немного) · ქართულად (по-грузински) · ვლაპარაკობ (я говорю)",
        "ru": "Я немного говорю по-грузински.",
        "audio": "assets/audio/card_11_4_ex1.mp3"
      },
      {
        "geo": "თქვენ ინგლისურად ლაპარაკობთ?",
        "gloss": "თქვენ (вы) · ინგლისურად (по-английски) · ლაპარაკობთ (говорите)?",
        "ru": "Вы говорите по-английски?",
        "audio": "assets/audio/card_11_4_ex2.mp3"
      },
      {
        "geo": "მეგობართან ლაპარაკი მიყვარს.",
        "gloss": "მეგობართან (с другом) · ლაპარაკი (разговаривать) · მიყვარს (люблю)",
        "ru": "Я люблю беседовать с другом.",
        "audio": "assets/audio/card_11_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Спряжение в наст. вр.: მე ვლაპარაკობ (я говорю), შენ ლაპარაკობ (ты говоришь), ის ლაპარაკობს (он говорит). Язык ставится в наречную форму на -ად: ქართულად!",
    "culturalNote": "Даже если вы скажете всего пару фраз — «ცოტა ქართულად ვლაპარაკობ» — в Грузии это вызывает искренний восторг и уважение собеседников."
  },
  {
    "id": "card_11_5",
    "letter": "ლ",
    "letterIndex": 11,
    "wordGeo": "ლაღი",
    "translitLat": "laghi",
    "ipa": "[lɑɣi]",
    "translitRu": "лагхи",
    "translationRu": "Вольный / Жизнерадостный",
    "translationEn": "Carefree / Free-spirited",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "Мягкий «ლ» в начале и звонкий велярный «ღ» [ɣ] между гласными.",
    "semanticHint": "Непринуждённый, открытый и крылатый характер, как полёт орла над горами.",
    "imageUrl": "assets/photos/card_11_5.jpg",
    "imageCaption": "Парящая птица в свободном полёте над горной долиной Кавказа",
    "photoQuery": "Eagle bird soaring blue sky mountains",
    "audioNormal": "assets/audio/card_11_5.mp3",
    "antonym": {
      "wordGeo": "შებოჭილი",
      "translitRu": "sheboch'ili",
      "ipa": "[ʃɛbɔtʃʼili]",
      "translationRu": "Скованный / Зажатый",
      "translationEn": "Constrained / Tense",
      "imageUrl": "assets/photos/ant_shebochili.jpg",
      "photoQuery": "Heavy iron lock ancient wooden gate",
      "audioNormal": "assets/audio/ant_shebochili.mp3"
    },
    "examples": [
      {
        "geo": "ბავშვებს ლაღი სიცილი აქვთ.",
        "gloss": "ბავშვებს (у детей) · ლაღი (звонкий/непринуждённый) · სიცილი (смех) · აქვთ (есть)",
        "ru": "У детей звонкий и беззаботный смех.",
        "audio": "assets/audio/card_11_5_ex1.mp3"
      },
      {
        "geo": "მთაში თავს ლაღად ვგრძნობ.",
        "gloss": "მთაში (в горах) · თავს (себя) · ლაღად (свободно/легко) · ვგრძნობ (чувствую)",
        "ru": "В горах я чувствую себя вольно и легко.",
        "audio": "assets/audio/card_11_5_ex2.mp3"
      },
      {
        "geo": "ლაღი ხასიათი ყველას იზიდავს.",
        "gloss": "ლაღი (жизнерадостный) · ხასიათი (характер) · ყველას (всех) · იზიდავს (притягивает)",
        "ru": "Открытый жизнерадостный нрав притягивает всех.",
        "audio": "assets/audio/card_11_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ლაღ- · Существительное: სილაღე («непринуждённость, душевная свобода»), наречие: ლაღად.",
    "culturalNote": "Именно слово «ლაღი» входит в знаменитую песню о Тбилиси («Тбилисо»): «სხვა საქართველო სად არის, რომელი კუთხე ქვეყნისა...» и воспевает щедрую лёгкость грузинской души."
  },
  {
    "id": "card_12_1",
    "letter": "მ",
    "letterIndex": 12,
    "wordGeo": "მზე",
    "translitLat": "mze",
    "ipa": "[mzɛ]",
    "translitRu": "мзэ",
    "translationRu": "Солнце",
    "translationEn": "Sun",
    "difficulty": "Начальный",
    "semanticHint": "Главное светило в грузинской поэзии и колыбельной песне «Мзе шина да мзе гарета».",
    "imageUrl": "assets/photos/card_12_1.jpg",
    "imageCaption": "Яркое солнце над горными долинами и храмами Грузии",
    "photoQuery": "Sun rays over Caucasus mountains Georgia",
    "audioNormal": "assets/audio/card_12_1.mp3",
    "antonym": {
      "wordGeo": "მთვარე",
      "translitRu": "мтʰварэ",
      "ipa": "[mtʰvɑrɛ]",
      "translationRu": "Луна / Месяц",
      "translationEn": "Moon",
      "imageUrl": "assets/photos/ant_mtvare.jpg",
      "photoQuery": "Full moon night sky mountains",
      "audioNormal": "assets/audio/ant_mtvare.mp3"
    },
    "examples": [
      {
        "geo": "მზე ანათებს.",
        "gloss": "მზე (солнце) · ანათებს (светит)",
        "ru": "Солнце светит.",
        "audio": "assets/audio/card_12_1_ex1.mp3"
      },
      {
        "geo": "დილით მზე ამოდის.",
        "gloss": "დილით (утром) · მზე (солнце) · ამოდის (всходит)",
        "ru": "Утром солнце всходит.",
        "audio": "assets/audio/card_12_1_ex2.mp3"
      },
      {
        "geo": "მზე მთების უკან ჩადის.",
        "gloss": "მზე (солнце) · მთების უკან (за горами) · ჩადის (садится)",
        "ru": "Солнце садится за горами.",
        "audio": "assets/audio/card_12_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: მზე- · Прилагательное: მზიანი («солнечный»). В антониме მთვარე тренируется красивый кластер მ-თ-ვ [mtʰv].",
    "culturalNote": "В грузинской культуре любимого человека ласково называют «ჩემო მზეო» («моё солнце»), а солярный коловрат «борджгали» с 7 лучами украшает монеты и паспорта Грузии.",
    "category": "Природа",
    "articulationTip": "Сомкнутые губы на «მ» сразу переходят в звонкий свистящий «ზ» и открытое «ე»."
  },
  {
    "id": "card_12_2",
    "letter": "მ",
    "letterIndex": 12,
    "wordGeo": "მაღალი",
    "translitLat": "maghali",
    "ipa": "[mɑɣɑli]",
    "translitRu": "магхали",
    "translationRu": "Высокий",
    "translationEn": "Tall / High",
    "difficulty": "Начальный",
    "semanticHint": "Описывает и пятитысячники Кавказа, и каменные родовые башни Сванетии.",
    "imageUrl": "assets/photos/card_12_2.jpg",
    "imageCaption": "Высокие средневековые сванские башни общины Ушгули (2100 м)",
    "photoQuery": "Ushguli Svaneti towers high mountains",
    "audioNormal": "assets/audio/card_12_2.mp3",
    "antonym": {
      "wordGeo": "დაბალი",
      "translitRu": "дабали",
      "ipa": "[dɑbɑli]",
      "translationRu": "Низкий / Невысокий",
      "translationEn": "Low / Short",
      "imageUrl": "assets/photos/ant_dabali.jpg",
      "photoQuery": "Colchis lowland river valley Georgia",
      "audioNormal": "assets/audio/ant_dabali.mp3"
    },
    "examples": [
      {
        "geo": "უშგულში მაღალი კოშკებია.",
        "gloss": "უშგულში (в Ушгули) · მაღალი (высокие) · კოშკებია (башни есть)",
        "ru": "В Ушгули высокие башни.",
        "audio": "assets/audio/card_12_2_ex1.mp3"
      },
      {
        "geo": "მაღალი მთა და დაბალი ველი.",
        "gloss": "მაღალი (высокая) · მთა (гора) · და (и) · დაბალი (низкая) · ველი (равнина)",
        "ru": "Высокая гора и низкая долина.",
        "audio": "assets/audio/card_12_2_ex2.mp3"
      },
      {
        "geo": "ეს ხე ძალიან მაღალია.",
        "gloss": "ეს (это) · ხე (дерево) · ძალიან (очень) · მაღალია (высокое есть)",
        "ru": "Это дерево очень высокое.",
        "audio": "assets/audio/card_12_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: მაღალ- → მაღლ- (наречие მაღლა — «высоко/наверху», антоним დაბლა — «внизу»).",
    "culturalNote": "Селение Ушгули в Верхней Сванетии (2100–2200 м над уровнем моря) — одно из самых высокогорных постоянно обитаемых поселений Европы.",
    "category": "Прилагательные",
    "articulationTip": "Между двумя гласными «ა» звучит мягкое грассирующее велярное «ღ» [ɣ]."
  },
  {
    "id": "card_12_3",
    "letter": "მ",
    "letterIndex": 12,
    "wordGeo": "მატარებელი",
    "translitLat": "mat'arebeli",
    "ipa": "[mɑtʼɑrɛbɛli]",
    "translitRu": "мат'арэбэли",
    "translationRu": "Поезд",
    "translationEn": "Train",
    "difficulty": "Начальный",
    "category": "Транспорт",
    "articulationTip": "Губной «მ» в начале и чёткий безаспиративный щелчок «ტ» [tʼ] во втором слоге.",
    "semanticHint": "Комфортабельный двухэтажный экспресс Stadler из Тбилиси к морю в Батуми.",
    "imageUrl": "assets/photos/card_12_3.jpg",
    "imageCaption": "Пассажирский поезд на фоне зелёных гор и мостов Грузии",
    "photoQuery": "Passenger train railway mountains Georgia",
    "audioNormal": "assets/audio/card_12_3.mp3",
    "antonym": {
      "wordGeo": "თვითმფრინავი",
      "translitRu": "твитмпринави",
      "ipa": "[tʰvitʰmpʰrinɑvi]",
      "translationRu": "Самолёт (воздушный транспорт)",
      "translationEn": "Airplane",
      "imageUrl": "assets/photos/ant_tvitmprinavi.jpg",
      "photoQuery": "Commercial airplane flying blue sky clouds",
      "audioNormal": "assets/audio/ant_tvitmprinavi.mp3"
    },
    "examples": [
      {
        "geo": "მატარებელი ბათუმში დილით გადის.",
        "gloss": "მატარებელი (поезд) · ბათუმში (в Батуми) · დილით (утром) · გადის (отправляется)",
        "ru": "Поезд в Батуми отправляется утром.",
        "audio": "assets/audio/card_12_3_ex1.mp3"
      },
      {
        "geo": "მატარებლით მგზავრობა ძალიან კომფორტულია.",
        "gloss": "მატარებლით (поездом) · მგზავრობა (поездка) · ძალიან კომფორტულია (очень комфортна)",
        "ru": "Путешествовать поездом очень удобно.",
        "audio": "assets/audio/card_12_3_ex2.mp3"
      },
      {
        "geo": "სად არის მატარებლის სადგური?",
        "gloss": "სად არის (где находится) · მატარებლის (железнодорожный) · სადგური (вокзал)?",
        "ru": "Где находится железнодорожный вокзал?",
        "audio": "assets/audio/card_12_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: მატარებელ- → მატარებლ- · Твор. п.: მატარებლით («на поезде»). Буквально означает «везущий / проводник»!",
    "culturalNote": "Узкоколейный поезд «Кукушка» Боржоми — Бакуриани проходит по живописному мосту, спроектированному мастерской Гюстава Эйфеля в 1902 году."
  },
  {
    "id": "card_12_4",
    "letter": "მ",
    "letterIndex": 12,
    "wordGeo": "მშიერი",
    "translitLat": "mshieri",
    "ipa": "[mʃiɛri]",
    "translitRu": "мшиэри",
    "translationRu": "Голодный",
    "translationEn": "Hungry",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Сомкнутые губы на «მ» сразу раскрываются в мягкий шипящий «შ» [mʃ].",
    "semanticHint": "Состояние перед обедом, которое в Грузии исправляют за пять минут щедрым столом!",
    "imageUrl": "assets/photos/card_12_4.jpg",
    "imageCaption": "Пустая деревянная тарелка и приборы на столе в ожидании обеда",
    "photoQuery": "Rustic wooden plate cutlery restaurant table",
    "audioNormal": "assets/audio/card_12_4.mp3",
    "antonym": {
      "wordGeo": "მაძღარი",
      "translitRu": "мадзгхари",
      "ipa": "[mɑdzɣɑri]",
      "translationRu": "Сытый",
      "translationEn": "Full / Satiated",
      "imageUrl": "assets/photos/ant_madzghari.jpg",
      "photoQuery": "Rich Georgian feast khinkali khachapuri table",
      "audioNormal": "assets/audio/ant_madzghari.mp3"
    },
    "examples": [
      {
        "geo": "ლაშქრობის შემდეგ ძალიან მშიერი ვარ.",
        "gloss": "ლაშქრობის შემდეგ (после похода) · ძალიან (очень) · მშიერი ვარ (голоден я)",
        "ru": "После похода я очень голоден.",
        "audio": "assets/audio/card_12_4_ex1.mp3"
      },
      {
        "geo": "მშია, წავიდეთ სახაჭაპურეში!",
        "gloss": "მშია (мне голодно / хочу есть) · წავიდეთ (пойдём) · სახაჭაპურეში (в хачапурную)!",
        "ru": "Я проголодался, пойдём в хачапурную!",
        "audio": "assets/audio/card_12_4_ex2.mp3"
      },
      {
        "geo": "სტუმარი მშიერი არ უნდა წავიდეს.",
        "gloss": "სტუმარი (гость) · მშიერი (голодным) · არ უნდა წავიდეს (не должен уйти)",
        "ru": "Гость ни за что не должен уйти голодным.",
        "audio": "assets/audio/card_12_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Прилагательное: მშიერი («голодный»), а разговорный глагол состояния: მე მშია («я хочу есть», ср. მე მწყურია — «я хочу пить»).",
    "culturalNote": "Пекарни и закусочные в Грузии легко узнать по приставке სა-...-ე: სახაჭაპურე (хачапурная), სახინკლე (хинкальная), საცხობი (пекарня)!"
  },
  {
    "id": "card_12_5",
    "letter": "მ",
    "letterIndex": 12,
    "wordGeo": "მშვიდი",
    "translitLat": "mshvidi",
    "ipa": "[mʃvidi]",
    "translitRu": "мшвиди",
    "translationRu": "Спокойный / Мирный",
    "translationEn": "Calm / Peaceful",
    "difficulty": "Средний",
    "category": "Эмоции",
    "articulationTip": "Красивый сонорно-шипящий аккорд «მ-შ-ვ» [mʃv] произносится плавно и умиротворённо.",
    "semanticHint": "Тихая гладь горного озера и корень всех грузинских приветствий мира («მშვიდობა»).",
    "imageUrl": "assets/photos/card_12_5.jpg",
    "imageCaption": "Тихая зеркальная гладь озера на рассвете в горах",
    "photoQuery": "Peaceful mirror mountain lake dawn Georgia",
    "audioNormal": "assets/audio/card_12_5.mp3",
    "antonym": {
      "wordGeo": "აღელვებული",
      "translitRu": "агхэлвэбули",
      "ipa": "[ɑɣɛlvɛbuli]",
      "translationRu": "Взволнованный / Бурный",
      "translationEn": "Agitated / Stormy",
      "imageUrl": "assets/photos/ant_aghelvebuli.jpg",
      "photoQuery": "Rough sea waves wind coast Batumi",
      "audioNormal": "assets/audio/ant_aghelvebuli.mp3"
    },
    "examples": [
      {
        "geo": "დღეს ზღვა ძალიან მშვიდია.",
        "gloss": "დღეს (сегодня) · ზღვა (море) · ძალიან მშვიდია (очень спокойное)",
        "ru": "Сегодня море очень спокойное.",
        "audio": "assets/audio/card_12_5_ex1.mp3"
      },
      {
        "geo": "მშვიდობა იყოს თქვენს სახლში!",
        "gloss": "მშვიდობა (мир) · იყოს (да будет) · თქვენს სახლში (в вашем доме)",
        "ru": "Мир вашему дому!",
        "audio": "assets/audio/card_12_5_ex2.mp3"
      },
      {
        "geo": "მშვიდი საღამო ოჯახთან ერთად.",
        "gloss": "მშვიდი (спокойный) · საღამო (вечер) · ოჯახთან ერთად (вместе с семьёй)",
        "ru": "Спокойный вечер вместе с семьёй.",
        "audio": "assets/audio/card_12_5_ex3.mp3"
      }
    ],
    "grammarMarker": "От корня მშვიდ- образовано главное существительное მშვიდობა («мир»): первый тост за каждым грузинским столом — «მშვიდობას გაუმარჯოს!» («За мир!»).",
    "culturalNote": "И в приветствии «დილა მშვიდობისა», и в прощании «ნახვამდის / მშვიდობით» звучит пожелание душевного покоя и мира."
  },
  {
    "id": "card_13_1",
    "letter": "ნ",
    "letterIndex": 13,
    "wordGeo": "ნათელი",
    "translitLat": "nateli",
    "ipa": "[nɑtʰɛli]",
    "translitRu": "натʰэли",
    "translationRu": "Светлый / Ясный",
    "translationEn": "Bright / Clear",
    "difficulty": "Начальный",
    "semanticHint": "Залитый дневным светом зал или чистый солнечный луч в храме Светицховели.",
    "imageUrl": "assets/photos/card_13_1.jpg",
    "imageCaption": "Лучи дневного света под сводами древнего грузинского храма",
    "photoQuery": "Svetitskhoveli Cathedral interior light Georgia",
    "audioNormal": "assets/audio/card_13_1.mp3",
    "antonym": {
      "wordGeo": "ბნელი",
      "translitRu": "бнели",
      "ipa": "[bnɛli]",
      "translationRu": "Тёмный",
      "translationEn": "Dark",
      "imageUrl": "assets/photos/card_02_2.jpg",
      "photoQuery": "Dark forest shadows evening",
      "audioNormal": "assets/audio/card_02_2.mp3"
    },
    "examples": [
      {
        "geo": "ეს ძალიან ნათელი ოთახია.",
        "gloss": "ეს (это) · ძალიან (очень) · ნათელი (светлая) · ოთახია (комната есть)",
        "ru": "Это очень светлая комната.",
        "audio": "assets/audio/card_13_1_ex1.mp3"
      },
      {
        "geo": "სინათლე და სიბნელე.",
        "gloss": "სინათლე (свет) · და (и) · სიბნელე (тьма)",
        "ru": "Свет и тьма.",
        "audio": "assets/audio/card_13_1_ex2.mp3"
      },
      {
        "geo": "დილა ნათელი და მზიანია.",
        "gloss": "დილა (утро) · ნათელი (ясное) · და მზიანია (и солнечное)",
        "ru": "Утро ясное и солнечное.",
        "audio": "assets/audio/card_13_1_ex3.mp3"
      }
    ],
    "grammarMarker": "От прилагательного ნათელი с помощью циркумфикса სი-...-ე образуется абстрактное существительное სინათლე («свет»).",
    "culturalNote": "От корня «ნათელ-» происходят грузинское имя Натела («Светлая») и слово ნათლობა (крещение — буквально «просвещение светом»).",
    "category": "Прилагательные",
    "articulationTip": "Носовой «ნ» открывает слово, а во втором слоге звучит придыхательный «თ» [tʰ]."
  },
  {
    "id": "card_13_2",
    "letter": "ნ",
    "letterIndex": 13,
    "wordGeo": "ნელი",
    "translitLat": "neli",
    "ipa": "[nɛli]",
    "translitRu": "нэли",
    "translationRu": "Медленный / Неспешный",
    "translationEn": "Slow / Gentle",
    "difficulty": "Начальный",
    "semanticHint": "Незаменимо во фразе «Говорите медленно, пожалуйста» — ნელა ილაპარაკეთ!",
    "imageUrl": "assets/photos/card_13_2.jpg",
    "imageCaption": "Спокойное медленное течение реки Куры (Мтквари) на закате",
    "photoQuery": "Mtkvari Kura river calm water Georgia",
    "audioNormal": "assets/audio/card_13_2.mp3",
    "antonym": {
      "wordGeo": "სწრაფი",
      "translitRu": "сц'рапʰи",
      "ipa": "[stsʼrɑpʰi]",
      "translationRu": "Быстрый / Скорый",
      "translationEn": "Fast / Quick",
      "imageUrl": "assets/photos/card_26_1.jpg",
      "photoQuery": "Mountain river rapids Aragvi Georgia",
      "audioNormal": "assets/audio/ant_stsrapi.mp3"
    },
    "examples": [
      {
        "geo": "ნელა ილაპარაკეთ, გთხოვთ.",
        "gloss": "ნელა (медленно) · ილაპარაკეთ (говорите) · გთხოვთ (прошу вас)",
        "ru": "Говорите медленно, пожалуйста.",
        "audio": "assets/audio/card_13_2_ex1.mp3"
      },
      {
        "geo": "ნელი ნაბიჯით სეირნობა.",
        "gloss": "ნელი (медленным) · ნაბიჯით (шагом) · სეირნობა (прогулка)",
        "ru": "Прогулка неспешным шагом.",
        "audio": "assets/audio/card_13_2_ex2.mp3"
      },
      {
        "geo": "ეს ნელი მატარებელია.",
        "gloss": "ეს (это) · ნელი (медленный) · მატარებელია (поезд есть)",
        "ru": "Это неспешный пассажирский поезд.",
        "audio": "assets/audio/card_13_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Прилагательное: ნელი (медленный) → наречие на -ა: ნელა (медленно) → удвоение ნელ-ნელა («потихоньку, шаг за шагом»).",
    "culturalNote": "Любимое грузинское выражение «ნელ-ნელა» (нел-нела — «понемногу, не спеша») отражает размеренную философию жизни и удовольствия от момента.",
    "category": "Транспорт",
    "articulationTip": "Чистое твёрдое «ნ» перед «ე» — не смягчайте его так сильно, как в русском слове «небо»!"
  },
  {
    "id": "card_13_3",
    "letter": "ნ",
    "letterIndex": 13,
    "wordGeo": "ნაყინი",
    "translitLat": "naq'ini",
    "ipa": "[nɑqʼini]",
    "translitRu": "накъини",
    "translationRu": "Мороженое",
    "translationEn": "Ice cream",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Между двумя носовыми «ნ» в середине слова отчётливо щёлкает глубокий гортанный «ყ» [qʼ]!",
    "semanticHint": "Любимое летнее лакомство на бульваре Батуми или с добавлением красного вина Саперави в Сигнахи.",
    "imageUrl": "assets/photos/card_13_3.jpg",
    "imageCaption": "Шарики сливочного и ягодного мороженого в вафельном рожке",
    "photoQuery": "Artisan ice cream scoop cone berry",
    "audioNormal": "assets/audio/card_13_3.mp3",
    "antonym": {
      "wordGeo": "ცხელი ჩაი",
      "translitRu": "цʰхэли чʰаи",
      "ipa": "[tsʰxɛli tʃʰɑi]",
      "translationRu": "Горячий чай (согревающий контраст)",
      "translationEn": "Hot tea",
      "imageUrl": "assets/photos/card_26_3.jpg",
      "photoQuery": "Hot black tea glass cup steaming",
      "audioNormal": "assets/audio/card_26_3.mp3"
    },
    "examples": [
      {
        "geo": "ზაფხულში ვანილის ნაყინი მიყვარს.",
        "gloss": "ზაფხულში (летом) · ვანილის (ванильное) · ნაყინი (мороженое) · მიყვარს (люблю)",
        "ru": "Летом я люблю ванильное мороженое.",
        "audio": "assets/audio/card_13_3_ex1.mp3"
      },
      {
        "geo": "ბავშვმა შოკოლადის ნაყინი აირჩია.",
        "gloss": "ბავშვმა (ребёнок) · შოკოლადის (шоколадное) · ნაყინი (мороженое) · აირჩია (выбрал)",
        "ru": "Ребёнок выбрал шоколадное мороженое.",
        "audio": "assets/audio/card_13_3_ex2.mp3"
      },
      {
        "geo": "კახეთში ღვინის ნაყინი გავსინჯეთ!",
        "gloss": "კახეთში (в Кахетии) · ღვინის (винное) · ნაყინი (мороженое) · გავსინჯეთ (попробовали)",
        "ru": "В Кахетии мы попробовали винное мороженое!",
        "audio": "assets/audio/card_13_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Образовано приставкой причастия ნა- от корня ყინ- («лёд, замораживать», ср. ყინული — лёд): буквально «замороженное»!",
    "culturalNote": "На горе Мтацминда и в винных городках Кахетии туристам предлагают необычное домашнее мороженое из Саперави и чурчхелы."
  },
  {
    "id": "card_13_4",
    "letter": "ნ",
    "letterIndex": 13,
    "wordGeo": "ნახვა",
    "translitLat": "nakhva",
    "ipa": "[nɑxvɑ]",
    "translitRu": "нахва",
    "translationRu": "Встреча / Увидеть",
    "translationEn": "Seeing / Meeting",
    "difficulty": "Начальный",
    "category": "Действия",
    "articulationTip": "Чёткий носовой «ნ» в начале и энергичная связка «ხვ-» [xv] на стыке слогов.",
    "semanticHint": "Основа самого главного грузинского прощания «До свидания!» — ნახვამდის!",
    "imageUrl": "assets/photos/card_13_4.jpg",
    "imageCaption": "Тёплая встреча друзей на залитой солнцем городской площади",
    "photoQuery": "Friends greeting street square sunny day",
    "audioNormal": "assets/audio/card_13_4.mp3",
    "antonym": {
      "wordGeo": "განშორება",
      "translitRu": "ганшорэба",
      "ipa": "[ɡɑnʃɔrɛbɑ]",
      "translationRu": "Разлука / Прощание",
      "translationEn": "Parting / Separation",
      "imageUrl": "assets/photos/ant_ganshoreba.jpg",
      "photoQuery": "Train departing railway tracks sunset",
      "audioNormal": "assets/audio/ant_ganshoreba.mp3"
    },
    "examples": [
      {
        "geo": "ნახვამდის, ხვალ შევხვდებით!",
        "gloss": "ნახვამდის (до свидания) · ხვალ (завтра) · შევხვდებით (встретимся)",
        "ru": "До свидания, увидимся завтра!",
        "audio": "assets/audio/card_13_4_ex1.mp3"
      },
      {
        "geo": "მიხარია თქვენი ნახვა!",
        "gloss": "მიხარია (мне радостно) · თქვენი (вас) · ნახვა (видеть)",
        "ru": "Рад вас видеть!",
        "audio": "assets/audio/card_13_4_ex2.mp3"
      },
      {
        "geo": "ამ ფილმის ნახვა გვინდა.",
        "gloss": "ამ ფილმის (этого фильма) · ნახვა (просмотр) · გვინდა (мы хотим)",
        "ru": "Мы хотим посмотреть этот фильм.",
        "audio": "assets/audio/card_13_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Буквальный разбор слова ნახვამდის: ნახვა («видение, встреча») + послелог -მდის/-მდე («до») = точнейшая калька «До свидания»!",
    "culturalNote": "Фраза «მიხარია შენი/თქვენი ნახვა!» («Рад тебя/вас видеть!») мгновенно создаёт тёплый контакт при любой встрече."
  },
  {
    "id": "card_13_5",
    "letter": "ნ",
    "letterIndex": 13,
    "wordGeo": "ნიგოზი",
    "translitLat": "nigozi",
    "ipa": "[niɡɔzi]",
    "translitRu": "нигози",
    "translationRu": "Грецкий орех (очищенный)",
    "translationEn": "Walnut",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Все три согласные в слове звонкие и певучие: «ნ», взрывной «გ» и свистящий «ზ».",
    "semanticHint": "Золотое сердце грузинской кухни — основа баже, сациви, пхали, харчо и чурчхелы!",
    "imageUrl": "assets/photos/card_13_5.jpg",
    "imageCaption": "Ядра отборного грецкого ореха в деревянной пиале",
    "photoQuery": "Walnut kernels wooden bowl rustic table",
    "audioNormal": "assets/audio/card_13_5.mp3",
    "antonym": {
      "wordGeo": "თხილი",
      "translitRu": "тʰхили",
      "ipa": "[tʰxili]",
      "translationRu": "Фундук / Лесной орех",
      "translationEn": "Hazelnut",
      "imageUrl": "assets/photos/ant_tkhili.jpg",
      "photoQuery": "Hazelnuts shells wooden basket harvest",
      "audioNormal": "assets/audio/ant_tkhili.mp3"
    },
    "examples": [
      {
        "geo": "ბადრიჯანი ნიგვზით ქართული კლასიკაა.",
        "gloss": "ბადრიჯანი (баклажаны) · ნიგვზით (с грецким орехом) · ქართული კლასიკაა (грузинская классика)",
        "ru": "Рулетики из баклажанов с орехами — классика грузинской кухни.",
        "audio": "assets/audio/card_13_5_ex1.mp3"
      },
      {
        "geo": "საცივს ბევრი ნიგოზი სჭირდება.",
        "gloss": "საცივს (для сациви) · ბევრი ნიგოზი (много орехов) · სჭირდება (требуется)",
        "ru": "Для сациви нужно много грецких орехов.",
        "audio": "assets/audio/card_13_5_ex2.mp3"
      },
      {
        "geo": "ნიგვზიანი ხარჩო ძალიან ნოყიერია.",
        "gloss": "ნიგვზიანი (ореховое) · ხარჩო (харчо) · ძალიან ნოყიერია (очень сытное)",
        "ru": "Мегрельское харчо с орехами очень сытное.",
        "audio": "assets/audio/card_13_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Важное чередование основы при склонении: ნიგოზ- → ნიგვზ- (огубленное ო превращается в ვ: ნიგვზით — «с орехами», ნიგვზიანი — «ореховый»)!",
    "culturalNote": "В грузинском различают: კაკალი — целый орех в скорлупе (и само дерево), а ნიგოზი — очищенное ядро грецкого ореха для блюд!"
  },
  {
    "id": "card_14_1",
    "letter": "ო",
    "letterIndex": 14,
    "wordGeo": "ოქრო",
    "translitLat": "okro",
    "ipa": "[ɔkʰrɔ]",
    "translitRu": "окʰро",
    "translationRu": "Золото",
    "translationEn": "Gold",
    "difficulty": "Начальный",
    "semanticHint": "Драгоценный металл древней Колхиды, за которым плыли аргонавты Ясона.",
    "imageUrl": "assets/photos/card_14_1.jpg",
    "imageCaption": "Древнее ювелирное искусство Колхиды в Национальном музее Грузии",
    "photoQuery": "Ancient Georgian gold Colchis museum",
    "audioNormal": "assets/audio/card_14_1.mp3",
    "antonym": {
      "wordGeo": "ვერცხლი",
      "translitRu": "вэрцʰхли",
      "ipa": "[vɛrtsʰxli]",
      "translationRu": "Серебро",
      "translationEn": "Silver",
      "imageUrl": "assets/photos/ant_vertskhli.jpg",
      "photoQuery": "Silver filigree dagger traditional Caucasus",
      "audioNormal": "assets/audio/ant_vertskhli.mp3"
    },
    "examples": [
      {
        "geo": "კოლხური ოქრო უნიკალურია.",
        "gloss": "კოლხური (колхидское) · ოქრო (золото) · უნიკალურია (уникально есть)",
        "ru": "Колхидское золото уникально.",
        "audio": "assets/audio/card_14_1_ex1.mp3"
      },
      {
        "geo": "ოქროს შემოდგომა კახეთში.",
        "gloss": "ოქროს (золотая) · შემოდგომა (осень) · კახეთში (в Кахетии)",
        "ru": "Золотая осень в Кахетии.",
        "audio": "assets/audio/card_14_1_ex2.mp3"
      },
      {
        "geo": "ოქროს ბეჭედი მაგიდაზეა.",
        "gloss": "ოქროს (золотое) · ბეჭედი (кольцо) · მაგიდაზეა (на столе есть)",
        "ru": "Золотое кольцо лежит на столе.",
        "audio": "assets/audio/card_14_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Обе гласные «ო» в начале и на конце слова звучат чётко как [о] — в грузинском языке никогда не «акают»! Род. п.: ოქროს («золотой»).",
    "culturalNote": "Археологический рудник Сакдриси на юге Грузии и сокровища Вани доказали, что миф о Золотом руне Колхиды опирался на реальное древнейшее золотодобывание.",
    "category": "Быт",
    "articulationTip": "Обе буквы «ო» — ударная и конечная — звучат одинаково кругло как чистый звук [о]!"
  },
  {
    "id": "card_14_2",
    "letter": "ო",
    "letterIndex": 14,
    "wordGeo": "ოჯახი",
    "translitLat": "ojakhi",
    "ipa": "[ɔdʒɑxi]",
    "translitRu": "оджахи",
    "translationRu": "Семья / Домашний очаг",
    "translationEn": "Family / Household",
    "difficulty": "Начальный",
    "semanticHint": "Главная ценность грузинского общества и традиционный тост за праздничным столом.",
    "imageUrl": "assets/photos/card_14_2.jpg",
    "imageCaption": "Щедрое семейное застолье (супра) под открытым небом",
    "photoQuery": "Georgian supra feast table traditional food",
    "audioNormal": "assets/audio/card_14_2.mp3",
    "antonym": {
      "wordGeo": "მარტოობა",
      "translitRu": "март'ооба",
      "ipa": "[mɑrtʼɔɔbɑ]",
      "translationRu": "Одиночество / Уединение",
      "translationEn": "Solitude / Loneliness",
      "imageUrl": "assets/photos/ant_martooba.jpg",
      "photoQuery": "Solitary bench misty mountain viewpoint",
      "audioNormal": "assets/audio/ant_martooba.mp3"
    },
    "examples": [
      {
        "geo": "ჩემი ოჯახი თბილისში ცხოვრობს.",
        "gloss": "ჩემი (моя) · ოჯახი (семья) · თბილისში (в Тбилиси) · ცხოვრობს (живёт)",
        "ru": "Моя семья живёт в Тбилиси.",
        "audio": "assets/audio/card_14_2_ex1.mp3"
      },
      {
        "geo": "ოჯახი სუფრასთან იკრიბება.",
        "gloss": "ოჯახი (семья) · სუფრასთან (у стола) · იკრიბება (собирается)",
        "ru": "Семья собирается за столом.",
        "audio": "assets/audio/card_14_2_ex2.mp3"
      },
      {
        "geo": "მთელი ოჯახი ერთადაა.",
        "gloss": "მთელი (вся) · ოჯახი (семья) · ერთადაა (вместе есть)",
        "ru": "Вся семья в сборе.",
        "audio": "assets/audio/card_14_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ოჯახ- · Мн. ч.: ოჯახები. Хорошо знакомое блюдо «оджахури» (ოჯახური) буквально переводится как «по-семейному / по-домашнему»!",
    "culturalNote": "Зная слово «ოჯახი», вы сразу поймёте слово «ოჯახური» (жаркое по-семейному на глиняной кеци) и «საოჯახო სასტუმრო» (семейный гостевой дом).",
    "category": "Эмоции",
    "articulationTip": "Круглый гласный «ო» переходит в звонкую слитную аффрикату «ჯ» [dʒ] и глубокое «ხ»."
  },
  {
    "id": "card_14_3",
    "letter": "ო",
    "letterIndex": 14,
    "wordGeo": "ოთახი",
    "translitLat": "otakhi",
    "ipa": "[ɔtʰɑxi]",
    "translitRu": "отʰахи",
    "translationRu": "Комната / Номер",
    "translationEn": "Room",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Чистый круглый «ო» в начале, придыхательный «თ» [tʰ] в середине и глубокий «ხ» на конце.",
    "semanticHint": "Уютная гостиная дома или номер в бутик-отеле с видом на горы.",
    "imageUrl": "assets/photos/card_14_3.jpg",
    "imageCaption": "Светлая уютная комната с деревянной мебелью и видом из окна",
    "photoQuery": "Cozy bright bedroom interior window view",
    "audioNormal": "assets/audio/card_14_3.mp3",
    "antonym": {
      "wordGeo": "აივანი",
      "translitRu": "aivani",
      "ipa": "[ɑivɑni]",
      "translationRu": "Открытый балкон (наружное пространство)",
      "translationEn": "Open balcony",
      "imageUrl": "assets/photos/card_01_3.jpg",
      "photoQuery": "Open wooden balcony Old Tbilisi view",
      "audioNormal": "assets/audio/card_01_3.mp3"
    },
    "examples": [
      {
        "geo": "სასტუმროში ორადგილიანი ოთახი დავჯავშნეთ.",
        "gloss": "სასტუმროში (в отеле) · ორადგილიანი (двухместный) · ოთახი (номер) · დავჯავშნეთ (мы забронировали)",
        "ru": "В отеле мы забронировали двухместный номер.",
        "audio": "assets/audio/card_14_3_ex1.mp3"
      },
      {
        "geo": "ჩემი ოთახი მესამე სართულზეა.",
        "gloss": "ჩემი ოთახი (моя комната) · მესამე სართულზეა (на третьем этаже)",
        "ru": "Моя комната на третьем этаже.",
        "audio": "assets/audio/card_14_3_ex2.mp3"
      },
      {
        "geo": "სასტუმრო ოთახი ნათელი და თბილია.",
        "gloss": "სასტუმრო ოთახი (гостиная) · ნათელი (светлая) · და თბილია (и тёплая)",
        "ru": "Гостиная светлая и тёплая.",
        "audio": "assets/audio/card_14_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ოთახ- · Мн. ч.: ოთახები · Местный п.: ოთახში («в комнате»). Двухкомнатная квартира — ოროთახიანი ბინა.",
    "culturalNote": "При бронировании жилья запомните связку: ოთახი — комната/номер в отеле, ბინა — квартира, სახლი — дом."
  },
  {
    "id": "card_14_4",
    "letter": "ო",
    "letterIndex": 14,
    "wordGeo": "ორი",
    "translitLat": "ori",
    "ipa": "[ɔri]",
    "translitRu": "ори",
    "translationRu": "Два",
    "translationEn": "Two",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Чёткий округлый звук «ო» и раскатистый одноударный «რ»: [ɔri].",
    "semanticHint": "Пара бокалов вина, два билета на канатную дорогу или слияние двух рек в Мцхете.",
    "imageUrl": "assets/photos/card_14_4.jpg",
    "imageCaption": "Слияние двух рек — Арагви и Куры — у древней Мцхеты",
    "photoQuery": "Confluence two rivers Mtskheta Jvari Georgia",
    "audioNormal": "assets/audio/card_14_4.mp3",
    "antonym": {
      "wordGeo": "ერთი",
      "translitRu": "erti",
      "ipa": "[ɛrtʰi]",
      "translationRu": "Один",
      "translationEn": "One",
      "imageUrl": "assets/photos/card_05_2.jpg",
      "photoQuery": "Single watchtower Svaneti mountains",
      "audioNormal": "assets/audio/card_05_2.mp3"
    },
    "examples": [
      {
        "geo": "ორი ფინჯანი ჩაი, გთხოვთ.",
        "gloss": "ორი (две) · ფინჯანი (чашки) · ჩაი (чая) · გთხოვთ (пожалуйста)",
        "ru": "Две чашки чая, пожалуйста.",
        "audio": "assets/audio/card_14_4_ex1.mp3"
      },
      {
        "geo": "მცხეთასთან ორი მდინარე ერთდება.",
        "gloss": "მცხეთასთან (у Мцхеты) · ორი მდინარე (две реки) · ერთდება (сливаются)",
        "ru": "У Мцхеты сливаются две реки.",
        "audio": "assets/audio/card_14_4_ex2.mp3"
      },
      {
        "geo": "ორივე მეგობარი თბილისში ცხოვრობს.",
        "gloss": "ორივე (оба) · მეგობარი (друга) · თბილისში ცხოვრობს (живут в Тбилиси)",
        "ru": "Оба друга живут в Тбилиси.",
        "audio": "assets/audio/card_14_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Напоминание: после числительных существительное не принимает -ები! Говорим строго ორი ბილეთი («два билета»), ორი დღე («два дня»).",
    "culturalNote": "Прибавив частицу -ვე к числительному, получаем собирательное слово: ორი → ორივე («оба / обе»), სამი → სამივე («все трое»)!"
  },
  {
    "id": "card_14_5",
    "letter": "ო",
    "letterIndex": 14,
    "wordGeo": "ოცნება",
    "translitLat": "otsneba",
    "ipa": "[ɔtsʰnɛbɑ]",
    "translitRu": "оцʰнэба",
    "translationRu": "Мечта",
    "translationEn": "Dream / Wish",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "Круглый гласный «ო» переходит в придыхательный свистящий «ც» [tsʰ] перед носовым «ნ».",
    "semanticHint": "Заветное желание побывать во всех уголках Грузии от Сванетии до Кахетии.",
    "imageUrl": "assets/photos/card_14_5.jpg",
    "imageCaption": "Звёздное небо и Млечный Путь над силуэтами гор Кавказа",
    "photoQuery": "Starry night sky Milky Way mountains Caucasus",
    "audioNormal": "assets/audio/card_14_5.mp3",
    "antonym": {
      "wordGeo": "რეალობა",
      "translitRu": "рэалоба",
      "ipa": "[rɛɑlɔbɑ]",
      "translationRu": "Реальность / Явь",
      "translationEn": "Reality",
      "imageUrl": "assets/photos/ant_realoba.jpg",
      "photoQuery": "Busy morning city street tram daylight",
      "audioNormal": "assets/audio/ant_realoba.mp3"
    },
    "examples": [
      {
        "geo": "სვანეთში წასვლა ჩემი ოცნება იყო.",
        "gloss": "სვანეთში წასვლა (поездка в Сванетию) · ჩემი ოცნება იყო (была моей мечтой)",
        "ru": "Поездка в Сванетию была моей мечтой.",
        "audio": "assets/audio/card_14_5_ex1.mp3"
      },
      {
        "geo": "ოცნება რეალობად იქცა!",
        "gloss": "ოცნება (мечта) · რეალობად (в реальность) · იქცა (превратилась)",
        "ru": "Мечта стала реальностью!",
        "audio": "assets/audio/card_14_5_ex2.mp3"
      },
      {
        "geo": "რაზე ოცნებობ?",
        "gloss": "რაზე (о чём) · ოცნებობ (ты мечтаешь)?",
        "ru": "О чём ты мечтаешь?",
        "audio": "assets/audio/card_14_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Существительное: ოცნება («мечта», мн. ч. ოცნებები) · Глагол: მე ვოცნებობ («я мечтаю»). Не путайте с სიზმარი («сон во сне»)!",
    "culturalNote": "В грузинском чётко разграничены два слова: სიზმარი — сновидение ночью, а ოცნება — заветная мечта наяву."
  },
  {
    "id": "card_15_1",
    "letter": "პ",
    "letterIndex": 15,
    "wordGeo": "პატარა",
    "translitLat": "p'at'ara",
    "ipa": "[pʼɑtʼɑrɑ]",
    "translitRu": "п'ат'ара",
    "translationRu": "Маленький",
    "translationEn": "Small / Little",
    "difficulty": "Начальный",
    "semanticHint": "Прямая противоположность слову «დიდი» (большой). Содержит сразу два абруптивных звука: პ и ტ!",
    "imageUrl": "assets/photos/card_15_1.jpg",
    "imageCaption": "Уединённая маленькая каменная часовня на зелёном склоне гор",
    "photoQuery": "Small stone church Caucasus mountains Georgia",
    "audioNormal": "assets/audio/card_15_1.mp3",
    "antonym": {
      "wordGeo": "დიდი",
      "translitRu": "диди",
      "ipa": "[didi]",
      "translationRu": "Большой",
      "translationEn": "Big / Large",
      "imageUrl": "assets/photos/card_04_1.jpg",
      "photoQuery": "Mount Kazbek huge mountain Georgia",
      "audioNormal": "assets/audio/card_04_1.mp3"
    },
    "examples": [
      {
        "geo": "მთაში პატარა სოფელია.",
        "gloss": "მთაში (в горах) · პატარა (маленькая) · სოფელია (деревня есть)",
        "ru": "В горах расположена маленькая деревня.",
        "audio": "assets/audio/card_15_1_ex1.mp3"
      },
      {
        "geo": "დიდი და პატარა.",
        "gloss": "დიდი (большой / стар) · და (и) · პატარა (маленький / млад)",
        "ru": "Большой и маленький (и стар и млад).",
        "audio": "assets/audio/card_15_1_ex2.mp3"
      },
      {
        "geo": "აქ პატარა კაფეა.",
        "gloss": "აქ (здесь) · პატარა (маленькое) · კაფეა (кафе есть)",
        "ru": "Здесь маленькое уютное кафе.",
        "audio": "assets/audio/card_15_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Мн. ч. при субстантивации: პატარები («малыши»). Следите, чтобы ни после პ, ни после ტ не было придыхания: сухой чёткий ритм п’-а-т’-а-ра.",
    "culturalNote": "Знаменитая песня Вахтанга Кикабидзе и Орэра о Тбилиси и маленьких двориках сделала ласковое слово «პატარა» узнаваемым далеко за пределами Грузии.",
    "category": "Прилагательные",
    "articulationTip": "Двойная тренировка абруптивов без выдоха: губной «პ» [pʼ] и зубной «ტ» [tʼ]!"
  },
  {
    "id": "card_15_2",
    "letter": "პ",
    "letterIndex": 15,
    "wordGeo": "პირველი",
    "translitLat": "p'irveli",
    "ipa": "[pʼirvɛli]",
    "translitRu": "п'ирвэли",
    "translationRu": "Первый",
    "translationEn": "First",
    "difficulty": "Начальный",
    "semanticHint": "Открывает порядковые числительные, меню, этажи и исторические вехи.",
    "imageUrl": "assets/photos/card_15_2.jpg",
    "imageCaption": "Здание классической Первой гимназии на проспекте Руставели в Тбилиси",
    "photoQuery": "Rustaveli Avenue historic building Tbilisi",
    "audioNormal": "assets/audio/card_15_2.mp3",
    "antonym": {
      "wordGeo": "ბოლო",
      "translitRu": "боло",
      "ipa": "[bɔlɔ]",
      "translationRu": "Последний / Конечный",
      "translationEn": "Last / Final",
      "imageUrl": "assets/photos/ant_bolo.jpg",
      "photoQuery": "Mountain trail end horizon sunset",
      "audioNormal": "assets/audio/ant_bolo.mp3"
    },
    "examples": [
      {
        "geo": "ეს ჩემი პირველი გაკვეთილია.",
        "gloss": "ეს (это) · ჩემი (мой) · პირველი (первый) · გაკვეთილია (урок есть)",
        "ru": "Это мой первый урок.",
        "audio": "assets/audio/card_15_2_ex1.mp3"
      },
      {
        "geo": "პირველი და ბოლო გაჩერება.",
        "gloss": "პირველი (первая) · და (и) · ბოლო (последняя) · გაჩერება (остановка)",
        "ru": "Первая и последняя остановка.",
        "audio": "assets/audio/card_15_2_ex2.mp3"
      },
      {
        "geo": "პირველი სართული აქ არის.",
        "gloss": "პირველი (первый) · სართული (этаж) · აქ არის (здесь находится)",
        "ru": "Первый этаж находится здесь.",
        "audio": "assets/audio/card_15_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Исключение в числительных: все остальные порядковые числительные образуются приставкой მე-...-ე (მეორე — второй, მესამე — третий), и только «первый» — პირველი!",
    "culturalNote": "В Дманиси (Квемо-Картли) археологи нашли древнейших гоминидов Евразии возрастом 1,8 млн лет — Зезва и Мзия официально признаны «первыми европейцами»!",
    "category": "Город",
    "articulationTip": "Резкий сухой щелчок губами «პ» [pʼ] перед «ი» и звонкой парой «რვ-»."
  },
  {
    "id": "card_15_3",
    "letter": "პ",
    "letterIndex": 15,
    "wordGeo": "პური",
    "translitLat": "p'uri",
    "ipa": "[pʼuri]",
    "translitRu": "п'ури",
    "translationRu": "Хлеб",
    "translationEn": "Bread",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Плотно сомкните губы и резко разомкните их без выдоха на «პ» [pʼ] перед глубоким «უ».",
    "semanticHint": "Горячий румяный хлеб-лодочка «шотис пури», только что снятый со стенки глиняной печи тонэ!",
    "imageUrl": "assets/photos/card_15_3.jpg",
    "imageCaption": "Традиционный грузинский хлеб шоти из глиняной печи тонэ",
    "photoQuery": "Shotis puri Georgian bread tone bakery",
    "audioNormal": "assets/audio/card_15_3.mp3",
    "antonym": {
      "wordGeo": "ყველი",
      "translitRu": "q'veli",
      "ipa": "[qʼvɛli]",
      "translationRu": "Сыр (неразлучная гастрономическая пара к хлебу)",
      "translationEn": "Cheese",
      "imageUrl": "assets/photos/mp_qveli.jpg",
      "photoQuery": "Sulguni Georgian white cheese wheel",
      "audioNormal": "assets/audio/mp_qveli.mp3"
    },
    "examples": [
      {
        "geo": "თონის ცხელი პური ვიყიდე.",
        "gloss": "თონის (из печи тонэ) · ცხელი (горячий) · პური (хлеб) · ვიყიდე (я купил)",
        "ru": "Я купил горячий хлеб из печи тонэ.",
        "audio": "assets/audio/card_15_3_ex1.mp3"
      },
      {
        "geo": "პური და ყველი გზაში საუკეთესოა.",
        "gloss": "პური და ყველი (хлеб и сыр) · გზაში (в дороге) · საუკეთესოა (лучшее)",
        "ru": "Хлеб и сыр — лучшая еда в дорогу.",
        "audio": "assets/audio/card_15_3_ex2.mp3"
      },
      {
        "geo": "აქ გემრიელ პურს აცხობენ.",
        "gloss": "აქ (здесь) · გემრიელ პურს (вкусный хлеб) · აცხობენ (пекут)",
        "ru": "Здесь пекут вкусный хлеб.",
        "audio": "assets/audio/card_15_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: პურ- · Видимо, самое продуктивное слово гастрономии: ხაჭაპური («творожный хлеб»), პურ-მარილი («хлеб-соль, угощение»).",
    "culturalNote": "Выражение «პურის ჭამა» (буквально «вкушение хлеба») в Грузии означает целое дружеское застолье!"
  },
  {
    "id": "card_15_4",
    "letter": "პ",
    "letterIndex": 15,
    "wordGeo": "პასუხი",
    "translitLat": "p'asukhi",
    "ipa": "[pʼɑsuxi]",
    "translitRu": "п'асухи",
    "translationRu": "Ответ",
    "translationEn": "Answer / Response",
    "difficulty": "Начальный",
    "category": "Действия",
    "articulationTip": "Чёткий губной щелчок «პ» [pʼ] без придыхания в начале и глубокое «ხ» на конце.",
    "semanticHint": "Отклик на вопрос учителя, сообщение друга или решение загадки в викторине.",
    "imageUrl": "assets/photos/card_15_4.jpg",
    "imageCaption": "Ручка и открытый блокнот с записями на деревянном столе",
    "photoQuery": "Fountain pen notebook desk writing study",
    "audioNormal": "assets/audio/card_15_4.mp3",
    "antonym": {
      "wordGeo": "კითხვა",
      "translitRu": "k'itkhva",
      "ipa": "[kʼitʰxvɑ]",
      "translationRu": "Вопрос",
      "translationEn": "Question",
      "imageUrl": "assets/photos/card_10_4.jpg",
      "photoQuery": "Open book study desk library",
      "audioNormal": "assets/audio/card_10_4.mp3"
    },
    "examples": [
      {
        "geo": "ეს სწორი პასუხია!",
        "gloss": "ეს (это) · სწორი (правильный) · პასუხია (ответ есть)!",
        "ru": "Это правильный ответ!",
        "audio": "assets/audio/card_15_4_ex1.mp3"
      },
      {
        "geo": "თქვენს წერილზე პასუხს ველოდები.",
        "gloss": "თქვენს წერილზე (на ваше письмо) · პასუხს (ответа) · ველოდები (жду)",
        "ru": "Жду ответа на ваше письмо.",
        "audio": "assets/audio/card_15_4_ex2.mp3"
      },
      {
        "geo": "გთხოვთ, მიპასუხოთ კითხვაზე.",
        "gloss": "გთხოვთ (прошу) · მიპასუხოთ (ответить мне) · კითხვაზე (на вопрос)",
        "ru": "Пожалуйста, ответьте мне на вопрос.",
        "audio": "assets/audio/card_15_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: პასუხ- · Глагол: პასუხობს («отвечает»). Прилагательное სწორი означает «правильный / верный / прямой».",
    "culturalNote": "Запомните слово «უპასუხისმგებლო» и его позитивную основу პასუხისმგებლობა — «ответственность» (буквально «отдавание ответа»)."
  },
  {
    "id": "card_15_5",
    "letter": "პ",
    "letterIndex": 15,
    "wordGeo": "პატივისცემა",
    "translitLat": "p'at'ivistsema",
    "ipa": "[pʼɑtʼivistsʰɛmɑ]",
    "translitRu": "п'ат'ивисцʰэма",
    "translationRu": "Уважение / Почтение",
    "translationEn": "Respect / Honor",
    "difficulty": "Сложный",
    "category": "Эмоции",
    "articulationTip": "Сразу два сухих абруптива «პ» и «ტ» в начале и воздушная придыхательная «ც» [tsʰ] ближе к концу.",
    "semanticHint": "Основа грузинского этикета по отношению к старшим, гостям и культуре.",
    "imageUrl": "assets/photos/card_15_5.jpg",
    "imageCaption": "Традиционный тост с рогом канци в знак глубокого уважения",
    "photoQuery": "Georgian drinking horn kantsi wine tradition",
    "audioNormal": "assets/audio/card_15_5.mp3",
    "antonym": {
      "wordGeo": "უპატივცემულობა",
      "translitRu": "up'at'ivtsemuloba",
      "ipa": "[upʼɑtʼivtsʰɛmulɔbɑ]",
      "translationRu": "Неуважение",
      "translationEn": "Disrespect",
      "imageUrl": "assets/photos/ant_uzrdeli.jpg",
      "photoQuery": "Turned away silhouette cold street",
      "audioNormal": "assets/audio/ant_uzrdeli.mp3"
    },
    "examples": [
      {
        "geo": "უფროსების პატივისცემა ტრადიციაა.",
        "gloss": "უფროსების (старших) · პატივისცემა (уважение) · ტრადიციაა (традиция есть)",
        "ru": "Уважение к старшим — важная традиция.",
        "audio": "assets/audio/card_15_5_ex1.mp3"
      },
      {
        "geo": "დიდი პატივისცემით გიწვევთ სტუმრად.",
        "gloss": "დიდი პატივისცემით (с большим уважением) · გიწვევთ (приглашаем вас) · სტუმრად (в гости)",
        "ru": "С большим уважением приглашаем вас в гости.",
        "audio": "assets/audio/card_15_5_ex2.mp3"
      },
      {
        "geo": "ის ყველას პატივს სცემს.",
        "gloss": "ის (он) · ყველას (всем / каждого) · პატივს სცემს (уважает / честь воздаёт)",
        "ru": "Он относится ко всем с уважением.",
        "audio": "assets/audio/card_15_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Подпись в конце деловых и дружеских писем на грузинском: «პატივისცემით, ...» — «С уважением, ...»!",
    "culturalNote": "Почётное обращение «პატივცემულო» («Уважаемый!») уместно в официальной речи, письмах и застольных тостах."
  },
  {
    "id": "card_16_1",
    "letter": "ჟ",
    "letterIndex": 16,
    "wordGeo": "ჟამი",
    "translitLat": "zhami",
    "ipa": "[ʒɑmi]",
    "translitRu": "жами",
    "translationRu": "Пора / Эпоха / Время",
    "translationEn": "Season / Era / Time",
    "difficulty": "Средний",
    "semanticHint": "Высокое, поэтичное слово для обозначения поры года или исторической эпохи.",
    "imageUrl": "assets/photos/card_16_1.jpg",
    "imageCaption": "Осенняя пора сбора винограда (Ртвели) в долинах Грузии",
    "photoQuery": "Autumn vineyard harvest Kakheti Georgia",
    "audioNormal": "assets/audio/card_16_1.mp3",
    "antonym": {
      "wordGeo": "წამი",
      "translitRu": "ц'ами",
      "ipa": "[tsʼɑmi]",
      "translationRu": "Миг / Секунда",
      "translationEn": "Instant / Second",
      "imageUrl": "assets/photos/ant_tsami.jpg",
      "photoQuery": "Water drop splash macro crystal",
      "audioNormal": "assets/audio/ant_tsami.mp3"
    },
    "examples": [
      {
        "geo": "რთველის ჟამი დადგა.",
        "gloss": "რთველის (сбора винограда) · ჟამი (пора) · დადგა (настала)",
        "ru": "Настала пора сбора винограда (Ртвели).",
        "audio": "assets/audio/card_16_1_ex1.mp3"
      },
      {
        "geo": "გაზაფხულის მშვენიერი ჟამი.",
        "gloss": "გაზაფხულის (весны) · მშვენიერი (прекрасная) · ჟამი (пора)",
        "ru": "Прекрасная весенняя пора.",
        "audio": "assets/audio/card_16_1_ex2.mp3"
      },
      {
        "geo": "სიყვარულის ჟამი მოვიდა.",
        "gloss": "სიყვარულის (любви) · ჟამი (пора) · მოვიდა (пришла)",
        "ru": "Пришла пора любви.",
        "audio": "assets/audio/card_16_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჟამ- · От него происходит слово ჟამთააღმწერელი («летописец») и современное ამჟამად («в настоящее время»).",
    "culturalNote": "Буква «ჟ» — самая редкая в грузинском словаре! В быту для времени чаще используют «დრო», а «ჟამი» придаёт речи благородное литературное звучание.",
    "category": "Природа",
    "articulationTip": "Мягкий шипящий «ჟ» [ʒ] звучит чуть нежнее русского твёрдого «ж»."
  },
  {
    "id": "card_16_2",
    "letter": "ჟ",
    "letterIndex": 16,
    "wordGeo": "ჟრიამული",
    "translitLat": "zhriamuli",
    "ipa": "[ʒriɑmuli]",
    "translitRu": "жриамули",
    "translationRu": "Весёлый гомон / Оживление",
    "translationEn": "Joyful chatter / Bustle",
    "difficulty": "Средний",
    "semanticHint": "Звукоподражательное слово: щебет птиц весной или радостные голоса на празднике Тбилисоба.",
    "imageUrl": "assets/photos/card_16_2.jpg",
    "imageCaption": "Праздничное оживление на старых площадях Тбилиси",
    "photoQuery": "Tbilisi festival people old town square",
    "audioNormal": "assets/audio/card_16_2.mp3",
    "antonym": {
      "wordGeo": "სიჩუმე",
      "translitRu": "сичʰумэ",
      "ipa": "[sitʃʰumɛ]",
      "translationRu": "Тишина / Безмолвие",
      "translationEn": "Silence / Quiet",
      "imageUrl": "assets/photos/ant_sichume.jpg",
      "photoQuery": "Quiet monastery courtyard fog Georgia",
      "audioNormal": "assets/audio/ant_sichume.mp3"
    },
    "examples": [
      {
        "geo": "ეზოში ბავშვების ჟრიამულია.",
        "gloss": "ეზოში (во дворе) · ბავშვების (детей) · ჟრიამულია (весёлый гомон есть)",
        "ru": "Во дворе раздаётся весёлый гомон детей.",
        "audio": "assets/audio/card_16_2_ex1.mp3"
      },
      {
        "geo": "ბაღში ჩიტების ჟრიამული ისმის.",
        "gloss": "ბაღში (в саду) · ჩიტების (птиц) · ჟრიამული (щебет) · ისმის (слышится)",
        "ru": "В саду слышен радостный щебет птиц.",
        "audio": "assets/audio/card_16_2_ex2.mp3"
      },
      {
        "geo": "ქუჩაში სადღესასწაულო ჟრიამულია.",
        "gloss": "ქუჩაში (на улице) · სადღესასწაულო (праздничное) · ჟრიამულია (оживление)",
        "ru": "На улице праздничное оживление.",
        "audio": "assets/audio/card_16_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Начальное сочетание ჟრ- [ʒr] звучит мягко и певуче, передавая переливчатый звук голосов и птичьих трелей.",
    "culturalNote": "Осенью на празднике «Тбилисоба» весь исторический центр наполняется тем самым «ჟრიამული» — песнями, ярмарками и ароматом виноградного сока бадаги.",
    "category": "Эмоции",
    "articulationTip": "Переливчатое сочетание «ჟრ-» произносится мягко и звонко."
  },
  {
    "id": "card_16_3",
    "letter": "ჟ",
    "letterIndex": 16,
    "wordGeo": "ჟოლო",
    "translitLat": "zholo",
    "ipa": "[ʒɔlɔ]",
    "translitRu": "жоло",
    "translationRu": "Малина",
    "translationEn": "Raspberry",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Мягкий звонкий «ჟ» [ʒ] и два чистых округлых звука «ო»: звучит сочно и музыкально!",
    "semanticHint": "Душистая горная лесная ягода на склонах Боржоми и Бакуриани.",
    "imageUrl": "assets/photos/card_16_3.jpg",
    "imageCaption": "Спелые ягоды свежей лесной малины в лукошке",
    "photoQuery": "Fresh red raspberries berry basket macro",
    "audioNormal": "assets/audio/card_16_3.mp3",
    "antonym": {
      "wordGeo": "მაყვალი",
      "translitRu": "maq'vali",
      "ipa": "[mɑqʼvɑli]",
      "translationRu": "Ежевика (чёрная ягода-сестра малины!)",
      "translationEn": "Blackberry",
      "imageUrl": "assets/photos/ant_maqvali.jpg",
      "photoQuery": "Ripe black blackberries bush nature",
      "audioNormal": "assets/audio/ant_maqvali.mp3"
    },
    "examples": [
      {
        "geo": "ტყეში ტკბილი ჟოლო დავკრიფეთ.",
        "gloss": "ტყეში (в лесу) · ტკბილი ჟოლო (сладкую малину) · დავკრიფეთ (мы собрали)",
        "ru": "В лесу мы набрали сладкой малины.",
        "audio": "assets/audio/card_16_3_ex1.mp3"
      },
      {
        "geo": "ცხელი ჩაი ჟოლოს მურაბით.",
        "gloss": "ცხელი ჩაი (горячий чай) · ჟოლოს მურაბით (с малиновым вареньем)",
        "ru": "Горячий чай с малиновым вареньем.",
        "audio": "assets/audio/card_16_3_ex2.mp3"
      },
      {
        "geo": "ჟოლო და მაყვალი გვერდიგვერდ იზრდება.",
        "gloss": "ჟოლო (малина) · და მაყვალი (и ежевика) · გვერდიგვერდ იზრდება (растут бок о бок)",
        "ru": "Малина и ежевика растут бок о бок.",
        "audio": "assets/audio/card_16_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа на -ო не усекается: ჟოლოს მურაბა («малиновое варенье»), ჟოლოსფერი («малиновый цвет»).",
    "culturalNote": "В каждом грузинском доме к вечернему чаю подают «მურაბა» — домашнее варенье из малины (ჟოლო), белой черешни, инжира или зелёного грецкого ореха."
  },
  {
    "id": "card_16_4",
    "letter": "ჟ",
    "letterIndex": 16,
    "wordGeo": "ჟანგბადი",
    "translitLat": "zhangbadi",
    "ipa": "[ʒɑnɡbɑdi]",
    "translitRu": "жангбади",
    "translationRu": "Кислород",
    "translationEn": "Oxygen",
    "difficulty": "Средний",
    "category": "Природа",
    "articulationTip": "Мягкий «ჟ» в начале и звонкая смычка «ნგბ-» в середине слова.",
    "semanticHint": "Живительный горный воздух сосновых лесов Абастумани и Рачи.",
    "imageUrl": "assets/photos/card_16_4.jpg",
    "imageCaption": "Густой изумрудный сосновый бор в утренних лучах солнца",
    "photoQuery": "Green pine forest sunlight fresh air nature",
    "audioNormal": "assets/audio/card_16_4.mp3",
    "antonym": {
      "wordGeo": "კვამლი",
      "translitRu": "k'vamli",
      "ipa": "[kʼvɑmli]",
      "translationRu": "Дым / Смог",
      "translationEn": "Smoke / Smog",
      "imageUrl": "assets/photos/ant_kvamli.jpg",
      "photoQuery": "Smoke chimney foggy winter roof",
      "audioNormal": "assets/audio/ant_kvamli.mp3"
    },
    "examples": [
      {
        "geo": "ტყე მდიდარია სუფთა ჟანგბადით.",
        "gloss": "ტყე (лес) · მდიდარია (богат) · სუფთა ჟანგბადით (чистым кислородом)",
        "ru": "Лес богат чистым кислородом.",
        "audio": "assets/audio/card_16_4_ex1.mp3"
      },
      {
        "geo": "მცენარეები ჟანგბადს გამოყოფენ.",
        "gloss": "მცენარეები (растения) · ჟანგბადს (кислород) · გამოყოფენ (выделяют)",
        "ru": "Растения выделяют кислород.",
        "audio": "assets/audio/card_16_4_ex2.mp3"
      },
      {
        "geo": "მთაში სუნთქვა ადვილია, ბევრი ჟანგბადია.",
        "gloss": "მთაში (в горах) · სუნთქვა ადვილია (дышать легко) · ბევრი ჟანგბადია (много кислорода)",
        "ru": "В горах легко дышится — там много кислорода.",
        "audio": "assets/audio/card_16_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Изящный грузинский научный неологизм XIX века от корня ჟანგი («окисел») + ბადებს («рождает») = буквально «рождающий окисление» (как греч. oxygen)!",
    "culturalNote": "В мае во время цветения сосен в Боржоми и Абастумани воздух насыщен пыльцой и кислородом, привлекая гостей со всей страны."
  },
  {
    "id": "card_16_5",
    "letter": "ჟ",
    "letterIndex": 16,
    "wordGeo": "ჟურნალი",
    "translitLat": "zhurnali",
    "ipa": "[ʒurnɑli]",
    "translitRu": "журнали",
    "translationRu": "Журнал",
    "translationEn": "Magazine / Journal",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Мягкое «ჟ» перед глубоким «უ» и отчётливым раскатистым «რ».",
    "semanticHint": "Иллюстрированное издание о путешествиях, культуре и гастрономии за утренним кофе.",
    "imageUrl": "assets/photos/card_16_5.jpg",
    "imageCaption": "Открытый иллюстрированный журнал и чашка кофе на столике",
    "photoQuery": "Open magazine coffee cup wooden table",
    "audioNormal": "assets/audio/card_16_5.mp3",
    "antonym": {
      "wordGeo": "წიგნი",
      "translitRu": "ts'igni",
      "ipa": "[tsʼiɡni]",
      "translationRu": "Книга (капитальное издание)",
      "translationEn": "Book",
      "imageUrl": "assets/photos/card_29_3.jpg",
      "photoQuery": "Hardcover books stack library shelf",
      "audioNormal": "assets/audio/card_29_3.mp3"
    },
    "examples": [
      {
        "geo": "კაფეში საინტერესო ჟურნალს ვკითხულობ.",
        "gloss": "კაფეში (в кафе) · საინტერესო ჟურნალს (интересный журнал) · ვკითხულობ (читаю)",
        "ru": "В кафе я читаю интересный журнал.",
        "audio": "assets/audio/card_16_5_ex1.mp3"
      },
      {
        "geo": "ეს ჟურნალი მოგზაურობაზეა.",
        "gloss": "ეს ჟურნალი (этот журнал) · მოგზაურობაზეა (о путешествиях)",
        "ru": "Этот журнал посвящён путешествиям.",
        "audio": "assets/audio/card_16_5_ex2.mp3"
      },
      {
        "geo": "მაგიდაზე ჟურნალი და გაზეთი დევს.",
        "gloss": "მაგიდაზე (на столе) · ჟურნალი და გაზეთი (журнал и газета) · დევს (лежат)",
        "ru": "На столе лежат журнал и газета.",
        "audio": "assets/audio/card_16_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჟურნალ- · Мн. ч.: ჟურნალები · Профессия: ჟურნალისტი («журналист»).",
    "culturalNote": "Первые грузинские литературные журналы («Цискари» 1852 г., «Иверия» Ильи Чавчавадзе) сыграли огромную роль в становлении современного литературного языка."
  },
  {
    "id": "card_17_1",
    "letter": "რ",
    "letterIndex": 17,
    "wordGeo": "რბილი",
    "translitLat": "rbili",
    "ipa": "[rbili]",
    "translitRu": "рбили",
    "translationRu": "Мягкий",
    "translationEn": "Soft / Mild",
    "difficulty": "Средний",
    "semanticHint": "Свежий тёплый сыр имерули, шерстяной тушинский ковёр или мягкий субтропический климат.",
    "imageUrl": "assets/photos/card_17_1.jpg",
    "imageCaption": "Традиционный грузинский шерстяной ковёр ручного ткачества (пардаги)",
    "photoQuery": "Traditional Caucasian wool carpet pattern",
    "audioNormal": "assets/audio/card_17_1.mp3",
    "antonym": {
      "wordGeo": "მაგარი",
      "translitRu": "магари",
      "ipa": "[mɑɡɑri]",
      "translationRu": "Твёрдый / Крепкий (и «крутой!»)",
      "translationEn": "Hard / Strong / Cool",
      "imageUrl": "assets/photos/ant_magari.jpg",
      "photoQuery": "Vardzia rock cave stone cliff Georgia",
      "audioNormal": "assets/audio/ant_magari.mp3"
    },
    "examples": [
      {
        "geo": "ახალი პური ძალიან რბილია.",
        "gloss": "ახალი (свежий) · პური (хлеб) · ძალიან (очень) · რბილია (мягкий есть)",
        "ru": "Свежий хлеб очень мягкий.",
        "audio": "assets/audio/card_17_1_ex1.mp3"
      },
      {
        "geo": "ბათუმში რბილი ჰავაა.",
        "gloss": "ბათუმში (в Батуми) · რბილი (мягкий) · ჰავაა (климат есть)",
        "ru": "В Батуми мягкий климат.",
        "audio": "assets/audio/card_17_1_ex2.mp3"
      },
      {
        "geo": "ეს ბალიში ძალიან რბილია.",
        "gloss": "ეს (эта) · ბალიში (подушка) · ძალიან (очень) · რბილია (мягкая)",
        "ru": "Эта подушка очень мягкая.",
        "audio": "assets/audio/card_17_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Начальное сонорно-звонкое сочетание რბ- [rb]: короткий удар языка на «р» сразу переходит в «б» без призвука «ы/и» перед ним.",
    "culturalNote": "Антоним «მაგარი» означает не только «твёрдый/крепкий» (например, крепкий чай или камень), но и главное разговорное восхищение: «ძალიან მაგარია!» — «Очень круто!»",
    "category": "Быт",
    "articulationTip": "Короткий одноударный раскат «რ» мгновенно переходит в звонкое «ბ»."
  },
  {
    "id": "card_17_2",
    "letter": "რ",
    "letterIndex": 17,
    "wordGeo": "რთული",
    "translitLat": "rtuli",
    "ipa": "[rtʰuli]",
    "translitRu": "ртʰули",
    "translationRu": "Сложный / Трудный",
    "translationEn": "Difficult / Complex",
    "difficulty": "Средний",
    "semanticHint": "То, каким грузинский алфавит кажется только до знакомства с системой карточек!",
    "imageUrl": "assets/photos/card_17_2.jpg",
    "imageCaption": "Высокогорный перевал Абано по дороге в Тушетию (2826 м)",
    "photoQuery": "Abano pass Tusheti mountain road Georgia",
    "audioNormal": "assets/audio/card_17_2.mp3",
    "antonym": {
      "wordGeo": "მარტივი",
      "translitRu": "март'иви",
      "ipa": "[mɑrtʼivi]",
      "translationRu": "Простой / Лёгкий",
      "translationEn": "Simple / Easy",
      "imageUrl": "assets/photos/ant_martivi.jpg",
      "photoQuery": "Clear straight wooden path meadow",
      "audioNormal": "assets/audio/ant_martivi.mp3"
    },
    "examples": [
      {
        "geo": "ქართული კითხვა მარტივია, არ არის რთული.",
        "gloss": "ქართული (грузинское) · კითხვა (чтение) · მარტივია (простое есть) · არ არის (не есть) · რთული (сложное)",
        "ru": "Чтение по-грузински простое, а не сложное.",
        "audio": "assets/audio/card_17_2_ex1.mp3"
      },
      {
        "geo": "ეს რთული კითხვაა.",
        "gloss": "ეს (это) · რთული (сложный) · კითხვაა (вопрос есть)",
        "ru": "Это сложный вопрос.",
        "audio": "assets/audio/card_17_2_ex2.mp3"
      },
      {
        "geo": "ეს დავალება არ არის რთული.",
        "gloss": "ეს (это) · დავალება (задание) · არ არის (не есть) · რთული (сложное)",
        "ru": "Это задание совсем не сложное.",
        "audio": "assets/audio/card_17_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Начальный кластер რთ- [rtʰ]: сонорный «р» + придыхательный «тʰ». Тот же корень родственен слову რთველი (сбор урожая, букв. «сложная страда»).",
    "culturalNote": "Главный секрет грузинского письма Мхедрули: оно на 100% фонетическое! Как слово пишется, так оно и читается — ни одной немой буквы или разночтения.",
    "category": "Прилагательные",
    "articulationTip": "Упругий «რ» перед придыхательным «თ» [tʰ] — не вставляйте гласный между ними."
  },
  {
    "id": "card_17_3",
    "letter": "რ",
    "letterIndex": 17,
    "wordGeo": "რძე",
    "translitLat": "rdze",
    "ipa": "[rdzɛ]",
    "translitRu": "рдзэ",
    "translationRu": "Молоко",
    "translationEn": "Milk",
    "difficulty": "Средний",
    "category": "Еда",
    "articulationTip": "Короткий удар кончика языка на «რ» сразу переходит в слитную звонкую аффрикату «ძ» [rdzɛ].",
    "semanticHint": "Свежее альпийское молоко, из которого варят сулугуни, имеретинский сыр и мацони!",
    "imageUrl": "assets/photos/card_17_3.jpg",
    "imageCaption": "Кувшин и стакан свежего фермерского молока на деревянном столе",
    "photoQuery": "Fresh milk glass pitcher rustic wooden table",
    "audioNormal": "assets/audio/card_17_3.mp3",
    "antonym": {
      "wordGeo": "ყავა",
      "translitRu": "q'ava",
      "ipa": "[qʼɑvɑ]",
      "translationRu": "Чёрный кофе (контрастный напиток к молоку)",
      "translationEn": "Black coffee",
      "imageUrl": "assets/photos/card_24_3.jpg",
      "photoQuery": "Black espresso coffee cup beans",
      "audioNormal": "assets/audio/card_24_3.mp3"
    },
    "examples": [
      {
        "geo": "ყავა რძით გნებავთ თუ უშაქროდ?",
        "gloss": "ყავა რძით (кофе с молоком) · გნებავთ (желаете) · თუ უშაქროდ (или без сахара)?",
        "ru": "Желаете кофе с молоком или без сахара?",
        "audio": "assets/audio/card_17_3_ex1.mp3"
      },
      {
        "geo": "სოფლის ახალი რძე სასარგებლოა.",
        "gloss": "სოფლის (деревенское) · ახალი რძე (свежее молоко) · სასარგებლოა (полезно)",
        "ru": "Свежее деревенское молоко очень полезно.",
        "audio": "assets/audio/card_17_3_ex2.mp3"
      },
      {
        "geo": "რძის პროდუქტები: მაწონი და ყველი.",
        "gloss": "რძის პროდუქტები (молочные продукты) · მაწონი და ყველი (мацони и сыр)",
        "ru": "Молочные продукты: мацони и сыр.",
        "audio": "assets/audio/card_17_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Склонение основы на -ე с усечением: რძე → род. п. რძის («молочный»), твор. п. რძით («с молоком»).",
    "culturalNote": "Традиционный грузинский кисломолочный продукт «მაწონი» (мацони) подают и к завтраку с мёдом и грецкими орехами, и как основу летнего супа."
  },
  {
    "id": "card_17_4",
    "letter": "რ",
    "letterIndex": 17,
    "wordGeo": "რუკა",
    "translitLat": "ruk'a",
    "ipa": "[rukʼɑ]",
    "translitRu": "рук'а",
    "translationRu": "Карта (географическая)",
    "translationEn": "Map",
    "difficulty": "Начальный",
    "category": "Транспорт",
    "articulationTip": "Раскатистый «რ» в начале и чёткий сухой абруптив «კ» [kʼ] во втором слоге.",
    "semanticHint": "Незаменимый помощник путешественника по регионам Сакартвело.",
    "imageUrl": "assets/photos/card_17_4.jpg",
    "imageCaption": "Туристический компас и путеводитель на фоне горного маршрута",
    "photoQuery": "Compass travel route mountain viewpoint hike",
    "audioNormal": "assets/audio/card_17_4.mp3",
    "antonym": {
      "wordGeo": "გზააბნევა",
      "translitRu": "гзаабнэва",
      "ipa": "[ɡzɑɑbnɛvɑ]",
      "translationRu": "Потеря дороги / Блуждание",
      "translationEn": "Getting lost",
      "imageUrl": "assets/photos/ant_gzaabneva.jpg",
      "photoQuery": "Misty forest crossroads fog path",
      "audioNormal": "assets/audio/ant_gzaabneva.mp3"
    },
    "examples": [
      {
        "geo": "ტელეფონში თბილისის რუკა გავხსენი.",
        "gloss": "ტელეფონში (в телефоне) · თბილისის რუკა (карту Тбилиси) · გავხსენი (я открыл)",
        "ru": "Я открыл в телефоне карту Тбилиси.",
        "audio": "assets/audio/card_17_4_ex1.mp3"
      },
      {
        "geo": "რუკაზე ყველა რეგიონი ჩანს.",
        "gloss": "რუკაზე (на карте) · ყველა რეგიონი (все регионы) · ჩანს (видны)",
        "ru": "На карте видны все регионы.",
        "audio": "assets/audio/card_17_4_ex2.mp3"
      },
      {
        "geo": "გაქვთ მეტროს რუკა?",
        "gloss": "გაქვთ (есть ли у вас) · მეტროს რუკა (схема метро)?",
        "ru": "У вас есть схема метро?",
        "audio": "assets/audio/card_17_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: რუკ- · Мн. ч.: რუკები · С послелогом -ზე: რუკაზე («на карте»). Не путайте с ბარათი (банковская или учебная карточка)!",
    "culturalNote": "В XVIII веке выдающийся учёный и географ царевич Вахушти Багратиони создал подробнейший историко-географический атлас всех областей Грузии."
  },
  {
    "id": "card_17_5",
    "letter": "რ",
    "letterIndex": 17,
    "wordGeo": "რწმენა",
    "translitLat": "rts'mena",
    "ipa": "[rtsʼmɛnɑ]",
    "translitRu": "рц'мэна",
    "translationRu": "Вера / Убеждение",
    "translationEn": "Faith / Belief",
    "difficulty": "Сложный",
    "category": "Эмоции",
    "articulationTip": "Тройной начальный кластер «რ-წ-მ»: после «რ» резко щёлкает абруптив «წ» [tsʼ] и смыкаются губы на «მ».",
    "semanticHint": "Внутренняя духовная опора и уверенность в своих силах.",
    "imageUrl": "assets/photos/card_17_5.jpg",
    "imageCaption": "Зажжённые восковые свечи в тишине древнего каменного храма",
    "photoQuery": "Lit beeswax candles ancient church Georgia",
    "audioNormal": "assets/audio/card_17_5.mp3",
    "antonym": {
      "wordGeo": "ეჭვი",
      "translitRu": "ech'vi",
      "ipa": "[ɛtʃʼvi]",
      "translationRu": "Сомнение / Подозрение",
      "translationEn": "Doubt",
      "imageUrl": "assets/photos/ant_echvi.jpg",
      "photoQuery": "Cloudy twilight crossroads shadow",
      "audioNormal": "assets/audio/ant_echvi.mp3"
    },
    "examples": [
      {
        "geo": "საკუთარი თავის რწმენა მთავარია.",
        "gloss": "საკუთარი თავის (в самого себя) · რწმენა (вера) · მთავარია (главное есть)",
        "ru": "Вера в собственные силы — это главное.",
        "audio": "assets/audio/card_17_5_ex1.mp3"
      },
      {
        "geo": "რწმენა ადამიანს აძლიერებს.",
        "gloss": "რწმენა (вера) · ადამიანს (человека) · აძლიერებს (укрепляет)",
        "ru": "Вера делает человека сильнее.",
        "audio": "assets/audio/card_17_5_ex2.mp3"
      },
      {
        "geo": "მე მჯერა და მწამს უკეთესი მომავლის.",
        "gloss": "მე მჯერა (я верю) · და მწამს (и убеждён) · უკეთესი მომავლის (в лучшее будущее)",
        "ru": "Я твёрдо верю в лучшее будущее.",
        "audio": "assets/audio/card_17_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Инверсивный глагол: მე მწამს («я верю / чту»). В антониме ეჭვი («сомнение») тренируется резкая шипящая ჭ [tʃʼ].",
    "culturalNote": "Христианство стало государственной религией Картли (Иберии) уже в 326 году благодаря проповеди святой равноапостольной Нино."
  },
  {
    "id": "card_18_1",
    "letter": "ს",
    "letterIndex": 18,
    "wordGeo": "სტუმარი",
    "translitLat": "st'umari",
    "ipa": "[stʼumɑri]",
    "translitRu": "ст'умари",
    "translationRu": "Гость",
    "translationEn": "Guest / Visitor",
    "difficulty": "Начальный",
    "semanticHint": "В грузинской традиции этот человек считается посланником самого Бога.",
    "imageUrl": "assets/photos/card_18_1.jpg",
    "imageCaption": "Тёплый приём гостей на веранде кахетинского винного дома",
    "photoQuery": "Georgian hospitality wine terrace Kakheti",
    "audioNormal": "assets/audio/card_18_1.mp3",
    "antonym": {
      "wordGeo": "მასპინძელი",
      "translitRu": "масп'индзэли",
      "ipa": "[mɑspʼindzɛli]",
      "translationRu": "Хозяин дома (принимающий гостя)",
      "translationEn": "Host",
      "imageUrl": "assets/photos/ant_maspindzeli.jpg",
      "photoQuery": "Georgian winemaker marani qvevri cellar",
      "audioNormal": "assets/audio/ant_maspindzeli.mp3"
    },
    "examples": [
      {
        "geo": "სტუმარი ღვთისაა.",
        "gloss": "სტუმარი (гость) · ღვთისაა (Божий / от Бога есть)",
        "ru": "Гость — от Бога.",
        "audio": "assets/audio/card_18_1_ex1.mp3"
      },
      {
        "geo": "სტუმარ-მასპინძელი.",
        "gloss": "სტუმარ (гость) · მასპინძელი (и хозяин)",
        "ru": "Гость и хозяин (название великой поэмы Важа-Пшавелы).",
        "audio": "assets/audio/card_18_1_ex2.mp3"
      },
      {
        "geo": "სტუმარს ჩაი მივართვით.",
        "gloss": "სტუმარს (гостю) · ჩაი (чай) · მივართვით (мы подали)",
        "ru": "Мы угостили гостя чаем.",
        "audio": "assets/audio/card_18_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: სტუმარ- → სტუმრ- · Мн. ч.: სტუმრები («гости»). Начальное სტ- произносится с абруптивным ტ [stʼ].",
    "culturalNote": "От слова «სტუმარი» образовано слово სასტუმრო («гостиница / отель»). А поэма Важа-Пшавелы «სტუმარ-მასპინძელი» (1893) воспевает священный закон гостеприимства.",
    "category": "Эмоции",
    "articulationTip": "За свистящим «ს» сразу следует сухой безаспиративный щелчок «ტ» [stʼ]."
  },
  {
    "id": "card_18_2",
    "letter": "ს",
    "letterIndex": 18,
    "wordGeo": "სავსე",
    "translitLat": "savse",
    "ipa": "[sɑvsɛ]",
    "translitRu": "савсэ",
    "translationRu": "Полный / Наполненный",
    "translationEn": "Full",
    "difficulty": "Начальный",
    "semanticHint": "Наполненный до краёв глиняный кубок или рог «канци» для торжественного тоста.",
    "imageUrl": "assets/photos/card_18_2.jpg",
    "imageCaption": "Бокал, наполненный янтарным грузинским вином в марани",
    "photoQuery": "Amber Georgian wine glass full",
    "audioNormal": "assets/audio/card_18_2.mp3",
    "antonym": {
      "wordGeo": "ცარიელი",
      "translitRu": "цʰариэли",
      "ipa": "[tsʰɑriɛli]",
      "translationRu": "Пустой",
      "translationEn": "Empty",
      "imageUrl": "assets/photos/ant_tsarieli.jpg",
      "photoQuery": "Empty clay amphora qvevri pottery",
      "audioNormal": "assets/audio/ant_tsarieli.mp3"
    },
    "examples": [
      {
        "geo": "ჭიქა ღვინით სავსეა.",
        "gloss": "ჭიქა (бокал) · ღვინით (вином) · სავსეა (полон есть)",
        "ru": "Бокал полон вина.",
        "audio": "assets/audio/card_18_2_ex1.mp3"
      },
      {
        "geo": "სავსე მთვარე ანათებს.",
        "gloss": "სავსე (полная) · მთვარე (луна) · ანათებს (светит)",
        "ru": "Светит полная луна.",
        "audio": "assets/audio/card_18_2_ex2.mp3"
      },
      {
        "geo": "კალათა ხილით სავსეა.",
        "gloss": "კალათა (корзина) · ხილით (фруктами) · სავსეა (полна есть)",
        "ru": "Корзина полна фруктов.",
        "audio": "assets/audio/card_18_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Управляет творительным падежом на -ით: წყლით სავსე (полный водой), სიხარულით სავსე (полный радости). Две буквы «ს» с прямой левой мачтой!",
    "culturalNote": "На грузинском застолье тост за мир и хозяев дома принято произносить с полным («სავსე») бокалом — пустым бокалом чокаться не принято.",
    "category": "Еда",
    "articulationTip": "Два чётких свистящих «ს» разделены звонким «ვ»: [sɑvsɛ]."
  },
  {
    "id": "card_18_3",
    "letter": "ს",
    "letterIndex": 18,
    "wordGeo": "სახლი",
    "translitLat": "sakhli",
    "ipa": "[sɑxli]",
    "translitRu": "сахли",
    "translationRu": "Дом",
    "translationEn": "House / Home",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Чистый свистящий «ს» в начале и характерная связка «ხლ-» [xl] во втором слоге.",
    "semanticHint": "Родной очаг, куда всегда хочется возвращаться.",
    "imageUrl": "assets/photos/card_18_3.jpg",
    "imageCaption": "Традиционный грузинский каменный дом с черепичной крышей и садом",
    "photoQuery": "Traditional Georgian house red tile roof garden",
    "audioNormal": "assets/audio/card_18_3.mp3",
    "antonym": {
      "wordGeo": "უცხოეთი",
      "translitRu": "уцʰхоэтʰи",
      "ipa": "[utsʰxɔɛtʰi]",
      "translationRu": "Чужбина / Заграница",
      "translationEn": "Foreign land / Abroad",
      "imageUrl": "assets/photos/ant_utskhoeti.jpg",
      "photoQuery": "Airport departure board international flight",
      "audioNormal": "assets/audio/ant_utskhoeti.mp3"
    },
    "examples": [
      {
        "geo": "ჩემი სახლი მეტროსთან ახლოსაა.",
        "gloss": "ჩემი სახლი (мой дом) · მეტროსთან (у метро) · ახლოსაა (рядом есть)",
        "ru": "Мой дом находится рядом с метро.",
        "audio": "assets/audio/card_18_3_ex1.mp3"
      },
      {
        "geo": "სახლში მივდივარ.",
        "gloss": "სახლში (домой / в дом) · მივდივარ (я иду)",
        "ru": "Я иду домой.",
        "audio": "assets/audio/card_18_3_ex2.mp3"
      },
      {
        "geo": "სტუმრად ჩვენს სახლში გეპატიჟებით!",
        "gloss": "სტუმრად (в гости) · ჩვენს სახლში (в наш дом) · გეპატიჟებით (приглашаем вас)!",
        "ru": "Приглашаем вас в гости в наш дом!",
        "audio": "assets/audio/card_18_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: სახლ- · Мн. ч.: სახლები. Послелог -ში означает одновременно и «дома» (სახლში ვარ), и «домой» (სახლში მივდივარ)!",
    "culturalNote": "Тёплое грузинское выражение хозяев гостю — «თავს ისე იგრძენი, როგორც საკუთარ სახლში» («Чувствуй себя как в собственном доме»)."
  },
  {
    "id": "card_18_4",
    "letter": "ს",
    "letterIndex": 18,
    "wordGeo": "საუზმე",
    "translitLat": "sauzme",
    "ipa": "[sɑuzmɛ]",
    "translitRu": "саузмэ",
    "translationRu": "Завтрак",
    "translationEn": "Breakfast",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Гласные «ა» и «უ» произносятся раздельно и плавно: [sɑ-uz-mɛ].",
    "semanticHint": "Утренний стол со свежим шоти, домашним сыром, мацони с мёдом и ароматным кофе.",
    "imageUrl": "assets/photos/card_18_4.jpg",
    "imageCaption": "Утренний завтрак с хлебом, сыром, фруктами и чашкой кофе",
    "photoQuery": "Morning breakfast spread bread cheese fruit coffee",
    "audioNormal": "assets/audio/card_18_4.mp3",
    "antonym": {
      "wordGeo": "ვახშამი",
      "translitRu": "vakhshami",
      "ipa": "[vɑxʃɑmi]",
      "translationRu": "Ужин",
      "translationEn": "Dinner",
      "imageUrl": "assets/photos/card_06_4.jpg",
      "photoQuery": "Evening dinner table candles wine",
      "audioNormal": "assets/audio/card_06_4.mp3"
    },
    "examples": [
      {
        "geo": "სასტუმროში საუზმე ცხრა საათზეა.",
        "gloss": "სასტუმროში (в отеле) · საუზმე (завтрак) · ცხრა საათზეა (в девять часов)",
        "ru": "В отеле завтрак подают в девять часов.",
        "audio": "assets/audio/card_18_4_ex1.mp3"
      },
      {
        "geo": "საუზმეზე ყავა და ხაჭაპური მივირთვით.",
        "gloss": "საუზმეზე (на завтрак) · ყავა და ხაჭაპური (кофе и хачапури) · მივირთვით (мы поели)",
        "ru": "На завтрак мы съели хачапури с кофе.",
        "audio": "assets/audio/card_18_4_ex2.mp3"
      },
      {
        "geo": "ბილეთის ფასში საუზმე შედის?",
        "gloss": "ბილეთის ფასში (в стоимость номера) · საუზმე (завтрак) · შედის (входит)?",
        "ru": "Завтрак входит в стоимость проживания?",
        "audio": "assets/audio/card_18_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Глагол: მე ვსაუზმობ («я завтракаю»). С послелогом -ზე: საუზმეზე («на завтрак»).",
    "culturalNote": "В гостевых домах Кахетии и Сванетии домашний «საუზმე» часто включает оладьи, горячие лепёшки с сыром, горный мёд и инжирное варенье."
  },
  {
    "id": "card_18_5",
    "letter": "ს",
    "letterIndex": 18,
    "wordGeo": "სევდიანი",
    "translitLat": "sevdiani",
    "ipa": "[sɛvdiɑni]",
    "translitRu": "сэвдиани",
    "translationRu": "Грустный / Лиричный",
    "translationEn": "Sad / Wistful",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "Свистящий «ს» перед чистым «ე» и звонкое сочетание «ვდ-» в середине слова.",
    "semanticHint": "Светлая осенняя задумчивость или лирическая мелодия дудука и гитары.",
    "imageUrl": "assets/photos/card_18_5.jpg",
    "imageCaption": "Осенние капли дождя на стекле окна на фоне жёлтых листьев",
    "photoQuery": "Raindrops window glass autumn leaves mood",
    "audioNormal": "assets/audio/card_18_5.mp3",
    "antonym": {
      "wordGeo": "მხიარული",
      "translitRu": "мхиарули",
      "ipa": "[mxiɑruli]",
      "translationRu": "Весёлый / Радостный",
      "translationEn": "Cheerful / Merry",
      "imageUrl": "assets/photos/ant_mkhiaruli.jpg",
      "photoQuery": "Joyful folk dancers smiling festival Georgia",
      "audioNormal": "assets/audio/ant_mkhiaruli.mp3"
    },
    "examples": [
      {
        "geo": "ეს ძველი სიმღერა ცოტა სევდიანია.",
        "gloss": "ეს ძველი სიმღერა (эта старая песня) · ცოტა (немного) · სევდიანია (грустная)",
        "ru": "Эта старинная песня немного грустная.",
        "audio": "assets/audio/card_18_5_ex1.mp3"
      },
      {
        "geo": "ნუ ხარ სევდიანი, გაიღიმე!",
        "gloss": "ნუ ხარ (не будь) · სევდიანი (грустным) · გაიღიმე (улыбнись)!",
        "ru": "Не грусти, улыбнись!",
        "audio": "assets/audio/card_18_5_ex2.mp3"
      },
      {
        "geo": "შემოდგომის სევდიანი სილამაზე.",
        "gloss": "შემოდგომის (осени) · სევდიანი (задумчивая) · სილამაზე (красота)",
        "ru": "Светлая грустная красота осени.",
        "audio": "assets/audio/card_18_5_ex3.mp3"
      }
    ],
    "grammarMarker": "От существительного სევდა («печаль, светлая грусть») + суффикс -იანი → სევდიანი.",
    "culturalNote": "В грузинской поэзии Николоза Бараташвили и Галактиона Табидзе «სევდა» — это возвышенная, светлая поэтическая грусть, а не уныние."
  },
  {
    "id": "card_19_1",
    "letter": "ტ",
    "letterIndex": 19,
    "wordGeo": "ტკბილი",
    "translitLat": "t'k'bili",
    "ipa": "[tʼkʼbili]",
    "translitRu": "т'к'били",
    "translationRu": "Сладкий / Ласковый",
    "translationEn": "Sweet",
    "difficulty": "Сложный",
    "semanticHint": "Вкус спелого кахетинского винограда, чурчхелы и корень слова «десерт/сладости» (ტკბილეული).",
    "imageUrl": "assets/photos/card_19_1.jpg",
    "imageCaption": "Связки домашней ореховой чурчхелы из сгущённого виноградного сока",
    "photoQuery": "Churchkhela Georgian traditional sweet",
    "audioNormal": "assets/audio/card_19_1.mp3",
    "antonym": {
      "wordGeo": "მწარე",
      "translitRu": "мц'арэ",
      "ipa": "[mtsʼɑrɛ]",
      "translationRu": "Горький / Острый",
      "translationEn": "Bitter / Hot-spicy",
      "imageUrl": "assets/photos/ant_mtsare.jpg",
      "photoQuery": "Red hot chili peppers adjika Georgia",
      "audioNormal": "assets/audio/ant_mtsare.mp3"
    },
    "examples": [
      {
        "geo": "ტკბილი ყურძენი და ჩურჩხელა.",
        "gloss": "ტკბილი (сладкий) · ყურძენი (виноград) · და (и) · ჩურჩხელა (чурчхела)",
        "ru": "Сладкий виноград и чурчхела.",
        "audio": "assets/audio/card_19_1_ex1.mp3"
      },
      {
        "geo": "ტკბილი ძილი!",
        "gloss": "ტკბილი (сладкий) · ძილი (сон)",
        "ru": "Сладких снов!",
        "audio": "assets/audio/card_19_1_ex2.mp3"
      },
      {
        "geo": "მიყვარს ტკბილი ჩაი.",
        "gloss": "მიყვარს (люблю) · ტკბილი (сладкий) · ჩაი (чай)",
        "ru": "Я люблю сладкий чай.",
        "audio": "assets/audio/card_19_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Гармонический комплекс трёх согласных подряд ტ-კ-ბ [tʼkʼb]: два абруптива + звонкий «б» произносятся почти одним слитным аккордом!",
    "culturalNote": "Чурчхелу готовят вообще без добавленного сахара — всю её природную сладость («ტკბილი») даёт уваренный сок винограда Ркацители или Саперави.",
    "category": "Еда",
    "articulationTip": "Знаменитый тройной аккорд «ტ-კ-ბ»: произнесите оба абруптива одним плотным импульсом!"
  },
  {
    "id": "card_19_2",
    "letter": "ტ",
    "letterIndex": 19,
    "wordGeo": "ტბა",
    "translitLat": "t'ba",
    "ipa": "[tʼbɑ]",
    "translitRu": "т'ба",
    "translationRu": "Озеро",
    "translationEn": "Lake",
    "difficulty": "Начальный",
    "semanticHint": "Спокойная зеркальная вода Кварели, Паравани, Шаори или Черепашьего озера в Тбилиси.",
    "imageUrl": "assets/photos/card_19_2.jpg",
    "imageCaption": "Высокогорное зеркальное озеро среди альпийских лугов Грузии",
    "photoQuery": "Alpine lake Caucasus Georgia mountains",
    "audioNormal": "assets/audio/card_19_2.mp3",
    "antonym": {
      "wordGeo": "მდინარე",
      "translitRu": "мдинарэ",
      "ipa": "[mdinɑrɛ]",
      "translationRu": "Река (текущий поток)",
      "translationEn": "River",
      "imageUrl": "assets/photos/ant_mdinare.jpg",
      "photoQuery": "Enguri river canyon Georgia mountains",
      "audioNormal": "assets/audio/ant_mdinare.mp3"
    },
    "examples": [
      {
        "geo": "კუს ტბა თბილისში მდებარეობს.",
        "gloss": "კუს (Черепашье) · ტბა (озеро) · თბილისში (в Тбилиси) · მდებარეობს (расположено)",
        "ru": "Черепашье озеро расположено в Тбилиси.",
        "audio": "assets/audio/card_19_2_ex1.mp3"
      },
      {
        "geo": "მთის ტბა სუფთაა.",
        "gloss": "მთის (горное) · ტბა (озеро) · სუფთაა (чистое есть)",
        "ru": "Горное озеро чистое.",
        "audio": "assets/audio/card_19_2_ex2.mp3"
      },
      {
        "geo": "ტბასთან ტყე იწყება.",
        "gloss": "ტბასთან (у озера) · ტყე (лес) · იწყება (начинается)",
        "ru": "У озера начинается лес.",
        "audio": "assets/audio/card_19_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ტბ- · Мн. ч.: ტბები. Сравните: ტბა [tʼba] (озеро — сухой щелчок ტ) и თმა [tʰma] (волосы — придыхательное თ)!",
    "culturalNote": "Любимое место утренних прогулок тбилисцев над парком Ваке называется «კუს ტბა» (Кус тба — Черепашье озеро), куда поднимается канатная дорога.",
    "category": "Природа",
    "articulationTip": "Сухой щелчок «ტ» [tʼ] прямо перед звонким «ბ» — без малейшего придыхания."
  },
  {
    "id": "card_19_3",
    "letter": "ტ",
    "letterIndex": 19,
    "wordGeo": "ტყე",
    "translitLat": "t'q'e",
    "ipa": "[tʼqʼɛ]",
    "translitRu": "т'къэ",
    "translationRu": "Лес",
    "translationEn": "Forest / Woods",
    "difficulty": "Сложный",
    "category": "Природа",
    "articulationTip": "Двойной абруптивный щелчок «ტყ-» [tʼqʼ]: кончик языка у зубов и корень языка в гортани срабатывают почти одновременно!",
    "semanticHint": "Реликтовые заповедные леса Лагодехи, Боржоми-Харагаули и Кинтриши.",
    "imageUrl": "assets/photos/card_19_3.jpg",
    "imageCaption": "Вековой зелёный буковый и хвойный лес в горах Грузии",
    "photoQuery": "Lush green mountain forest trail Georgia",
    "audioNormal": "assets/audio/card_19_3.mp3",
    "antonym": {
      "wordGeo": "მინდორი",
      "translitRu": "миндори",
      "ipa": "[mindɔri]",
      "translationRu": "Поле / Открытый луг",
      "translationEn": "Field / Open meadow",
      "imageUrl": "assets/photos/ant_mindori.jpg",
      "photoQuery": "Open green field wildflowers horizon",
      "audioNormal": "assets/audio/ant_mindori.mp3"
    },
    "examples": [
      {
        "geo": "ბორჯომის გარშემო დიდი ტყეა.",
        "gloss": "ბორჯომის გარშემო (вокруг Боржоми) · დიდი ტყეა (большой лес)",
        "ru": "Вокруг Боржоми раскинулся большой лес.",
        "audio": "assets/audio/card_19_3_ex1.mp3"
      },
      {
        "geo": "ტყეში სოკო და კენკრა იზრდება.",
        "gloss": "ტყეში (в лесу) · სოკო და კენკრა (грибы и ягоды) · იზრდება (растут)",
        "ru": "В лесу растут грибы и ягоды.",
        "audio": "assets/audio/card_19_3_ex2.mp3"
      },
      {
        "geo": "დილით ტყეში ვსეირნობთ.",
        "gloss": "დილით (утром) · ტყეში (по лесу) · ვსეირნობთ (мы гуляем)",
        "ru": "По утрам мы гуляем в лесу.",
        "audio": "assets/audio/card_19_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа на -ე: мн. ч. ტყეები («леса»), но прил. ტყის («лесной»: ტყის თაფლი — лесной мёд). Короткое слово-чемпион для тренировки абруптивов!",
    "culturalNote": "Почти 40% территории Грузии покрыто лесами («ტყე») — от колхидских субтропических лиан до высокогорных сосняков Тушетии."
  },
  {
    "id": "card_19_4",
    "letter": "ტ",
    "letterIndex": 19,
    "wordGeo": "ტაქსი",
    "translitLat": "t'aksi",
    "ipa": "[tʼɑksi]",
    "translitRu": "т'акси",
    "translationRu": "Такси",
    "translationEn": "Taxi",
    "difficulty": "Начальный",
    "category": "Транспорт",
    "articulationTip": "Начальная «ტ» звучит плотно и сухо без выдоха [tʼ], а «ქს» передаёт звук [ks]!",
    "semanticHint": "Белые городские автомобили Тбилиси и самый частый транспорт из аэропорта.",
    "imageUrl": "assets/photos/card_19_4.jpg",
    "imageCaption": "Белое городское такси на проспекте современного города",
    "photoQuery": "City taxi cab street urban boulevard",
    "audioNormal": "assets/audio/card_19_4.mp3",
    "antonym": {
      "wordGeo": "ფეხით სიარული",
      "translitRu": "пʰэхитʰ сиарули",
      "ipa": "[pʰɛxitʰ siɑruli]",
      "translationRu": "Пешая прогулка (идти пешком)",
      "translationEn": "Walking on foot",
      "imageUrl": "assets/photos/ant_pekhit.jpg",
      "photoQuery": "Pedestrian walking cobblestone promenade",
      "audioNormal": "assets/audio/ant_pekhit.mp3"
    },
    "examples": [
      {
        "geo": "აეროპორტიდან ტაქსით წამოვედით.",
        "gloss": "აეროპორტიდან (из аэропорта) · ტაქსით (на такси) · წამოვედით (мы приехали)",
        "ru": "Из аэропорта мы приехали на такси.",
        "audio": "assets/audio/card_19_4_ex1.mp3"
      },
      {
        "geo": "ტაქსი უკვე სახლთან დგას.",
        "gloss": "ტაქსი (такси) · უკვე (уже) · სახლთან დგას (стоит у дома)",
        "ru": "Такси уже ждёт у дома.",
        "audio": "assets/audio/card_19_4_ex2.mp3"
      },
      {
        "geo": "აქ ახლოსაა, ტაქსი არ გვჭირდება.",
        "gloss": "აქ ახლოსაა (тут близко) · ტაქსი (такси) · არ გვჭირდება (не нужно)",
        "ru": "Тут совсем близко, такси нам не понадобится.",
        "audio": "assets/audio/card_19_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Обратите внимание, как передаётся буква «x» в заимствованиях: двумя буквами ქ + ს = ქს (ტაქსი, ტექსტი)! Твор. п.: ტაქსით («на такси»).",
    "culturalNote": "В Тбилиси муниципальные лицензированные такси окрашены строго в белый цвет и имеют право ездить по выделенным автобусным полосам."
  },
  {
    "id": "card_19_5",
    "letter": "ტ",
    "letterIndex": 19,
    "wordGeo": "ტირილი",
    "translitLat": "t'irili",
    "ipa": "[tʼirili]",
    "translitRu": "т'ирили",
    "translationRu": "Плач / Слёзы",
    "translationEn": "Crying / Weeping",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "Резкий сухой щелчок «ტ» [tʼ] в начале сменяется певучими сонорными «რ» и «ლ».",
    "semanticHint": "Бурное проявление чувств (и слёзы грусти, и слёзы радости!).",
    "imageUrl": "assets/photos/card_19_5.jpg",
    "imageCaption": "Дождевые капли, стекающие по лепестку цветка крупным планом",
    "photoQuery": "Water drops petal macro rain emotion",
    "audioNormal": "assets/audio/card_19_5.mp3",
    "antonym": {
      "wordGeo": "სიცილი",
      "translitRu": "сицʰили",
      "ipa": "[sitsʰili]",
      "translationRu": "Смех",
      "translationEn": "Laughter",
      "imageUrl": "assets/photos/card_27_5.jpg",
      "photoQuery": "Friends laughing together sunny park",
      "audioNormal": "assets/audio/card_27_5.mp3"
    },
    "examples": [
      {
        "geo": "პატარა ბავშვმა ტირილი შეწყვიტა.",
        "gloss": "პატარა ბავშვმა (малыш) · ტირილი (плач) · შეწყვიტა (прекратил)",
        "ru": "Малыш перестал плакать.",
        "audio": "assets/audio/card_19_5_ex1.mp3"
      },
      {
        "geo": "სიხარულისგან ტირილი მომინდა.",
        "gloss": "სიხარულისგან (от радости) · ტირილი (заплакать) · მომინდა (мне захотелось)",
        "ru": "Мне захотелось расплакаться от радости.",
        "audio": "assets/audio/card_19_5_ex2.mp3"
      },
      {
        "geo": "სიცილი და ტირილი გვერდიგვერდ დადის.",
        "gloss": "სიცილი (смех) · და ტირილი (и слёзы) · გვერდიგვერდ დადის (ходят рядом)",
        "ru": "Смех и слёзы ходят рядом.",
        "audio": "assets/audio/card_19_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Глагол в наст. вр.: ის ტირის («он плачет») ↔ ის იცინის («он смеётся»). Запретительная форма с ნუ: ნუ ტირი! («Не плачь!»).",
    "culturalNote": "В знаменитом фильме Георгия Данелии «Не горюй!» (по-грузински «არ იდარდო!») тонко переплетены грузинский юмор, смех и светлые слёзы."
  },
  {
    "id": "card_20_1",
    "letter": "უ",
    "letterIndex": 20,
    "wordGeo": "უძველესი",
    "translitLat": "udzvelesi",
    "ipa": "[udzvɛlɛsi]",
    "translitRu": "удзвэлэси",
    "translationRu": "Древнейший",
    "translationEn": "Most ancient / Oldest",
    "difficulty": "Средний",
    "semanticHint": "Образовано от «ძველი» (старый) с помощью приставки превосходной степени უ-!",
    "imageUrl": "assets/photos/card_20_1.jpg",
    "imageCaption": "Пещерный античный город Уплисцихе, высеченный в скалах над Курой",
    "photoQuery": "Uplistsikhe cave town Georgia rock",
    "audioNormal": "assets/audio/card_20_1.mp3",
    "antonym": {
      "wordGeo": "უახლესი",
      "translitRu": "уахлэси",
      "ipa": "[uɑxlɛsi]",
      "translationRu": "Новейший / Самый современный",
      "translationEn": "Newest / Ultramodern",
      "imageUrl": "assets/photos/card_01_2.jpg",
      "photoQuery": "Batumi modern skyline architecture",
      "audioNormal": "assets/audio/ant_uakhlesi.mp3"
    },
    "examples": [
      {
        "geo": "უფლისციხე უძველესი ქალაქია.",
        "gloss": "უფლისციხე (Уплисцихе) · უძველესი (древнейший) · ქალაქია (город есть)",
        "ru": "Уплисцихе — древнейший город.",
        "audio": "assets/audio/card_20_1_ex1.mp3"
      },
      {
        "geo": "ქართული დამწერლობა უძველესია.",
        "gloss": "ქართული (грузинская) · დამწერლობა (письменность) · უძველესია (древнейшая есть)",
        "ru": "Грузинская письменность — одна из древнейших.",
        "audio": "assets/audio/card_20_1_ex2.mp3"
      },
      {
        "geo": "ეს უძველესი ტაძარია.",
        "gloss": "ეს (это) · უძველესი (древнейший) · ტაძარია (храм есть)",
        "ru": "Это древнейший храм.",
        "audio": "assets/audio/card_20_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Грамматическая формула превосходной степени: უ- + основа + -ესი! ძველი → უძველესი, ახალი → უახლესი, დიდი → უდიდესი.",
    "culturalNote": "Три исторических вида грузинского письма — Асомтаврули (V век), Нусхури и современный Мхедрули — внесены ЮНЕСКО в список живого культурного наследия человечества.",
    "category": "Город",
    "articulationTip": "Глубокий лабиализованный гласный «უ» открывает звонкую связку «ძვ-» [udzv-]."
  },
  {
    "id": "card_20_2",
    "letter": "უ",
    "letterIndex": 20,
    "wordGeo": "უხვი",
    "translitLat": "ukhvi",
    "ipa": "[uxvi]",
    "translitRu": "ухви",
    "translationRu": "Обильный / Щедрый",
    "translationEn": "Abundant / Generous",
    "difficulty": "Начальный",
    "semanticHint": "Осенний урожай гранатов, хурмы и винограда или хлебосольный грузинский стол.",
    "imageUrl": "assets/photos/card_20_2.jpg",
    "imageCaption": "Обильный осенний урожай спелых гранатов и хурмы в Грузии",
    "photoQuery": "Pomegranate persimmon autumn harvest basket",
    "audioNormal": "assets/audio/card_20_2.mp3",
    "antonym": {
      "wordGeo": "მწირი",
      "translitRu": "мц'ири",
      "ipa": "[mtsʼiri]",
      "translationRu": "Скудный / Редкий",
      "translationEn": "Scarce / Meager",
      "imageUrl": "assets/photos/ant_udabno.jpg",
      "photoQuery": "Dry rocky barren hill steppe",
      "audioNormal": "assets/audio/ant_mtsiri.mp3"
    },
    "examples": [
      {
        "geo": "შემოდგომის უხვი მოსავალი.",
        "gloss": "შემოდგომის (осени) · უხვი (обильный) · მოსავალი (урожай)",
        "ru": "Обильный осенний урожай.",
        "audio": "assets/audio/card_20_2_ex1.mp3"
      },
      {
        "geo": "საქართველო სტუმრისთვის გულუხვია.",
        "gloss": "საქართველო (Грузия) · სტუმრისთვის (для гостя) · გულუხვია (щедра сердцем есть)",
        "ru": "Грузия щедра сердцем к гостю.",
        "audio": "assets/audio/card_20_2_ex2.mp3"
      },
      {
        "geo": "წელს უხვი თოვლი მოვიდა.",
        "gloss": "წელს (в этом году) · უხვი (обильный) · თოვლი (снег) · მოვიდა (выпал)",
        "ru": "В этом году выпал обильный снег.",
        "audio": "assets/audio/card_20_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: უხვ- · Наречие: უხვად («щедро, обильно»). В сложении с გული (сердце) образует слово გულუხვი — «щедрый, великодушный».",
    "culturalNote": "Субтропическая Колхида и солнечная Кахетия позволяют собирать богатейший урожай инжира, фейхоа, мандаринов, хурмы, фундука и винограда.",
    "category": "Еда",
    "articulationTip": "Округлый гласный «უ» переходит в хрипловато-звонкую пару «ხვ-»."
  },
  {
    "id": "card_20_3",
    "letter": "უ",
    "letterIndex": 20,
    "wordGeo": "უბანი",
    "translitLat": "ubani",
    "ipa": "[ubɑni]",
    "translitRu": "убани",
    "translationRu": "Район / Квартал",
    "translationEn": "District / Neighborhood",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Глубокий гласный «უ» плавно переходит в звонкий губной «ბ» и открытое «ა».",
    "semanticHint": "Самобытные исторические кварталы Тбилиси: Сололаки, Вера, Авлабари, Чугурети и Абанотубани!",
    "imageUrl": "assets/photos/card_20_3.jpg",
    "imageCaption": "Уютный исторический квартал с черепичными крышами в Тбилиси",
    "photoQuery": "Historic neighborhood rooftops Sololaki Tbilisi",
    "audioNormal": "assets/audio/card_20_3.mp3",
    "antonym": {
      "wordGeo": "გარეუბანი",
      "translitRu": "гарэубани",
      "ipa": "[ɡɑrɛubɑni]",
      "translationRu": "Пригород / Окраина",
      "translationEn": "Suburb / Outskirts",
      "imageUrl": "assets/photos/ant_gareubani.jpg",
      "photoQuery": "Distant residential hills outskirts city",
      "audioNormal": "assets/audio/ant_gareubani.mp3"
    },
    "examples": [
      {
        "geo": "სოლოლაკი თბილისის ძველი უბანია.",
        "gloss": "სოლოლაკი (Сололаки) · თბილისის (Тбилиси) · ძველი უბანია (старинный район)",
        "ru": "Сололаки — старинный квартал Тбилиси.",
        "audio": "assets/audio/card_20_3_ex1.mp3"
      },
      {
        "geo": "რომელ უბანში ცხოვრობთ?",
        "gloss": "რომელ უბანში (в каком районе) · ცხოვრობთ (вы живёте)?",
        "ru": "В каком районе вы живёте?",
        "audio": "assets/audio/card_20_3_ex2.mp3"
      },
      {
        "geo": "ეს ძალიან მწვანე და წყნარი უბანია.",
        "gloss": "ეს ძალიან მწვანე (это очень зелёный) · და წყნარი უბანია (и тихий район)",
        "ru": "Это очень зелёный и тихий квартал.",
        "audio": "assets/audio/card_20_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: უბან- → უბნ- · Мн. ч.: უბნები («кварталы»). Название Абанотубани буквально сложено из აბანო (баня) + უბანი (квартал)!",
    "culturalNote": "Узнав слово «უბანი», вы сразу расшифруете название серных бань Тбилиси: «აბანოთუბანი» = «Банный квартал»!"
  },
  {
    "id": "card_20_4",
    "letter": "უ",
    "letterIndex": 20,
    "wordGeo": "უკეთესი",
    "translitLat": "uketesi",
    "ipa": "[ukʼɛtʰɛsi]",
    "translitRu": "ук'этʰэси",
    "translationRu": "Лучший / Более хороший",
    "translationEn": "Better",
    "difficulty": "Средний",
    "category": "Прилагательные",
    "articulationTip": "После «უ» сначала щёлкает сухой абруптив «კ» [kʼ], а в следующем слоге звучит придыхательный «თ» [tʰ]!",
    "semanticHint": "Сравнительная степень слова «კარგი» (хороший) — то, к чему стремится каждый ученик.",
    "imageUrl": "assets/photos/card_20_4.jpg",
    "imageCaption": "Солнечная вершина над облаками как символ роста и успеха",
    "photoQuery": "Mountain summit above clouds golden light",
    "audioNormal": "assets/audio/card_20_4.mp3",
    "antonym": {
      "wordGeo": "უარესი",
      "translitRu": "уарэси",
      "ipa": "[uɑrɛsi]",
      "translationRu": "Худший / Более плохой",
      "translationEn": "Worse",
      "imageUrl": "assets/photos/ant_uaresi.jpg",
      "photoQuery": "Broken muddy road puddle rain",
      "audioNormal": "assets/audio/ant_uaresi.mp3"
    },
    "examples": [
      {
        "geo": "დღეს უკეთესი ამინდია, ვიდრე გუშინ.",
        "gloss": "დღეს (сегодня) · უკეთესი ამინდია (погода лучше) · ვიდრე გუშინ (чем вчера)",
        "ru": "Сегодня погода лучше, чем вчера.",
        "audio": "assets/audio/card_20_4_ex1.mp3"
      },
      {
        "geo": "შენი ქართული დღითიდღე უკეთესი ხდება!",
        "gloss": "შენი ქართული (твой грузинский) · დღითიდღე (день ото дня) · უკეთესი ხდება (становится лучше)",
        "ru": "Твой грузинский становится лучше день ото дня!",
        "audio": "assets/audio/card_20_4_ex2.mp3"
      },
      {
        "geo": "ყველაფერი საუკეთესოს გისურვებთ!",
        "gloss": "ყველაფერი საუკეთესოს (всего наилучшего) · გისურვებთ (желаем вам)",
        "ru": "Желаем вам всего самого наилучшего!",
        "audio": "assets/audio/card_20_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Важная цепочка степеней сравнения: კარგი (хороший) → უკეთესი (лучше) → საუკეთესო (самый лучший)! Антоним: ცუდი (плохой) → უარესი (хуже).",
    "culturalNote": "Наречие «უკეთ» («лучше») пригодится в беседе о самочувствии: «დღეს თავს ბევრად უკეთ ვგრძნობ» — «Сегодня я чувствую себя гораздо лучше»."
  },
  {
    "id": "card_20_5",
    "letter": "უ",
    "letterIndex": 20,
    "wordGeo": "უსაფრთხო",
    "translitLat": "usaprtkho",
    "ipa": "[usɑpʰrtʰxɔ]",
    "translitRu": "усапʰртʰхо",
    "translationRu": "Безопасный / Надёжный",
    "translationEn": "Safe / Secure",
    "difficulty": "Сложный",
    "category": "Транспорт",
    "articulationTip": "В середине слова придыхательные и щелевые согласные «ფ-რ-თ-ხ» произносятся слитно благодаря опорному «რ».",
    "semanticHint": "Спокойные вечерние прогулки по освещённым набережным и надёжный горный маршрут.",
    "imageUrl": "assets/photos/card_20_5.jpg",
    "imageCaption": "Освещённый каменный маяк на берегу спокойного вечернего моря",
    "photoQuery": "Lighthouse beacon safe harbor dusk sea",
    "audioNormal": "assets/audio/card_20_5.mp3",
    "antonym": {
      "wordGeo": "საშიში",
      "translitRu": "сашиши",
      "ipa": "[sɑʃiʃi]",
      "translationRu": "Опасный",
      "translationEn": "Dangerous / Risky",
      "imageUrl": "assets/photos/ant_sashishi.jpg",
      "photoQuery": "Steep cliff warning edge high mountain",
      "audioNormal": "assets/audio/ant_sashishi.mp3"
    },
    "examples": [
      {
        "geo": "თბილისი სტუმრებისთვის უსაფრთხო ქალაქია.",
        "gloss": "თბილისი (Тбилиси) · სტუმრებისთვის (для гостей) · უსაფრთხო ქალაქია (безопасный город)",
        "ru": "Тбилиси — безопасный город для гостей.",
        "audio": "assets/audio/card_20_5_ex1.mp3"
      },
      {
        "geo": "ეს ბილიკი სრულიად უსაფრთხოა.",
        "gloss": "ეს ბილიკი (эта тропа) · სრულიად (полностью) · უსაფრთხოა (безопасна)",
        "ru": "Эта тропа полностью безопасна.",
        "audio": "assets/audio/card_20_5_ex2.mp3"
      },
      {
        "geo": "უსაფრთხო მგზავრობას გისურვებთ!",
        "gloss": "უსაფრთხო (безопасной) · მგზავრობას (поездки) · გისურვებთ (желаем)",
        "ru": "Желаем безопасного путешествия!",
        "audio": "assets/audio/card_20_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Образовано приставкой отсутствия უ-...-ო от слова საფრთხე («опасность, угроза»): უსაფრთხო = «безопасный», უსაფრთხოება = «безопасность».",
    "culturalNote": "В самолётах и поездах Грузии вы услышите объявление о ремнях безопасности: «უსაფრთხოების ღვედი»!"
  },
  {
    "id": "card_21_1",
    "letter": "ფ",
    "letterIndex": 21,
    "wordGeo": "ფართო",
    "translitLat": "parto",
    "ipa": "[pʰɑrtʰɔ]",
    "translitRu": "пʰартʰо",
    "translationRu": "Широкий / Просторный",
    "translationEn": "Wide / Spacious",
    "difficulty": "Начальный",
    "semanticHint": "Широкий проспект Руставели или раскинувшаяся до горизонта Алазанская долина.",
    "imageUrl": "assets/photos/card_21_1.jpg",
    "imageCaption": "Широкая панорама Алазанской долины с холмов Кахетии",
    "photoQuery": "Alazani valley Kakheti panorama Georgia",
    "audioNormal": "assets/audio/card_21_1.mp3",
    "antonym": {
      "wordGeo": "ვიწრო",
      "translitRu": "виц'ро",
      "ipa": "[vitsʼrɔ]",
      "translationRu": "Узкий",
      "translationEn": "Narrow",
      "imageUrl": "assets/photos/card_06_2.jpg",
      "photoQuery": "Narrow alley Old Tbilisi",
      "audioNormal": "assets/audio/card_06_2.mp3"
    },
    "examples": [
      {
        "geo": "რუსთაველის გამზირი ფართოა.",
        "gloss": "რუსთაველის (Руставели) · გამზირი (проспект) · ფართოა (широкий есть)",
        "ru": "Проспект Руставели широкий.",
        "audio": "assets/audio/card_21_1_ex1.mp3"
      },
      {
        "geo": "ფართო აივანი ხედით მთაზე.",
        "gloss": "ფართო (широкий) · აივანი (балкон) · ხედით (с видом) · მთაზე (на гору)",
        "ru": "Просторный балкон с видом на гору.",
        "audio": "assets/audio/card_21_1_ex2.mp3"
      },
      {
        "geo": "ჩვენს სახლში ფართო დერეფანია.",
        "gloss": "ჩვენს სახლში (в нашем доме) · ფართო (широкий) · დერეფანია (коридор есть)",
        "ru": "В нашем доме широкий коридор.",
        "audio": "assets/audio/card_21_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Оба глухих взрывных в слове — придыхательные: ფ [pʰ] и თ [tʰ]. Произнесите «пʰартʰо» легко, на воздушном выдохе!",
    "culturalNote": "От слова «ფართო» происходит существительное ფართობი («площадь помещения/территории») — его часто можно увидеть в объявлениях об аренде жилья в Тбилиси.",
    "category": "Город",
    "articulationTip": "Начальный «ფ» произносится обеими губами с выдохом [pʰ], как английское p!"
  },
  {
    "id": "card_21_2",
    "letter": "ფ",
    "letterIndex": 21,
    "wordGeo": "ფერადი",
    "translitLat": "peradi",
    "ipa": "[pʰɛrɑdi]",
    "translitRu": "пʰэради",
    "translationRu": "Цветной / Красочный",
    "translationEn": "Colorful",
    "difficulty": "Начальный",
    "semanticHint": "Бирюзовые, терракотовые и резные витражные балконы над скалой Метехи.",
    "imageUrl": "assets/photos/card_21_2.jpg",
    "imageCaption": "Красочные резные деревянные балконы старого Тбилиси",
    "photoQuery": "Colorful wooden balconies Tbilisi Georgia",
    "audioNormal": "assets/audio/card_21_2.mp3",
    "antonym": {
      "wordGeo": "უფერული",
      "translitRu": "упʰэрули",
      "ipa": "[upʰɛruli]",
      "translationRu": "Бесцветный / Блёклый",
      "translationEn": "Colorless / Pale",
      "imageUrl": "assets/photos/ant_sichume.jpg",
      "photoQuery": "Monochrome misty grey mountains fog",
      "audioNormal": "assets/audio/ant_uperuli.mp3"
    },
    "examples": [
      {
        "geo": "ძველი თბილისის ფერადი აივნები.",
        "gloss": "ძველი (старого) · თბილისის (Тбилиси) · ფერადი (цветные) · აივნები (балконы)",
        "ru": "Красочные балконы Старого Тбилиси.",
        "audio": "assets/audio/card_21_2_ex1.mp3"
      },
      {
        "geo": "რა ფერია? — ფერადია!",
        "gloss": "რა (какого) · ფერია (цвета есть) · ფერადია (разноцветный есть)",
        "ru": "Какого цвета? — Разноцветный!",
        "audio": "assets/audio/card_21_2_ex2.mp3"
      },
      {
        "geo": "ბაზარში ფერადი სანელებლებია.",
        "gloss": "ბაზარში (на базаре) · ფერადი (разноцветные) · სანელებლებია (специи есть)",
        "ru": "На рынке разноцветные специи.",
        "audio": "assets/audio/card_21_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Корень ფერ- («цвет»): ფერადი (цветной), უფერული (приставка უ-...-ული означает отсутствие признака = «бесцветный»).",
    "culturalNote": "Именно от корня «ფერი» (цвет) происходит название знаменитого винограда Саперави (საფერავი) — буквально «красильный, дающий густой цвет»!",
    "category": "Прилагательные",
    "articulationTip": "Лёгкий губной выдох «ფ» [pʰ] перед открытым «ე» и раскатистым «რ»."
  },
  {
    "id": "card_21_3",
    "letter": "ფ",
    "letterIndex": 21,
    "wordGeo": "ფანჯარა",
    "translitLat": "panjara",
    "ipa": "[pʰɑndʒɑrɑ]",
    "translitRu": "пʰанджара",
    "translationRu": "Окно",
    "translationEn": "Window",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Начальная «ფ» произносится губами с воздушным выдохом [pʰ] («пʰанджара», ни в коем случае не «фанджара»!).",
    "semanticHint": "Распахнутое деревянное окно с видом на черепичные крыши и горы.",
    "imageUrl": "assets/photos/card_21_3.jpg",
    "imageCaption": "Старинное деревянное окно с цветами на подоконнике",
    "photoQuery": "Vintage wooden window flowers sill architecture",
    "audioNormal": "assets/audio/card_21_3.mp3",
    "antonym": {
      "wordGeo": "კარი",
      "translitRu": "k'ari",
      "ipa": "[kʼɑri]",
      "translationRu": "Дверь",
      "translationEn": "Door",
      "imageUrl": "assets/photos/card_10_1.jpg",
      "photoQuery": "Carved wooden door Tbilisi Sololaki",
      "audioNormal": "assets/audio/card_10_1.mp3"
    },
    "examples": [
      {
        "geo": "გთხოვთ, ფანჯარა გააღეთ.",
        "gloss": "გთხოვთ (пожалуйста) · ფანჯარა (окно) · გააღეთ (откройте)",
        "ru": "Пожалуйста, откройте окно.",
        "audio": "assets/audio/card_21_3_ex1.mp3"
      },
      {
        "geo": "მატარებელში ადგილი ფანჯარასთან მაქვს.",
        "gloss": "მატარებელში (в поезде) · ადგილი (место) · ფანჯარასთან (у окна) · მაქვს (у меня)",
        "ru": "В поезде у меня место у окна.",
        "audio": "assets/audio/card_21_3_ex2.mp3"
      },
      {
        "geo": "ფანჯრიდან მთები ჩანს.",
        "gloss": "ფანჯრიდან (из окна) · მთები (горы) · ჩანს (видны)",
        "ru": "Из окна видны горы.",
        "audio": "assets/audio/card_21_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ფანჯარ- → ფანჯრ- · Мн. ч.: ფანჯრები («окна»), исх. п.: ფანჯრიდან («из окна»).",
    "culturalNote": "В поезде или самолёте фраза «ადგილი ფანჯარასთან» («место у окна») поможет получить лучшие виды на ущелья Иори и Риони."
  },
  {
    "id": "card_21_4",
    "letter": "ფ",
    "letterIndex": 21,
    "wordGeo": "ფიქრი",
    "translitLat": "pikri",
    "ipa": "[pʰikʰri]",
    "translitRu": "пʰикʰри",
    "translationRu": "Мысль / Размышление",
    "translationEn": "Thought / Thinking",
    "difficulty": "Начальный",
    "category": "Действия",
    "articulationTip": "Две придыхательные согласные в коротком слове: губная «ფ» [pʰ] и заднеязычная «ქ» [kʰ]!",
    "semanticHint": "Тихое раздумье на берегу Куры или за чашкой вечернего чая.",
    "imageUrl": "assets/photos/card_21_4.jpg",
    "imageCaption": "Человек, задумчиво смотрящий на горную долину с утёса",
    "photoQuery": "Person contemplating mountain valley view quiet",
    "audioNormal": "assets/audio/card_21_4.mp3",
    "antonym": {
      "wordGeo": "მოქმედება",
      "translitRu": "мокʰмэдэба",
      "ipa": "[mɔkʰmɛdɛbɑ]",
      "translationRu": "Действие / Поступок",
      "translationEn": "Action",
      "imageUrl": "assets/photos/ant_mokmedeba.jpg",
      "photoQuery": "Runner sprinting mountain trail action",
      "audioNormal": "assets/audio/ant_mokmedeba.mp3"
    },
    "examples": [
      {
        "geo": "რას ფიქრობ ამ იდეაზე?",
        "gloss": "რას ფიქრობ (что ты думаешь) · ამ იდეაზე (об этой идее)?",
        "ru": "Что ты думаешь об этой идее?",
        "audio": "assets/audio/card_21_4_ex1.mp3"
      },
      {
        "geo": "მე ვფიქრობ, რომ ყველაფერი გამოვა.",
        "gloss": "მე ვფიქრობ (я думаю) · რომ (что) · ყველაფერი გამოვა (всё получится)",
        "ru": "Я думаю, что всё обязательно получится.",
        "audio": "assets/audio/card_21_4_ex2.mp3"
      },
      {
        "geo": "ჯერ ფიქრი, მერე მოქმედება.",
        "gloss": "ჯერ (сначала) · ფიქრი (мысль) · მერე (потом) · მოქმედება (действие)",
        "ru": "Сперва обдумай, затем действуй.",
        "audio": "assets/audio/card_21_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Глагол в наст. вр.: მე ვფიქრობ («я думаю»), შენ ფიქრობ («ты думаешь»). Одна из самых частых разговорных связок!",
    "culturalNote": "У Николоза Бараташвили есть знаменитое стихотворение «ფიქრნი მტკვრის პირას» — «Раздумья на берегу Куры»."
  },
  {
    "id": "card_21_5",
    "letter": "ფ",
    "letterIndex": 21,
    "wordGeo": "ფინჯანი",
    "translitLat": "pinjani",
    "ipa": "[pʰindʒɑni]",
    "translitRu": "пʰинджани",
    "translationRu": "Чашка",
    "translationEn": "Cup (coffee/tea)",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Воздушный губной «ფ» [pʰ] в начале и звонкая связка «ნჯ-» [ndʒ] в середине.",
    "semanticHint": "Изящная фарфоровая чашечка для утреннего кофе по-восточному или зелёного чая.",
    "imageUrl": "assets/photos/card_21_5.jpg",
    "imageCaption": "Керамическая чашка свежесваренного кофе на блюдце",
    "photoQuery": "Ceramic coffee cup saucer wooden table",
    "audioNormal": "assets/audio/card_21_5.mp3",
    "antonym": {
      "wordGeo": "ჭიქა",
      "translitRu": "ch'ika",
      "ipa": "[tʃʼikʰɑ]",
      "translationRu": "Стакан / Бокал (без ручки или винный)",
      "translationEn": "Glass / Tumbler",
      "imageUrl": "assets/photos/card_30_3.jpg",
      "photoQuery": "Crystal wine glass table light",
      "audioNormal": "assets/audio/card_30_3.mp3"
    },
    "examples": [
      {
        "geo": "ერთი ფინჯანი ყავა მოადუღეს.",
        "gloss": "ერთი ფინჯანი (одну чашку) · ყავა (кофе) · მოადუღეს (сварили)",
        "ru": "Сварили одну чашечку кофе.",
        "audio": "assets/audio/card_21_5_ex1.mp3"
      },
      {
        "geo": "მაგიდაზე თეთრი ფინჯანი დევს.",
        "gloss": "მაგიდაზე (на столе) · თეთრი ფინჯანი (белая чашка) · დევს (стоит/лежит)",
        "ru": "На столе стоит белая чашка.",
        "audio": "assets/audio/card_21_5_ex2.mp3"
      },
      {
        "geo": "კიდევ ერთი ფინჯანი ჩაი ხომ არ გნებავთ?",
        "gloss": "კიდევ ერთი ფინჯანი ჩაი (ещё чашечку чая) · ხომ არ გნებავთ (не желаете ли)?",
        "ru": "Не желаете ли ещё одну чашечку чая?",
        "audio": "assets/audio/card_21_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ფინჯან- → ფინჯნ- · Мн. ч.: ფინჯნები. Запомните различие: ფინჯანი — чашка для кофе/чая, а ჭიქა — стакан или бокал!",
    "culturalNote": "Вежливый вопрос хозяев «ყავას დალევთ? ერთი ფინჯანი!» («Выпьете кофе? Всего чашечку!») звучит в каждом грузинском доме."
  },
  {
    "id": "card_22_1",
    "letter": "ქ",
    "letterIndex": 22,
    "wordGeo": "ქალი",
    "translitLat": "kali",
    "ipa": "[kʰɑli]",
    "translitRu": "кʰали",
    "translationRu": "Женщина",
    "translationEn": "Woman",
    "difficulty": "Начальный",
    "semanticHint": "Величественный образ «Матери Грузии» на Сололакском хребте и грация танца Картули.",
    "imageUrl": "assets/photos/card_22_1.jpg",
    "imageCaption": "Грузинская женщина в традиционном национальном наряде",
    "photoQuery": "Georgian woman traditional national dress",
    "audioNormal": "assets/audio/card_22_1.mp3",
    "antonym": {
      "wordGeo": "კაცი",
      "translitRu": "к'ацʰи",
      "ipa": "[kʼɑtsʰi]",
      "translationRu": "Мужчина",
      "translationEn": "Man",
      "imageUrl": "assets/photos/card_10_2.jpg",
      "photoQuery": "Georgian man chokha heritage",
      "audioNormal": "assets/audio/card_10_2.mp3"
    },
    "examples": [
      {
        "geo": "ქართველი ქალი ცეკვავს.",
        "gloss": "ქართველი (грузинская) · ქალი (женщина) · ცეკვავს (танцует)",
        "ru": "Грузинская женщина танцует.",
        "audio": "assets/audio/card_22_1_ex1.mp3"
      },
      {
        "geo": "ქალბატონო, გამარჯობა!",
        "gloss": "ქალბატონო (госпожа, зв. п.) · გამარჯობა (здравствуйте)",
        "ru": "Здравствуйте, уважаемая госпожа!",
        "audio": "assets/audio/card_22_1_ex2.mp3"
      },
      {
        "geo": "ეს ქალი მასწავლებელია.",
        "gloss": "ეს (эта) · ქალი (женщина) · მასწავლებელია (учительница есть)",
        "ru": "Эта женщина — преподаватель.",
        "audio": "assets/audio/card_22_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ქალ- · Мн. ч.: ქალები. Вежливое обращение к женщине — ქალბატონო (к мужчине — ბატონო). Начинается с мягкого придыхательного ქ [kʰ]!",
    "culturalNote": "В XII веке правление царицы Тамары (თამარ მეფე — буквально «Царь Тамар») стало Золотым веком Грузии, а Шота Руставели провозгласил равенство: «Льва щенки равны друг другу — будь то самка иль самец».",
    "category": "Быт",
    "articulationTip": "Придыхательный «ქ» [kʰ] звучит мягко, на тёплом выдохе воздуха."
  },
  {
    "id": "card_22_2",
    "letter": "ქ",
    "letterIndex": 22,
    "wordGeo": "ქარი",
    "translitLat": "kari",
    "ipa": "[kʰɑri]",
    "translitRu": "кʰари",
    "translationRu": "Ветер",
    "translationEn": "Wind",
    "difficulty": "Средний",
    "semanticHint": "Струя воздуха при произнесении придыхательной буквы «ქ» сама подсказывает перевод этого слова!",
    "imageUrl": "assets/photos/card_22_2.jpg",
    "imageCaption": "Порывы горного ветра над альпийскими травами и облаками Кавказа",
    "photoQuery": "Windy mountain ridge clouds grass Caucasus",
    "audioNormal": "assets/audio/card_22_2.mp3",
    "antonym": {
      "wordGeo": "სიწყნარე",
      "translitRu": "сиц'кънарэ",
      "ipa": "[sitsʼqʼnɑrɛ]",
      "translationRu": "Штиль / Безветрие / Покой",
      "translationEn": "Calm / Stillness",
      "imageUrl": "assets/photos/card_19_2.jpg",
      "photoQuery": "Calm mirror lake reflection mountains",
      "audioNormal": "assets/audio/ant_sitsqnare.mp3"
    },
    "examples": [
      {
        "geo": "დღეს ძლიერი ქარი ქრის.",
        "gloss": "დღეს (сегодня) · ძლიერი (сильный) · ქარი (ветер) · ქრის (дует)",
        "ru": "Сегодня дует сильный ветер.",
        "audio": "assets/audio/card_22_2_ex1.mp3"
      },
      {
        "geo": "მთის გრილი ქარი.",
        "gloss": "მთის (горный) · გრილი (прохладный) · ქარი (ветер)",
        "ru": "Прохладный горный ветер.",
        "audio": "assets/audio/card_22_2_ex2.mp3"
      },
      {
        "geo": "ზღვაზე თბილი ქარი უბერავს.",
        "gloss": "ზღვაზე (на море) · თბილი (тёплый) · ქარი (ветер) · უბერავს (дует)",
        "ru": "На море дует тёплый ветер.",
        "audio": "assets/audio/card_22_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Эталонная минимальная пара грузинской фонетики: ქარი [kʰɑri] (ветер, с выдохом) ↔ კარი [kʼɑri] (дверь, без выдоха). Прилагательное: ქარიანი («ветреный»).",
    "culturalNote": "Любопытная мнемоника: поднесите ладонь ко рту — на слове «ქარი» (ветер) вы буквально почувствуете ветерок выдоха, а на «კარი» (дверь) воздух остаётся закрытым за «дверью»!",
    "category": "Природа",
    "articulationTip": "Выдохните воздух на «ქ» [kʰ] — именно этот выдох отличает «ветер» от «двери» (კარი)!"
  },
  {
    "id": "card_22_3",
    "letter": "ქ",
    "letterIndex": 22,
    "wordGeo": "ქვეყანა",
    "translitLat": "kveq'ana",
    "ipa": "[kʰvɛqʼɑnɑ]",
    "translitRu": "кʰвэкъана",
    "translationRu": "Страна / Весь свет",
    "translationEn": "Country / World",
    "difficulty": "Средний",
    "category": "Город",
    "articulationTip": "Отличное противопоставление: в начале воздушное «ქ» [kʰ], а во втором слоге глубокий гортанный «ყ» [qʼ]!",
    "semanticHint": "И родная страна на карте, и поэтическое обозначение всего белого света.",
    "imageUrl": "assets/photos/card_22_3.jpg",
    "imageCaption": "Панорамный вид на долины, реки и храмы Грузии с высоты",
    "photoQuery": "Scenic panorama Georgia valleys church mountains",
    "audioNormal": "assets/audio/card_22_3.mp3",
    "antonym": {
      "wordGeo": "უცხო მხარე",
      "translitRu": "уцʰхо мхарэ",
      "ipa": "[utsʰxɔ mxɑrɛ]",
      "translationRu": "Дальний чужой край",
      "translationEn": "Distant land",
      "imageUrl": "assets/photos/ant_utskhoeti.jpg",
      "photoQuery": "Distant desert horizon travel",
      "audioNormal": "assets/audio/ant_utskhoeti.mp3"
    },
    "examples": [
      {
        "geo": "საქართველო სტუმართმოყვარე ქვეყანაა.",
        "gloss": "საქართველო (Грузия) · სტუმართმოყვარე (гостеприимная) · ქვეყანაა (страна есть)",
        "ru": "Грузия — гостеприимная страна.",
        "audio": "assets/audio/card_22_3_ex1.mp3"
      },
      {
        "geo": "რომელი ქვეყნიდან ხართ?",
        "gloss": "რომელი (из какой) · ქვეყნიდან (страны) · ხართ (вы есть)?",
        "ru": "Из какой вы страны?",
        "audio": "assets/audio/card_22_3_ex2.mp3"
      },
      {
        "geo": "მთელი ქვეყანა შემოიარა.",
        "gloss": "მთელი ქვეყანა (весь свет / всю страну) · შემოიარა (он объехал)",
        "ru": "Он объехал всю страну (весь белый свет).",
        "audio": "assets/audio/card_22_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ქვეყან- → ქვეყნ- · Мн. ч.: ქვეყნები, исх. п.: ქვეყნიდან («из страны»).",
    "culturalNote": "Знакомство с новыми друзьями в Грузии почти всегда начинается с дружелюбного вопроса: «საიდან ხართ? რომელი ქვეყნიდან?»"
  },
  {
    "id": "card_22_4",
    "letter": "ქ",
    "letterIndex": 22,
    "wordGeo": "ქალაქი",
    "translitLat": "kalaki",
    "ipa": "[kʰɑlɑkʰi]",
    "translitRu": "кʰалакʰи",
    "translationRu": "Город",
    "translationEn": "City / Town",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Две придыхательные буквы «ქ» [kʰ] в начале и в конце слова обрамляют мягкий слог «-ლა-»!",
    "semanticHint": "Тбилиси, Кутаиси, Батуми, Телави, Сигнахи или Мцхета.",
    "imageUrl": "assets/photos/card_22_4.jpg",
    "imageCaption": "Вечерняя панорама исторического центра Тбилиси и реки Куры",
    "photoQuery": "Tbilisi cityscape river evening view Georgia",
    "audioNormal": "assets/audio/card_22_4.mp3",
    "antonym": {
      "wordGeo": "სოფელი",
      "translitRu": "сопʰэли",
      "ipa": "[sɔpʰɛli]",
      "translationRu": "Деревня / Село",
      "translationEn": "Village / Countryside",
      "imageUrl": "assets/photos/ant_sopeli.jpg",
      "photoQuery": "Picturesque mountain village green hills Georgia",
      "audioNormal": "assets/audio/ant_sopeli.mp3"
    },
    "examples": [
      {
        "geo": "ქუთაისი უძველესი ქართული ქალაქია.",
        "gloss": "ქუთაისი (Кутаиси) · უძველესი ქართული (древнейший грузинский) · ქალაქია (город)",
        "ru": "Кутаиси — древнейший грузинский город.",
        "audio": "assets/audio/card_22_4_ex1.mp3"
      },
      {
        "geo": "ზაფხულში ქალაქიდან სოფელში მივდივართ.",
        "gloss": "ზაფხულში (летом) · ქალაქიდან (из города) · სოფელში (в деревню) · მივდივართ (едем)",
        "ru": "Летом мы уезжаем из города в деревню.",
        "audio": "assets/audio/card_22_4_ex2.mp3"
      },
      {
        "geo": "ქალაქის ცენტრში ვსეირნობთ.",
        "gloss": "ქალაქის ცენტრში (в центре города) · ვსეირნობთ (мы гуляем)",
        "ru": "Мы гуляем по центру города.",
        "audio": "assets/audio/card_22_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ქალაქ- · Мн. ч.: ქალაქები · Сложное слово დედაქალაქი означает «столица» (букв. «мать-город»)!",
    "culturalNote": "Приставка «დედა-» (мать) в грузинском выделяет главное: დედაენა (родной язык), დედაქალაქი (столица), დედამიწა (планета Земля)!"
  },
  {
    "id": "card_22_5",
    "letter": "ქ",
    "letterIndex": 22,
    "wordGeo": "ქოლგა",
    "translitLat": "kolga",
    "ipa": "[kʰɔlɡɑ]",
    "translitRu": "кʰолга",
    "translationRu": "Зонт",
    "translationEn": "Umbrella",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Придыхательный «ქ» [kʰ] перед чистым круглым «ო» и звонкой парой «ლგ-».",
    "semanticHint": "Главный предмет в сумке во время прогулок по субтропическому Батуми!",
    "imageUrl": "assets/photos/card_22_5.jpg",
    "imageCaption": "Раскрытый зонт на мокрой мостовой во время осеннего дождя",
    "photoQuery": "Umbrella rain cobblestone street autumn",
    "audioNormal": "assets/audio/card_22_5.mp3",
    "antonym": {
      "wordGeo": "მზის სათვალე",
      "translitRu": "мзис сатʰвалэ",
      "ipa": "[mzis sɑtʰvɑlɛ]",
      "translationRu": "Солнцезащитные очки (атрибут ясного дня)",
      "translationEn": "Sunglasses",
      "imageUrl": "assets/photos/ant_satvale.jpg",
      "photoQuery": "Sunglasses sunny beach table summer",
      "audioNormal": "assets/audio/ant_satvale.mp3"
    },
    "examples": [
      {
        "geo": "წვიმს, ქოლგა არ დაგრჩეს!",
        "gloss": "წვიმს (идёт дождь) · ქოლგა (зонт) · არ დაგრჩეს (не забудь)!",
        "ru": "Идёт дождь, не забудь зонт!",
        "audio": "assets/audio/card_22_5_ex1.mp3"
      },
      {
        "geo": "ბათუმში ქოლგა ყოველთვის საჭიროა.",
        "gloss": "ბათუმში (в Батуми) · ქოლგა (зонт) · ყოველთვის საჭიროა (всегда нужен)",
        "ru": "В Батуми зонт пригодится всегда.",
        "audio": "assets/audio/card_22_5_ex2.mp3"
      },
      {
        "geo": "კართან ფერადი ქოლგა დგას.",
        "gloss": "კართან (у двери) · ფერადი ქოლგა (цветной зонт) · დგას (стоит)",
        "ru": "У двери стоит яркий зонт.",
        "audio": "assets/audio/card_22_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ქოლგ- · Мн. ч.: ქოლგები («зонты»). Не читайте безударный слог как «кал» — только отчётливое «кʰол-га»!",
    "culturalNote": "У скульптора Тамары Квеситадзе и художников Тбилиси образ пары под одним зонтом стал одним из самых романтичных городских сюжетов."
  },
  {
    "id": "card_23_1",
    "letter": "ღ",
    "letterIndex": 23,
    "wordGeo": "ღვინო",
    "translitLat": "ghvino",
    "ipa": "[ɣvinɔ]",
    "translitRu": "гхвино",
    "translationRu": "Вино",
    "translationEn": "Wine",
    "difficulty": "Средний",
    "semanticHint": "Древнейший напиток Грузии, выдерживаемый в глиняных амфорах квеври под землёй.",
    "imageUrl": "assets/photos/card_23_1.jpg",
    "imageCaption": "Глиняные кувшины квеври и грузинское виноделие в Кахетии",
    "photoQuery": "Qvevri Georgian wine cellar Kakheti",
    "audioNormal": "assets/audio/card_23_1.mp3",
    "antonym": {
      "wordGeo": "წყალი",
      "translitRu": "ц'къали",
      "ipa": "[tsʼqʼɑli]",
      "translationRu": "Вода",
      "translationEn": "Water",
      "imageUrl": "assets/photos/card_29_1.jpg",
      "photoQuery": "Mountain spring pure water Georgia",
      "audioNormal": "assets/audio/card_29_1.mp3"
    },
    "examples": [
      {
        "geo": "ქვევრის ქარვისფერი ღვინო.",
        "gloss": "ქვევრის (из квеври) · ქარვისფერი (янтарное) · ღვინო (вино)",
        "ru": "Янтарное вино из квеври.",
        "audio": "assets/audio/card_23_1_ex1.mp3"
      },
      {
        "geo": "სადაური ღვინოა? — კახური!",
        "gloss": "სადაური (откуда родом) · ღვინოა (вино есть) · კახური (кахетинское)",
        "ru": "Откуда это вино? — Кахетинское!",
        "audio": "assets/audio/card_23_1_ex2.mp3"
      },
      {
        "geo": "წითელი და ქარვისფერი ღვინო.",
        "gloss": "წითელი (красное) · და ქარვისფერი (и янтарное) · ღვინო (вино)",
        "ru": "Красное и янтарное вино.",
        "audio": "assets/audio/card_23_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа в косвенных падежах меняет -ო на -ი: ღვინის (род. п., «винный»), ღვინით (тв. п., «вином»). Начальное звонкое сочетание ღვ- [ɣv].",
    "culturalNote": "Многие лингвисты связывают происхождение индоевропейских слов wine / vin / Wein / вино с пракартвельским корнем *ღვინო (от глагола ღვივილი — «бродить, кипеть»). В Грузии найдены косточки культурного винограда в квеври возрастом 8000 лет!",
    "category": "Еда",
    "articulationTip": "Звонкое гортанно-нёбное «ღ» [ɣ] плавно сливается с «ვ» перед «ი»."
  },
  {
    "id": "card_23_2",
    "letter": "ღ",
    "letterIndex": 23,
    "wordGeo": "ღამე",
    "translitLat": "ghame",
    "ipa": "[ɣɑmɛ]",
    "translitRu": "гхамэ",
    "translationRu": "Ночь",
    "translationEn": "Night",
    "difficulty": "Начальный",
    "semanticHint": "Звёздное время суток над огнями Нарикалы и пожелание «Спокойной ночи!»",
    "imageUrl": "assets/photos/card_23_2.jpg",
    "imageCaption": "Огни ночного Тбилиси и подсвеченная крепость Нарикала над рекой",
    "photoQuery": "Tbilisi night panorama Narikala",
    "audioNormal": "assets/audio/card_23_2.mp3",
    "antonym": {
      "wordGeo": "დღე",
      "translitRu": "дгхе",
      "ipa": "[dɣɛ]",
      "translationRu": "День",
      "translationEn": "Day",
      "imageUrl": "assets/photos/card_04_2.jpg",
      "photoQuery": "Sunny day Sighnaghi Georgia",
      "audioNormal": "assets/audio/card_04_2.mp3"
    },
    "examples": [
      {
        "geo": "ღამე მშვიდობისა!",
        "gloss": "ღამე (ночь) · მშვიდობისა (мира / спокойствия)",
        "ru": "Спокойной ночи!",
        "audio": "assets/audio/card_23_2_ex1.mp3"
      },
      {
        "geo": "მთაში ვარსკვლავიანი ღამეა.",
        "gloss": "მთაში (в горах) · ვარსკვლავიანი (звёздная) · ღამეა (ночь есть)",
        "ru": "В горах звёздная ночь.",
        "audio": "assets/audio/card_23_2_ex2.mp3"
      },
      {
        "geo": "ღამით ქალაქი მშვიდია.",
        "gloss": "ღამით (ночью) · ქალაქი (город) · მშვიდია (спокойный есть)",
        "ru": "Ночью город спокоен.",
        "audio": "assets/audio/card_23_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ღამე- · Творительный падеж времени: ღამით («ночью», ср. დილით — «утром»). И в «დღე», и в «ღამე» звучит звонкая буква «ღ»!",
    "culturalNote": "В горном посёлке Абастумани расположена знаменитая астрофизическая обсерватория Грузии, прославившаяся исключительно прозрачным ночным небом.",
    "category": "Природа",
    "articulationTip": "Мягкое звонкое «ღ» [ɣ] в начале слова звучит бархатно и напевно."
  },
  {
    "id": "card_23_3",
    "letter": "ღ",
    "letterIndex": 23,
    "wordGeo": "ღიმილი",
    "translitLat": "ghimili",
    "ipa": "[ɣimili]",
    "translitRu": "гхимили",
    "translationRu": "Улыбка",
    "translationEn": "Smile",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "Мягкий звонкий увулярно-велярный «ღ» [ɣ] звучит тепло и плавно переходит в певучее «-იმილი».",
    "semanticHint": "Искреннее приветливое выражение лица, открывающее любое сердце в Грузии.",
    "imageUrl": "assets/photos/card_23_3.jpg",
    "imageCaption": "Искренняя тёплая улыбка при встрече в солнечный день",
    "photoQuery": "Warm genuine smile portrait outdoor sunlight",
    "audioNormal": "assets/audio/card_23_3.mp3",
    "antonym": {
      "wordGeo": "ცრემლი",
      "translitRu": "цʰрэмли",
      "ipa": "[tsʰrɛmli]",
      "translationRu": "Слеза",
      "translationEn": "Tear / Sadness",
      "imageUrl": "assets/photos/ant_tsremli.jpg",
      "photoQuery": "Single water drop leaf macro dew",
      "audioNormal": "assets/audio/ant_tsremli.mp3"
    },
    "examples": [
      {
        "geo": "შენი ღიმილი ყველას ახარებს.",
        "gloss": "შენი ღიმილი (твоя улыбка) · ყველას (всех) · ახარებს (радует)",
        "ru": "Твоя улыбка радует всех вокруг.",
        "audio": "assets/audio/card_23_3_ex1.mp3"
      },
      {
        "geo": "მასპინძელი ღიმილით შეგვხვდა.",
        "gloss": "მასპინძელი (хозяин) · ღიმილით (с улыбкой) · შეგვხვდა (встретил нас)",
        "ru": "Хозяин дома встретил нас с улыбкой.",
        "audio": "assets/audio/card_23_3_ex2.mp3"
      },
      {
        "geo": "გაიღიმე, ფოტოს გიღებ!",
        "gloss": "გაიღიმე (улыбнись) · ფოტოს (фото) · გიღებ (снимаю тебя)!",
        "ru": "Улыбнись, я тебя фотографирую!",
        "audio": "assets/audio/card_23_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Существительное: ღიმილი («улыбка») · Глагол: ის იღიმის («он улыбается»), повелительное: გაიღიმე! («улыбнись!»).",
    "culturalNote": "Доброжелательная улыбка и фраза «გამარჯობა!» в маленькой лавке или пекарне мгновенно превращают вас из туриста в желанного гостя."
  },
  {
    "id": "card_23_4",
    "letter": "ღ",
    "letterIndex": 23,
    "wordGeo": "ღია",
    "translitLat": "ghia",
    "ipa": "[ɣiɑ]",
    "translitRu": "гхиа",
    "translationRu": "Открытый / Светлый",
    "translationEn": "Open / Light-toned",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Звонкое бархатное «ღ» [ɣ] перед двумя чистыми гласными «ი-ა».",
    "semanticHint": "Табличка «Открыто» на двери пекарни, кафе, винного погреба или музея!",
    "imageUrl": "assets/photos/card_23_4.jpg",
    "imageCaption": "Распахнутые деревянные ставни и открытая дверь уютной лавки",
    "photoQuery": "Open wooden cafe door welcoming sign street",
    "audioNormal": "assets/audio/card_23_4.mp3",
    "antonym": {
      "wordGeo": "დაკეტილი",
      "translitRu": "dak'et'ili",
      "ipa": "[dɑkʼɛtʼili]",
      "translationRu": "Закрытый (на замок)",
      "translationEn": "Closed / Locked",
      "imageUrl": "assets/photos/ant_daketili.jpg",
      "photoQuery": "Closed vintage wooden door iron padlock",
      "audioNormal": "assets/audio/ant_daketili.mp3"
    },
    "examples": [
      {
        "geo": "მაღაზია ათ საათამდე ღიაა.",
        "gloss": "მაღაზია (магазин) · ათ საათამდე (до 10 часов) · ღიაა (открыт есть)",
        "ru": "Магазин открыт до десяти часов.",
        "audio": "assets/audio/card_23_4_ex1.mp3"
      },
      {
        "geo": "ფანჯარა ღია დავტოვე.",
        "gloss": "ფანჯარა (окно) · ღია (открытым) · დავტოვე (я оставил)",
        "ru": "Я оставил окно открытым.",
        "audio": "assets/audio/card_23_4_ex2.mp3"
      },
      {
        "geo": "უკაცრავად, კაფე უკვე ღიაა?",
        "gloss": "უკაცრავად (извините) · კაფე (кафе) · უკვე ღიაა (уже открыто)?",
        "ru": "Подскажите, кафе уже открыто?",
        "audio": "assets/audio/card_23_4_ex3.mp3"
      }
    ],
    "grammarMarker": "На дверях заведений запомните главную городскую пару: ღიაა («Открыто!») ↔ დაკეტილია («Закрыто!»). Также ღია означает светлый оттенок цвета (ღია ლურჯი — светло-синий).",
    "culturalNote": "Словосочетание «ღია ცის ქვეშ» («под открытым небом») вы встретите в названии Этнографического музея Тбилиси на склоне Черепашьего озера."
  },
  {
    "id": "card_23_5",
    "letter": "ღ",
    "letterIndex": 23,
    "wordGeo": "ღრუბელი",
    "translitLat": "ghrubeli",
    "ipa": "[ɣrubɛli]",
    "translitRu": "гхрубэли",
    "translationRu": "Облако / Туча",
    "translationEn": "Cloud",
    "difficulty": "Средний",
    "category": "Природа",
    "articulationTip": "Сочетание двух задне-сонорных звонких «ღრ-» [ɣr] звучит мягко, как дальний раскат грома.",
    "semanticHint": "Белые пушистые облака, плывущие прямо под ногами на смотровой площадке Гергети.",
    "imageUrl": "assets/photos/card_23_5.jpg",
    "imageCaption": "Пушистые белые облака над зелёными хребтами Большого Кавказа",
    "photoQuery": "White clouds mountain peaks Caucasus Georgia",
    "audioNormal": "assets/audio/card_23_5.mp3",
    "antonym": {
      "wordGeo": "მოწმენდილი ცა",
      "translitRu": "mots'mendili tsa",
      "ipa": "[mɔtsʼmɛndili tsʰɑ]",
      "translationRu": "Безоблачное ясное небо",
      "translationEn": "Clear cloudless sky",
      "imageUrl": "assets/photos/card_27_2.jpg",
      "photoQuery": "Clear deep blue sky sunny mountains",
      "audioNormal": "assets/audio/card_27_2.mp3"
    },
    "examples": [
      {
        "geo": "მწვერვალს თეთრი ღრუბელი ფარავს.",
        "gloss": "მწვერვალს (вершину) · თეთრი ღრუბელი (белое облако) · ფარავს (укрывает)",
        "ru": "Вершину горы окутывает белое облако.",
        "audio": "assets/audio/card_23_5_ex1.mp3"
      },
      {
        "geo": "დღეს ცაზე არც ერთი ღრუბელი არ არის.",
        "gloss": "დღეს (сегодня) · ცაზე (на небе) · არც ერთი ღრუბელი (ни облачка) · არ არის (нет)",
        "ru": "Сегодня на небе ни одного облачка.",
        "audio": "assets/audio/card_23_5_ex2.mp3"
      },
      {
        "geo": "ღრუბლიანი ამინდი მოსალოდნელია.",
        "gloss": "ღრუბლიანი (облачная) · ამინდი (погода) · მოსალოდნელია (ожидается)",
        "ru": "Ожидается облачная погода.",
        "audio": "assets/audio/card_23_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ღრუბელ- → ღრუბლ- · Мн. ч.: ღრუბლები («облака»), прил.: ღრუბლიანი («облачный»).",
    "culturalNote": "Курорты Бахмаро и Гомис-Мта знамениты тем, что вечером там можно наблюдать закат солнца прямо в бескрайнее «море облаков» под ногами."
  },
  {
    "id": "card_24_1",
    "letter": "ყ",
    "letterIndex": 24,
    "wordGeo": "ყურძენი",
    "translitLat": "q'urdzeni",
    "ipa": "[qʼurdzɛni]",
    "translitRu": "къурдзэни",
    "translationRu": "Виноград",
    "translationEn": "Grapes",
    "difficulty": "Средний",
    "semanticHint": "Сочные гроздья на лозе в Кахетии — сама буква «ყ» формой напоминает винный бокал!",
    "imageUrl": "assets/photos/card_24_1.jpg",
    "imageCaption": "Спелые гроздья винограда на солнечной лозе в Кахетии",
    "photoQuery": "Ripe grapes on vine vineyard harvest",
    "audioNormal": "assets/audio/card_24_1.mp3",
    "antonym": {
      "wordGeo": "ქიშმიში",
      "translitRu": "кʰишмиши",
      "ipa": "[kʰiʃmiʃi]",
      "translationRu": "Изюм (сушёный виноград)",
      "translationEn": "Raisins (dried grapes)",
      "imageUrl": "assets/photos/ant_kishmishi.jpg",
      "photoQuery": "Dried raisins golden dark bowl",
      "audioNormal": "assets/audio/ant_kishmishi.mp3"
    },
    "examples": [
      {
        "geo": "ტკბილი ყურძენი ვენახში.",
        "gloss": "ტკბილი (сладкий) · ყურძენი (виноград) · ვენახში (на винограднике)",
        "ru": "Сладкий виноград на винограднике.",
        "audio": "assets/audio/card_24_1_ex1.mp3"
      },
      {
        "geo": "შემოდგომაზე ყურძენს კრეფენ.",
        "gloss": "შემოდგომაზე (осенью) · ყურძენს (виноград, дат. п.) · კრეფენ (собирают)",
        "ru": "Осенью собирают виноград.",
        "audio": "assets/audio/card_24_1_ex2.mp3"
      },
      {
        "geo": "კახეთში შავი ყურძენი მწიფს.",
        "gloss": "კახეთში (в Кахетии) · შავი (чёрный) · ყურძენი (виноград) · მწიფს (зреет)",
        "ru": "В Кахетии зреет тёмный виноград.",
        "audio": "assets/audio/card_24_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ყურძენ- → ყურძნ- (род. п. ყურძნის წვენი — «виноградный сок»). Сочетает увулярный ყ [qʼ] и звонкую аффрикату ძ [dz].",
    "culturalNote": "В сентябре–октябре вся Кахетия живёт праздником «Ртвели» (რთველი): семьи собирают виноград вручную в плетёные корзины «годори» и поют многоголосные песни.",
    "category": "Еда",
    "articulationTip": "Глубокий гортанный щелчок корнем языка «ყ» [qʼ] в начале и слитное «ძ» в середине."
  },
  {
    "id": "card_24_2",
    "letter": "ყ",
    "letterIndex": 24,
    "wordGeo": "ყინული",
    "translitLat": "q'inuli",
    "ipa": "[qʼinuli]",
    "translitRu": "къинули",
    "translationRu": "Лёд",
    "translationEn": "Ice",
    "difficulty": "Средний",
    "semanticHint": "Вековые ледники Чалади и Гергети; входит в грузинское название горы Казбек — Мкинварцвери («Ледяная вершина»).",
    "imageUrl": "assets/photos/card_24_2.jpg",
    "imageCaption": "Голубой горный ледник в высокогорье Сванетии",
    "photoQuery": "Chalaadi glacier Caucasus ice Georgia",
    "audioNormal": "assets/audio/card_24_2.mp3",
    "antonym": {
      "wordGeo": "ცეცხლი",
      "translitRu": "цʰэцʰхли",
      "ipa": "[tsʰɛtsʰxli]",
      "translationRu": "Огонь / Пламя",
      "translationEn": "Fire / Flame",
      "imageUrl": "assets/photos/ant_tsetskhli.jpg",
      "photoQuery": "Warm fireplace wood fire flame hearth",
      "audioNormal": "assets/audio/ant_tsetskhli.mp3"
    },
    "examples": [
      {
        "geo": "წყალი ყინულად იქცა.",
        "gloss": "წყალი (вода) · ყინულად (в лёд) · იქცა (превратилась)",
        "ru": "Вода превратилась в лёд.",
        "audio": "assets/audio/card_24_2_ex1.mp3"
      },
      {
        "geo": "ყინული და ცეცხლი.",
        "gloss": "ყინული (лёд) · და (и) · ცეცხლი (огонь)",
        "ru": "Лёд и пламя.",
        "audio": "assets/audio/card_24_2_ex2.mp3"
      },
      {
        "geo": "ჩაიში ყინული ჩავაგდე.",
        "gloss": "ჩაიში (в чай) · ყინული (лёд) · ჩავაგდე (я бросил)",
        "ru": "Я добавил лёд в лимонад / холодный чай.",
        "audio": "assets/audio/card_24_2_ex3.mp3"
      }
    ],
    "grammarMarker": "От того же корня ყინ- происходят слова ნაყინი («мороженое»!) и მყინვარი («ледник»). Глубокий гортанный щелчок [qʼ] в начале слова.",
    "culturalNote": "По-грузински гора Казбек называется «მყინვარწვერი» (Мкинварцвери) — буквально «Вершина, покрытая льдом»!",
    "category": "Природа",
    "articulationTip": "Сомкните корень языка в глубине горла на «ყ» [qʼ] перед высоким гласным «ი»."
  },
  {
    "id": "card_24_3",
    "letter": "ყ",
    "letterIndex": 24,
    "wordGeo": "ყავა",
    "translitLat": "q'ava",
    "ipa": "[qʼɑvɑ]",
    "translitRu": "къава",
    "translationRu": "Кофе",
    "translationEn": "Coffee",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Сделайте чёткий глубокий увулярный щелчок корнем языка «ყ» [qʼ] и раскройте рот на «ა-ვა»!",
    "semanticHint": "Ароматный напиток в медной джезве — утренний ритуал в каждом тбилисском дворике.",
    "imageUrl": "assets/photos/card_24_3.jpg",
    "imageCaption": "Свежесваренный кофе в турке и кофейные зёрна на столе",
    "photoQuery": "Turkish coffee cezve cup coffee beans",
    "audioNormal": "assets/audio/card_24_3.mp3",
    "antonym": {
      "wordGeo": "ჩაი",
      "translitRu": "chai",
      "ipa": "[tʃʰɑi]",
      "translationRu": "Чай",
      "translationEn": "Tea",
      "imageUrl": "assets/photos/card_26_3.jpg",
      "photoQuery": "Georgian leaf tea teapot cup",
      "audioNormal": "assets/audio/card_26_3.mp3"
    },
    "examples": [
      {
        "geo": "ერთი უშაქრო ყავა, თუ შეიძლება.",
        "gloss": "ერთი (один) · უშაქრო (без сахара) · ყავა (кофе) · თუ შეიძლება (пожалуйста)",
        "ru": "Один кофе без сахара, пожалуйста.",
        "audio": "assets/audio/card_24_3_ex1.mp3"
      },
      {
        "geo": "დილით ცხელი ყავა მაღვიძებს.",
        "gloss": "დილით (утром) · ცხელი ყავა (горячий кофе) · მაღვიძებს (будит меня)",
        "ru": "Утром меня бодрит горячий кофе.",
        "audio": "assets/audio/card_24_3_ex2.mp3"
      },
      {
        "geo": "ყავას დალევ თუ ჩაის?",
        "gloss": "ყავას (кофе) · დალევ (выпьешь) · თუ ჩაის (или чай)?",
        "ru": "Будешь пить кофе или чай?",
        "audio": "assets/audio/card_24_3_ex3.mp3"
      }
    ],
    "grammarMarker": "От слова ყავა образовано название коричневого цвета по-грузински — ყავისფერი (буквально «кофейного цвета»)!",
    "culturalNote": "Заказывая кофе по-турецки в джезве, в Грузии говорят «ნალექიანი ყავა» (буквально «кофе с гущей/осадком») или современный «ესპრესო / კაპუჩინო»."
  },
  {
    "id": "card_24_4",
    "letter": "ყ",
    "letterIndex": 24,
    "wordGeo": "ყიდვა",
    "translitLat": "q'idva",
    "ipa": "[qʼidvɑ]",
    "translitRu": "къидва",
    "translationRu": "Покупка / Покупать",
    "translationEn": "Buying / Purchase",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Глубокий гортанный щелчок «ყ» [qʼ] перед высоким «ი» и звонкой связкой «დვ-».",
    "semanticHint": "Приобретение сувениров на Сухом мосту, свежих фруктов на рынке или билетов в кассе.",
    "imageUrl": "assets/photos/card_24_4.jpg",
    "imageCaption": "Покупка свежих фруктов и ремесленных сувениров на ярмарке",
    "photoQuery": "Buying fresh fruit artisan market stall",
    "audioNormal": "assets/audio/card_24_4.mp3",
    "antonym": {
      "wordGeo": "გაყიდვა",
      "translitRu": "gaq'idva",
      "ipa": "[ɡɑqʼidvɑ]",
      "translationRu": "Продажа / Продавать",
      "translationEn": "Selling / Sale",
      "imageUrl": "assets/photos/ant_gaqidva.jpg",
      "photoQuery": "Vendor selling spices colorful market Georgia",
      "audioNormal": "assets/audio/ant_gaqidva.mp3"
    },
    "examples": [
      {
        "geo": "საჩუქრის ყიდვა მინდა.",
        "gloss": "საჩუქრის (подарка) · ყიდვა (покупка / купить) · მინდა (хочу)",
        "ru": "Я хочу купить подарок.",
        "audio": "assets/audio/card_24_4_ex1.mp3"
      },
      {
        "geo": "სად შეიძლება წყლის ყიდვა?",
        "gloss": "სად შეიძლება (где можно) · წყლის (воду) · ყიდვა (купить)?",
        "ru": "Где здесь можно купить воду?",
        "audio": "assets/audio/card_24_4_ex2.mp3"
      },
      {
        "geo": "გუშინ კარგი წიგნი ვიყიდე.",
        "gloss": "გუშინ (вчера) · კარგი წიგნი (хорошую книгу) · ვიყიდე (я купил)",
        "ru": "Вчера я купил хорошую книгу.",
        "audio": "assets/audio/card_24_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Обратите внимание на пару приставок: ყიდვა (покупать: მე ვყიდულობ) ↔ გაყიდვა (продавать: ის ყიდის; на вывесках домов — იყიდება «Продаётся!»).",
    "culturalNote": "Блошиный рынок у Сухого моста («მშრალი ხიდი») в Тбилиси — легендарное место для покупки старинной керамики, картин и винтажных редкостей."
  },
  {
    "id": "card_24_5",
    "letter": "ყ",
    "letterIndex": 24,
    "wordGeo": "ყვავილი",
    "translitLat": "q'vavili",
    "ipa": "[qʼvɑvili]",
    "translitRu": "къвавили",
    "translationRu": "Цветок",
    "translationEn": "Flower",
    "difficulty": "Средний",
    "category": "Природа",
    "articulationTip": "Сочетание гортанного «ყ» с губным «ვ» [qʼv] произносится одним упругим округлённым щелчком!",
    "semanticHint": "Весенние маки Кахетии, горные рододендроны и цветочные ряды у площади Орбелиани.",
    "imageUrl": "assets/photos/card_24_5.jpg",
    "imageCaption": "Яркие живые цветы в плетёных корзинах цветочного рынка",
    "photoQuery": "Colorful fresh flowers bouquets street market",
    "audioNormal": "assets/audio/card_24_5.mp3",
    "antonym": {
      "wordGeo": "ეკალი",
      "translitRu": "ek'ali",
      "ipa": "[ɛkʼɑli]",
      "translationRu": "Шип / Колючка",
      "translationEn": "Thorn",
      "imageUrl": "assets/photos/ant_ekali.jpg",
      "photoQuery": "Dry thorn branch macro nature",
      "audioNormal": "assets/audio/ant_ekali.mp3"
    },
    "examples": [
      {
        "geo": "აივანზე ლამაზი ყვავილები ყვავის.",
        "gloss": "აივანზე (на балконе) · ლამაზი ყვავილები (красивые цветы) · ყვავის (цветут)",
        "ru": "На балконе цветут красивые цветы.",
        "audio": "assets/audio/card_24_5_ex1.mp3"
      },
      {
        "geo": "მან დედას ყვავილების თაიგული აჩუქა.",
        "gloss": "მან (он) · დედას (маме) · ყვავილების თაიგული (букет цветов) · აჩუქა (подарил)",
        "ru": "Он подарил маме букет цветов.",
        "audio": "assets/audio/card_24_5_ex2.mp3"
      },
      {
        "geo": "მინდვრის ყვავილებს ნაზი სურნელი აქვს.",
        "gloss": "მინდვრის ყვავილებს (у полевых цветов) · ნაზი სურნელი (нежный аромат) · აქვს (есть)",
        "ru": "У полевых цветов нежный аромат.",
        "audio": "assets/audio/card_24_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ყვავილ- · Мн. ч.: ყვავილები («цветы») · Глагол: ყვავის («цветёт»). На цветочных павильонах Орбелиани вы увидите надпись «ყვავილები».",
    "culturalNote": "В конце мая в Тбилиси проходит красочный Фестиваль цветов на улице Шардени и площади Орбелиани."
  },
  {
    "id": "card_25_1",
    "letter": "შ",
    "letterIndex": 25,
    "wordGeo": "შავი",
    "translitLat": "shavi",
    "ipa": "[ʃɑvi]",
    "translitRu": "шави",
    "translationRu": "Чёрный / Тёмный",
    "translationEn": "Black / Dark",
    "difficulty": "Начальный",
    "semanticHint": "Цвет магнитных песков Уреки, Чёрного моря и густого вина Саперави.",
    "imageUrl": "assets/photos/card_25_1.jpg",
    "imageCaption": "Скалистый берег и глубокие волны Чёрного моря у Сарпи",
    "photoQuery": "Sarpi Black Sea rocks coast Georgia",
    "audioNormal": "assets/audio/card_25_1.mp3",
    "antonym": {
      "wordGeo": "თეთრი",
      "translitRu": "тʰэтʰри",
      "ipa": "[tʰɛtʰri]",
      "translationRu": "Белый",
      "translationEn": "White",
      "imageUrl": "assets/photos/card_08_2.jpg",
      "photoQuery": "Snowy white mountain peak Caucasus",
      "audioNormal": "assets/audio/card_08_2.mp3"
    },
    "examples": [
      {
        "geo": "შავი ზღვის სანაპირო.",
        "gloss": "შავი (Чёрного) · ზღვის (моря) · სანაპირო (побережье)",
        "ru": "Побережье Чёрного моря.",
        "audio": "assets/audio/card_25_1_ex1.mp3"
      },
      {
        "geo": "საფერავი შავი ღვინოა.",
        "gloss": "საფერავი (Саперави) · შავი (чёрное / красное) · ღვინოა (вино есть)",
        "ru": "Саперави — «чёрное» (красное) вино.",
        "audio": "assets/audio/card_25_1_ex2.mp3"
      },
      {
        "geo": "მიყვარს მაგარი შავი ყავა.",
        "gloss": "მიყვარს (люблю) · მაგარი (крепкий) · შავი (чёрный) · ყავა (кофе)",
        "ru": "Я люблю крепкий чёрный кофе.",
        "audio": "assets/audio/card_25_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Удивительная культурно-языковая деталь: красное вино по-грузински традиционно называют НЕ «წითელი» (красное), а именно «შავი ღვინო» (чёрное вино)!",
    "culturalNote": "В Пасанаури сливаются две реки — Белая Арагви (თეთრი არაგვი) и Чёрная Арагви (შავი არაგვი), долго текущие в одном русле двухцветной лентой, не смешиваясь.",
    "category": "Прилагательные",
    "articulationTip": "Грузинский «შ» чуть мягче русского «ш», ближе к шелесту морской волны."
  },
  {
    "id": "card_25_2",
    "letter": "შ",
    "letterIndex": 25,
    "wordGeo": "შორი",
    "translitLat": "shori",
    "ipa": "[ʃɔri]",
    "translitRu": "шори",
    "translationRu": "Далёкий",
    "translationEn": "Far / Distant",
    "difficulty": "Начальный",
    "semanticHint": "Дальние синеющие гряды гор на горизонте за перевалами Хевсуретии.",
    "imageUrl": "assets/photos/card_25_2.jpg",
    "imageCaption": "Далёкие хребты Хевсуретии в утренней голубой дымке",
    "photoQuery": "Distant mountain ranges Khevsureti Georgia",
    "audioNormal": "assets/audio/card_25_2.mp3",
    "antonym": {
      "wordGeo": "ახლო",
      "translitRu": "ахло",
      "ipa": "[ɑxlɔ]",
      "translationRu": "Близкий",
      "translationEn": "Near / Close",
      "imageUrl": "assets/photos/ant_akhlo.jpg",
      "photoQuery": "Mtskheta Jvari view close confluence Georgia",
      "audioNormal": "assets/audio/ant_akhlo.mp3"
    },
    "examples": [
      {
        "geo": "მცხეთა თბილისთან ახლოსაა, არ არის შორს.",
        "gloss": "მცხეთა (Мцхета) · თბილისთან (к Тбилиси) · ახლოსაა (близко есть) · არ არის (не есть) · შორს (далеко)",
        "ru": "Мцхета близко к Тбилиси, совсем не далеко.",
        "audio": "assets/audio/card_25_2_ex1.mp3"
      },
      {
        "geo": "შორი გზა მთებისკენ.",
        "gloss": "შორი (далёкая) · გზა (дорога) · მთებისკენ (к горам)",
        "ru": "Далёкая дорога к горам.",
        "audio": "assets/audio/card_25_2_ex2.mp3"
      },
      {
        "geo": "სადგური აქედან შორია?",
        "gloss": "სადგური (вокзал) · აქედან (отсюда) · შორია (далёкий есть)?",
        "ru": "Вокзал далеко отсюда?",
        "audio": "assets/audio/card_25_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Прилагательные: შორი (далёкий) ↔ ახლო (близкий). Наречия места на -ს: შორს («далеко») ↔ ახლოს («близко»).",
    "culturalNote": "Не перепутайте визуально «შ» (два ушка сверху) и «მ» (один крючок сверху): შორი = далёкий, მთა = гора!",
    "category": "Транспорт",
    "articulationTip": "Мягкий шипящий «შ» перед круглым «ო» — никогда не «акайте» в первом слоге!"
  },
  {
    "id": "card_25_3",
    "letter": "შ",
    "letterIndex": 25,
    "wordGeo": "შაქარი",
    "translitLat": "shakari",
    "ipa": "[ʃɑkʰɑri]",
    "translitRu": "шакʰари",
    "translationRu": "Сахар",
    "translationEn": "Sugar",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Мягкий шипящий «შ» в начале и воздушный придыхательный «ქ» [kʰ] во втором слоге.",
    "semanticHint": "Сладкая добавка к чаю и кофе; ключ к важнейшему слову в кафе — «უშაქრო» (без сахара)!",
    "imageUrl": "assets/photos/card_25_3.jpg",
    "imageCaption": "Белые кубики сахара и сахарница рядом с чашкой чая",
    "photoQuery": "Sugar cubes bowl spoon tea table",
    "audioNormal": "assets/audio/card_25_3.mp3",
    "antonym": {
      "wordGeo": "მარილი",
      "translitRu": "марили",
      "ipa": "[mɑrili]",
      "translationRu": "Соль",
      "translationEn": "Salt",
      "imageUrl": "assets/photos/ant_marili.jpg",
      "photoQuery": "Coarse sea salt wooden spoon spice",
      "audioNormal": "assets/audio/ant_marili.mp3"
    },
    "examples": [
      {
        "geo": "ჩაის უშაქროდ ვსვამ.",
        "gloss": "ჩაის (чай) · უშაქროდ (без сахара) · ვსვამ (я пью)",
        "ru": "Я пью чай без сахара.",
        "audio": "assets/audio/card_25_3_ex1.mp3"
      },
      {
        "geo": "ერთი კოვზი შაქარი ჩამიყარეთ, გთხოვთ.",
        "gloss": "ერთი კოვზი (одну ложку) · შაქარი (сахара) · ჩამიყარეთ (добавьте мне)",
        "ru": "Добавьте мне одну ложечку сахара, пожалуйста.",
        "audio": "assets/audio/card_25_3_ex2.mp3"
      },
      {
        "geo": "მაგიდაზე შაქარი და მარილი დევს.",
        "gloss": "მაგიდაზე (на столе) · შაქარი და მარილი (сахар и соль) · დევს (стоят)",
        "ru": "На столе стоят сахар и соль.",
        "audio": "assets/audio/card_25_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: შაქარ- → შაქრ- · Прилагательное «без сахара»: უშაქრო (ყავა უშაქროდ), а «бессолевой»: უმარილო.",
    "culturalNote": "Особая гордость Грузии — знаменитая сванская соль («სვანური მარილი»), перетёртая в ступке с горными травами, уцхо-сунели и чесноком!"
  },
  {
    "id": "card_25_4",
    "letter": "შ",
    "letterIndex": 25,
    "wordGeo": "შესვლა",
    "translitLat": "shesvla",
    "ipa": "[ʃɛsvlɑ]",
    "translitRu": "шэсвла",
    "translationRu": "Вход / Вхождение",
    "translationEn": "Entrance / Entering",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Мягкий «შ» перед «ე» и плавный переход через свистяще-звонкую связку «სვლ-».",
    "semanticHint": "Вход в музей, театр, храм или вагон метро («შესასვლელი»).",
    "imageUrl": "assets/photos/card_25_4.jpg",
    "imageCaption": "Парадный каменный портал входа в историческое здание Тбилиси",
    "photoQuery": "Ornate historic entrance doorway architecture Tbilisi",
    "audioNormal": "assets/audio/card_25_4.mp3",
    "antonym": {
      "wordGeo": "გასვლა",
      "translitRu": "gasvla",
      "ipa": "[ɡɑsvlɑ]",
      "translationRu": "Выход",
      "translationEn": "Exit",
      "imageUrl": "assets/photos/card_03_4.jpg",
      "photoQuery": "Stone archway exit sunlit courtyard",
      "audioNormal": "assets/audio/card_03_4.mp3"
    },
    "examples": [
      {
        "geo": "მუზეუმში შესვლა უფასოა.",
        "gloss": "მუზეუმში (в музей) · შესვლა (вход) · უფასოა (бесплатный есть)",
        "ru": "Вход в музей бесплатный.",
        "audio": "assets/audio/card_25_4_ex1.mp3"
      },
      {
        "geo": "შემობრძანდით, კარი ღიაა!",
        "gloss": "შემობრძანდით (входите / добро пожаловать) · კარი ღიაა (дверь открыта)!",
        "ru": "Проходите, пожалуйста, дверь открыта!",
        "audio": "assets/audio/card_25_4_ex2.mp3"
      },
      {
        "geo": "სად არის მთავარი შესასვლელი?",
        "gloss": "სად არის (где находится) · მთავარი (главный) · შესასვლელი (вход)?",
        "ru": "Где находится главный вход?",
        "audio": "assets/audio/card_25_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Приставка შე- всегда указывает направление ВНУТРЬ: შესვლა («войти»), შესასვლელი («вход»), შემოდი! («заходи сюда ко мне!»).",
    "culturalNote": "Самое изысканное приглашение хозяина войти в дом звучит как «შემობრძანდით!» («Милости просим войти!»)."
  },
  {
    "id": "card_25_5",
    "letter": "შ",
    "letterIndex": 25,
    "wordGeo": "შემოდგომა",
    "translitLat": "shemodgoma",
    "ipa": "[ʃɛmɔdɡɔmɑ]",
    "translitRu": "шэмодгома",
    "translationRu": "Осень",
    "translationEn": "Autumn / Fall",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Мягкий «შ» в начале, два чистых круглых «ო» и слитная звонкая пара «დგ-» в середине.",
    "semanticHint": "Бархатный золотой сезон в Грузии — время Ртвели, гранатов, молодого вина и Тбилисобы!",
    "imageUrl": "assets/photos/card_25_5.jpg",
    "imageCaption": "Золотая осенняя листва в горных лесах и виноградниках Грузии",
    "photoQuery": "Golden autumn trees mountains Kakheti Georgia",
    "audioNormal": "assets/audio/card_25_5.mp3",
    "antonym": {
      "wordGeo": "გაზაფხული",
      "translitRu": "газапʰхули",
      "ipa": "[ɡɑzɑpʰxuli]",
      "translationRu": "Весна",
      "translationEn": "Spring",
      "imageUrl": "assets/photos/ant_gazapkhuli.jpg",
      "photoQuery": "Spring pink blossoms orchard mountains Georgia",
      "audioNormal": "assets/audio/ant_gazapkhuli.mp3"
    },
    "examples": [
      {
        "geo": "საქართველოში ოქროსფერი შემოდგომაა.",
        "gloss": "საქართველოში (в Грузии) · ოქროსფერი (золотая) · შემოდგომაა (осень стоит)",
        "ru": "В Грузии стоит золотая осень.",
        "audio": "assets/audio/card_25_5_ex1.mp3"
      },
      {
        "geo": "შემოდგომაზე თბილისობა აღინიშნება.",
        "gloss": "შემოდგომაზე (осенью) · თბილისობა (Тбилисоба) · აღინიშნება (отмечается)",
        "ru": "Осенью празднуется день города — Тбилисоба.",
        "audio": "assets/audio/card_25_5_ex2.mp3"
      },
      {
        "geo": "შემოდგომა და გაზაფხული საუკეთესო დროა.",
        "gloss": "შემოდგომა და გაზაფხული (осень и весна) · საუკეთესო დროა (лучшее время)",
        "ru": "Осень и весна — лучшее время для поездок.",
        "audio": "assets/audio/card_25_5_ex3.mp3"
      }
    ],
    "grammarMarker": "С послелогом -ზე («осенью / весной»): შემოდგომაზე и გაზაფხულზე (но с послелогом -ში для зимы и лета: ზამთარში, ზაფხულში — важный нюанс!).",
    "culturalNote": "Запомните тонкое правило предлогов сезонов: ზაფხულში / ზამთარში (-ში), но გაზაფხულზე / შემოდგომაზე (-ზე)!"
  },
  {
    "id": "card_26_1",
    "letter": "ჩ",
    "letterIndex": 26,
    "wordGeo": "ჩქარი",
    "translitLat": "chkari",
    "ipa": "[tʃʰkʰɑri]",
    "translitRu": "чʰкʰари",
    "translationRu": "Быстрый / Стремительный",
    "translationEn": "Rapid / Express",
    "difficulty": "Средний",
    "semanticHint": "Бурный горный поток Риони или скорый экспресс Тбилиси — Батуми.",
    "imageUrl": "assets/photos/card_26_1.jpg",
    "imageCaption": "Стремительный бурлящий поток горной реки в ущелье Кавказа",
    "photoQuery": "Fast mountain river canyon Caucasus Georgia",
    "audioNormal": "assets/audio/card_26_1.mp3",
    "antonym": {
      "wordGeo": "მდორე",
      "translitRu": "мдорэ",
      "ipa": "[mdɔrɛ]",
      "translationRu": "Медленный / Плавно текущий",
      "translationEn": "Sluggish / Calm-flowing",
      "imageUrl": "assets/photos/card_13_2.jpg",
      "photoQuery": "Calm river valley lowland Georgia",
      "audioNormal": "assets/audio/ant_mdore.mp3"
    },
    "examples": [
      {
        "geo": "რიონი ჩქარი მდინარეა.",
        "gloss": "რიონი (Риони) · ჩქარი (быстрая) · მდინარეა (река есть)",
        "ru": "Риони — стремительная река.",
        "audio": "assets/audio/card_26_1_ex1.mp3"
      },
      {
        "geo": "ჩქარა წავიდეთ!",
        "gloss": "ჩქარა (быстро / скорее) · წავიდეთ (пойдёмте)",
        "ru": "Пойдёмте скорее!",
        "audio": "assets/audio/card_26_1_ex2.mp3"
      },
      {
        "geo": "ჩქარი მატარებელი ბათუმში მიდის.",
        "gloss": "ჩქარი (скорый) · მატარებელი (поезд) · ბათუმში (в Батуми) · მიდის (идёт)",
        "ru": "Скорый поезд идёт в Батуми.",
        "audio": "assets/audio/card_26_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Гармоническая пара двух придыхательных согласных ჩქ- [tʃʰkʰ]: оба звука произносятся на едином лёгком выдохе! Наречие: ჩქარა («быстро»).",
    "culturalNote": "От корня «ჩქარ-» произошло прекрасное грузинское слово ჩანჩქერი (чанчкери) — «водопад» (буквально «стремительно ниспадающий»)!",
    "category": "Транспорт",
    "articulationTip": "Два придыхательных звука подряд «ჩქ-» [tʃʰkʰ] произносятся на одном выдохе."
  },
  {
    "id": "card_26_2",
    "letter": "ჩ",
    "letterIndex": 26,
    "wordGeo": "ჩრდილი",
    "translitLat": "chrdili",
    "ipa": "[tʃʰrdili]",
    "translitRu": "чʰрдили",
    "translationRu": "Тень / Прохладная сень",
    "translationEn": "Shade / Shadow",
    "difficulty": "Сложный",
    "semanticHint": "Прохладная сень вековых платанов (чинар) и виноградных пергол в летний полдень.",
    "imageUrl": "assets/photos/card_26_2.jpg",
    "imageCaption": "Кружевная тень вековых платанов на прогулочной аллее парка",
    "photoQuery": "Plane tree shade park sunlit path",
    "audioNormal": "assets/audio/card_26_2.mp3",
    "antonym": {
      "wordGeo": "მზე",
      "translitRu": "мзэ",
      "ipa": "[mzɛ]",
      "translationRu": "Солнце / Солнцепёк",
      "translationEn": "Sun / Sunlight",
      "imageUrl": "assets/photos/card_12_1.jpg",
      "photoQuery": "Bright sun over Caucasus mountains",
      "audioNormal": "assets/audio/card_12_1.mp3"
    },
    "examples": [
      {
        "geo": "ზაფხულში ხის ჩრდილი გრილია.",
        "gloss": "ზაფხულში (летом) · ხის (дерева) · ჩრდილი (тень) · გრილია (прохладная есть)",
        "ru": "Летом тень дерева прохладная.",
        "audio": "assets/audio/card_26_2_ex1.mp3"
      },
      {
        "geo": "ჩრდილში დავსხდეთ.",
        "gloss": "ჩრდილში (в тени) · დავსხდეთ (давайте присядем)",
        "ru": "Давайте присядем в тени.",
        "audio": "assets/audio/card_26_2_ex2.mp3"
      },
      {
        "geo": "ეზოში კაკლის ხის ჩრდილია.",
        "gloss": "ეზოში (во дворе) · კაკლის ხის (орехового дерева) · ჩრდილია (тень есть)",
        "ru": "Во дворе тень грецкого ореха.",
        "audio": "assets/audio/card_26_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Тренировка грузинского консонантизма: 3 согласных в начале ჩ-რ-დ [tʃʰrd]! Хитрость: раскатистый сонорный «რ» служит мостиком между «ჩ» и «დ».",
    "culturalNote": "От слова «ჩრდილი» (тень) в грузинском языке образовано название стороны света «север» — ჩრდილოეთი (буквально «теневая сторона гор»!), а «юг» — სამხრეთი.",
    "category": "Природа",
    "articulationTip": "Опирайтесь на раскатистый «რ» внутри кластера «ჩ-რ-დ», и слово прозвучит легко!"
  },
  {
    "id": "card_26_3",
    "letter": "ჩ",
    "letterIndex": 26,
    "wordGeo": "ჩაი",
    "translitLat": "chai",
    "ipa": "[tʃʰɑi]",
    "translitRu": "чʰаи",
    "translationRu": "Чай",
    "translationEn": "Tea",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Придыхательная аффриката «ჩ» [tʃʰ] звучит с мягким выдохом и перетекает в открытое «ა-ი».",
    "semanticHint": "Душистый чёрный или зелёный листовой чай с плантаций Гурии и Имеретии.",
    "imageUrl": "assets/photos/card_26_3.jpg",
    "imageCaption": "Стеклянный чайник и чашка ароматного листового чая на столе",
    "photoQuery": "Glass teapot hot black tea cup herbs",
    "audioNormal": "assets/audio/card_26_3.mp3",
    "antonym": {
      "wordGeo": "ყავა",
      "translitRu": "q'ava",
      "ipa": "[qʼɑvɑ]",
      "translationRu": "Кофе",
      "translationEn": "Coffee",
      "imageUrl": "assets/photos/card_24_3.jpg",
      "photoQuery": "Freshly brewed coffee cup roasted beans",
      "audioNormal": "assets/audio/card_24_3.mp3"
    },
    "examples": [
      {
        "geo": "გურული მწვანე ჩაი ძალიან ნაზია.",
        "gloss": "გურული (гурийский) · მწვანე ჩაი (зелёный чай) · ძალიან ნაზია (очень нежный)",
        "ru": "Гурийский зелёный чай очень нежный.",
        "audio": "assets/audio/card_26_3_ex1.mp3"
      },
      {
        "geo": "ჩაი ლიმონით და თაფლით მინდა.",
        "gloss": "ჩაი (чай) · ლიმონით და თაფლით (с лимоном и мёдом) · მინდა (хочу)",
        "ru": "Я хочу чай с лимоном и мёдом.",
        "audio": "assets/audio/card_26_3_ex2.mp3"
      },
      {
        "geo": "საღამოს მთის ბალახების ჩაის ვსვამთ.",
        "gloss": "საღამოს (вечером) · მთის ბალახების ჩაის (чай из горных трав) · ვსვამთ (пьём)",
        "ru": "Вечером мы пьём чай из горных трав.",
        "audio": "assets/audio/card_26_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Склонение: ჩაის ჭიქა («чайный стакан»), ჩაით («чаем»). Зелёный цвет по-грузински — მწვანე (მწვანე ჩაი — зелёный чай, შავი ჩაი — чёрный чай).",
    "culturalNote": "В Озургети, Чохатаури и Чиатуре сегодня возрождены крафтовые семейные плантации органического высокогорного грузинского чая."
  },
  {
    "id": "card_26_4",
    "letter": "ჩ",
    "letterIndex": 26,
    "wordGeo": "ჩასვლა",
    "translitLat": "chasvla",
    "ipa": "[tʃʰɑsvlɑ]",
    "translitRu": "чʰасвла",
    "translationRu": "Спуск / Прибытие",
    "translationEn": "Descent / Arrival down",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Придыхательное «ჩ» [tʃʰ] перед открытым «ა» и плавным трёхсогласным «სვლ-».",
    "semanticHint": "Спуск в каньон, спуск в метро на эскалаторе или прибытие в долину с гор.",
    "imageUrl": "assets/photos/card_26_4.jpg",
    "imageCaption": "Каменная тропа, плавно спускающаяся с холма в зелёную долину",
    "photoQuery": "Mountain footpath descending green valley",
    "audioNormal": "assets/audio/card_26_4.mp3",
    "antonym": {
      "wordGeo": "ასვლა",
      "translitRu": "asvla",
      "ipa": "[ɑsvlɑ]",
      "translationRu": "Подъём / Восхождение",
      "translationEn": "Ascent / Going up",
      "imageUrl": "assets/photos/card_01_4.jpg",
      "photoQuery": "Stairs climbing hilltop fortress Georgia",
      "audioNormal": "assets/audio/card_01_4.mp3"
    },
    "examples": [
      {
        "geo": "მეტროში ჩასვლა ესკალატორითაა.",
        "gloss": "მეტროში (в метро) · ჩასვლა (спуск) · ესკალატორითაა (на эскалаторе)",
        "ru": "Спуск в метро осуществляется по эскалатору.",
        "audio": "assets/audio/card_26_4_ex1.mp3"
      },
      {
        "geo": "კანიონში ჩასვლა ნახევარი საათი გრძელდება.",
        "gloss": "კანიონში (в каньон) · ჩასვლა (спуск) · ნახევარი საათი (полчаса) · გრძელდება (длится)",
        "ru": "Спуск в каньон занимает полчаса.",
        "audio": "assets/audio/card_26_4_ex2.mp3"
      },
      {
        "geo": "ბათუმში ჩასვლისთანავე ზღვაზე წავედით.",
        "gloss": "ბათუმში (в Батуми) · ჩასვლისთანავე (сразу по прибытии) · ზღვაზე წავედით (пошли на море)",
        "ru": "Сразу по прибытии в Батуми мы пошли к морю.",
        "audio": "assets/audio/card_26_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Приставка ჩა- означает движение вниз (и поездку из горного Тбилиси вниз к морю в Батуми или Кутаиси: ბათუმში ჩავედი — «я приехал в Батуми»!).",
    "culturalNote": "Любопытная деталь грузинской географии в языке: из Тбилиси в Западную Грузию и к морю всегда говорят «ჩასვლა» (спуститься через Рикотский перевал)!"
  },
  {
    "id": "card_26_5",
    "letter": "ჩ",
    "letterIndex": 26,
    "wordGeo": "ჩუმი",
    "translitLat": "chumi",
    "ipa": "[tʃʰumi]",
    "translitRu": "чʰуми",
    "translationRu": "Тихий / Бесшумный",
    "translationEn": "Quiet / Silent",
    "difficulty": "Начальный",
    "category": "Прилагательные",
    "articulationTip": "Мягкий выдох после «ჩ» [tʃʰ] округляется в глубокий звук «უ».",
    "semanticHint": "Тихая заповедная улочка, бесшумный шаг или уединённый уголок сада.",
    "imageUrl": "assets/photos/card_26_5.jpg",
    "imageCaption": "Тихая тенистая аллея монастырского сада в утреннем тумане",
    "photoQuery": "Quiet monastery garden path morning mist",
    "audioNormal": "assets/audio/card_26_5.mp3",
    "antonym": {
      "wordGeo": "ხმაურიანი",
      "translitRu": "хмауриани",
      "ipa": "[xmɑuriɑni]",
      "translationRu": "Шумный / Громкий",
      "translationEn": "Noisy / Loud",
      "imageUrl": "assets/photos/card_31_2.jpg",
      "photoQuery": "Busy waterfall rapids roaring river",
      "audioNormal": "assets/audio/card_31_2.mp3"
    },
    "examples": [
      {
        "geo": "ჩვენს სახლთან ჩუმი ქუჩაა.",
        "gloss": "ჩვენს სახლთან (у нашего дома) · ჩუმი (тихая) · ქუჩაა (улица есть)",
        "ru": "Рядом с нашим домом тихая улочка.",
        "audio": "assets/audio/card_26_5_ex1.mp3"
      },
      {
        "geo": "ჩუმად, ბავშვს სძინავს!",
        "gloss": "ჩუმად (тихо / тс-с) · ბავშვს (ребёнок) · სძინავს (спит)!",
        "ru": "Тише, малыш спит!",
        "audio": "assets/audio/card_26_5_ex2.mp3"
      },
      {
        "geo": "ტყეში ჩუმი საღამო დადგა.",
        "gloss": "ტყეში (в лесу) · ჩუმი საღამო (тихий вечер) · დადგა (наступил)",
        "ru": "В лесу наступил тихий вечер.",
        "audio": "assets/audio/card_26_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Цепочка однокоренных слов: ჩუმი (тихий) → ჩუმად (тихо) → სიჩუმე (тишина, безмолвие).",
    "culturalNote": "В театре марионеток Резо Габриадзе перед началом кукольного спектакля в маленьком зале воцаряется волшебная «სიჩუმე» (тишина)."
  },
  {
    "id": "card_27_1",
    "letter": "ც",
    "letterIndex": 27,
    "wordGeo": "ცივი",
    "translitLat": "tsivi",
    "ipa": "[tsʰivi]",
    "translitRu": "цʰиви",
    "translationRu": "Холодный",
    "translationEn": "Cold",
    "difficulty": "Начальный",
    "semanticHint": "Прозрачная ледяная вода из горного родника на Военно-Грузинской дороге.",
    "imageUrl": "assets/photos/card_27_1.jpg",
    "imageCaption": "Холодный горный ручей у подножия снежных вершин Кавказа",
    "photoQuery": "Cold mountain stream snow Caucasus",
    "audioNormal": "assets/audio/card_27_1.mp3",
    "antonym": {
      "wordGeo": "თბილი",
      "translitRu": "тʰбили",
      "ipa": "[tʰbili]",
      "translationRu": "Тёплый",
      "translationEn": "Warm",
      "imageUrl": "assets/photos/card_08_1.jpg",
      "photoQuery": "Sulfur baths warm steam Tbilisi",
      "audioNormal": "assets/audio/card_08_1.mp3"
    },
    "examples": [
      {
        "geo": "მთის ცივი წყარო.",
        "gloss": "მთის (горный) · ცივი (холодный) · წყარო (родник)",
        "ru": "Холодный горный родник.",
        "audio": "assets/audio/card_27_1_ex1.mp3"
      },
      {
        "geo": "ზამთარში ცივი ამინდია.",
        "gloss": "ზამთარში (зимой) · ცივი (холодная) · ამინდია (погода есть)",
        "ru": "Зимой стоит холодная погода.",
        "audio": "assets/audio/card_27_1_ex2.mp3"
      },
      {
        "geo": "ზაფხულში ცივი ლიმონათი გემრიელია.",
        "gloss": "ზაფხულში (летом) · ცივი (холодный) · ლიმონათი (лимонад) · გემრიელია (вкусный)",
        "ru": "Летом холодный грузинский лимонад очень вкусен.",
        "audio": "assets/audio/card_27_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ცივ- · Глагол состояния: მცივა («мне холодно», букв. «меня холодит») ↔ მცხელა («мне жарко»). Буква «ც» произносится с лёгким придыханием [tsʰ]!",
    "culturalNote": "Вдоль каждой горной дороги Грузии устроены каменные питьевые фонтанчики «წყარო» с ледяной («ცივი») родниковой водой в память о предках.",
    "category": "Еда",
    "articulationTip": "Свистящая аффриката «ც» [tsʰ] произносится с лёгким воздушным выдохом."
  },
  {
    "id": "card_27_2",
    "letter": "ც",
    "letterIndex": 27,
    "wordGeo": "ცა",
    "translitLat": "tsa",
    "ipa": "[tsʰɑ]",
    "translitRu": "цʰа",
    "translationRu": "Небо",
    "translationEn": "Sky / Heaven",
    "difficulty": "Начальный",
    "semanticHint": "Короткое двухбуквенное слово для бескрайнего свода над вершинами Сванетии.",
    "imageUrl": "assets/photos/card_27_2.jpg",
    "imageCaption": "Высокое синее небо с белыми облаками над хребтами Кавказа",
    "photoQuery": "Blue sky clouds over Caucasus mountains",
    "audioNormal": "assets/audio/card_27_2.mp3",
    "antonym": {
      "wordGeo": "მიწა",
      "translitRu": "миц'а",
      "ipa": "[mitsʼɑ]",
      "translationRu": "Земля / Почва",
      "translationEn": "Earth / Ground",
      "imageUrl": "assets/photos/ant_mitsa.jpg",
      "photoQuery": "Fertile vineyard soil earth Kakheti",
      "audioNormal": "assets/audio/ant_mitsa.mp3"
    },
    "examples": [
      {
        "geo": "დღეს მოწმენდილი ცაა.",
        "gloss": "დღეს (сегодня) · მოწმენდილი (ясное/безоблачное) · ცაა (небо есть)",
        "ru": "Сегодня ясное безоблачное небо.",
        "audio": "assets/audio/card_27_2_ex1.mp3"
      },
      {
        "geo": "ცა და მიწა.",
        "gloss": "ცა (небо) · და (и) · მიწა (земля)",
        "ru": "Небо и земля.",
        "audio": "assets/audio/card_27_2_ex2.mp3"
      },
      {
        "geo": "ღამის ცაზე ვარსკვლავებია.",
        "gloss": "ღამის (на ночном) · ცაზე (небе) · ვარსკვლავებია (звёзды есть)",
        "ru": "На ночном небе сияют звёзды.",
        "audio": "assets/audio/card_27_2_ex3.mp3"
      }
    ],
    "grammarMarker": "В паре «ცა [tsʰɑ] — მიწა [mitsʼɑ]» наглядно сталкиваются придыхательная ც (в слове «небо») и абруптивная წ (в слове «земля»)! Род. п.: ცის (отсюда ცისფერი — «голубой»).",
    "culturalNote": "Слово «ცისარტყელა» (радуга) по-грузински устроено удивительно образно: «ცის» (неба) + «სარტყელი» (пояс) = «небесный пояс»!",
    "category": "Природа",
    "articulationTip": "Короткий и чистый выдох после свистящего «ც» [tsʰ] в открытый звук «ა»."
  },
  {
    "id": "card_27_3",
    "letter": "ც",
    "letterIndex": 27,
    "wordGeo": "ცეცხლი",
    "translitLat": "tsetskhli",
    "ipa": "[tsʰɛtsʰxli]",
    "translitRu": "цʰэцʰхли",
    "translationRu": "Огонь / Костёр",
    "translationEn": "Fire / Bonfire",
    "difficulty": "Сложный",
    "category": "Природа",
    "articulationTip": "Два придыхательных свистящих «ც» [tsʰ] и финальный кластер «ც-ხ-ლ» на едином выдохе!",
    "semanticHint": "Живое пламя в камине «бухари» или походный костёр под звёздами Тушетии.",
    "imageUrl": "assets/photos/card_27_3.jpg",
    "imageCaption": "Яркое пламя дровяного камина и живого очага",
    "photoQuery": "Warm crackling wood fire hearth flame",
    "audioNormal": "assets/audio/card_27_3.mp3",
    "antonym": {
      "wordGeo": "წყალი",
      "translitRu": "ts'q'ali",
      "ipa": "[tsʼqʼɑli]",
      "translationRu": "Вода",
      "translationEn": "Water",
      "imageUrl": "assets/photos/card_29_1.jpg",
      "photoQuery": "Crystal clear mountain water stream",
      "audioNormal": "assets/audio/card_29_1.mp3"
    },
    "examples": [
      {
        "geo": "ბუხარში თბილი ცეცხლი ანთია.",
        "gloss": "ბუხარში (в камине) · თბილი ცეცხლი (тёплый огонь) · ანთია (горит)",
        "ru": "В камине горит тёплый огонь.",
        "audio": "assets/audio/card_27_3_ex1.mp3"
      },
      {
        "geo": "მწვადი ნაკვერჩხლის ცეცხლზე იწვება.",
        "gloss": "მწვადი (шашлык мцвади) · ნაკვერჩხლის ცეცხლზე (на углях костра) · იწვება (жарится)",
        "ru": "Шашлык жарится на углях виноградной лозы.",
        "audio": "assets/audio/card_27_3_ex2.mp3"
      },
      {
        "geo": "ცეცხლი და წყალი.",
        "gloss": "ცეცხლი (огонь) · და წყალი (и вода)",
        "ru": "Огонь и вода.",
        "audio": "assets/audio/card_27_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ცეცხლ- · От него же образовано слово სიცოცხლე («жизнь») и ცოცხალი («живой, полный огня»)!",
    "culturalNote": "Кахетинский шашлык «მწვადი» традиционно готовят исключительно на углях сухой виноградной лозы («წალამი»), дающей особый аромат."
  },
  {
    "id": "card_27_4",
    "letter": "ც",
    "letterIndex": 27,
    "wordGeo": "ცხელი",
    "translitLat": "tskheli",
    "ipa": "[tsʰxɛli]",
    "translitRu": "цʰхэли",
    "translationRu": "Горячий / Жаркий",
    "translationEn": "Hot",
    "difficulty": "Средний",
    "category": "Еда",
    "articulationTip": "Гармоническая придыхательно-щелевая пара «ცხ-» [tsʰx] произносится легко на одном воздушном выдохе!",
    "semanticHint": "Обжигающе горячие хинкали с бульоном или только что вынутый из печи хачапури.",
    "imageUrl": "assets/photos/card_27_4.jpg",
    "imageCaption": "Дымящиеся горячие грузинские хинкали с чёрным перцем на блюде",
    "photoQuery": "Hot steaming Georgian khinkali dumplings plate",
    "audioNormal": "assets/audio/card_27_4.mp3",
    "antonym": {
      "wordGeo": "ცივი",
      "translitRu": "tsivi",
      "ipa": "[tsʰivi]",
      "translationRu": "Холодный",
      "translationEn": "Cold",
      "imageUrl": "assets/photos/card_27_1.jpg",
      "photoQuery": "Ice cold mountain spring water",
      "audioNormal": "assets/audio/card_27_1.mp3"
    },
    "examples": [
      {
        "geo": "ცხელი ხინკალი ხელით იჭმება.",
        "gloss": "ცხელი ხინკალი (горячие хинкали) · ხელით (руками) · იჭმება (едят)",
        "ru": "Горячие хинкали едят руками!",
        "audio": "assets/audio/card_27_4_ex1.mp3"
      },
      {
        "geo": "დღეს ძალიან ცხელი შუადღეა.",
        "gloss": "დღეს (сегодня) · ძალიან ცხელი (очень жаркий) · შუადღეა (полдень)",
        "ru": "Сегодня очень жаркий полдень.",
        "audio": "assets/audio/card_27_4_ex2.mp3"
      },
      {
        "geo": "ცხელი შოთის პური მოიტანეს.",
        "gloss": "ცხელი (горячий) · შოთის პური (хлеб шоти) · მოიტანეს (принесли)",
        "ru": "Принесли горячий хлеб шоти.",
        "audio": "assets/audio/card_27_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Безличный глагол состояния: მე მცხელა («мне жарко») и დღეს ცხელა («сегодня жарко») ↔ მე მცივა / დღეს ცივა («холодно»).",
    "culturalNote": "Главное правило дегустации хинкали: взять за хвостик («კუჭი»), надкусить тёплое тесто и сначала выпить ароматный горячий бульон!"
  },
  {
    "id": "card_27_5",
    "letter": "ც",
    "letterIndex": 27,
    "wordGeo": "სიცილი",
    "translitLat": "sitsili",
    "ipa": "[sitsʰili]",
    "translitRu": "сицʰили",
    "translationRu": "Смех",
    "translationEn": "Laughter",
    "difficulty": "Начальный",
    "category": "Эмоции",
    "articulationTip": "В первом слоге простой свистящий «ს», а во втором — отчётливая придыхательная аффриката «ც» [tsʰ]!",
    "semanticHint": "Весёлый дружеский смех за столом или на солнечной набережной.",
    "imageUrl": "assets/photos/card_27_5.jpg",
    "imageCaption": "Друзья радостно смеются во время прогулки в солнечный день",
    "photoQuery": "Happy friends laughing together outdoor sunlight",
    "audioNormal": "assets/audio/card_27_5.mp3",
    "antonym": {
      "wordGeo": "ტირილი",
      "translitRu": "t'irili",
      "ipa": "[tʼirili]",
      "translationRu": "Плач",
      "translationEn": "Crying",
      "imageUrl": "assets/photos/card_19_5.jpg",
      "photoQuery": "Raindrops glass window cloudy day",
      "audioNormal": "assets/audio/card_19_5.mp3"
    },
    "examples": [
      {
        "geo": "ოთახი მხიარული სიცილით აივსო.",
        "gloss": "ოთახი (комната) · მხიარული სიცილით (весёлым смехом) · აივსო (наполнилась)",
        "ru": "Комната наполнилась весёлым смехом.",
        "audio": "assets/audio/card_27_5_ex1.mp3"
      },
      {
        "geo": "სიცილი სიცოცხლეს ახანგრძლივებს.",
        "gloss": "სიცილი (смех) · სიცოცხლეს (жизнь) · ახანგრძლივებს (продлевает)",
        "ru": "Смех продлевает жизнь.",
        "audio": "assets/audio/card_27_5_ex2.mp3"
      },
      {
        "geo": "ის გულიანად იცინის.",
        "gloss": "ის (он/она) · გულიანად (от души) · იცინის (смеётся)",
        "ru": "Он смеётся от всей души.",
        "audio": "assets/audio/card_27_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Обратите внимание на изучаемую букву «ც» в самом центре корня -ცინ-/-ცილ-: სიცილი («смех»), მე ვიცინი («я смеюсь»).",
    "culturalNote": "Грузинское наречие «გულიანად» («от всего сердца, от души») чаще всего сочетается именно со смехом и гостеприимством."
  },
  {
    "id": "card_28_1",
    "letter": "ძ",
    "letterIndex": 28,
    "wordGeo": "ძველი",
    "translitLat": "dzveli",
    "ipa": "[dzvɛli]",
    "translitRu": "дзвэли",
    "translationRu": "Старый / Старинный",
    "translationEn": "Old / Historic",
    "difficulty": "Начальный",
    "semanticHint": "Встречается на всех указателях в историческом центре столицы: «ძველი თბილისი»!",
    "imageUrl": "assets/photos/card_28_1.jpg",
    "imageCaption": "Исторический квартал Старого Тбилиси у скалы Метехи и крепости",
    "photoQuery": "Metekhi Old Tbilisi historic district",
    "audioNormal": "assets/audio/card_28_1.mp3",
    "antonym": {
      "wordGeo": "ახალი",
      "translitRu": "ахали",
      "ipa": "[ɑxɑli]",
      "translationRu": "Новый",
      "translationEn": "New",
      "imageUrl": "assets/photos/card_01_2.jpg",
      "photoQuery": "Bridge of Peace modern Tbilisi",
      "audioNormal": "assets/audio/card_01_2.mp3"
    },
    "examples": [
      {
        "geo": "ძველი თბილისი ძალიან ლამაზია.",
        "gloss": "ძველი (Старый) · თბილისი (Тбилиси) · ძალიან (очень) · ლამაზია (красивый есть)",
        "ru": "Старый Тбилиси очень красив.",
        "audio": "assets/audio/card_28_1_ex1.mp3"
      },
      {
        "geo": "ძველი მეგობარი ახალს ჯობია.",
        "gloss": "ძველი (старый) · მეგობარი (друг) · ახალს (нового) · ჯობია (лучше есть)",
        "ru": "Старый друг лучше нового.",
        "audio": "assets/audio/card_28_1_ex2.mp3"
      },
      {
        "geo": "ეს ძველი წიგნი ბიბლიოთეკაშია.",
        "gloss": "ეს (эта) · ძველი (старинная) · წიგნი (книга) · ბიბლიოთეკაშია (в библиотеке)",
        "ru": "Эта старинная книга хранится в библиотеке.",
        "audio": "assets/audio/card_28_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Начальная аффриката ძ [dz] произносится слитно одним движением языка и сразу переходит в звонкое ვ: [dzvɛli]. Мачта у буквы «ძ» стоит СПРАВА!",
    "culturalNote": "Для предметов и архитектуры говорят «ძველი» (старинный дом, старое вино), а для пожилого человека вежливо используют слово «ხანდაზმული» или «მოხუცი».",
    "category": "Город",
    "articulationTip": "Произнесите «ძ» [dz] слитно одним ударом кончика языка у зубов, сразу переходя к «ვ»."
  },
  {
    "id": "card_28_2",
    "letter": "ძ",
    "letterIndex": 28,
    "wordGeo": "ძლიერი",
    "translitLat": "dzlieri",
    "ipa": "[dzliɛri]",
    "translitRu": "дзлиэри",
    "translationRu": "Сильный / Могучий",
    "translationEn": "Strong / Powerful",
    "difficulty": "Средний",
    "semanticHint": "Могучий водопад Махунцети или богатырская сила витязя в тигровой шкуре.",
    "imageUrl": "assets/photos/card_28_2.jpg",
    "imageCaption": "Мощный горный водопад среди зелёных скал Западной Грузии",
    "photoQuery": "Waterfall canyon rocks Georgia nature",
    "audioNormal": "assets/audio/card_28_2.mp3",
    "antonym": {
      "wordGeo": "სუსტი",
      "translitRu": "суст'и",
      "ipa": "[sustʼi]",
      "translationRu": "Слабый",
      "translationEn": "Weak",
      "imageUrl": "assets/photos/ant_susti.jpg",
      "photoQuery": "Fragile dry leaf twig autumn wind",
      "audioNormal": "assets/audio/ant_susti.mp3"
    },
    "examples": [
      {
        "geo": "ჩანჩქერი ძალიან ძლიერია.",
        "gloss": "ჩანჩქერი (водопад) · ძალიან (очень) · ძლიერია (мощный есть)",
        "ru": "Водопад очень мощный.",
        "audio": "assets/audio/card_28_2_ex1.mp3"
      },
      {
        "geo": "ძლიერი ხასიათი და ნება.",
        "gloss": "ძლიერი (сильный) · ხასიათი (характер) · და (и) · ნება (воля)",
        "ru": "Сильный характер и воля.",
        "audio": "assets/audio/card_28_2_ex2.mp3"
      },
      {
        "geo": "მას ძლიერი ხმა აქვს.",
        "gloss": "მას (у него) · ძლიერი (сильный) · ხმა (голос) · აქვს (есть)",
        "ru": "У него сильный голос.",
        "audio": "assets/audio/card_28_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Образовано от существительного ძალა («сила») с выпадением гласного корня: ძალ- → ძლიერი. Однокоренное и хорошо знакомое наречие — ძალიან («очень»)!",
    "culturalNote": "Зная корень «ძალ-» (сила), вы сразу свяжете в памяти три важнейших слова: ძალა (сила), ძლიერი (сильный) и ძალიან (очень / сильно).",
    "category": "Эмоции",
    "articulationTip": "Звонкая связка «ძლ-» [dzl] звучит собранно и энергично."
  },
  {
    "id": "card_28_3",
    "letter": "ძ",
    "letterIndex": 28,
    "wordGeo": "ძმა",
    "translitLat": "dzma",
    "ipa": "[dzmɑ]",
    "translitRu": "дзма",
    "translationRu": "Брат",
    "translationEn": "Brother",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Слитная звонкая аффриката «ძ» [dz] сразу переходит в сомкнутые губы на «მ»: [dzmɑ].",
    "semanticHint": "Родной брат и тёплое дружеское обращение между близкими друзьями («ძმაო!»).",
    "imageUrl": "assets/photos/card_28_3.jpg",
    "imageCaption": "Два брата или близких друга на горной вершине Кавказа",
    "photoQuery": "Two brothers friends hiking mountain summit",
    "audioNormal": "assets/audio/card_28_3.mp3",
    "antonym": {
      "wordGeo": "და",
      "translitRu": "da",
      "ipa": "[dɑ]",
      "translationRu": "Сестра",
      "translationEn": "Sister",
      "imageUrl": "assets/photos/ant_da.jpg",
      "photoQuery": "Two sisters smiling garden sunny portrait",
      "audioNormal": "assets/audio/ant_da.mp3"
    },
    "examples": [
      {
        "geo": "ჩემი უფროსი ძმა ბათუმში ცხოვრობს.",
        "gloss": "ჩემი უფროსი ძმა (мой старший брат) · ბათუმში ცხოვრობს (живёт в Батуми)",
        "ru": "Мой старший брат живёт в Батуми.",
        "audio": "assets/audio/card_28_3_ex1.mp3"
      },
      {
        "geo": "და და ძმა ერთად სწავლობენ.",
        "gloss": "და (сестра) · და (и) · ძმა (брат) · ერთად სწავლობენ (учатся вместе)",
        "ru": "Сестра и брат учатся вместе.",
        "audio": "assets/audio/card_28_3_ex2.mp3"
      },
      {
        "geo": "როგორ ხარ, ჩემო ძმაო?",
        "gloss": "როგორ ხარ (как дела) · ჩემო ძმაო (мой брат, зв. п.)?",
        "ru": "Как ты, брат мой?",
        "audio": "assets/audio/card_28_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Забавный каламбур: короткое слово «და» в грузинском означает одновременно и союз «и», и существительное «сестра»! Поэтому «და და ძმა» = «сестра и брат»!",
    "culturalNote": "Слово ძმობა («братство, побратимство») — одно из ключевых понятий грузинской этики взаимовыручки."
  },
  {
    "id": "card_28_4",
    "letter": "ძ",
    "letterIndex": 28,
    "wordGeo": "ძაღლი",
    "translitLat": "dzaghli",
    "ipa": "[dzɑɣli]",
    "translitRu": "дзагхли",
    "translationRu": "Собака",
    "translationEn": "Dog",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Звонкое слитное «ძ» [dz] в начале и мягкая гортанно-сонорная связка «ღლ-» [ɣl] во втором слоге.",
    "semanticHint": "Добродушный пёс на солнечном бульваре или могучая пастушья овчарка в горах.",
    "imageUrl": "assets/photos/card_28_4.jpg",
    "imageCaption": "Дружелюбная собака на зелёной лужайке в солнечный день",
    "photoQuery": "Friendly golden dog green meadow park",
    "audioNormal": "assets/audio/card_28_4.mp3",
    "antonym": {
      "wordGeo": "კატა",
      "translitRu": "k'at'a",
      "ipa": "[kʼɑtʼɑ]",
      "translationRu": "Кошка",
      "translationEn": "Cat",
      "imageUrl": "assets/photos/ant_kata.jpg",
      "photoQuery": "Cat sleeping sunny stone courtyard Tbilisi",
      "audioNormal": "assets/audio/ant_kata.mp3"
    },
    "examples": [
      {
        "geo": "ეზოში საყვარელი ძაღლი თამაშობს.",
        "gloss": "ეზოში (во дворе) · საყვარელი ძაღლი (милая собака) · თამაშობს (играет)",
        "ru": "Во дворе играет симпатичный пёс.",
        "audio": "assets/audio/card_28_4_ex1.mp3"
      },
      {
        "geo": "ძაღლი და კატა მზეზე თბებიან.",
        "gloss": "ძაღლი და კატა (собака и кошка) · მზეზე (на солнце) · თბებიან (греются)",
        "ru": "Собака и кошка греются на солнышке.",
        "audio": "assets/audio/card_28_4_ex2.mp3"
      },
      {
        "geo": "მეცხვარის ძაღლი ფარას იცავს.",
        "gloss": "მეცხვარის ძაღლი (пастушья собака) · ფარას (отару) · იცავს (охраняет)",
        "ru": "Пастушья собака охраняет отару.",
        "audio": "assets/audio/card_28_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ძაღლ- · Мн. ч.: ძაღლები («собаки»), щенок — ლეკვი (а котёнок — კნუტი!).",
    "culturalNote": "Тбилиси славится невероятно спокойными и дружелюбными городскими собаками с бирками на ухе, которые мирно дремлют у кафе на Руставели."
  },
  {
    "id": "card_28_5",
    "letter": "ძ",
    "letterIndex": 28,
    "wordGeo": "ძილი",
    "translitLat": "dzili",
    "ipa": "[dzili]",
    "translitRu": "дзили",
    "translationRu": "Сон",
    "translationEn": "Sleep / Slumber",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Эталонное слово самого названия буквы «ძ» (ძილი)! Произнесите [dz] слитно одним касанием языка.",
    "semanticHint": "Спокойный глубокий ночной отдых под шум горной реки.",
    "imageUrl": "assets/photos/card_28_5.jpg",
    "imageCaption": "Уютная подушка и плед у окна в тихий вечерний час",
    "photoQuery": "Cozy pillow warm blanket bedroom evening rest",
    "audioNormal": "assets/audio/card_28_5.mp3",
    "antonym": {
      "wordGeo": "ღვიძილი",
      "translitRu": "гхвидзили",
      "ipa": "[ɣvidzili]",
      "translationRu": "Бодрствование",
      "translationEn": "Wakefulness",
      "imageUrl": "assets/photos/ant_ghvidzili.jpg",
      "photoQuery": "Sunrise coffee cup open curtains morning",
      "audioNormal": "assets/audio/ant_ghvidzili.mp3"
    },
    "examples": [
      {
        "geo": "ტკბილი ძილი და ღამე მშვიდობისა!",
        "gloss": "ტკბილი ძილი (сладких снов) · და ღამე მშვიდობისა (и спокойной ночи)!",
        "ru": "Сладких снов и спокойной ночи!",
        "audio": "assets/audio/card_28_5_ex1.mp3"
      },
      {
        "geo": "მშვიდი ძილი ჯანმრთელობაა.",
        "gloss": "მშვიდი ძილი (спокойный сон) · ჯანმრთელობაა (это здоровье)",
        "ru": "Спокойный сон — залог здоровья.",
        "audio": "assets/audio/card_28_5_ex2.mp3"
      },
      {
        "geo": "ადრე დაძინება და ადრე გაღვიძება.",
        "gloss": "ადრე დაძინება (рано уснуть) · და ადრე გაღვიძება (и рано проснуться)",
        "ru": "Рано ложиться и рано вставать.",
        "audio": "assets/audio/card_28_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Инверсивный глагол: მე მძინავს («я сплю»), მე მეძინება («мне хочется спать») ↔ მე მღვიძავს («я бодрствую / не сплю»).",
    "culturalNote": "Колыбельная песня по-грузински называется «იავნანა» — её нежные напевы веками передавались из поколения в поколение."
  },
  {
    "id": "card_29_1",
    "letter": "წ",
    "letterIndex": 29,
    "wordGeo": "წყალი",
    "translitLat": "ts'q'ali",
    "ipa": "[tsʼqʼɑli]",
    "translitRu": "ц'къали",
    "translationRu": "Вода",
    "translationEn": "Water",
    "difficulty": "Сложный",
    "semanticHint": "Знаменитое грузинское слово-тренажёр с двойным абруптивным щелчком წყ- в начале!",
    "imageUrl": "assets/photos/card_29_1.jpg",
    "imageCaption": "Чистейшая минеральная и родниковая вода Боржомского ущелья",
    "photoQuery": "Borjomi park spring river water Georgia",
    "audioNormal": "assets/audio/card_29_1.mp3",
    "antonym": {
      "wordGeo": "ცეცხლი",
      "translitRu": "цʰэцʰхли",
      "ipa": "[tsʰɛtsʰxli]",
      "translationRu": "Огонь",
      "translationEn": "Fire",
      "imageUrl": "assets/photos/ant_tsetskhli.jpg",
      "photoQuery": "Fire flame traditional hearth",
      "audioNormal": "assets/audio/ant_tsetskhli.mp3"
    },
    "examples": [
      {
        "geo": "ბორჯომის მინერალური წყალი.",
        "gloss": "ბორჯომის (Боржоми) · მინერალური (минеральная) · წყალი (вода)",
        "ru": "Минеральная вода Боржоми.",
        "audio": "assets/audio/card_29_1_ex1.mp3"
      },
      {
        "geo": "ერთი ჭიქა ცივი წყალი, გთხოვთ.",
        "gloss": "ერთი (один) · ჭიქა (стакан) · ცივი (холодной) · წყალი (воды) · გთხოვთ (пожалуйста)",
        "ru": "Один стакан холодной воды, пожалуйста.",
        "audio": "assets/audio/card_29_1_ex2.mp3"
      },
      {
        "geo": "წყალი სიცოცხლის წყაროა.",
        "gloss": "წყალი (вода) · სიცოცხლის (жизни) · წყაროა (источник есть)",
        "ru": "Вода — источник жизни.",
        "audio": "assets/audio/card_29_1_ex3.mp3"
      }
    ],
    "grammarMarker": "В косвенных падежах гласная «ა» выпадает, давая легендарный кластер из 3 согласных подряд წ-ყ-ლ: წყლის (воды), წყლით (водой)! Оба первых звука — абруптивы [tsʼqʼ].",
    "culturalNote": "Название курорта Цхалтубо (წყალტუბო) буквально состоит из двух знакомых вам корней: წყალი (вода) + ტუბო/თბილი (тёплая) = «Тёплые воды»!",
    "category": "Еда",
    "articulationTip": "Два абруптива подряд «წყ-» [tsʼqʼ]: острый свистящий щелчок у зубов + гортанный щелчок!"
  },
  {
    "id": "card_29_2",
    "letter": "წ",
    "letterIndex": 29,
    "wordGeo": "წმინდა",
    "translitLat": "ts'minda",
    "ipa": "[tsʼmindɑ]",
    "translitRu": "ц'минда",
    "translationRu": "Чистый / Прозрачный / Святой",
    "translationEn": "Pure / Clear / Saint",
    "difficulty": "Средний",
    "semanticHint": "Прозрачная ключевая вода и эпитет древних соборов Мцхеты и Тбилиси (Цминда Самеба).",
    "imageUrl": "assets/photos/card_29_2.jpg",
    "imageCaption": "Кафедральный собор Цминда Самеба (Святой Троицы) в Тбилиси",
    "photoQuery": "Sameba Holy Trinity Cathedral Tbilisi",
    "audioNormal": "assets/audio/card_29_2.mp3",
    "antonym": {
      "wordGeo": "მღვრიე",
      "translitRu": "мгхвриэ",
      "ipa": "[mɣvriɛ]",
      "translationRu": "Мутный / Взбаламученный",
      "translationEn": "Murky / Turbid",
      "imageUrl": "assets/photos/ant_mghvrie.jpg",
      "photoQuery": "Muddy flood river mountain stream",
      "audioNormal": "assets/audio/ant_mghvrie.mp3"
    },
    "examples": [
      {
        "geo": "წმინდა სამების ტაძარი.",
        "gloss": "წმინდა (Святой) · სამების (Троицы) · ტაძარი (собор)",
        "ru": "Собор Святой Троицы (Цминда Самеба).",
        "audio": "assets/audio/card_29_2_ex1.mp3"
      },
      {
        "geo": "მთის წყარო წმინდაა.",
        "gloss": "მთის (горный) · წყარო (родник) · წმინდაა (кристально чистый есть)",
        "ru": "Горный родник кристально чист.",
        "audio": "assets/audio/card_29_2_ex2.mp3"
      },
      {
        "geo": "მცხეთა წმინდა ქალაქია.",
        "gloss": "მცხეთა (Мцхета) · წმინდა (святой) · ქალაქია (город есть)",
        "ru": "Мцхета — священный город Грузии.",
        "audio": "assets/audio/card_29_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Неизменяемое прилагательное на -ა: წმინდა გიორგი (Святой Георгий), წმინდა წყალი (чистая вода). Чёткий щелчок წ [tsʼ] перед губно-губным მ.",
    "culturalNote": "Гора Мтацминда (მთაწმინდა), возвышающаяся с фуникулёром прямо над центром Тбилиси, переводится как «Святая гора» (მთა + წმინდა).",
    "category": "Прилагательные",
    "articulationTip": "Резкий безаспиративный щелчок «წ» [tsʼ] перед сомкнутыми губами на «მ»."
  },
  {
    "id": "card_29_3",
    "letter": "წ",
    "letterIndex": 29,
    "wordGeo": "წიგნი",
    "translitLat": "ts'igni",
    "ipa": "[tsʼiɡni]",
    "translitRu": "ц'игни",
    "translationRu": "Книга",
    "translationEn": "Book",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Острый сухой щелчок «წ» [tsʼ] без выдоха в начале и звонкая смычка «გნ-» во втором слоге.",
    "semanticHint": "Томик стихов, исторический роман или учебник грузинского языка.",
    "imageUrl": "assets/photos/card_29_3.jpg",
    "imageCaption": "Стопка книг в переплётах на деревянном столе библиотеки",
    "photoQuery": "Stack hardcover books wooden desk library",
    "audioNormal": "assets/audio/card_29_3.mp3",
    "antonym": {
      "wordGeo": "ეკრანი",
      "translitRu": "ek'rani",
      "ipa": "[ɛkʼrɑni]",
      "translationRu": "Экран (цифровой носитель)",
      "translationEn": "Screen",
      "imageUrl": "assets/photos/ant_ekrani.jpg",
      "photoQuery": "Modern tablet laptop screen desk workspace",
      "audioNormal": "assets/audio/ant_ekrani.mp3"
    },
    "examples": [
      {
        "geo": "ეს ჩემი საყვარელი ქართული წიგნია.",
        "gloss": "ეს (это) · ჩემი საყვარელი (моя любимая) · ქართული წიგნია (грузинская книга)",
        "ru": "Это моя любимая грузинская книга.",
        "audio": "assets/audio/card_29_3_ex1.mp3"
      },
      {
        "geo": "წიგნის მაღაზია რუსთაველზეა.",
        "gloss": "წიგნის მაღაზია (книжный магазин) · რუსთაველზეა (на Руставели есть)",
        "ru": "Книжный магазин находится на проспекте Руставели.",
        "audio": "assets/audio/card_29_3_ex2.mp3"
      },
      {
        "geo": "ძილის წინ წიგნს ვკითხულობ.",
        "gloss": "ძილის წინ (перед сном) · წიგნს (книгу) · ვკითხულობ (я читаю)",
        "ru": "Перед сном я читаю книгу.",
        "audio": "assets/audio/card_29_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: წიგნ- · Мн. ч.: წიგნები («книги») · Прилагательное განათლებული / წიგნიერი («грамотный, начитанный»).",
    "culturalNote": "В мае в Тбилиси проходит грандиозный Тбилисский международный книжный фестиваль, собирающий десятки тысяч читателей."
  },
  {
    "id": "card_29_4",
    "letter": "წ",
    "letterIndex": 29,
    "wordGeo": "წვიმა",
    "translitLat": "ts'vima",
    "ipa": "[tsʼvimɑ]",
    "translitRu": "ц'вима",
    "translationRu": "Дождь",
    "translationEn": "Rain",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Резкий свистящий щелчок «წ» [tsʼ] сразу переходит в звонкое губно-зубное «ვ» [tsʼv].",
    "semanticHint": "Тёплый летний ливень, умывающий брусчатку и виноградные листья.",
    "imageUrl": "assets/photos/card_29_4.jpg",
    "imageCaption": "Капли летнего дождя на зелёной листве и мостовой",
    "photoQuery": "Summer rain drops green leaves street",
    "audioNormal": "assets/audio/card_29_4.mp3",
    "antonym": {
      "wordGeo": "გვალვა",
      "translitRu": "гвалва",
      "ipa": "[ɡvɑlvɑ]",
      "translationRu": "Засуха / Зной без дождей",
      "translationEn": "Drought",
      "imageUrl": "assets/photos/ant_gvalva.jpg",
      "photoQuery": "Dry cracked earth sunbaked steppe summer",
      "audioNormal": "assets/audio/ant_gvalva.mp3"
    },
    "examples": [
      {
        "geo": "წვიმის შემდეგ ცისარტყელა გამოჩნდა.",
        "gloss": "წვიმის შემდეგ (после дождя) · ცისარტყელა (радуга) · გამოჩნდა (появилась)",
        "ru": "После дождя в небе появилась радуга.",
        "audio": "assets/audio/card_29_4_ex1.mp3"
      },
      {
        "geo": "დღეს დილიდან წვიმს.",
        "gloss": "დღეს (сегодня) · დილიდან (с утра) · წვიმს (идёт дождь)",
        "ru": "Сегодня с самого утра идёт дождь.",
        "audio": "assets/audio/card_29_4_ex2.mp3"
      },
      {
        "geo": "მიყვარს ზაფხულის თბილი წვიმა.",
        "gloss": "მიყვარს (люблю) · ზაფხულის (летний) · თბილი წვიმა (тёплый дождь)",
        "ru": "Я люблю тёплый летний дождь.",
        "audio": "assets/audio/card_29_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Существительное: წვიმა («дождь»), глагол: წვიმს («дождит / идёт дождь»), прилагательное: წვიმიანი («дождливый»).",
    "culturalNote": "Когда одновременно светит солнце и идёт грибной дождик, в Грузии поэтично говорят: «მზე პირს იბანს» — «Солнце умывает лицо»!"
  },
  {
    "id": "card_29_5",
    "letter": "წ",
    "letterIndex": 29,
    "wordGeo": "წასვლა",
    "translitLat": "ts'asvla",
    "ipa": "[tsʼɑsvlɑ]",
    "translitRu": "ц'асвла",
    "translationRu": "Уход / Поездка (отъезд)",
    "translationEn": "Going / Leaving",
    "difficulty": "Средний",
    "category": "Действия",
    "articulationTip": "Чёткий безаспиративный щелчок «წ» [tsʼ] в приставке направления წა- («прочь / туда»).",
    "semanticHint": "Отправиться в путешествие в горы, на море, в гости или в кино.",
    "imageUrl": "assets/photos/card_29_5.jpg",
    "imageCaption": "Дорожный указатель и уходящая вдаль горная дорога к горизонту",
    "photoQuery": "Open highway road mountains travel journey Georgia",
    "audioNormal": "assets/audio/card_29_5.mp3",
    "antonym": {
      "wordGeo": "მოსვლა",
      "translitRu": "мосвла",
      "ipa": "[mɔsvlɑ]",
      "translationRu": "Приход / Прибытие сюда",
      "translationEn": "Coming / Arrival here",
      "imageUrl": "assets/photos/ant_mosvla.jpg",
      "photoQuery": "Welcoming open garden gate path home",
      "audioNormal": "assets/audio/ant_mosvla.mp3"
    },
    "examples": [
      {
        "geo": "შაბათ-კვირას კახეთში წასვლა გვინდა.",
        "gloss": "შაბათ-კვირას (на выходных) · კახეთში წასვლა (поехать в Кахетию) · გვინდა (хотим)",
        "ru": "На выходных мы хотим поехать в Кахетию.",
        "audio": "assets/audio/card_29_5_ex1.mp3"
      },
      {
        "geo": "უკვე გვიანია, წასვლის დროა.",
        "gloss": "უკვე გვიანია (уже поздно) · წასვლის დროა (пора идти / уезжать)",
        "ru": "Уже поздно, пора собираться.",
        "audio": "assets/audio/card_29_5_ex2.mp3"
      },
      {
        "geo": "წასვლა და მოსვლა.",
        "gloss": "წასვლა (уход / отъезд) · და მოსვლა (и приход / приезд)",
        "ru": "Отъезд и возвращение.",
        "audio": "assets/audio/card_29_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Фундаментальная пара движения в грузинском: მი-/წა- («туда от говорящего»: წავიდა — ушёл) ↔ მო- («сюда к говорящему»: მოვიდა — пришёл)!",
    "culturalNote": "Приставка «მო-» всегда работает как магнит к говорящему: მოდი აქ! («Иди сюда!»), а წადი! («Иди туда!»)."
  },
  {
    "id": "card_30_1",
    "letter": "ჭ",
    "letterIndex": 30,
    "wordGeo": "ჭრელი",
    "translitLat": "ch'reli",
    "ipa": "[tʃʼrɛli]",
    "translitRu": "ч'рэли",
    "translationRu": "Пёстрый / Узорчатый",
    "translationEn": "Motley / Patterned",
    "difficulty": "Средний",
    "semanticHint": "Бирюзовая изразцовая мозаика знаменитой Пёстрой (Орбелиановской) бани в Тбилиси!",
    "imageUrl": "assets/photos/card_30_1.jpg",
    "imageCaption": "Мозаичный фасад Пёстрой Орбелиановской бани («Чрели абано») в Тбилиси",
    "photoQuery": "Orbeliani Baths Chreli Abano Tbilisi",
    "audioNormal": "assets/audio/card_30_1.mp3",
    "antonym": {
      "wordGeo": "სადა",
      "translitRu": "сада",
      "ipa": "[sɑdɑ]",
      "translationRu": "Однотонный / Строгий / Простой",
      "translationEn": "Plain / Solid-colored",
      "imageUrl": "assets/photos/ant_sada.jpg",
      "photoQuery": "Minimalist plain stone wall texture",
      "audioNormal": "assets/audio/ant_sada.mp3"
    },
    "examples": [
      {
        "geo": "ჭრელი აბანო ძველ თბილისშია.",
        "gloss": "ჭრელი (Пёстрая) · აბანო (баня) · ძველ (в Старом) · თბილისშია (Тбилиси есть)",
        "ru": "Пёстрая баня находится в Старом Тбилиси.",
        "audio": "assets/audio/card_30_1_ex1.mp3"
      },
      {
        "geo": "შემოდგომის ჭრელი ტყე.",
        "gloss": "შემოდგომის (осенний) · ჭრელი (пёстрый) · ტყე (лес)",
        "ru": "Пёстрый осенний лес.",
        "audio": "assets/audio/card_30_1_ex2.mp3"
      },
      {
        "geo": "ბებიამ ჭრელი წინდები მოქსოვა.",
        "gloss": "ბებიამ (бабушка) · ჭრელი (пёстрые) · წინდები (носки) · მოქსოვა (связала)",
        "ru": "Бабушка связала узорчатые джурабы (носки).",
        "audio": "assets/audio/card_30_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Резкая абруптивная шипящая ჭ [tʃʼ] без выдоха сразу переходит в раскатистый «р». Сравните с мягким придыхательным ჩ [tʃʰ]!",
    "culturalNote": "В «Пёстрой бане» (ჭრელი აბანო) в 1829 году побывал А. С. Пушкин, оставив восторженный отзыв: «Отроду не встречал я ничего роскошнее тифлисских бань».",
    "category": "Город",
    "articulationTip": "Резкая абруптивная шипящая «ჭ» [tʃʼ] без выдоха сразу переходит в звонкий «რ»."
  },
  {
    "id": "card_30_2",
    "letter": "ჭ",
    "letterIndex": 30,
    "wordGeo": "ჭკვიანი",
    "translitLat": "ch'k'viani",
    "ipa": "[tʃʼkʼviɑni]",
    "translitRu": "ч'к'виани",
    "translationRu": "Умный / Мудрый",
    "translationEn": "Smart / Wise",
    "difficulty": "Сложный",
    "semanticHint": "Мудрый человек или преданная кавказская пастушья овчарка «нагази» в горах Казбеги.",
    "imageUrl": "assets/photos/card_30_2.jpg",
    "imageCaption": "Кавказская горная овчарка (грузинский нагази) на пастбище",
    "photoQuery": "Caucasian shepherd dog mountains Georgia",
    "audioNormal": "assets/audio/card_30_2.mp3",
    "antonym": {
      "wordGeo": "უგუნური",
      "translitRu": "угунури",
      "ipa": "[uɡunuri]",
      "translationRu": "Неразумный / Безрассудный",
      "translationEn": "Foolish / Unwise",
      "imageUrl": "assets/photos/ant_martooba.jpg",
      "photoQuery": "Foggy labyrinth mist path",
      "audioNormal": "assets/audio/ant_ugunuri.mp3"
    },
    "examples": [
      {
        "geo": "ეს ბავშვი ძალიან ჭკვიანია.",
        "gloss": "ეს (этот) · ბავშვი (ребёнок) · ძალიან (очень) · ჭკვიანია (умный есть)",
        "ru": "Этот ребёнок очень умный.",
        "audio": "assets/audio/card_30_2_ex1.mp3"
      },
      {
        "geo": "ნაგაზი ჭკვიანი ძაღლია.",
        "gloss": "ნაგაზი (нагази) · ჭკვიანი (умная) · ძაღლია (собака есть)",
        "ru": "Нагази — умная собака.",
        "audio": "assets/audio/card_30_2_ex2.mp3"
      },
      {
        "geo": "ჩემი მეგობარი ძალიან ჭკვიანია.",
        "gloss": "ჩემი (мой) · მეგობარი (друг) · ძალიან (очень) · ჭკვიანია (умный)",
        "ru": "Мой друг очень умный.",
        "audio": "assets/audio/card_30_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Образовано от ჭკუა («ум, смекалка») суффиксом обладания -იანი. В начале тройной кластер ჭ-კ-ვ [tʃʼkʼv] с двумя абруптивами подряд!",
    "culturalNote": "Абруптивная «ჭ» звучит и в самом известном грузинском гастрономическом слове мира — ხაჭაპური (хачапури: ხაჭო «творог/молодой сыр» + პური «хлеб»)!",
    "category": "Эмоции",
    "articulationTip": "Сразу два сухих абруптивных щелчка подряд «ჭკ-» [tʃʼkʼ] перед звонким «ვ»!"
  },
  {
    "id": "card_30_3",
    "letter": "ჭ",
    "letterIndex": 30,
    "wordGeo": "ჭიქა",
    "translitLat": "ch'ika",
    "ipa": "[tʃʼikʰɑ]",
    "translitRu": "ч'икʰа",
    "translationRu": "Стакан / Бокал",
    "translationEn": "Glass / Goblet",
    "difficulty": "Средний",
    "category": "Быт",
    "articulationTip": "В первом слоге резкий абруптив «ჭ» [tʃʼ] без выдоха, а во втором — мягкий придыхательный «ქ» [kʰ]!",
    "semanticHint": "Хрустальный бокал вина для тоста или стакан прохладного лимонада Тархун.",
    "imageUrl": "assets/photos/card_30_3.jpg",
    "imageCaption": "Прозрачный винный бокал на деревянном столе на фоне виноградника",
    "photoQuery": "Wine glass wooden table vineyard view Georgia",
    "audioNormal": "assets/audio/card_30_3.mp3",
    "antonym": {
      "wordGeo": "ბოთლი",
      "translitRu": "ботʰли",
      "ipa": "[bɔtʰli]",
      "translationRu": "Бутылка (целый сосуд)",
      "translationEn": "Bottle",
      "imageUrl": "assets/photos/ant_botli.jpg",
      "photoQuery": "Glass wine bottle cork cellar",
      "audioNormal": "assets/audio/ant_botli.mp3"
    },
    "examples": [
      {
        "geo": "ერთი ჭიქა წითელი ღვინო, გთხოვთ.",
        "gloss": "ერთი ჭიქა (один бокал) · წითელი ღვინო (красного вина) · გთხოვთ (пожалуйста)",
        "ru": "Один бокал красного вина, пожалуйста.",
        "audio": "assets/audio/card_30_3_ex1.mp3"
      },
      {
        "geo": "ასწიეთ ჭიქა მეგობრობის სადღეგრძელოდ!",
        "gloss": "ასწიეთ ჭიქა (поднимите бокал) · მეგობრობის სადღეგრძელოდ (за тост дружбы)!",
        "ru": "Поднимите бокал за дружбу!",
        "audio": "assets/audio/card_30_3_ex2.mp3"
      },
      {
        "geo": "ჭიქაში ცივი წყალი ასხია.",
        "gloss": "ჭიქაში (в стакане) · ცივი წყალი (холодная вода) · ასხია (налита)",
        "ru": "В стакан налита холодная вода.",
        "audio": "assets/audio/card_30_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჭიქ- · Мн. ч.: ჭიქები («бокалы / стаканы»). О жидкостях в сосуде в грузинском употребляется особый глагол ასხია («налито»).",
    "culturalNote": "Слово «სადღეგრძელო» (тост) буквально сложено из დღე (день) + გრძელი (длинный) = «пожелание долгих дней жизни»!"
  },
  {
    "id": "card_30_4",
    "letter": "ჭ",
    "letterIndex": 30,
    "wordGeo": "ჭერი",
    "translitLat": "ch'eri",
    "ipa": "[tʃʼɛri]",
    "translitRu": "ч'эри",
    "translationRu": "Потолок / Кров",
    "translationEn": "Ceiling / Roof overhead",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Плотный безаспиративный щелчок «ჭ» [tʃʼ] перед чистым «ე» и раскатистым «რ».",
    "semanticHint": "Расписной свод старинной парадной в Сололаки или родной кров над головой.",
    "imageUrl": "assets/photos/card_30_4.jpg",
    "imageCaption": "Резной деревянный купольный свод и потолок исторического зала",
    "photoQuery": "Ornate historic ceiling architecture Tbilisi hall",
    "audioNormal": "assets/audio/card_30_4.mp3",
    "antonym": {
      "wordGeo": "იატაკი",
      "translitRu": "iat'ak'i",
      "ipa": "[iɑtʼɑkʼi]",
      "translationRu": "Пол",
      "translationEn": "Floor",
      "imageUrl": "assets/photos/card_09_5.jpg",
      "photoQuery": "Warm wooden parquet floor room",
      "audioNormal": "assets/audio/card_09_5.mp3"
    },
    "examples": [
      {
        "geo": "ამ დარბაზში მაღალი ჭერია.",
        "gloss": "ამ დარბაზში (в этом зале) · მაღალი ჭერია (высокий потолок)",
        "ru": "В этом зале высокий потолок.",
        "audio": "assets/audio/card_30_4_ex1.mp3"
      },
      {
        "geo": "ძველ სახლში მოხატული ჭერი ვნახეთ.",
        "gloss": "ძველ სახლში (в старом доме) · მოხატული ჭერი (расписной потолок) · ვნახეთ (мы увидели)",
        "ru": "В старинном доме мы увидели расписной потолок.",
        "audio": "assets/audio/card_30_4_ex2.mp3"
      },
      {
        "geo": "ერთი ჭერის ქვეშ ვცხოვრობთ.",
        "gloss": "ერთი ჭერის ქვეშ (под одной крышей / кровом) · ვცხოვრობთ (мы живём)",
        "ru": "Мы живём под одной крышей.",
        "audio": "assets/audio/card_30_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჭერ- · Идиома «ერთი ჭერის ქვეშ» буквально переводится «под одним потолком / кровом».",
    "culturalNote": "Знаменитые расписные потолки и парадные Тбилиси («Калейдоскоп», дом писателей на Мачабели) стали отдельным маршрутом архитектурных экскурсий."
  },
  {
    "id": "card_30_5",
    "letter": "ჭ",
    "letterIndex": 30,
    "wordGeo": "ჭამა",
    "translitLat": "ch'ama",
    "ipa": "[tʃʼɑmɑ]",
    "translitRu": "ч'ама",
    "translationRu": "Еда / Есть (кушать)",
    "translationEn": "Eating / Meal",
    "difficulty": "Начальный",
    "category": "Действия",
    "articulationTip": "Чёткий резкий щелчок «ჭ» [tʃʼ] без малейшего выдоха перед широким открытым «ა».",
    "semanticHint": "Базовый бытовой глагол приёма пищи в повседневной речи.",
    "imageUrl": "assets/photos/card_30_5.jpg",
    "imageCaption": "Традиционная грузинская трапеза со свежей выпечкой и зеленью",
    "photoQuery": "Traditional meal bread herbs cheese Georgian table",
    "audioNormal": "assets/audio/card_30_5.mp3",
    "antonym": {
      "wordGeo": "შიმშილი",
      "translitRu": "шимшили",
      "ipa": "[ʃimʃili]",
      "translationRu": "Голодание / Пост",
      "translationEn": "Fasting / Hunger",
      "imageUrl": "assets/photos/card_12_4.jpg",
      "photoQuery": "Empty ceramic bowl minimalist wooden table",
      "audioNormal": "assets/audio/card_12_4.mp3"
    },
    "examples": [
      {
        "geo": "დღეს უკვე ჭამე?",
        "gloss": "დღეს (сегодня) · უკვე (уже) · ჭამე (ты поел)?",
        "ru": "Ты сегодня уже поел?",
        "audio": "assets/audio/card_30_5_ex1.mp3"
      },
      {
        "geo": "საღამოს მსუბუქად ვჭამ.",
        "gloss": "საღამოს (вечером) · მსუბუქად (легко) · ვჭამ (я ем)",
        "ru": "Вечером я ем лёгкую пищу.",
        "audio": "assets/audio/card_30_5_ex2.mp3"
      },
      {
        "geo": "ცხელი კერძის ჭამა ზამთარში ჯობია.",
        "gloss": "ცხელი კერძის (горячего блюда) · ჭამა (еда) · ზამთარში ჯობია (лучше зимой)",
        "ru": "Зимой лучше есть горячие блюда.",
        "audio": "assets/audio/card_30_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Спряжение в наст. вр.: მე ვჭამ («я ем»), ის ჭამს («он ест»). А в высокой вежливой речи к гостям используют глагол მიირთვით! («отведайте!»).",
    "culturalNote": "Полезный оттенок этикета: о себе говорят просто «მე ვჭამ», а предлагая угощение гостю, вежливо говорят «მიირთვით!»"
  },
  {
    "id": "card_31_1",
    "letter": "ხ",
    "letterIndex": 31,
    "wordGeo": "ხმელი",
    "translitLat": "khmeli",
    "ipa": "[xmɛli]",
    "translitRu": "хмэли",
    "translationRu": "Сухой / Высушенный",
    "translationEn": "Dry / Dried",
    "difficulty": "Начальный",
    "semanticHint": "Первое слово в названии знаменитой грузинской смеси ароматных пряностей «хмели-сунели»!",
    "imageUrl": "assets/photos/card_31_1.jpg",
    "imageCaption": "Ароматные горки грузинских сушёных пряностей хмели-сунели и шафрана",
    "photoQuery": "Georgian spices khmeli suneli market bowls",
    "audioNormal": "assets/audio/card_31_1.mp3",
    "antonym": {
      "wordGeo": "სველი",
      "translitRu": "свэли",
      "ipa": "[svɛli]",
      "translationRu": "Мокрый / Влажный",
      "translationEn": "Wet / Damp",
      "imageUrl": "assets/photos/ant_sveli.jpg",
      "photoQuery": "Raindrops green leaves subtropics Batumi",
      "audioNormal": "assets/audio/ant_sveli.mp3"
    },
    "examples": [
      {
        "geo": "ხმელი სუნელი ქართული სანელებელია.",
        "gloss": "ხმელი (сухая) · სუნელი (пряность) · ქართული (грузинская) · სანელებელია (приправа есть)",
        "ru": "Хмели-сунели — грузинская сухая пряная приправа.",
        "audio": "assets/audio/card_31_1_ex1.mp3"
      },
      {
        "geo": "შემოდგომის ხმელი ფოთლები.",
        "gloss": "შემოდგომის (осенние) · ხმელი (сухие) · ფოთლები (листья)",
        "ru": "Сухие осенние листья.",
        "audio": "assets/audio/card_31_1_ex2.mp3"
      },
      {
        "geo": "კერძს ხმელი ქინძი უხდება.",
        "gloss": "კერძს (блюду) · ხმელი (сушёный) · ქინძი (кориандр) · უხდება (идёт/подходит)",
        "ru": "Блюду отлично подходит молотый кориандр.",
        "audio": "assets/audio/card_31_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Тот же корень в словах ხმელეთი («суша») и გამხმარი («засохший»). Буква «ხ» открыта справа внизу — не путайте её с закрытой «ბ»!",
    "culturalNote": "Лингвистическое открытие: «ხმელი სუნელი» дословно переводится как «сухая ароматная трава/пряность» (от სუნი — запах, аромат)!",
    "category": "Еда",
    "articulationTip": "Энергичный увулярный «ხ» [x] перед носовым «მ» без призвука гласной."
  },
  {
    "id": "card_31_2",
    "letter": "ხ",
    "letterIndex": 31,
    "wordGeo": "ხმაური",
    "translitLat": "khmauri",
    "ipa": "[xmɑuri]",
    "translitRu": "хмаури",
    "translationRu": "Шум / Гул",
    "translationEn": "Noise / Roar",
    "difficulty": "Начальный",
    "semanticHint": "Рокот горного водопада или оживлённый гул проспектов большого города.",
    "imageUrl": "assets/photos/card_31_2.jpg",
    "imageCaption": "Бурлящие пороги горного каньона Мартвили и Окаце",
    "photoQuery": "Martvili canyon waterfall rapids Georgia",
    "audioNormal": "assets/audio/card_31_2.mp3",
    "antonym": {
      "wordGeo": "სიჩუმე",
      "translitRu": "сичʰумэ",
      "ipa": "[sitʃʰumɛ]",
      "translationRu": "Тишина",
      "translationEn": "Silence",
      "imageUrl": "assets/photos/ant_sichume.jpg",
      "photoQuery": "Silent foggy mountain lake monastery",
      "audioNormal": "assets/audio/ant_sichume.mp3"
    },
    "examples": [
      {
        "geo": "მდინარის ხმაური შორიდან ისმის.",
        "gloss": "მდინარის (реки) · ხმაური (шум) · შორიდან (издалека) · ისმის (слышится)",
        "ru": "Шум реки слышен издалека.",
        "audio": "assets/audio/card_31_2_ex1.mp3"
      },
      {
        "geo": "ქალაქის ხმაური და სოფლის სიჩუმე.",
        "gloss": "ქალაქის (города) · ხმაური (шум) · და (и) · სოფლის (деревни) · სიჩუმე (тишина)",
        "ru": "Городской шум и деревенская тишина.",
        "audio": "assets/audio/card_31_2_ex2.mp3"
      },
      {
        "geo": "აქ მანქანების ხმაური არ ისმის.",
        "gloss": "აქ (здесь) · მანქანების (машин) · ხმაური (шум) · არ ისმის (не слышен)",
        "ru": "Здесь не слышен шум машин.",
        "audio": "assets/audio/card_31_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Образовано от корня ხმა («голос / звук») → ხმაური («шум») → ხმაურიანი («шумный»). Дифтонгоидное сочетание гласных -აუ- читается раздельно в два слога.",
    "culturalNote": "Слово «ხმა» означает «голос» — поэтому знаменитое грузинское трёхголосное пение называется «სამხმიანი სიმღერა» («трёхголосная песня»).",
    "category": "Город",
    "articulationTip": "Хрипловатый рельефный «ხ» перед «მ» и плавный переход гласных «ა-უ»."
  },
  {
    "id": "card_31_3",
    "letter": "ხ",
    "letterIndex": 31,
    "wordGeo": "ხე",
    "translitLat": "khe",
    "ipa": "[xɛ]",
    "translitRu": "хэ",
    "translationRu": "Дерево",
    "translationEn": "Tree",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Энергичный увулярный «ხ» [x] сразу раскрывается в чистый гласный «ე».",
    "semanticHint": "Раскидистый гранат, вековой платан на проспекте Руставели или грецкий орех во дворе.",
    "imageUrl": "assets/photos/card_31_3.jpg",
    "imageCaption": "Могучее раскидистое зелёное дерево на холме на фоне гор",
    "photoQuery": "Large green tree hillside mountains Georgia",
    "audioNormal": "assets/audio/card_31_3.mp3",
    "antonym": {
      "wordGeo": "ბალახი",
      "translitRu": "балахи",
      "ipa": "[bɑlɑxi]",
      "translationRu": "Трава (низкий травяной покров)",
      "translationEn": "Grass / Herb",
      "imageUrl": "assets/photos/ant_balakhi.jpg",
      "photoQuery": "Fresh green grass meadow morning dew",
      "audioNormal": "assets/audio/ant_balakhi.mp3"
    },
    "examples": [
      {
        "geo": "ეზოში დიდი კაკლის ხე იზრდება.",
        "gloss": "ეზოში (во дворе) · დიდი კაკლის ხე (большое ореховое дерево) · იზრდება (растёт)",
        "ru": "Во дворе растёт большое дерево грецкого ореха.",
        "audio": "assets/audio/card_31_3_ex1.mp3"
      },
      {
        "geo": "ეს მაგიდა ნატურალური ხისგანაა.",
        "gloss": "ეს მაგიდა (этот стол) · ნატურალური ხისგანაა (из натурального дерева)",
        "ru": "Этот стол сделан из натурального дерева.",
        "audio": "assets/audio/card_31_3_ex2.mp3"
      },
      {
        "geo": "გაზაფხულზე ხეები ყვავის.",
        "gloss": "გაზაფხულზე (весной) · ხეები (деревья) · ყვავის (цветут)",
        "ru": "Весной деревья покрываются цветом.",
        "audio": "assets/audio/card_31_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа на -ე сохраняет гласную во мн. ч.: ხეები («деревья»), но усекается в род. п.: ხის («деревянный»: ხის სახლი — деревянный дом)!",
    "culturalNote": "Вековые платаны («ჭადარი») вдоль набережной Куры и проспекта Руставели — зелёные лёгкие и живой символ Тбилиси."
  },
  {
    "id": "card_31_4",
    "letter": "ხ",
    "letterIndex": 31,
    "wordGeo": "ხორცი",
    "translitLat": "khortsi",
    "ipa": "[xɔrtsʰi]",
    "translitRu": "хорцʰи",
    "translationRu": "Мясо",
    "translationEn": "Meat",
    "difficulty": "Начальный",
    "category": "Еда",
    "articulationTip": "Упругий «ხ» перед круглым «ო», раскатистый «რ» и придыхательный «ც» [tsʰ] на конце.",
    "semanticHint": "Сочный шашлык мцвади, чашушули, чкмерули или начинка классических городских хинкали.",
    "imageUrl": "assets/photos/card_31_4.jpg",
    "imageCaption": "Румяный грузинский шашлык мцвади с кольцами лука и зёрнами граната",
    "photoQuery": "Grilled meat mtsvadi skewers pomegranate onion",
    "audioNormal": "assets/audio/card_31_4.mp3",
    "antonym": {
      "wordGeo": "ბოსტნეული",
      "translitRu": "bost'neuli",
      "ipa": "[bɔstʼnɛuli]",
      "translationRu": "Овощи (растительные блюда)",
      "translationEn": "Vegetables",
      "imageUrl": "assets/photos/ant_bostneuli.jpg",
      "photoQuery": "Fresh colorful vegetables tomatoes peppers herbs",
      "audioNormal": "assets/audio/ant_bostneuli.mp3"
    },
    "examples": [
      {
        "geo": "ქალაქური ხინკალი ხორცითა და მწვანილითაა.",
        "gloss": "ქალაქური ხინკალი (городские хинкали) · ხორცითა და მწვანილითაა (с мясом и зеленью)",
        "ru": "Городские хинкали готовят с мясом и свежей кинзой.",
        "audio": "assets/audio/card_31_4_ex1.mp3"
      },
      {
        "geo": "მე ხორცს არ ვჭამ, ბოსტნეული მირჩევნია.",
        "gloss": "მე ხორცს არ ვჭამ (я не ем мясо) · ბოსტნეული მირჩევნია (предпочитаю овощи)",
        "ru": "Я не ем мясо, предпочитаю овощные блюда.",
        "audio": "assets/audio/card_31_4_ex2.mp3"
      },
      {
        "geo": "მწვადისთვის ახალი ხორცი ავარჩიეთ.",
        "gloss": "მწვადისთვის (для шашлыка) · ახალი ხორცი (свежее мясо) · ავარჩიეთ (мы выбрали)",
        "ru": "Для шашлыка мы выбрали свежее мясо.",
        "audio": "assets/audio/card_31_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ხორც- · Прилагательное: ხორციანი («мясной») ↔ სამარხვო / ვეგეტარიანული («постный / вегетарианский» — полезнейшее слово в меню!).",
    "culturalNote": "Грузинская кухня невероятно дружелюбна и к любителям мяса («ხორცი»), и к вегетарианцам благодаря десяткам видов пхали, аджапсандали и лобио!"
  },
  {
    "id": "card_31_5",
    "letter": "ხ",
    "letterIndex": 31,
    "wordGeo": "ხიდი",
    "translitLat": "khidi",
    "ipa": "[xidi]",
    "translitRu": "хиди",
    "translationRu": "Мост",
    "translationEn": "Bridge",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Глубокий увулярный «ხ» [x] перед высоким «ი» никак не смягчается — звучит твёрдо и чётко!",
    "semanticHint": "Арочные каменные мосты царицы Тамары в Аджарии, Сухой мост и стеклянный Мост Мира в Тбилиси.",
    "imageUrl": "assets/photos/card_31_5.jpg",
    "imageCaption": "Старинный каменный арочный мост царицы Тамары над горной рекой",
    "photoQuery": "Makhuntseti stone arch bridge Tamara Georgia",
    "audioNormal": "assets/audio/card_31_5.mp3",
    "antonym": {
      "wordGeo": "უფსკრული",
      "translitRu": "upsk'ruli",
      "ipa": "[upʰskʼruli]",
      "translationRu": "Пропасть / Обрыв",
      "translationEn": "Abyss / Ravine",
      "imageUrl": "assets/photos/ant_upskruli.jpg",
      "photoQuery": "Deep mountain gorge canyon cliff Caucasus",
      "audioNormal": "assets/audio/ant_upskruli.mp3"
    },
    "examples": [
      {
        "geo": "მშვიდობის ხიდი ძველ თბილისში მდებარეობს.",
        "gloss": "მშვიდობის ხიდი (Мост Мира) · ძველ თბილისში (в Старом Тбилиси) · მდებარეობს (находится)",
        "ru": "Мост Мира находится в Старом Тбилиси.",
        "audio": "assets/audio/card_31_5_ex1.mp3"
      },
      {
        "geo": "აჭარაში თამარის ქვის ხიდი ვნახეთ.",
        "gloss": "აჭარაში (в Аджарии) · თამარის ქვის ხიდი (каменный мост Тамары) · ვნახეთ (мы увидели)",
        "ru": "В Аджарии мы увидели каменный мост царицы Тамары.",
        "audio": "assets/audio/card_31_5_ex2.mp3"
      },
      {
        "geo": "ეს ხიდი ორ ნაპირს აერთებს.",
        "gloss": "ეს ხიდი (этот мост) · ორ ნაპირს (два берега) · აერთებს (соединяет)",
        "ru": "Этот мост соединяет два берега.",
        "audio": "assets/audio/card_31_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ხიდ- · Мн. ч.: ხიდები («мосты») · С послелогом -ზე: ხიდზე («на мосту»).",
    "culturalNote": "Средневековые арочные мосты Аджарии (Махунцети, Дандало, Фуртио), сложенные из вулканического камня на известковом растворе, стоят непоколебимо уже 800 лет!"
  },
  {
    "id": "card_32_1",
    "letter": "ჯ",
    "letterIndex": 32,
    "wordGeo": "ჯანმრთელი",
    "translitLat": "janmrteli",
    "ipa": "[dʒɑnmrtʰɛli]",
    "translitRu": "джанмртʰэли",
    "translationRu": "Здоровый / Крепкий",
    "translationEn": "Healthy / Fit",
    "difficulty": "Сложный",
    "semanticHint": "Слово-рекордсмен с 5 согласными подряд в середине, звучащее в каждом грузинском тосте за здоровье!",
    "imageUrl": "assets/photos/card_32_1.jpg",
    "imageCaption": "Целебные хвойные леса и горный воздух курорта Боржоми-Бакуриани",
    "photoQuery": "Borjomi pine forest mountain trail Georgia",
    "audioNormal": "assets/audio/card_32_1.mp3",
    "antonym": {
      "wordGeo": "სუსტი",
      "translitRu": "суст'и",
      "ipa": "[sustʼi]",
      "translationRu": "Слабый / Хворый",
      "translationEn": "Weak / Frail",
      "imageUrl": "assets/photos/ant_susti.jpg",
      "photoQuery": "Withered autumn leaf frost",
      "audioNormal": "assets/audio/ant_susti.mp3"
    },
    "examples": [
      {
        "geo": "ჯანმრთელად იყავით!",
        "gloss": "ჯანმრთელად (здоровыми) · იყავით (будьте)",
        "ru": "Будьте здоровы!",
        "audio": "assets/audio/card_32_1_ex1.mp3"
      },
      {
        "geo": "მთის ჰაერი ჯანმრთელობისთვის კარგია.",
        "gloss": "მთის (горный) · ჰაერი (воздух) · ჯანმრთელობისთვის (для здоровья) · კარგია (хорош есть)",
        "ru": "Горный воздух полезен для здоровья.",
        "audio": "assets/audio/card_32_1_ex2.mp3"
      },
      {
        "geo": "ჯანმრთელი საკვები და სუფთა წყალი.",
        "gloss": "ჯანმრთელი (здоровая) · საკვები (пища) · და სუფთა (и чистая) · წყალი (вода)",
        "ru": "Здоровая еда и чистая вода.",
        "audio": "assets/audio/card_32_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Внутри слова встречаются сразу 5 согласных подряд: ნ-მ-რ-თ-ლ! В живой беглой речи сонорные ნ-მ-რ плавно перетекают друг в друга: [dʒɑnmrtʰɛli].",
    "culturalNote": "Слово сложено из двух корней: ჯანი (телесная сила, бодрость) + მრთელი/მთელი (целый, невредимый) = «цельный силой»!",
    "category": "Эмоции",
    "articulationTip": "Начинается со звонкой слитной аффрикаты «ჯ» [dʒ]; внутри сонорные «ნ-მ-რ» звучат слитно."
  },
  {
    "id": "card_32_2",
    "letter": "ჯ",
    "letterIndex": 32,
    "wordGeo": "ჯიუტი",
    "translitLat": "jiut'i",
    "ipa": "[dʒiutʼi]",
    "translitRu": "джиут'и",
    "translationRu": "Упрямый / Настойчивый",
    "translationEn": "Stubborn / Persistent",
    "difficulty": "Начальный",
    "semanticHint": "Непреклонный характер горца или упрямая горная река, пробивающая гранитную скалу.",
    "imageUrl": "assets/photos/card_32_2.jpg",
    "imageCaption": "Горные кони на скалистых тропах Тушетии и Хевсуретии",
    "photoQuery": "Tusheti horses mountain trail Georgia",
    "audioNormal": "assets/audio/card_32_2.mp3",
    "antonym": {
      "wordGeo": "დამთმობი",
      "translitRu": "дамтʰмоби",
      "ipa": "[dɑmtʰmɔbi]",
      "translationRu": "Уступчивый / Мягкий",
      "translationEn": "Yielding / Gentle",
      "imageUrl": "assets/photos/card_17_1.jpg",
      "photoQuery": "Gentle calm meadow sheep Georgia",
      "audioNormal": "assets/audio/ant_damtmobi.mp3"
    },
    "examples": [
      {
        "geo": "მთის მდინარე ჯიუტია.",
        "gloss": "მთის (горная) · მდინარე (река) · ჯიუტია (упрямая есть)",
        "ru": "Горная река упряма (пробивает себе путь).",
        "audio": "assets/audio/card_32_2_ex1.mp3"
      },
      {
        "geo": "ნუ ხარ ასეთი ჯიუტი!",
        "gloss": "ნუ (не) · ხარ (будь / есть ты) · ასეთი (такой) · ჯიუტი (упрямый)",
        "ru": "Не будь таким упрямым!",
        "audio": "assets/audio/card_32_2_ex2.mp3"
      },
      {
        "geo": "პატარა კვიცი ცოტა ჯიუტია.",
        "gloss": "პატარა (маленький) · კვიცი (жеребёнок) · ცოტა (немного) · ჯიუტია (упрямый)",
        "ru": "Маленький жеребёнок немного упрям.",
        "audio": "assets/audio/card_32_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Начинается со слитной звонкой аффрикаты ჯ [dʒ] (как в слове ჯვარი — крест / монастырь Джвари) и заканчивается абруптивным ტ [tʼ].",
    "culturalNote": "Сама форма буквы «ჯ» восходит к древней крестообразной монограмме письма Асомтаврули, от которой произошло и слово «ჯვარი» (крест).",
    "category": "Эмоции",
    "articulationTip": "Слитный звонкий звук «ჯ» [dʒ] в начале и сухой абруптивный «ტ» [tʼ] на конце."
  },
  {
    "id": "card_32_3",
    "letter": "ჯ",
    "letterIndex": 32,
    "wordGeo": "ჯამი",
    "translitLat": "jami",
    "ipa": "[dʒɑmi]",
    "translitRu": "джами",
    "translationRu": "Миска / Глиняная чаша",
    "translationEn": "Bowl / Clay dish",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Упругая звонкая слитная аффриката «ჯ» [dʒ] произносится одним смычком языка перед «ა».",
    "semanticHint": "Расписная керамическая пиала для горячего супа чихиртма, харчо или ягод.",
    "imageUrl": "assets/photos/card_32_3.jpg",
    "imageCaption": "Традиционная глазурованная глиняная миска ручной работы",
    "photoQuery": "Handmade glazed ceramic clay bowl pottery",
    "audioNormal": "assets/audio/card_32_3.mp3",
    "antonym": {
      "wordGeo": "თეფში",
      "translitRu": "тʰэпʰши",
      "ipa": "[tʰɛpʰʃi]",
      "translationRu": "Плоская тарелка",
      "translationEn": "Flat plate",
      "imageUrl": "assets/photos/ant_tepshi.jpg",
      "photoQuery": "Flat ceramic dinner plate rustic table",
      "audioNormal": "assets/audio/ant_tepshi.mp3"
    },
    "examples": [
      {
        "geo": "თიხის ჯამში ცხელი წვნიანი ასხია.",
        "gloss": "თიხის ჯამში (в глиняной миске) · ცხელი წვნიანი (горячий суп) · ასხია (налит)",
        "ru": "В глиняную миску налит горячий суп.",
        "audio": "assets/audio/card_32_3_ex1.mp3"
      },
      {
        "geo": "მაგიდაზე ჯამი და თეფში დადეს.",
        "gloss": "მაგიდაზე (на стол) · ჯამი და თეფში (миску и тарелку) · დადეს (поставили)",
        "ru": "На стол поставили миску и тарелку.",
        "audio": "assets/audio/card_32_3_ex2.mp3"
      },
      {
        "geo": "ეს მოხატული ჯამი მცხეთაში ვიყიდე.",
        "gloss": "ეს მოხატული ჯამი (эту расписную чашу) · მცხეთაში ვიყიდე (я купил в Мцхете)",
        "ru": "Эту расписную керамическую миску я купил в Мцхете.",
        "audio": "assets/audio/card_32_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჯამ- · Мн. ч.: ჯამები. Интересный омоним: слово ჯამი также означает «итог / сумма» (საბოლოო ჯამში — «в конечном счёте»)!",
    "culturalNote": "Село Шроша на Рикотском перевале — столица грузинского гончарного искусства, где вдоль дороги выстроены тысячи терракотовых кувшинов, кеци и мисок «ჯამი»."
  },
  {
    "id": "card_32_4",
    "letter": "ჯ",
    "letterIndex": 32,
    "wordGeo": "ჯვარი",
    "translitLat": "jvari",
    "ipa": "[dʒvɑri]",
    "translitRu": "джвари",
    "translationRu": "Крест / Храм Джвари",
    "translationEn": "Cross / Jvari Monastery",
    "difficulty": "Начальный",
    "category": "Город",
    "articulationTip": "Звонкая аффриката «ჯ» [dʒ] сливается со звонким «ვ» в благородный начальный аккорд [dʒv].",
    "semanticHint": "Древний храм VI века на вершине скалы над слиянием Арагви и Куры, воспетый Лермонтовым в «Мцыри».",
    "imageUrl": "assets/photos/card_32_4.jpg",
    "imageCaption": "Храм Джвари VI века на вершине горы над древней Мцхетой",
    "photoQuery": "Jvari Monastery hilltop Mtskheta Georgia",
    "audioNormal": "assets/audio/card_32_4.mp3",
    "antonym": {
      "wordGeo": "მინდორი",
      "translitRu": "миндори",
      "ipa": "[mindɔri]",
      "translationRu": "Долина внизу (простор у подножия скалы)",
      "translationEn": "Valley floor below",
      "imageUrl": "assets/photos/ant_mindori.jpg",
      "photoQuery": "Green river valley plains below mountains",
      "audioNormal": "assets/audio/ant_mindori.mp3"
    },
    "examples": [
      {
        "geo": "ჯვრის მონასტერი მეექვსე საუკუნის ძეგლია.",
        "gloss": "ჯვრის მონასტერი (монастырь Джвари) · მეექვსე საუკუნის (VI века) · ძეგლია (памятник)",
        "ru": "Монастырь Джвари — памятник архитектуры VI века.",
        "audio": "assets/audio/card_32_4_ex1.mp3"
      },
      {
        "geo": "ვაზის ჯვარი წმინდა ნინოს სიმბოლოა.",
        "gloss": "ვაზის ჯვარი (крест из лозы) · წმინდა ნინოს (святой Нино) · სიმბოლოა (символ есть)",
        "ru": "Крест из виноградной лозы — символ святой Нино.",
        "audio": "assets/audio/card_32_4_ex2.mp3"
      },
      {
        "geo": "გზაჯვარედინზე შუქნიშანი დგას.",
        "gloss": "გზაჯვარედინზე (на перекрёстке) · შუქნიშანი (светофор) · დგას (стоит)",
        "ru": "На перекрёстке стоит светофор.",
        "audio": "assets/audio/card_32_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Синкопируемая основа: ჯვარ- → ჯვრ- · Род. п.: ჯვრის (Крестовый перевал по-грузински — ჯვრის უღელტეხილი!). От него же გზაჯვარედინი («перекрёсток дорог»).",
    "culturalNote": "Подлинный крест святой Нино из виноградной лозы IV века бережно хранится в Сионском кафедральном соборе Старого Тбилиси."
  },
  {
    "id": "card_32_5",
    "letter": "ჯ",
    "letterIndex": 32,
    "wordGeo": "ჯადოსნური",
    "translitLat": "jadosnuri",
    "ipa": "[dʒɑdɔsnuri]",
    "translitRu": "джадоснури",
    "translationRu": "Волшебный / Сказочный",
    "translationEn": "Magical / Enchanting",
    "difficulty": "Начальный",
    "category": "Прилагательные",
    "articulationTip": "Упругая звонкая «ჯ» [dʒ] в начале, круглое «ო» в середине и чистое «-ნური» в финале.",
    "semanticHint": "Сказочные сталактитовые залы пещеры Прометея, заснеженная Сванетия или новогодний Тбилиси.",
    "imageUrl": "assets/photos/card_32_5.jpg",
    "imageCaption": "Сказочно подсвеченные своды карстовой пещеры Прометея в Имеретии",
    "photoQuery": "Prometheus Cave Kumistavi Georgia stalactites",
    "audioNormal": "assets/audio/card_32_5.mp3",
    "antonym": {
      "wordGeo": "ჩვეულებრივი",
      "translitRu": "чʰвэулэбриви",
      "ipa": "[tʃʰvɛulɛbrivi]",
      "translationRu": "Обычный / Повседневный",
      "translationEn": "Ordinary / Everyday",
      "imageUrl": "assets/photos/ant_chveulebrivi.jpg",
      "photoQuery": "Simple plain wooden bench everyday street",
      "audioNormal": "assets/audio/ant_chveulebrivi.mp3"
    },
    "examples": [
      {
        "geo": "სვანეთში მართლაც ჯადოსნური ბუნებაა.",
        "gloss": "სვანეთში (в Сванетии) · მართლაც (поистине) · ჯადოსნური ბუნებაა (волшебная природа)",
        "ru": "В Сванетии поистине сказочная природа.",
        "audio": "assets/audio/card_32_5_ex1.mp3"
      },
      {
        "geo": "ახალ წელს თბილისი ჯადოსნურად ანათებს.",
        "gloss": "ახალ წელს (в Новый год) · თბილისი (Тбилиси) · ჯადოსნურად ანათებს (волшебно сияет)",
        "ru": "На Новый год Тбилиси волшебно сияет огнями.",
        "audio": "assets/audio/card_32_5_ex2.mp3"
      },
      {
        "geo": "ეს ჯადოსნური საღამო არასოდეს დამავიწყდება!",
        "gloss": "ეს ჯადოსნური საღამო (этот волшебный вечер) · არასოდეს დამავიწყდება (никогда не забуду)!",
        "ru": "Этот волшебный вечер я не забуду никогда!",
        "audio": "assets/audio/card_32_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჯადოსნურ- · Наречие: ჯადოსნურად («волшебно, чудесно»). В антониме ჩვეულებრივი корень ჩვევა означает «привычка».",
    "culturalNote": "Пещера Прометея (Кумистави) близ Цхалтубо протянулась под землёй на километры сказочных залов с подземными озёрами и водопадами."
  },
  {
    "id": "card_33_1",
    "letter": "ჰ",
    "letterIndex": 33,
    "wordGeo": "ჰაერი",
    "translitLat": "haeri",
    "ipa": "[hɑɛri]",
    "translitRu": "hаэри",
    "translationRu": "Воздух",
    "translationEn": "Air",
    "difficulty": "Начальный",
    "semanticHint": "Прозрачный сосновый воздух Бахмаро, Абастумани и Шови — произносится лёгким выдохом [h]!",
    "imageUrl": "assets/photos/card_33_1.jpg",
    "imageCaption": "Чистый высокогорный воздух над облаками курорта Бахмаро в Гурии",
    "photoQuery": "Bakhmaro clouds wooden houses Georgia",
    "audioNormal": "assets/audio/card_33_1.mp3",
    "antonym": {
      "wordGeo": "მიწა",
      "translitRu": "миц'а",
      "ipa": "[mitsʼɑ]",
      "translationRu": "Земля / Твердь",
      "translationEn": "Earth / Solid ground",
      "imageUrl": "assets/photos/ant_mitsa.jpg",
      "photoQuery": "Earth soil terraced hills Georgia",
      "audioNormal": "assets/audio/ant_mitsa.mp3"
    },
    "examples": [
      {
        "geo": "ბახმაროში სუფთა ჰაერია.",
        "gloss": "ბახმაროში (в Бахмаро) · სუფთა (чистый) · ჰაერია (воздух есть)",
        "ru": "В Бахмаро чистейший воздух.",
        "audio": "assets/audio/card_33_1_ex1.mp3"
      },
      {
        "geo": "სუფთა ჰაერზე სეირნობა.",
        "gloss": "სუფთა (на чистом) · ჰაერზე (воздухе) · სეირნობა (прогулка)",
        "ru": "Прогулка на свежем воздухе.",
        "audio": "assets/audio/card_33_1_ex2.mp3"
      },
      {
        "geo": "ფანჯარა გავაღე, სუფთა ჰაერი შემოვიდა.",
        "gloss": "ფანჯარა (окно) · გავაღე (я открыл) · სუფთა ჰაერი (свежий воздух) · შემოვიდა (вошёл)",
        "ru": "Я открыл окно, и вошёл свежий воздух.",
        "audio": "assets/audio/card_33_1_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჰაერ- · Начальная буква «ჰ» произносится как лёгкое тёплое дыхание [h] без хрипа (сравните воздушное ჰაერი и твёрдое ხე — дерево).",
    "culturalNote": "В Бахмаро и Сурами морской субтропический бриз встречается с хвойным горным воздухом («ჰაერი»), создавая уникальные целебные климатические курорты.",
    "category": "Природа",
    "articulationTip": "Произнесите «ჰ» как тёплое беззвучное дыхание [h] прямо в открытый гласный «ა»!"
  },
  {
    "id": "card_33_2",
    "letter": "ჰ",
    "letterIndex": 33,
    "wordGeo": "ჰარმონია",
    "translitLat": "harmonia",
    "ipa": "[hɑrmɔniɑ]",
    "translitRu": "hармониа",
    "translationRu": "Гармония / Созвучие",
    "translationEn": "Harmony",
    "difficulty": "Начальный",
    "semanticHint": "Удивительное трёхголосное созвучие грузинского полифонического пения.",
    "imageUrl": "assets/photos/card_33_2.jpg",
    "imageCaption": "Традиционные грузинские музыкальные инструменты чонгури и пандури",
    "photoQuery": "Georgian polyphonic folk choir panduri",
    "audioNormal": "assets/audio/card_33_2.mp3",
    "antonym": {
      "wordGeo": "ქაოსი",
      "translitRu": "кʰаоси",
      "ipa": "[kʰɑɔsi]",
      "translationRu": "Хаос / Разлад",
      "translationEn": "Chaos / Discord",
      "imageUrl": "assets/photos/ant_kaosi.jpg",
      "photoQuery": "Stormy waves dark sea rocks",
      "audioNormal": "assets/audio/ant_kaosi.mp3"
    },
    "examples": [
      {
        "geo": "ქართული სიმღერის ჰარმონია.",
        "gloss": "ქართული (грузинской) · სიმღერის (песни) · ჰარმონია (гармония)",
        "ru": "Гармония грузинской многоголосной песни.",
        "audio": "assets/audio/card_33_2_ex1.mp3"
      },
      {
        "geo": "ბუნების სრული ჰარმონია.",
        "gloss": "ბუნების (природы) · სრული (полная) · ჰარმონია (гармония)",
        "ru": "Полная гармония природы.",
        "audio": "assets/audio/card_33_2_ex2.mp3"
      },
      {
        "geo": "ამ ბაღში სრული ჰარმონია სუფევს.",
        "gloss": "ამ ბაღში (в этом саду) · სრული (полная) · ჰარმონია (гармония) · სუფევს (царит)",
        "ru": "В этом саду царит полная гармония.",
        "audio": "assets/audio/card_33_2_ex3.mp3"
      }
    ],
    "grammarMarker": "Последняя, 33-я буква алфавита «ჰ» чаще всего открывает интернациональные слова (ჰარმონია, ჰორიზონტი) и эмоциональные возгласы.",
    "culturalNote": "В 1977 году грузинская полифоническая песня «Чакруло» была отправлена NASA в дальний космос на золотой пластинке «Вояджера» как образец музыкальной гармонии Земли!",
    "category": "Эмоции",
    "articulationTip": "Мягкий воздушный выдох «ჰ» [h] открывает слово легко и без малейшего хрипа."
  },
  {
    "id": "card_33_3",
    "letter": "ჰ",
    "letterIndex": 33,
    "wordGeo": "ჰორიზონტი",
    "translitLat": "horizont'i",
    "ipa": "[hɔrizɔntʼi]",
    "translitRu": "hоризонт'и",
    "translationRu": "Горизонт",
    "translationEn": "Horizon",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Лёгкий тёплый выдох «ჰ» [h] переходит в два чистых круглых «ო» и заканчивается абруптивным «ტ» [tʼ]!",
    "semanticHint": "Бескрайняя линия встречи Чёрного моря и алого южного неба на закате в Батуми.",
    "imageUrl": "assets/photos/card_33_3.jpg",
    "imageCaption": "Закатная линия морского горизонта над спокойными волнами Чёрного моря",
    "photoQuery": "Sea horizon sunset golden reflection Batumi",
    "audioNormal": "assets/audio/card_33_3.mp3",
    "antonym": {
      "wordGeo": "ახლო ხედი",
      "translitRu": "ахло хэди",
      "ipa": "[ɑxlɔ xɛdi]",
      "translationRu": "Ближний план (рядом перед глазами)",
      "translationEn": "Close-up view",
      "imageUrl": "assets/photos/ant_akhlo.jpg",
      "photoQuery": "Close garden flowers stone wall foreground",
      "audioNormal": "assets/audio/ant_akhlo.mp3"
    },
    "examples": [
      {
        "geo": "ზღვის ჰორიზონტზე გემი გამოჩნდა.",
        "gloss": "ზღვის ჰორიზონტზე (на морском горизонте) · გემი (корабль) · გამოჩნდა (появился)",
        "ru": "На морском горизонте показался корабль.",
        "audio": "assets/audio/card_33_3_ex1.mp3"
      },
      {
        "geo": "მზე ნელა ეშვება ჰორიზონტს მიღმა.",
        "gloss": "მზე (солнце) · ნელა ეშვება (медленно опускается) · ჰორიზონტს მიღმა (за горизонт)",
        "ru": "Солнце медленно опускается за горизонт.",
        "audio": "assets/audio/card_33_3_ex2.mp3"
      },
      {
        "geo": "უცხო ენა ახალ ჰორიზონტებს ხსნის!",
        "gloss": "უცხო ენა (иностранный язык) · ახალ ჰორიზონტებს (новые горизонты) · ხსნის (открывает)!",
        "ru": "Новый язык открывает новые горизонты!",
        "audio": "assets/audio/card_33_3_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჰორიზონტ- · Мн. ч.: ჰორიზონტები. Ещё один пример правила: европейское t на конце заимствований передаётся через абруптивную «ტ»!",
    "culturalNote": "На набережной Батуми закаты уходят прямо в морской горизонт на западе, окрашивая море в медные и пурпурные тона."
  },
  {
    "id": "card_33_4",
    "letter": "ჰ",
    "letterIndex": 33,
    "wordGeo": "ჰავა",
    "translitLat": "hava",
    "ipa": "[hɑvɑ]",
    "translitRu": "hава",
    "translationRu": "Климат / Погода края",
    "translationEn": "Climate",
    "difficulty": "Начальный",
    "category": "Природа",
    "articulationTip": "Невесомый фарингальный выдох «ჰ» [h] перед широким «ა» и звонким «ვ»: звучит легко, как морской бриз.",
    "semanticHint": "Целебный микроклимат субтропического побережья или сухих сосновых гор.",
    "imageUrl": "assets/photos/card_33_4.jpg",
    "imageCaption": "Пальмы и зелёный субтропический берег Батумского ботанического сада",
    "photoQuery": "Batumi Botanical Garden palms sea Georgia",
    "audioNormal": "assets/audio/card_33_4.mp3",
    "antonym": {
      "wordGeo": "უამინდობა",
      "translitRu": "уаминдоба",
      "ipa": "[uɑmindɔbɑ]",
      "translationRu": "Непогода / Ненастье",
      "translationEn": "Bad weather / Storm",
      "imageUrl": "assets/photos/mp_chiri_ej.jpg",
      "photoQuery": "Stormy grey clouds rain mountain valley",
      "audioNormal": "assets/audio/mp_chiri_ej.mp3"
    },
    "examples": [
      {
        "geo": "აჭარაში ნოტიო სუბტროპიკული ჰავაა.",
        "gloss": "აჭარაში (в Аджарии) · ნოტიო სუბტროპიკული (влажный субтропический) · ჰავაა (климат)",
        "ru": "В Аджарии влажный субтропический климат.",
        "audio": "assets/audio/card_33_4_ex1.mp3"
      },
      {
        "geo": "აბასთუმნის მშრალი ჰავა უნიკალურია.",
        "gloss": "აბასთუმნის (Абастумани) · მშრალი ჰავა (сухой климат) · უნიკალურია (уникален)",
        "ru": "Сухой горный климат Абастумани уникален.",
        "audio": "assets/audio/card_33_4_ex2.mp3"
      },
      {
        "geo": "აქ ძალიან რბილი და სასიამოვნო ჰავაა.",
        "gloss": "აქ (здесь) · ძალიან რბილი (очень мягкий) · და სასიამოვნო ჰავაა (и приятный климат)",
        "ru": "Здесь очень мягкий и приятный климат.",
        "audio": "assets/audio/card_33_4_ex3.mp3"
      }
    ],
    "grammarMarker": "Различайте два полезных слова: ამინდი — погода сегодня за окном, а ჰავა (или კლიმატი) — природный климат местности!",
    "culturalNote": "На небольшой территории Грузии соседствуют почти все климатические зоны («ჰავა») — от влажных субтропиков Колхиды до вечных снегов Сванетии."
  },
  {
    "id": "card_33_5",
    "letter": "ჰ",
    "letterIndex": 33,
    "wordGeo": "ჰამაკი",
    "translitLat": "hamak'i",
    "ipa": "[hɑmɑkʼi]",
    "translitRu": "hамак'и",
    "translationRu": "Гамак",
    "translationEn": "Hammock",
    "difficulty": "Начальный",
    "category": "Быт",
    "articulationTip": "Лёгкий выдох «ჰ» [h] в начале контрастирует с чётким сухим щелчком «კ» [kʼ] в последнем слоге!",
    "semanticHint": "Плетёный гамак между двумя старыми ореховыми деревьями в летнем дачном саду.",
    "imageUrl": "assets/photos/card_33_5.jpg",
    "imageCaption": "Уютный плетёный гамак в тени зелёных деревьев летнего сада",
    "photoQuery": "Woven hammock hanging between green garden trees",
    "audioNormal": "assets/audio/card_33_5.mp3",
    "antonym": {
      "wordGeo": "სამუშაო სკამი",
      "translitRu": "samushao sk'ami",
      "ipa": "[sɑmuʃɑɔ skʼɑmi]",
      "translationRu": "Рабочий стул / Офисное кресло",
      "translationEn": "Office chair",
      "imageUrl": "assets/photos/ant_skami.jpg",
      "photoQuery": "Modern wooden office desk chair workspace",
      "audioNormal": "assets/audio/ant_skami.mp3"
    },
    "examples": [
      {
        "geo": "ეზოში ხეებს შორის ჰამაკი გავაბით.",
        "gloss": "ეზოში (во дворе) · ხეებს შორის (между деревьями) · ჰამაკი გავაბით (мы натянули гамак)",
        "ru": "Во дворе между деревьями мы повесили гамак.",
        "audio": "assets/audio/card_33_5_ex1.mp3"
      },
      {
        "geo": "ზაფხულში ჰამაკში წიგნის კითხვა მიყვარს.",
        "gloss": "ზაფხულში (летом) · ჰამაკში (в гамаке) · წიგნის კითხვა (читать книгу) · მიყვარს (люблю)",
        "ru": "Летом я люблю читать книгу в гамаке.",
        "audio": "assets/audio/card_33_5_ex2.mp3"
      },
      {
        "geo": "ჩრდილში ჰამაკი გველოდება!",
        "gloss": "ჩრდილში (в тени) · ჰამაკი (гамак) · გველოდება (ждёт нас)!",
        "ru": "В прохладной тени нас ждёт гамак!",
        "audio": "assets/audio/card_33_5_ex3.mp3"
      }
    ],
    "grammarMarker": "Основа: ჰამაკ- · Мн. ч.: ჰამაკები · Местный п.: ჰამაკში («в гамаке»). Финальное -კი с абруптивным კ [kʼ].",
    "culturalNote": "Село Сурами на перевале между Восточной и Западной Грузией славится двумя вещами: сладкими лепёшками «назуки» и рядами плетёных гамаков ручной работы!"
  }
];
})();

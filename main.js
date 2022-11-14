document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.main');
  const form = document.querySelector('form');
  const input = document.querySelector('.header__input');
  const formHelper = document.querySelector('.form-helper');
  const URL = 'https://restcountries.com/v3.1/alpha/';
  const countries = [
    {
      ru: 'Мавритания',
      ruOf: 'Исламская Республика Мавритания',
      eng: 'Mauritania',
      engOf: 'Islamic Republic of Mauritania',
      code: 'MRT',
    },
    {
      ru: 'Аруба',
      ruOf: 'Аруба',
      eng: 'Aruba',
      engOf: 'Aruba',
      code: 'ABW',
    },
    {
      ru: 'Аргентина',
      ruOf: 'Аргентинская Республика',
      eng: 'Argentina',
      engOf: 'Argentine Republic',
      code: 'ARG',
    },
    {
      ru: 'Швеция',
      ruOf: 'Королевство Швеция',
      eng: 'Sweden',
      engOf: 'Kingdom of Sweden',
      code: 'SWE',
    },
    {
      ru: 'Мальдивы',
      ruOf: 'Республика Мальдивы',
      eng: 'Maldives',
      engOf: 'Republic of the Maldives',
      code: 'MDV',
    },
    {
      ru: 'Мексика',
      ruOf: 'Мексиканские Соединённые Штаты',
      eng: 'Mexico',
      engOf: 'United Mexican States',
      code: 'MEX',
    },
    {
      ru: 'Новая Зеландия',
      ruOf: 'Новая Зеландия',
      eng: 'New Zealand',
      engOf: 'New Zealand',
      code: 'NZL',
    },
    {
      ru: 'Эквадор',
      ruOf: 'Республика Эквадор',
      eng: 'Ecuador',
      engOf: 'Republic of Ecuador',
      code: 'ECU',
    },
    {
      ru: 'Уоллис и Футуна',
      ruOf: 'Территория Уоллис и Футуна острова',
      eng: 'Wallis and Futuna',
      engOf: 'Territory of the Wallis and Futuna Islands',
      code: 'WLF',
    },
    {
      ru: 'Аландские острова',
      ruOf: 'Аландские острова',
      eng: 'Åland Islands',
      engOf: 'Åland Islands',
      code: 'ALA',
    },
    {
      ru: 'Черногория',
      ruOf: 'Черногория',
      eng: 'Montenegro',
      engOf: 'Montenegro',
      code: 'MNE',
    },
    {
      ru: 'Пакистан',
      ruOf: 'Исламская Республика Пакистан',
      eng: 'Pakistan',
      engOf: 'Islamic Republic of Pakistan',
      code: 'PAK',
    },
    {
      ru: 'Острова Питкэрн',
      ruOf: 'Питкэрн группа островов',
      eng: 'Pitcairn Islands',
      engOf: 'Pitcairn Group of Islands',
      code: 'PCN',
    },
    {
      ru: 'Замбия',
      ruOf: 'Республика Замбия',
      eng: 'Zambia',
      engOf: 'Republic of Zambia',
      code: 'ZMB',
    },
    {
      ru: 'Сейшельские Острова',
      ruOf: 'Республика Сейшельские Острова',
      eng: 'Seychelles',
      engOf: 'Republic of Seychelles',
      code: 'SYC',
    },
    {
      ru: 'Малайзия',
      ruOf: 'Малайзия',
      eng: 'Malaysia',
      engOf: 'Malaysia',
      code: 'MYS',
    },
    {
      ru: 'Норвегия',
      ruOf: 'Королевство Норвегия',
      eng: 'Norway',
      engOf: 'Kingdom of Norway',
      code: 'NOR',
    },
    {
      ru: 'Узбекистан',
      ruOf: 'Республика Узбекистан',
      eng: 'Uzbekistan',
      engOf: 'Republic of Uzbekistan',
      code: 'UZB',
    },
    {
      ru: 'Вануату',
      ruOf: 'Республика Вануату',
      eng: 'Vanuatu',
      engOf: 'Republic of Vanuatu',
      code: 'VUT',
    },
    {
      ru: 'Французские Южные и Антарктические территории',
      ruOf: 'Территория Французские Южные и Антарктические земли',
      eng: 'French Southern and Antarctic Lands',
      engOf: 'Territory of the French Southern and Antarctic Lands',
      code: 'ATF',
    },
    {
      ru: 'Остров Рождества',
      ruOf: 'Территория острова Рождества',
      eng: 'Christmas Island',
      engOf: 'Territory of Christmas Island',
      code: 'CXR',
    },
    {
      ru: 'Сингапур',
      ruOf: 'Республика Сингапур',
      eng: 'Singapore',
      engOf: 'Republic of Singapore',
      code: 'SGP',
    },
    {
      ru: 'Суринам',
      ruOf: 'Республика Суринам',
      eng: 'Suriname',
      engOf: 'Republic of Suriname',
      code: 'SUR',
    },
    {
      ru: 'Западная Сахара',
      ruOf: 'Sahrawi Арабская Демократическая Республика',
      eng: 'Western Sahara',
      engOf: 'Sahrawi Arab Democratic Republic',
      code: 'ESH',
    },
    {
      ru: 'Сен-Мартен',
      ruOf: 'Сен-Мартен',
      eng: 'Saint Martin',
      engOf: 'Saint Martin',
      code: 'MAF',
    },
    {
      ru: 'Коста-Рика',
      ruOf: 'Республика Коста-Рика',
      eng: 'Costa Rica',
      engOf: 'Republic of Costa Rica',
      code: 'CRI',
    },
    {
      ru: 'Остров Херд и острова Макдональд',
      ruOf: 'Остров Херд и острова Макдональд',
      eng: 'Heard Island and McDonald Islands',
      engOf: 'Heard Island and McDonald Islands',
      code: 'HMD',
    },
    {
      ru: 'Ирландия',
      ruOf: 'Ирландия',
      eng: 'Ireland',
      engOf: 'Republic of Ireland',
      code: 'IRL',
    },
    {
      ru: 'Антарктида',
      ruOf: 'Антарктида',
      eng: 'Antarctica',
      engOf: 'Antarctica',
      code: 'ATA',
    },
    {
      ru: 'Австралия',
      ruOf: 'Содружество Австралии',
      eng: 'Australia',
      engOf: 'Commonwealth of Australia',
      code: 'AUS',
    },
    {
      ru: 'Ливия',
      ruOf: 'Государство Ливии',
      eng: 'Libya',
      engOf: 'State of Libya',
      code: 'LBY',
    },
    {
      ru: 'Катар',
      ruOf: 'Государство Катар',
      eng: 'Qatar',
      engOf: 'State of Qatar',
      code: 'QAT',
    },
    {
      ru: 'Гренландия',
      ruOf: 'Гренландия',
      eng: 'Greenland',
      engOf: 'Greenland',
      code: 'GRL',
    },
    {
      ru: 'Маврикий',
      ruOf: 'Республика Маврикий',
      eng: 'Mauritius',
      engOf: 'Republic of Mauritius',
      code: 'MUS',
    },
    {
      ru: 'Казахстан',
      ruOf: 'Республика Казахстан',
      eng: 'Kazakhstan',
      engOf: 'Republic of Kazakhstan',
      code: 'KAZ',
    },
    {
      ru: 'Британская территория в Индийском океане',
      ruOf: 'Британская территория Индийского океана',
      eng: 'British Indian Ocean Territory',
      engOf: 'British Indian Ocean Territory',
      code: 'IOT',
    },
    {
      ru: 'Албания',
      ruOf: 'Республика Албания',
      eng: 'Albania',
      engOf: 'Republic of Albania',
      code: 'ALB',
    },
    {
      ru: 'Бахрейн',
      ruOf: 'Королевство Бахрейн',
      eng: 'Bahrain',
      engOf: 'Kingdom of Bahrain',
      code: 'BHR',
    },
    {
      ru: 'Папуа — Новая Гвинея',
      ruOf: 'Независимое Государство Папуа-Новой Гвинеи',
      eng: 'Papua New Guinea',
      engOf: 'Independent State of Papua New Guinea',
      code: 'PNG',
    },
    {
      ru: 'Бурунди',
      ruOf: 'Республика Бурунди',
      eng: 'Burundi',
      engOf: 'Republic of Burundi',
      code: 'BDI',
    },
    {
      ru: 'Индия',
      ruOf: 'Республика Индия',
      eng: 'India',
      engOf: 'Republic of India',
      code: 'IND',
    },
    {
      ru: 'Уругвай',
      ruOf: 'Восточной Республики Уругвай',
      eng: 'Uruguay',
      engOf: 'Oriental Republic of Uruguay',
      code: 'URY',
    },
    {
      ru: 'Сент-Люсия',
      ruOf: 'Сент-Люсия',
      eng: 'Saint Lucia',
      engOf: 'Saint Lucia',
      code: 'LCA',
    },
    {
      ru: 'Барбадос',
      ruOf: 'Барбадос',
      eng: 'Barbados',
      engOf: 'Barbados',
      code: 'BRB',
    },
    {
      ru: 'Новая Каледония',
      ruOf: 'Новая Каледония',
      eng: 'New Caledonia',
      engOf: 'New Caledonia',
      code: 'NCL',
    },
    {
      ru: 'Латвия',
      ruOf: 'Латвийская Республика',
      eng: 'Latvia',
      engOf: 'Republic of Latvia',
      code: 'LVA',
    },
    {
      ru: 'Эстония',
      ruOf: 'Эстонская Республика',
      eng: 'Estonia',
      engOf: 'Republic of Estonia',
      code: 'EST',
    },
    {
      ru: 'Ниуэ',
      ruOf: 'Ниуэ',
      eng: 'Niue',
      engOf: 'Niue',
      code: 'NIU',
    },
    {
      ru: 'Сен-Бартелеми',
      ruOf: 'Коллективность Санкт -Бартельми',
      eng: 'Saint Barthélemy',
      engOf: 'Collectivity of Saint Barthélemy',
      code: 'BLM',
    },
    {
      ru: 'Пуэрто-Рико',
      ruOf: 'Содружество Пуэрто-Рико',
      eng: 'Puerto Rico',
      engOf: 'Commonwealth of Puerto Rico',
      code: 'PRI',
    },
    {
      ru: 'Гренада',
      ruOf: 'Гренада',
      eng: 'Grenada',
      engOf: 'Grenada',
      code: 'GRD',
    },
    {
      ru: 'Кипр',
      ruOf: 'Республика Кипр',
      eng: 'Cyprus',
      engOf: 'Republic of Cyprus',
      code: 'CYP',
    },
    {
      ru: 'Остров Мэн',
      ruOf: 'Остров Мэн',
      eng: 'Isle of Man',
      engOf: 'Isle of Man',
      code: 'IMN',
    },
    {
      ru: 'Греция',
      ruOf: 'Греческая Республика',
      eng: 'Greece',
      engOf: 'Hellenic Republic',
      code: 'GRC',
    },
    {
      ru: 'Сирия',
      ruOf: 'Сирийская Арабская Республика',
      eng: 'Syria',
      engOf: 'Syrian Arab Republic',
      code: 'SYR',
    },
    {
      ru: 'Литва',
      ruOf: 'Литовская Республика',
      eng: 'Lithuania',
      engOf: 'Republic of Lithuania',
      code: 'LTU',
    },
    {
      ru: 'Кюрасао',
      ruOf: 'Страна Кюрасао',
      eng: 'Curaçao',
      engOf: 'Country of Curaçao',
      code: 'CUW',
    },
    {
      ru: 'Доминика',
      ruOf: 'Содружество Доминики',
      eng: 'Dominica',
      engOf: 'Commonwealth of Dominica',
      code: 'DMA',
    },
    {
      ru: 'Нигер',
      ruOf: 'Республика Нигер',
      eng: 'Niger',
      engOf: 'Republic of Niger',
      code: 'NER',
    },
    {
      ru: 'Киргизия',
      ruOf: 'Кыргызская Республика',
      eng: 'Kyrgyzstan',
      engOf: 'Kyrgyz Republic',
      code: 'KGZ',
    },
    {
      ru: 'Тринидад и Тобаго',
      ruOf: 'Республика Тринидад и Тобаго',
      eng: 'Trinidad and Tobago',
      engOf: 'Republic of Trinidad and Tobago',
      code: 'TTO',
    },
    {
      ru: 'Того',
      ruOf: 'Того Республика',
      eng: 'Togo',
      engOf: 'Togolese Republic',
      code: 'TGO',
    },
    {
      ru: 'Палестина',
      ruOf: 'Государство Палестина',
      eng: 'Palestine',
      engOf: 'State of Palestine',
      code: 'PSE',
    },
    {
      ru: 'Мадагаскар',
      ruOf: 'Республика Мадагаскар',
      eng: 'Madagascar',
      engOf: 'Republic of Madagascar',
      code: 'MDG',
    },
    {
      ru: 'Хорватия',
      ruOf: 'Республика Хорватия',
      eng: 'Croatia',
      engOf: 'Republic of Croatia',
      code: 'HRV',
    },
    {
      ru: 'Фарерские острова',
      ruOf: 'Фарерские острова',
      eng: 'Faroe Islands',
      engOf: 'Faroe Islands',
      code: 'FRO',
    },
    {
      ru: 'Гаити',
      ruOf: 'Республика Гаити',
      eng: 'Haiti',
      engOf: 'Republic of Haiti',
      code: 'HTI',
    },
    {
      ru: 'Монтсеррат',
      ruOf: 'Монтсеррат',
      eng: 'Montserrat',
      engOf: 'Montserrat',
      code: 'MSR',
    },
    {
      ru: 'Острова Кука',
      ruOf: 'острова Кука',
      eng: 'Cook Islands',
      engOf: 'Cook Islands',
      code: 'COK',
    },
    {
      ru: 'Восточный Тимор',
      ruOf: 'Демократическая Республика Тимор -Лешти',
      eng: 'Timor-Leste',
      engOf: 'Democratic Republic of Timor-Leste',
      code: 'TLS',
    },
    {
      ru: 'Мартиника',
      ruOf: 'Мартиника',
      eng: 'Martinique',
      engOf: 'Martinique',
      code: 'MTQ',
    },
    {
      ru: 'Куба',
      ruOf: 'Республика Куба',
      eng: 'Cuba',
      engOf: 'Republic of Cuba',
      code: 'CUB',
    },
    {
      ru: 'Свазиленд',
      ruOf: 'Королевство Свазиленд',
      eng: 'Eswatini',
      engOf: 'Kingdom of Eswatini',
      code: 'SWZ',
    },
    {
      ru: 'Украина',
      ruOf: 'Украина',
      eng: 'Ukraine',
      engOf: 'Ukraine',
      code: 'UKR',
    },
    {
      ru: 'Бермудские Острова',
      ruOf: 'Бермудские острова',
      eng: 'Bermuda',
      engOf: 'Bermuda',
      code: 'BMU',
    },
    {
      ru: 'Южная Корея',
      ruOf: 'Республика Корея',
      eng: 'South Korea',
      engOf: 'Republic of Korea',
      code: 'KOR',
    },
    {
      ru: 'Перу',
      ruOf: 'Республика Перу',
      eng: 'Peru',
      engOf: 'Republic of Peru',
      code: 'PER',
    },
    {
      ru: 'Ирак',
      ruOf: 'Республика Ирак',
      eng: 'Iraq',
      engOf: 'Republic of Iraq',
      code: 'IRQ',
    },
    {
      ru: 'Молдавия',
      ruOf: 'Молдова',
      eng: 'Moldova',
      engOf: 'Republic of Moldova',
      code: 'MDA',
    },
    {
      ru: 'Сан-Марино',
      ruOf: 'Большинство Serene Республика Сан-Марино',
      eng: 'San Marino',
      engOf: 'Republic of San Marino',
      code: 'SMR',
    },
    {
      ru: 'Венесуэла',
      ruOf: 'Боливарианская Республика Венесуэла',
      eng: 'Venezuela',
      engOf: 'Bolivarian Republic of Venezuela',
      code: 'VEN',
    },
    {
      ru: 'Гайана',
      ruOf: 'Кооперативная Республика Гайана',
      eng: 'Guyana',
      engOf: 'Co-operative Republic of Guyana',
      code: 'GUY',
    },
    {
      ru: 'Каймановы острова',
      ruOf: 'Каймановы острова',
      eng: 'Cayman Islands',
      engOf: 'Cayman Islands',
      code: 'CYM',
    },
    {
      ru: 'Камбоджа',
      ruOf: 'Королевство Камбоджа',
      eng: 'Cambodia',
      engOf: 'Kingdom of Cambodia',
      code: 'KHM',
    },
    {
      ru: 'Кокосовые острова',
      ruOf: 'Территория Кокосовые (Килинг) острова',
      eng: 'Cocos (Keeling) Islands',
      engOf: 'Territory of the Cocos (Keeling) Islands',
      code: 'CCK',
    },
    {
      ru: 'Мальта',
      ruOf: 'Республика Мальта',
      eng: 'Malta',
      engOf: 'Republic of Malta',
      code: 'MLT',
    },
    {
      ru: 'Шри-Ланка',
      ruOf: 'Демократическая Социалистическая Республика Шри-Ланка',
      eng: 'Sri Lanka',
      engOf: 'Democratic Socialist Republic of Sri Lanka',
      code: 'LKA',
    },
    {
      ru: 'Израиль',
      ruOf: 'Государство Израиль',
      eng: 'Israel',
      engOf: 'State of Israel',
      code: 'ISR',
    },
    {
      ru: 'Судан',
      ruOf: 'Республика Судан',
      eng: 'Sudan',
      engOf: 'Republic of the Sudan',
      code: 'SDN',
    },
    {
      ru: 'Виргинские Острова',
      ruOf: 'Виргинские острова Соединенных Штатов',
      eng: 'United States Virgin Islands',
      engOf: 'Virgin Islands of the United States',
      code: 'VIR',
    },
    {
      ru: 'Эритрея',
      ruOf: 'Государство Эритрея',
      eng: 'Eritrea',
      engOf: 'State of Eritrea',
      code: 'ERI',
    },
    {
      ru: 'Мали',
      ruOf: 'Республика Мали',
      eng: 'Mali',
      engOf: 'Republic of Mali',
      code: 'MLI',
    },
    {
      ru: 'Сомали',
      ruOf: 'Федеративная Республика Сомали',
      eng: 'Somalia',
      engOf: 'Federal Republic of Somalia',
      code: 'SOM',
    },
    {
      ru: 'Норфолк',
      ruOf: 'Территория острова Норфолк',
      eng: 'Norfolk Island',
      engOf: 'Territory of Norfolk Island',
      code: 'NFK',
    },
    {
      ru: 'Коморы',
      ruOf: 'Союз Коморских Островов',
      eng: 'Comoros',
      engOf: 'Union of the Comoros',
      code: 'COM',
    },
    {
      ru: 'Никарагуа',
      ruOf: 'Республика Никарагуа',
      eng: 'Nicaragua',
      engOf: 'Republic of Nicaragua',
      code: 'NIC',
    },
    {
      ru: 'Россия',
      ruOf: 'Российская Федерация',
      eng: 'Russia',
      engOf: 'Russian Federation',
      code: 'RUS',
    },
    {
      ru: 'Уганда',
      ruOf: 'Республика Уганда',
      eng: 'Uganda',
      engOf: 'Republic of Uganda',
      code: 'UGA',
    },
    {
      ru: 'Науру',
      ruOf: 'Республика Науру',
      eng: 'Nauru',
      engOf: 'Republic of Nauru',
      code: 'NRU',
    },
    {
      ru: 'Швейцария',
      ruOf: 'Швейцарская Конфедерация',
      eng: 'Switzerland',
      engOf: 'Swiss Confederation',
      code: 'CHE',
    },
    {
      ru: 'Португалия',
      ruOf: 'Португальская Республика',
      eng: 'Portugal',
      engOf: 'Portuguese Republic',
      code: 'PRT',
    },
    {
      ru: 'Таджикистан',
      ruOf: 'Республика Таджикистан',
      eng: 'Tajikistan',
      engOf: 'Republic of Tajikistan',
      code: 'TJK',
    },
    {
      ru: 'Южный Судан',
      ruOf: 'Республика Южный Судан',
      eng: 'South Sudan',
      engOf: 'Republic of South Sudan',
      code: 'SSD',
    },
    {
      ru: 'Остров Буве',
      ruOf: 'Остров Буве',
      eng: 'Bouvet Island',
      engOf: 'Bouvet Island',
      code: 'BVT',
    },
    {
      ru: 'Федеративные Штаты Микронезии',
      ruOf: 'Федеративные Штаты Микронезии',
      eng: 'Micronesia',
      engOf: 'Federated States of Micronesia',
      code: 'FSM',
    },
    {
      ru: 'Американское Самоа',
      ruOf: 'американское Самоа',
      eng: 'American Samoa',
      engOf: 'American Samoa',
      code: 'ASM',
    },
    {
      ru: 'Чехия',
      ruOf: 'Чешская Республика',
      eng: 'Czechia',
      engOf: 'Czech Republic',
      code: 'CZE',
    },
    {
      ru: 'Ботсвана',
      ruOf: 'Республика Ботсвана',
      eng: 'Botswana',
      engOf: 'Republic of Botswana',
      code: 'BWA',
    },
    {
      ru: 'Тунис',
      ruOf: 'Тунисской Республики',
      eng: 'Tunisia',
      engOf: 'Tunisian Republic',
      code: 'TUN',
    },
    {
      ru: 'Ангилья',
      ruOf: 'Ангилья',
      eng: 'Anguilla',
      engOf: 'Anguilla',
      code: 'AIA',
    },
    {
      ru: 'Гвинея-Бисау',
      ruOf: 'Республика Гвинея -Бисау',
      eng: 'Guinea-Bissau',
      engOf: 'Republic of Guinea-Bissau',
      code: 'GNB',
    },
    {
      ru: 'Словакия',
      ruOf: 'Словацкая Республика',
      eng: 'Slovakia',
      engOf: 'Slovak Republic',
      code: 'SVK',
    },
    {
      ru: 'Маршалловы Острова',
      ruOf: 'Республика Маршалловы острова',
      eng: 'Marshall Islands',
      engOf: 'Republic of the Marshall Islands',
      code: 'MHL',
    },
    {
      ru: 'Алжир',
      ruOf: 'Народно-Демократическая Республика Алжир',
      eng: 'Algeria',
      engOf: "People's Democratic Republic of Algeria",
      code: 'DZA',
    },
    {
      ru: 'Ямайка',
      ruOf: 'Ямайка',
      eng: 'Jamaica',
      engOf: 'Jamaica',
      code: 'JAM',
    },
    {
      ru: 'Мозамбик',
      ruOf: 'Республика Мозамбик',
      eng: 'Mozambique',
      engOf: 'Republic of Mozambique',
      code: 'MOZ',
    },
    {
      ru: 'Испания',
      ruOf: 'Королевство Испания',
      eng: 'Spain',
      engOf: 'Kingdom of Spain',
      code: 'ESP',
    },
    {
      ru: 'Гондурас',
      ruOf: 'Республика Гондурас',
      eng: 'Honduras',
      engOf: 'Republic of Honduras',
      code: 'HND',
    },
    {
      ru: 'Нидерланды',
      ruOf: 'Нидерланды',
      eng: 'Netherlands',
      engOf: 'Kingdom of the Netherlands',
      code: 'NLD',
    },
    {
      ru: 'Южная Африка',
      ruOf: 'Южно-Африканская Республика',
      eng: 'South Africa',
      engOf: 'Republic of South Africa',
      code: 'ZAF',
    },
    {
      ru: 'Азербайджан',
      ruOf: 'Азербайджанская Республика',
      eng: 'Azerbaijan',
      engOf: 'Republic of Azerbaijan',
      code: 'AZE',
    },
    {
      ru: 'Северная Македония',
      ruOf: 'Республика Северная Македония',
      eng: 'North Macedonia',
      engOf: 'Republic of North Macedonia',
      code: 'MKD',
    },
    {
      ru: 'Гамбия',
      ruOf: 'Республика Гамбия',
      eng: 'Gambia',
      engOf: 'Republic of the Gambia',
      code: 'GMB',
    },
    {
      ru: 'Либерия',
      ruOf: 'Республика Либерия',
      eng: 'Liberia',
      engOf: 'Republic of Liberia',
      code: 'LBR',
    },
    {
      ru: 'Люксембург',
      ruOf: 'Великое Герцогство Люксембург',
      eng: 'Luxembourg',
      engOf: 'Grand Duchy of Luxembourg',
      code: 'LUX',
    },
    {
      ru: 'Кабо-Верде',
      ruOf: 'Республика Кабо -Верде',
      eng: 'Cape Verde',
      engOf: 'Republic of Cabo Verde',
      code: 'CPV',
    },
    {
      ru: 'Багамские Острова',
      ruOf: 'Содружество Багамских Островов',
      eng: 'Bahamas',
      engOf: 'Commonwealth of the Bahamas',
      code: 'BHS',
    },
    {
      ru: 'Грузия',
      ruOf: 'Грузия',
      eng: 'Georgia',
      engOf: 'Georgia',
      code: 'GEO',
    },
    {
      ru: 'Кирибати',
      ruOf: 'Независимой и суверенной Республики Кирибати',
      eng: 'Kiribati',
      engOf: 'Independent and Sovereign Republic of Kiribati',
      code: 'KIR',
    },
    {
      ru: 'Танзания',
      ruOf: 'Объединенная Республика Танзания',
      eng: 'Tanzania',
      engOf: 'United Republic of Tanzania',
      code: 'TZA',
    },
    {
      ru: 'Китай',
      ruOf: 'Народная Республика Китай',
      eng: 'China',
      engOf: "People's Republic of China",
      code: 'CHN',
    },
    {
      ru: 'Гватемала',
      ruOf: 'Республика Гватемала',
      eng: 'Guatemala',
      engOf: 'Republic of Guatemala',
      code: 'GTM',
    },
    {
      ru: 'Сан-Томе и Принсипи',
      ruOf: 'Демократическая Республика Сан-Томе и Принсипи',
      eng: 'São Tomé and Príncipe',
      engOf: 'Democratic Republic of São Tomé and Príncipe',
      code: 'STP',
    },
    {
      ru: 'Германия',
      ruOf: 'Федеративная Республика Германия',
      eng: 'Germany',
      engOf: 'Federal Republic of Germany',
      code: 'DEU',
    },
    {
      ru: 'Сьерра-Леоне',
      ruOf: 'Республика Сьерра-Леоне',
      eng: 'Sierra Leone',
      engOf: 'Republic of Sierra Leone',
      code: 'SLE',
    },
    {
      ru: 'Чад',
      ruOf: 'Республика Чад',
      eng: 'Chad',
      engOf: 'Republic of Chad',
      code: 'TCD',
    },
    {
      ru: 'Великобритания',
      ruOf: 'Соединенное Королевство Великобритании и Северной Ирландии',
      eng: 'United Kingdom',
      engOf: 'United Kingdom of Great Britain and Northern Ireland',
      code: 'GBR',
    },
    {
      ru: 'Словения',
      ruOf: 'Республика Словения',
      eng: 'Slovenia',
      engOf: 'Republic of Slovenia',
      code: 'SVN',
    },
    {
      ru: 'Таиланд',
      ruOf: 'Королевство Таиланд',
      eng: 'Thailand',
      engOf: 'Kingdom of Thailand',
      code: 'THA',
    },
    {
      ru: 'Индонезия',
      ruOf: 'Республика Индонезия',
      eng: 'Indonesia',
      engOf: 'Republic of Indonesia',
      code: 'IDN',
    },
    {
      ru: 'Северные Марианские острова',
      ruOf: 'Содружество Северных Марианских островов',
      eng: 'Northern Mariana Islands',
      engOf: 'Commonwealth of the Northern Mariana Islands',
      code: 'MNP',
    },
    {
      ru: 'Гуам',
      ruOf: 'Гуам',
      eng: 'Guam',
      engOf: 'Guam',
      code: 'GUM',
    },
    {
      ru: 'Финляндия',
      ruOf: 'Финляндская Республика',
      eng: 'Finland',
      engOf: 'Republic of Finland',
      code: 'FIN',
    },
    {
      ru: 'Майотта',
      ruOf: 'Департамент Майотта',
      eng: 'Mayotte',
      engOf: 'Department of Mayotte',
      code: 'MYT',
    },
    {
      ru: 'Гибралтар',
      ruOf: 'Гибралтар',
      eng: 'Gibraltar',
      engOf: 'Gibraltar',
      code: 'GIB',
    },
    {
      ru: 'Туркмения',
      ruOf: 'Туркменистан',
      eng: 'Turkmenistan',
      engOf: 'Turkmenistan',
      code: 'TKM',
    },
    {
      ru: 'Республика Косово',
      ruOf: 'Республика Косово',
      eng: 'Kosovo',
      engOf: 'Republic of Kosovo',
      code: 'UNK',
    },
    {
      ru: 'Кот-д’Ивуар',
      ruOf: "Республика Кот-д'Ивуаре",
      eng: 'Ivory Coast',
      engOf: "Republic of Côte d'Ivoire",
      code: 'CIV',
    },
    {
      ru: 'Марокко',
      ruOf: 'Королевство Марокко',
      eng: 'Morocco',
      engOf: 'Kingdom of Morocco',
      code: 'MAR',
    },
    {
      ru: 'Доминиканская Республика',
      ruOf: 'Доминиканская Республика',
      eng: 'Dominican Republic',
      engOf: 'Dominican Republic',
      code: 'DOM',
    },
    {
      ru: 'Гана',
      ruOf: 'Республика Гана',
      eng: 'Ghana',
      engOf: 'Republic of Ghana',
      code: 'GHA',
    },
    {
      ru: 'Ватикан',
      ruOf: 'Город-государство Ватикан',
      eng: 'Vatican City',
      engOf: 'Vatican City State',
      code: 'VAT',
    },
    {
      ru: 'Джерси',
      ruOf: 'Коронное владение Джерси',
      eng: 'Jersey',
      engOf: 'Bailiwick of Jersey',
      code: 'JEY',
    },
    {
      ru: 'Турция',
      ruOf: 'Республика Турции',
      eng: 'Turkey',
      engOf: 'Republic of Turkey',
      code: 'TUR',
    },
    {
      ru: 'Тувалу',
      ruOf: 'Тувалу',
      eng: 'Tuvalu',
      engOf: 'Tuvalu',
      code: 'TUV',
    },
    {
      ru: 'Иран',
      ruOf: 'Исламская Республика Иран',
      eng: 'Iran',
      engOf: 'Islamic Republic of Iran',
      code: 'IRN',
    },
    {
      ru: 'Египет',
      ruOf: 'Арабская Республика Египет',
      eng: 'Egypt',
      engOf: 'Arab Republic of Egypt',
      code: 'EGY',
    },
    {
      ru: 'Дания',
      ruOf: 'Королевство Дания',
      eng: 'Denmark',
      engOf: 'Kingdom of Denmark',
      code: 'DNK',
    },
    {
      ru: 'Кения',
      ruOf: 'Республика Кения',
      eng: 'Kenya',
      engOf: 'Republic of Kenya',
      code: 'KEN',
    },
    {
      ru: 'Болгария',
      ruOf: 'Республика Болгария',
      eng: 'Bulgaria',
      engOf: 'Republic of Bulgaria',
      code: 'BGR',
    },
    {
      ru: 'Зимбабве',
      ruOf: 'Республика Зимбабве',
      eng: 'Zimbabwe',
      engOf: 'Republic of Zimbabwe',
      code: 'ZWE',
    },
    {
      ru: 'Ангола',
      ruOf: 'Республика Ангола',
      eng: 'Angola',
      engOf: 'Republic of Angola',
      code: 'AGO',
    },
    {
      ru: 'Нигерия',
      ruOf: 'Федеративная Республика Нигерия',
      eng: 'Nigeria',
      engOf: 'Federal Republic of Nigeria',
      code: 'NGA',
    },
    {
      ru: 'Польша',
      ruOf: 'Республика Польша',
      eng: 'Poland',
      engOf: 'Republic of Poland',
      code: 'POL',
    },
    {
      ru: 'Сенегал',
      ruOf: 'Республика Сенегал',
      eng: 'Senegal',
      engOf: 'Republic of Senegal',
      code: 'SEN',
    },
    {
      ru: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
      ruOf: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья',
      eng: 'Saint Helena, Ascension and Tristan da Cunha',
      engOf: 'Saint Helena, Ascension and Tristan da Cunha',
      code: 'SHN',
    },
    {
      ru: 'Ливан',
      ruOf: 'Ливанская Республика',
      eng: 'Lebanon',
      engOf: 'Lebanese Republic',
      code: 'LBN',
    },
    {
      ru: 'Самоа',
      ruOf: 'Независимое Государство Самоа',
      eng: 'Samoa',
      engOf: 'Independent State of Samoa',
      code: 'WSM',
    },
    {
      ru: 'Филиппины',
      ruOf: 'Республика Филиппины',
      eng: 'Philippines',
      engOf: 'Republic of the Philippines',
      code: 'PHL',
    },
    {
      ru: 'Гернси',
      ruOf: 'Коронное владение Гернси',
      eng: 'Guernsey',
      engOf: 'Bailiwick of Guernsey',
      code: 'GGY',
    },
    {
      ru: 'Сальвадор',
      ruOf: 'Республика Эль-Сальвадор',
      eng: 'El Salvador',
      engOf: 'Republic of El Salvador',
      code: 'SLV',
    },
    {
      ru: 'Кувейт',
      ruOf: 'Государство Кувейт',
      eng: 'Kuwait',
      engOf: 'State of Kuwait',
      code: 'KWT',
    },
    {
      ru: 'Тонга',
      ruOf: 'Королевство Тонга',
      eng: 'Tonga',
      engOf: 'Kingdom of Tonga',
      code: 'TON',
    },
    {
      ru: 'Оман',
      ruOf: 'Султанат Оман',
      eng: 'Oman',
      engOf: 'Sultanate of Oman',
      code: 'OMN',
    },
    {
      ru: 'Афганистан',
      ruOf: 'Исламская Республика Афганистан',
      eng: 'Afghanistan',
      engOf: 'Islamic Republic of Afghanistan',
      code: 'AFG',
    },
    {
      ru: 'Сент-Китс и Невис',
      ruOf: 'Федерация Сент-Кристофер и Н е в и с',
      eng: 'Saint Kitts and Nevis',
      engOf: 'Federation of Saint Christopher and Nevis',
      code: 'KNA',
    },
    {
      ru: 'Центральноафриканская Республика',
      ruOf: 'Центрально-Африканская Республика',
      eng: 'Central African Republic',
      engOf: 'Central African Republic',
      code: 'CAF',
    },
    {
      ru: 'Сербия',
      ruOf: 'Республика Сербия',
      eng: 'Serbia',
      engOf: 'Republic of Serbia',
      code: 'SRB',
    },
    {
      ru: 'Армения',
      ruOf: 'Республика Армения',
      eng: 'Armenia',
      engOf: 'Republic of Armenia',
      code: 'ARM',
    },
    {
      ru: 'Бангладеш',
      ruOf: 'Народная Республика Бангладеш',
      eng: 'Bangladesh',
      engOf: "People's Republic of Bangladesh",
      code: 'BGD',
    },
    {
      ru: 'Лаос',
      ruOf: 'Лаосская Народно-Демократическая Республика',
      eng: 'Laos',
      engOf: "Lao People's Democratic Republic",
      code: 'LAO',
    },
    {
      ru: 'Чили',
      ruOf: 'Республика Чили',
      eng: 'Chile',
      engOf: 'Republic of Chile',
      code: 'CHL',
    },
    {
      ru: 'Французская Полинезия',
      ruOf: 'Французская Полинезия',
      eng: 'French Polynesia',
      engOf: 'French Polynesia',
      code: 'PYF',
    },
    {
      ru: 'Панама',
      ruOf: 'Республика Панама',
      eng: 'Panama',
      engOf: 'Republic of Panama',
      code: 'PAN',
    },
    {
      ru: 'Соединённые Штаты Америки',
      ruOf: 'Соединенные Штаты Америки',
      eng: 'United States (USA)',
      engOf: 'United States of America, USA',
      code: 'USA',
    },
    {
      ru: 'Непал',
      ruOf: 'Федеративная Демократическая Республика Непал',
      eng: 'Nepal',
      engOf: 'Federal Democratic Republic of Nepal',
      code: 'NPL',
    },
    {
      ru: 'Мьянма',
      ruOf: 'Республика Союза Мьянма',
      eng: 'Myanmar',
      engOf: 'Republic of the Union of Myanmar',
      code: 'MMR',
    },
    {
      ru: 'Фолклендские острова',
      ruOf: 'Фолклендские острова',
      eng: 'Falkland Islands',
      engOf: 'Falkland Islands',
      code: 'FLK',
    },
    {
      ru: 'Венгрия',
      ruOf: 'Венгрия',
      eng: 'Hungary',
      engOf: 'Hungary',
      code: 'HUN',
    },
    {
      ru: 'Палау',
      ruOf: 'Республика Палау',
      eng: 'Palau',
      engOf: 'Republic of Palau',
      code: 'PLW',
    },
    {
      ru: 'Экваториальная Гвинея',
      ruOf: 'Республика Экваториальная Гвинея',
      eng: 'Equatorial Guinea',
      engOf: 'Republic of Equatorial Guinea',
      code: 'GNQ',
    },
    {
      ru: 'Гвинея',
      ruOf: 'Республика Гвинея',
      eng: 'Guinea',
      engOf: 'Republic of Guinea',
      code: 'GIN',
    },
    {
      ru: 'Объединённые Арабские Эмираты',
      ruOf: 'Объединенные Арабские Эмираты',
      eng: 'United Arab Emirates',
      engOf: 'United Arab Emirates',
      code: 'ARE',
    },
    {
      ru: 'Теркс и Кайкос',
      ruOf: 'Теркс и Кайкос острова',
      eng: 'Turks and Caicos Islands',
      engOf: 'Turks and Caicos Islands',
      code: 'TCA',
    },
    {
      ru: 'Британские Виргинские острова',
      ruOf: 'Виргинские острова',
      eng: 'British Virgin Islands',
      engOf: 'Virgin Islands',
      code: 'VGB',
    },
    {
      ru: 'Лихтенштейн',
      ruOf: 'Княжество Лихтенштейн',
      eng: 'Liechtenstein',
      engOf: 'Principality of Liechtenstein',
      code: 'LIE',
    },
    {
      ru: 'Босния и Герцеговина',
      ruOf: 'Босния и Герцеговина',
      eng: 'Bosnia and Herzegovina',
      engOf: 'Bosnia and Herzegovina',
      code: 'BIH',
    },
    {
      ru: 'Малави',
      ruOf: 'Республика Малави',
      eng: 'Malawi',
      engOf: 'Republic of Malawi',
      code: 'MWI',
    },
    {
      ru: 'Бутан',
      ruOf: 'Королевство Бутан',
      eng: 'Bhutan',
      engOf: 'Kingdom of Bhutan',
      code: 'BTN',
    },
    {
      ru: 'Камерун',
      ruOf: 'Республика Камерун',
      eng: 'Cameroon',
      engOf: 'Republic of Cameroon',
      code: 'CMR',
    },
    {
      ru: 'Андорра',
      ruOf: 'Княжество Андорра',
      eng: 'Andorra',
      engOf: 'Principality of Andorra',
      code: 'AND',
    },
    {
      ru: 'Гваделупа',
      ruOf: 'Гваделупа',
      eng: 'Guadeloupe',
      engOf: 'Guadeloupe',
      code: 'GLP',
    },
    {
      ru: 'Республика Конго',
      ruOf: 'Республика Конго',
      eng: 'Republic of the Congo',
      engOf: 'Republic of the Congo',
      code: 'COG',
    },
    {
      ru: 'Реюньон',
      ruOf: 'Реюньон',
      eng: 'Réunion',
      engOf: 'Réunion Island',
      code: 'REU',
    },
    {
      ru: 'Буркина-Фасо',
      ruOf: 'Буркина -Фасо',
      eng: 'Burkina Faso',
      engOf: 'Burkina Faso',
      code: 'BFA',
    },
    {
      ru: 'Иордания',
      ruOf: 'Иорданского Хашимитского Королевства',
      eng: 'Jordan',
      engOf: 'Hashemite Kingdom of Jordan',
      code: 'JOR',
    },
    {
      ru: 'Демократическая Республика Конго',
      ruOf: 'Демократическая Республика Конго',
      eng: 'DR Congo',
      engOf: 'Democratic Republic of the Congo',
      code: 'COD',
    },
    {
      ru: 'Токелау',
      ruOf: 'Токелау',
      eng: 'Tokelau',
      engOf: 'Tokelau',
      code: 'TKL',
    },
    {
      ru: 'Вьетнам',
      ruOf: 'Социалистическая Республика Вьетнам',
      eng: 'Vietnam',
      engOf: 'Socialist Republic of Vietnam',
      code: 'VNM',
    },
    {
      ru: 'Синт-Мартен',
      ruOf: 'Синт-Маартен',
      eng: 'Sint Maarten',
      engOf: 'Sint Maarten',
      code: 'SXM',
    },
    {
      ru: 'Бельгия',
      ruOf: 'Королевство Бельгия',
      eng: 'Belgium',
      engOf: 'Kingdom of Belgium',
      code: 'BEL',
    },
    {
      ru: 'Внешние малые острова США',
      ruOf: 'Внешние малые острова США',
      eng: 'United States Minor Outlying Islands',
      engOf: 'United States Minor Outlying Islands',
      code: 'UMI',
    },
    {
      ru: 'Бразилия',
      ruOf: 'Федеративная Республика Бразилия',
      eng: 'Brazil',
      engOf: 'Federative Republic of Brazil',
      code: 'BRA',
    },
    {
      ru: 'Белиз',
      ruOf: 'Белиз',
      eng: 'Belize',
      engOf: 'Belize',
      code: 'BLZ',
    },
    {
      ru: 'Антигуа и Барбуда',
      ruOf: 'Антигуа и Барбуда',
      eng: 'Antigua and Barbuda',
      engOf: 'Antigua and Barbuda',
      code: 'ATG',
    },
    {
      ru: 'Парагвай',
      ruOf: 'Республика Парагвай',
      eng: 'Paraguay',
      engOf: 'Republic of Paraguay',
      code: 'PRY',
    },
    {
      ru: 'Бенин',
      ruOf: 'Республика Бенин',
      eng: 'Benin',
      engOf: 'Republic of Benin',
      code: 'BEN',
    },
    {
      ru: 'Бруней',
      ruOf: 'Нация Бруней, обитель мира',
      eng: 'Brunei',
      engOf: 'Nation of Brunei, Abode of Peace',
      code: 'BRN',
    },
    {
      ru: 'Боливия',
      ruOf: 'Многонациональное Государство Боливия',
      eng: 'Bolivia',
      engOf: 'Plurinational State of Bolivia',
      code: 'BOL',
    },
    {
      ru: 'Джибути',
      ruOf: 'Республика Джибути',
      eng: 'Djibouti',
      engOf: 'Republic of Djibouti',
      code: 'DJI',
    },
    {
      ru: 'Французская Гвиана',
      ruOf: 'Гвиана',
      eng: 'French Guiana',
      engOf: 'Guiana',
      code: 'GUF',
    },
    {
      ru: 'Канада',
      ruOf: 'Канада',
      eng: 'Canada',
      engOf: 'Canada',
      code: 'CAN',
    },
    {
      ru: 'Сен-Пьер и Микелон',
      ruOf: 'Сен-Пьер и Микелон',
      eng: 'Saint Pierre and Miquelon',
      engOf: 'Saint Pierre and Miquelon',
      code: 'SPM',
    },
    {
      ru: 'Япония',
      ruOf: 'Япония',
      eng: 'Japan',
      engOf: 'Japan',
      code: 'JPN',
    },
    {
      ru: 'Руанда',
      ruOf: 'Республика Руанда',
      eng: 'Rwanda',
      engOf: 'Republic of Rwanda',
      code: 'RWA',
    },
    {
      ru: 'Сент-Винсент и Гренадины',
      ruOf: 'Сент-Винсент и Гренадины',
      eng: 'Saint Vincent and the Grenadines',
      engOf: 'Saint Vincent and the Grenadines',
      code: 'VCT',
    },
    {
      ru: 'Исландия',
      ruOf: 'Исландия',
      eng: 'Iceland',
      engOf: 'Iceland',
      code: 'ISL',
    },
    {
      ru: 'Беларусь',
      ruOf: 'Республика Беларусь',
      eng: 'Belarus',
      engOf: 'Republic of Belarus',
      code: 'BLR',
    },
    {
      ru: 'Гонконг',
      ruOf: 'Hong Kong Специальный административный район Китайской Народной Республики Китая',
      eng: 'Hong Kong',
      engOf:
        "Hong Kong Special Administrative Region of the People's Republic of China",
      code: 'HKG',
    },
    {
      ru: 'Лесото',
      ruOf: 'Королевство Лесото',
      eng: 'Lesotho',
      engOf: 'Kingdom of Lesotho',
      code: 'LSO',
    },
    {
      ru: 'Фиджи',
      ruOf: 'Республика Фиджи',
      eng: 'Fiji',
      engOf: 'Republic of Fiji',
      code: 'FJI',
    },
    {
      ru: 'Австрия',
      ruOf: 'Австрийская Республика',
      eng: 'Austria',
      engOf: 'Republic of Austria',
      code: 'AUT',
    },
    {
      ru: 'Колумбия',
      ruOf: 'Республика Колумбия',
      eng: 'Colombia',
      engOf: 'Republic of Colombia',
      code: 'COL',
    },
    {
      ru: 'Габон',
      ruOf: 'Габона Республика',
      eng: 'Gabon',
      engOf: 'Gabonese Republic',
      code: 'GAB',
    },
    {
      ru: 'Саудовская Аравия',
      ruOf: 'Королевство Саудовская Аравия',
      eng: 'Saudi Arabia',
      engOf: 'Kingdom of Saudi Arabia',
      code: 'SAU',
    },
    {
      ru: 'Южная Георгия и Южные Сандвичевы острова',
      ruOf: 'Южная Георгия и Южные Сандвичевы острова',
      eng: 'South Georgia',
      engOf: 'South Georgia and the South Sandwich Islands',
      code: 'SGS',
    },
    {
      ru: 'Эфиопия',
      ruOf: 'Федеративная Демократическая Республика Эфиопия',
      eng: 'Ethiopia',
      engOf: 'Federal Democratic Republic of Ethiopia',
      code: 'ETH',
    },
    {
      ru: 'Карибские Нидерланды',
      ruOf: 'Бонэйр, Синт-Эстатиус и Саба',
      eng: 'Caribbean Netherlands',
      engOf: 'Bonaire, Sint Eustatius and Saba',
      code: 'BES',
    },
    {
      ru: 'Монако',
      ruOf: 'Княжество Монако',
      eng: 'Monaco',
      engOf: 'Principality of Monaco',
      code: 'MCO',
    },
    {
      ru: 'Северная Корея',
      ruOf: 'Корейская Народно-Демократическая Республика Корея',
      eng: 'North Korea',
      engOf: "Democratic People's Republic of Korea",
      code: 'PRK',
    },
    {
      ru: 'Италия',
      ruOf: 'итальянская Республика',
      eng: 'Italy',
      engOf: 'Italian Republic',
      code: 'ITA',
    },
    {
      ru: 'Намибия',
      ruOf: 'Республика Намибия',
      eng: 'Namibia',
      engOf: 'Republic of Namibia',
      code: 'NAM',
    },
    {
      ru: 'Монголия',
      ruOf: 'Монголия',
      eng: 'Mongolia',
      engOf: 'Mongolia',
      code: 'MNG',
    },
    {
      ru: 'Соломоновы Острова',
      ruOf: 'Соломоновы острова',
      eng: 'Solomon Islands',
      engOf: 'Solomon Islands',
      code: 'SLB',
    },
    {
      ru: 'Йемен',
      ruOf: 'Йеменская Республика',
      eng: 'Yemen',
      engOf: 'Republic of Yemen',
      code: 'YEM',
    },
    {
      ru: 'Румыния',
      ruOf: 'Румыния',
      eng: 'Romania',
      engOf: 'Romania',
      code: 'ROU',
    },
    {
      ru: 'Шпицберген и Ян-Майен',
      ruOf: 'Свальбарда ог Ян-Майен',
      eng: 'Svalbard and Jan Mayen',
      engOf: 'Svalbard og Jan Mayen',
      code: 'SJM',
    },
    {
      ru: 'Франция',
      ruOf: 'Французская Республика',
      eng: 'France',
      engOf: 'French Republic',
      code: 'FRA',
    },
  ];
  let currentItem = -1;
  let flag = 'ru';

  //   Получение геоданных и передача для получения страны
  const getUserGeo = position => {
    const { latitude, longitude } = position.coords;
    displayCountryByGPS(latitude, longitude);
  };

  // Отображение данных о стране на странице
  const showHtml = (data, neighbour = false) => {
    const population = new Intl.NumberFormat(data.altSpellings[0]).format(
      data.population
    );
    const languages = Object.values(data.languages).join(', ');
    const [currencies] = Object.values(data.currencies);

    container.insertAdjacentHTML(
      'beforeend',
      `
      <article class="country ${neighbour ? 'neighbour' : ''}">
          <img class="country__img" src="${data.flags.svg}">
          <div class="country__data">
              <h3 class="country__name">${data.name.common} (${
        data.translations.rus.common
      })</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👨‍👩‍👧‍👦</span>${population}</p>
              <p class="country__row"><span>🗣️</span>${languages}</p>
              <p class="country__row"><span>💰</span>${currencies.name}
              <p class="country__row"><a href="${
                data.maps.googleMaps
              }" style="text-decoration: none;" target="_blank">Посмотреть на карте</a></p>
          </div>
      </article>
  `
    );
  };

  // Отображение ошибок на странице
  const displayError = txt => (
    (container.textContent = ''),
    container.insertAdjacentHTML(
      'afterbegin',
      `<span style="padding: 10px; max-width: 60vw; font-size: 1.8rem; border: 1px solid red; border-radius: 10px; color: red;">${txt}</span>`
    )
  );

  //   Обработка ошибок и установка сообщений к ним
  const errorHandler = err => {
    console.log(err);
    const article = document.querySelector('article');
    const message = {
      'Failed to fetch':
        'Не удалось установить ваше местоположение, для отображения информации используйте форму поиска!',
      'No neighbour': 'Эта страна не граничит с другими!',
      403: 'Доступ к вашему местоположению ограничен! Попробуйте позже, или найдите страну вручную через форму поиска!',
      404: 'Страна не найдена, проверьте правильность введенных данных!',
      500: 'Что-то пошло не так, попробуйте еще раз!',
    };
    const errorMsg = message[err.message];

    if (article) {
      article.insertAdjacentHTML(
        'beforeend',
        `<span style="display: block; padding: 1rem; text-align: center;">${errorMsg}</span>`
      );
    } else displayError(errorMsg);
    console.error(errorMsg);
  };

  //   Проверка ответа сервера
  const checkResponse = res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  };

  //   Вывод на страницу основной сраны и получение данных о граничащих с ней странах
  const displayCountryAndGetNeighbour = data => {
    container.textContent = '';
    const neighbours = data[0].borders;

    showHtml(data[0]);

    if (!data[0].borders) throw new Error('No neighbour');

    neighbours.forEach(getNeighboursData);
  };

  // Получение данных о соседних странах и вывод их на экран
  const getNeighboursData = async countryCode =>
    await fetch(`${URL}${countryCode}`)
      .then(res => checkResponse(res))
      .then(data => showHtml(data[0], true))
      .catch(errorHandler);

  //   Получение данных об основной стране
  const getCountryData = countryCode =>
    fetch(`${URL}${countryCode}`)
      .then(res => checkResponse(res))
      .then(displayCountryAndGetNeighbour)
      .catch(errorHandler);

  //   Получение кода страны на основе переданных координат
  const displayCountryByGPS = (lat, lng) =>
    fetch(
      `https://geocode.xyz/${lat},${lng}?json=1`
    )
      .then(res => checkResponse(res))
      .then(
        data => (
          console.log(`You are in ${data.city}, ${data.country}`),
          countries.find(
            el =>
              el.eng.includes(data.country) || el.engOf.includes(data.country)
          )
        )
      )
      .then(country => getCountryData(country.code))
      .catch(errorHandler);

  //   Сброс данных для слушателя при нажатии кнопок
  const initForm = () => {
    currentItem = -1;
    document.removeEventListener('keydown', formListClickListener);
    formHelper.textContent = '';
  };

  //   Обработчик события при клике на помощника заполнения формы
  const formListClickListener = e => {
    const target = e.currentTarget;
    const element = e.target.closest('.help__item');
    input.value = element.textContent;
    target.removeEventListener('click', formListClickListener);
    target.remove();
    initForm();
  };

  //   ОБработчик события при нажатии кнопок "вниз" "вверх"
  //   для выбора элемента помощника запонения формы
  const formListKeyListener = e => {
    const elements = document.getElementsByClassName('help__item');
    const checkElement = () => {
      e.preventDefault();
      const currentElement = elements.item(currentItem);
      [...elements].forEach(el => (el.style.background = '#fff'));
      currentElement.style.background = 'rgb(245, 245, 245)';
      input.value = currentElement.textContent;
    };

    if (
      e.key === 'ArrowUp' &&
      currentItem > 0 &&
      currentItem <= elements.length
    ) {
      currentItem--;
      checkElement();
    }
    if (
      e.key === 'ArrowDown' &&
      currentItem >= -1 &&
      currentItem < elements.length - 1
    ) {
      currentItem++;
      checkElement();
    }
  };

  //   Обработчик события отправки формы
  const submitHandler = e => {
    e.preventDefault();

    const value = input.value;

    if (!value) return;

    const currentTarget = countries.find(
      el =>
        el[flag].toLowerCase().includes(value.toLowerCase()) ||
        el[`${flag}Of`].toLowerCase().includes(value.toLowerCase())
    );

    initForm();
    getCountryData(currentTarget.code);
  };

  //   Создание элементов списка помошника заполнения формы
  const createHelpItem = country => {
    const element = document.createElement('li');

    element.classList.add('help__item');
    element.textContent = country[flag];

    return element;
  };

  //   Создание помощника заполнения формы
  const createFormList = value => {
    const list = document.createElement('ul');
    list.classList.add('help__list');
    currentItem = -1;

    countries
      .filter(
        country =>
          country[flag].toLowerCase().includes(value.toLowerCase()) ||
          country[`${flag}Of`].toLowerCase().includes(value.toLowerCase())
      )
      .map(country => createHelpItem(country))
      .slice(0, 7)
      .forEach(el => list.append(el));

    list.addEventListener('click', formListClickListener);
    document.addEventListener('keydown', formListKeyListener);

    formHelper.append(list);
  };

  //   Получение координат пользователя
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getUserGeo, () =>
      displayError(
        container,
        'Не удалось установить ваше местоположение, для отображения информации используйте форму поиска!'
      )
    );
  }

  //   Слушательль ввода текста в форму
  input.addEventListener('input', function () {
    formHelper.textContent = '';

    if (!this.value) return;
    if (/[а-я]/i.test(this.value[0])) flag = 'ru';
    if (/[a-z]/i.test(this.value[0])) flag = 'eng';

    createFormList(this.value);
  });

  //   Слушатель отправки формы
  form.addEventListener('submit', submitHandler);
});

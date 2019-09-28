'use strict';

var TITLE = [
  'Уютное гнездышко для молодоженов',
  'Маленькая квартирка рядом с парком',
  'Небольшая лавочка в парке',
  'Императорский дворец в центре Токио',
  'Милейший чердачок',
  'Наркоманский притон',
  'Чёткая хата',
  'Стандартная квартира в центре'
];

var TYPE = ['palace', 'flat', 'house', 'bungalo'];

var TIME = ['12:00', '13:00', '14:00'];

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var DESCRIPTION = [
  'Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.',
  'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'У нас есть всё! Шприцы, интернет, кофе. Для всех кто знает толк в отдыхе. Полицию просим не беспокоить.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.'
];

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

var ROOMS = [1, 2, 3, 100];

function getRandomNumber(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function compareRandom() {
  return Math.random() - 0.5;
}

function getAvatar(number) {
  return 'img/avatars/user' + number + '.png';
}

function getPhoto() {
  return PHOTOS.sort(compareRandom);
};

function getFeatures() {
  FEATURES.sort(compareRandom);
  return FEATURES.slice(0, getRandomNumber(1, FEATURES.length));
}

var offer = [];

for (var i = 0; i < 8; i++) {
  var locatonX = getRandomNumber(0, 1200);
  var locatonY = getRandomNumber(130, 630);
  offer.push({
    author: {
      avatar: getAvatar(i)
    },
    title: TITLE[i],
    address: locatonX + ', ' + locatonY,
    price: getRandomNumber(0, 1000000),
    type: TYPE[getRandomNumber(0, TYPE.length - 1)],
    rooms: ROOMS[getRandomNumber(0, ROOMS.length - 1)],
    guests: getRandomNumber(1, 10),
    checkin: TIME[getRandomNumber(0, TIME.length - 1)],
    checkout: TIME[getRandomNumber(0, TIME.length - 1)],
    features: getFeatures(),
    description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
    photos: getPhoto(),
    location: {
      x: locatonX,
      y: locatonY
    }
  });
}

console.log(offer);

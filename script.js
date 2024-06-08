"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 20;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0;
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Cложные, Интерактивные"
  );

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }
    const checkNumber = function () {
      let n = 0;
      do {
        n = +prompt("Сколько это будет стоить?");
      } while (!isNumber(n));
      return +n;
    };
    sum += checkNumber();
  }
  return sum;
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().toLocaleLowerCase();
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollBackMassage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(screens);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice);
console.log(getRollBackMassage(fullPrice));

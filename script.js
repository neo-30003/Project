"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Cложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", 2000);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", 1000);
let rollback = 20;

let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().toLocaleLowerCase();
};

function getServicePercentPrices() {
  return fullPrice - (fullPrice * rollback) / 100;
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollBackMassage = function () {
  if (fullPrice >= 30000) {
    return "Даем скидку в 10%";
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    return "Даем скидку в 5%";
  } else if (fullPrice < 15000 && fullPrice >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice);
console.log(getRollBackMassage(fullPrice));

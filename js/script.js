"use strict";
const title = document.getElementsByTagName("h1");
const handlerBtn = document.getElementsByClassName("handler_btn");
const screenBtn = document.querySelector(".screen-btn");
const otherItems1 = document.querySelectorAll(".other-items.percent");
const otherItems2 = document.querySelectorAll(".other-items.number");
const rollbackInput = document.querySelector(".rollback input");
const rollbackSpan = document.querySelector(".rollback span");
const totalInput = document.getElementsByClassName("total-input");

let screen = document.querySelectorAll(".screen");
const calculate = handlerBtn[0];
const reset = handlerBtn[1];

Array.from(totalInput).forEach((el) => {
  console.log(el);
});

console.log(title[0]);
console.log(calculate);
console.log(reset);
console.log(screenBtn);
console.log(otherItems1);
console.log(otherItems2);
console.log(rollbackInput);
console.log(rollbackSpan);
console.log(screen);

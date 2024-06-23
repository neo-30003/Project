"use strict";
const books = document.querySelectorAll(".book");
const body = document.body;
const adv = document.querySelector(".adv");

books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[5].after(books[2]);

body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

books[4].children[0].firstElementChild.textContent =
  "Книга 3. this и Прототипы Объектов";

adv.remove();

books[0].children[1].children[9].before(books[0].children[1].children[7]);
books[0].children[1].children[10].before(books[0].children[1].children[2]);
books[0].children[1].children[6].after(books[0].children[1].children[4]);
books[0].children[1].children[5].after(books[0].children[1].children[3]);

books[5].children[1].children[1].after(books[5].children[1].children[9]);
books[5].children[1].children[5].after(books[5].children[1].children[3]);
books[5].children[1].children[8].after(books[5].children[1].children[6]);

const newElement = document.createElement("li");
newElement.textContent = "Глава 8: За пределами ES6";
books[2].children[1].append(newElement);
books[2].children[1].children[9].before(books[2].children[1].lastElementChild);

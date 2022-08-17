"use strict";

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`); // select multiple elements of same class

const openModal = function () {
  modal.classList.remove(`hidden`); //notice that you dont need the . selector to remove a class here **
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

// do something for each of them
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});

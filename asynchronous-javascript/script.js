"use strict";

// correct API URL: https://restcountries.com/v2/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const request = new XMLHttpRequest();
request.open(`GET`, `https://restcountries.com/v2/name/portugal`);
request.send();

request.addEventListener(`load`, function () {
  const data = JSON.parse(this.responseText);
});

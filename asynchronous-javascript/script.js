"use strict";

// correct API URL: https://restcountries.com/v2/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const request = new XMLHttpRequest();
request.open(`GET`, `https://restcountries.com/v2/name/portugal`);
request.send();

request.addEventListener(`load`, function () {
  console.log(this.responseText);
});

const request2 = new XMLHttpRequest();
request2.open(`GET`, `https://restcountries.com/v2/name/canada`);
request2.send();

request2.addEventListener(`load`, function () {
  console.log(this.responseText);
});

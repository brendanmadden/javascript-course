"use strict";

// correct API URL: https://restcountries.com/v2/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener(`load`, function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML(`beforeend`, html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData(`portugal`);
getCountryData(`canada`);
*/

const renderCountry = function (data, className = ``) {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {
  // AJAX Call Country 1
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener(`load`, function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render Country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX Call Country 2
    const request2 = new XMLHttpRequest();
    request2.open(`GET`, `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener(`load`, function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, `neighbour`);
    });
  });
};

// getCountryAndNeighbour(`portugal`);
getCountryAndNeighbour(`canada`);
*/

// Old way of making an AJAX Call
// const request = new XMLHttpRequest();
// request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
// request.send();

// New way with Fetch
// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, `neighbour`));
};

getCountryData(`portugal`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//quick random destructuring practice :)
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [a, b, c] = arr1;

// console.log(a, b, c);

// const obj1 = {
//   key1: 10,
//   key2: 20,
//   key3: 30,
//   key4: 40,
// };

// const { key1, key2, key3, key4 } = obj1;

// console.log(key1, key2, key3, key4);

// const obj = { a: 1, b: 2 };
// const { y, z } = obj;
// // is equivalent to:
// // const a = obj.a;
// // const b = obj.b;
// console.log(y, z);

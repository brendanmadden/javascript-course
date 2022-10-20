"use strict";

// correct API URL: https://restcountries.com/v2/

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  //   countriesContainer.style.opacity = 1;
};

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

const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, `neighbour`))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1

//   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error(`No neighbour found`);

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `Country not found`
//       );
//     })
//     .then((data) => renderCountry(data, `neighbour`))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener(`click`, function () {
//   getCountryData(`portugal`);
// });

// getCountryData(`australia`);

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

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

// geocode API https://geocode.xyz/api

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    });
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Country not found - don't refresh so fast! (${response.status})`
        );

      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(`${data.country}`);
    })
    .catch((err) => console.error(`${err} 💥💥💥`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

/*
console.log(`Test Start`);
setTimeout(() => console.log(`0 Second Timer`), 0);
Promise.resolve(`Resolved promise 1`).then((response) => console.log(response));
Promise.resolve(`Resolved promise 2`).then((response) => {
  for (let i = 0; i < 500; i++) {
    console.log(response);
  }
});
console.log(`Test End`);
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery Draw is Underway!`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You WIN! 💸`);
    } else {
      reject(new Error(`You lost 🥺😢`));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited for two seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 second`));

//Callback Hell
// setTimeout(() => {
//   console.log(`1 Second`);
//   setTimeout(() => {
//     console.log(`2 Seconds`);
//     setTimeout(() => {
//       console.log(`3 Seconds`);
//       setTimeout(() => {
//         console.log(`4 Seconds`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

wait(1)
  .then(() => {
    console.log(`1 second`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`4 seconds`);
  });

Promise.resolve(`abc`).then((x) => console.log(x));
Promise.reject(new Error(`Problem!`)).catch((x) => console.error(x));
*/

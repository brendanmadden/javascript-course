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
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  //   countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
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

/*

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Country not found - don't refresh so fast! (${response.status})`
        );

      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err} 💥💥💥`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener(`click`, whereAmI);
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
const imagesElement = document.querySelector(`.images`);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement(`img`);
    img.src = imgPath;
    console.log(img);

    img.addEventListener(`load`, function () {
      imagesElement.append(img);
      resolve(img);
    });

    img.addEventListener(`error`, function () {
      reject(new Error(`Image not found :(`));
    });
  });
};

let currentImg;

createImage(`img/img-1.jpg`)
  .then((img) => {
    currentImg = img;
    console.log(`Image 1 Loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = `none`;
    return createImage(`img/img-2.jpg`);
  })
  .then((img) => {
    currentImg = img;
    console.log(`Image 2 Loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = `none`;
    return createImage(`img/img-3.jpg`);
  })
  .then((img) => {
    currentImg = img;
    console.log(`Image 3 Loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = `none`;
  })
  .catch((err) => console.error(err));
*/

/*

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.com/v2/name/${country}).then(res => console.log(res));

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();

    // Country Data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem getting country`);
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}.`;
  } catch (err) {
    console.error(`${err} 😢`);
    renderError(`😢 ${err.message}`);

    // Reject promise returned from async function
    // "Re-throwing an error"
    throw err;
  }
};

console.log(`1: Will get location`);
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2.5: ${err.message} 😢😢`))
//   .finally(() => console.log(`3: Finished getting location`));

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    err;
  }
  console.log(`3: Finished getting location`);
})();

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
*/

/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Doing multiple async operations in parellel at the same time
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries(`portugal`, `canada`, `tanzania`);
*/

/*
// Promise.race
(async function () {
  try {
    const response = await Promise.race([
      getJSON(`https://restcountries.com/v2/name/italy`),
      getJSON(`https://restcountries.com/v2/name/egypt`),
      getJSON(`https://restcountries.com/v2/name/mexico`),
    ]);
    console.log(response[0]);
  } catch (err) {
    console.error(`${err.message} oops`);
  }
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(5),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another Success`),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another Success`),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any [ES2021] (Similar to Promise.race but rejected promises are ignored)
Promise.any([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another Success`),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3
const imagesElement = document.querySelector(`.images`);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement(`img`);
    img.src = imgPath;
    console.log(img);

    img.addEventListener(`load`, function () {
      imagesElement.append(img);
      resolve(img);
    });

    img.addEventListener(`error`, function () {
      reject(new Error(`Image not found :(`));
    });
  });
};

const loadNpause = async function () {
  try {
    // Image 1
    let img = await createImage(`img/img-1.jpg`);
    console.log(`Image 1 Loaded`);
    await wait(2);
    img.style.display = `none`;

    // Image 2
    img = await createImage(`img/img-2.jpg`);
    console.log(`Image 2 Loaded`);
    await wait(2);
    img.style.display = `none`;

    // Image 3
    img = await createImage(`img/img-3.jpg`);
    console.log(`Image 3 Loaded`);
    await wait(2);
    img.style.display = `none`;
  } catch (err) {
    console.error(err);
  }
};
// loadNpause();

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(imgArr.map(async (img) => createImage(img)));
    console.log(imgs);
    imgs.forEach((img) => img.classList.add(`parallel`));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

// Could also do it like this (Jonas' solution (I like mine (above) better))
// const loadAll2 = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async (img) => await createImage(img));
//     console.log(imgs);
//     const imgsElArr = await Promise.all(imgs);
//     console.log(imgsElArr);
//     imgsElArr.forEach((img) => img.classList.add(`parallel`));
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadAll2(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const currency = Object.values(data.currencies)[0]; 

    const html = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            } people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('portugal'); */

/* const renderCountry = function (data, className="") {
  const currency = Object.values(data.currencies)[0];
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            } people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render coountry 1
    renderCountry(data);

    //Get neighbour country 2

    const neighbour = data.borders?.[0];

    //AXAJ call for coutnry 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      //render coountry 2
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('india'); */

/* setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
        setTimeout(() => {
          console.log('5 second passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000); */

/* const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send(); */

/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0])
    });
}; */
/* 
const renderCountry = function (data, className = '') {
  if (Array.isArray(data)) data = data[0];
  console.log(data);
  const currency = Object.values(data.currencies)[0];
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            } people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  //countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong!!!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

const getCountryAndNeighbour = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if(!neighbour) throw new Error('No Neighbour found')

      //Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Neighbour country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.error(`${error} 💣💣💣💣`);
      renderError(`Something went wrong 💣💣💣💣 ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryAndNeighbour('australia');
}); */
/* 
const renderCountry = function (data, lat, lng, className = '') {
  if (Array.isArray(data)) data = data[0];

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            } people</p>
            <p class="country__row"><span>Longitude</span>${lat}</p>
            <p class="country__row"><span>Logitude</span>${lng}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=167388031361469149964x28899 `
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Something is wrong with GeoCode ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error('Country not found');

      return response.json();
    })
    .then(data => {
      renderCountry(data[0], lat, lng);
    })
    .catch(error => {
      renderError(`💣💣💣💣💣${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const data = [
  '52.50800',
  '13.38100',
  '19.03700',
  '72.87300',
  '-33.933',
  '18.47400',
];

for (let i = 0; i < 6; i += 2) {
  setTimeout(() => {
    whereAmI(data[i], data[i + 1]);
  }, i * 1000);
} */

/* console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}

  console.log(res);
});

console.log('Test End'); */

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening')
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You LOST your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); */
/* 
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
        setTimeout(() => {
          console.log('5 second passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000); */
/* 
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(response => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(response => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(response => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(response => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(response => {
    console.log('I waited for 5 seconds');
  });

console.log('I waited for -1 seconds'); */

/* Promise.resolve('Instantly resolved').then(x => console.log(x));
Promise.reject(new Error('Instantly rejected')).then(x => console.error(x)); */

/* const getPostion = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPostion().then(response => console.log(response));
console.log('Getting position stated'); */

/* const renderCountry = function (data, lat, lng, className = '') {
  if (Array.isArray(data)) data = data[0];

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            } people</p>
            <p class="country__row"><span>Longitude</span>${lat}</p>
            <p class="country__row"><span>Logitude</span>${lng}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getPostion = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPostion()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=167388031361469149964x28899 `
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Something is wrong with GeoCode ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error('Country not found');

      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch(error => {
      renderError(`💣💣💣💣💣${error} ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI); */
/* 
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');

    img.src = imgPath;

    img.addEventListener('load', function () {
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImage;

createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    imgContainer.append(img);
    console.log('Image 1 loaded');

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';

    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    imgContainer.append(img);
    console.log('Image 2 loaded');

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';

    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImage = img;
    imgContainer.append(img);
    console.log('Image 3 loaded');

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';

    return createImage('img/img-3.jpg');
  })
  .catch(error => console.error(error)); */

const getPostion = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/*    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Something is wrong with GeoCode ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error('Country not found');

      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch(error => {
      renderError(`💣💣💣💣💣${error} ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
 */
/* 
const renderCountry = function (data, lat, lng, className = '') {
  if (Array.isArray(data)) data = data[0];

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            } people</p>
            <p class="country__row"><span>Longitude</span>${lat}</p>
            <p class="country__row"><span>Logitude</span>${lng}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);

  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPostion();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=167388031361469149964x28899 `
    );

    if (!resGeo.ok) throw new Error(`Problem getting location data`);

    const dataGeo = await resGeo.json();

    //COuntry Data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryasdfa}`
    );
    if (!res.ok) throw new Error(`Problem getting country`);

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`💣 ${err.message}`);

    //Reject promise returned for asynce function
    throw err;
  }
};

console.log(`1: Will get location`);

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2:${err.message} 💣`);
  }

  console.log('3: Finished getting location');
})(); */

/* const getJSON = function (url, errorMsg = 'Something went wrong!!!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

(async function () {
  const res = await Promise.any([
    Promise.reject('fail'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
  ]);

  console.log(res);
})(); */

/* (async function () {
  const res = await Promise.race([
    getJSON('https://restcountries.com/v3.1/name/india'),
    getJSON('https://restcountries.com/v3.1/name/pakistan'),
    getJSON('https://restcountries.com/v3.1/name/usa'),
  ]);

  console.log(res[0]);
})(); */

/* const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data);
    console.log(data.map(d => d[0].capital))
  } catch (err) {
    console.log(err);
  }
};

get3Countries('india', 'pakistan', ''); */

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');

    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    imgContainer.append(img);
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    imgContainer.append(img);
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-3.jpg');
    imgContainer.append(img);
    console.log('Image 3 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};

//loadNPause();

//Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

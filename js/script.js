"use strict";
// ============================================================ 29 Практика ч.3 Используем функции =====================================================


let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies have you watched?", '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies have you watched?", '');
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
  for (let i = 1; i <= numberOfFilms; i++) {
    let a = prompt("Ur last film?", '');
    let b = prompt("Ur rating for this?", '');
    if (a != null && b != null && a != '' && b != '' && a.length < 20 && b.length < 20) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error-2');
        i--;
    }
  }
}

rememberMyFilms();

let c = personalMovieDB.count;

function detectPersonalLevel() {
    if (c < 10) {
      console.log('U see few films');
  } else {
      if (c > 10 && c < 30) {
          console.log('U classic');
      } else {
          if (c > 30) {
              console.log('U cinemaman');
          } else {
              console.log('Error');
          }
      }
  }
}

detectPersonalLevel();

// console.log(personalMovieDB);
console.log('Count = ' + personalMovieDB.count);

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

// ============ мой вариант ================
// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   }
// }

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`How ur like genre for N ${i}?`, '');
    personalMovieDB.genres[i-1] = genre;
  }
}

// ============ мой вариант ================
// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i-1] = prompt("How ur like genre for N" + i + "?", '');
//   }
// }

console.log(personalMovieDB.genres);
writeYourGenres();



// ============================================================ 28 Методы и свойства строк =====================================================

// const str = "teSt";
// const arr = [1, 2, 4];

// console.log(arr.length);
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// ============================================================ 27 Еще про функции =====================================================

// function test () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return
//   }
//   console.log('Done!');
// }
// test();

// function doNothing() {};
// console.log(doNothing());

// const usdCurr = 28;
// const eurCurr = 30;
// const discount = 0.9;

// function convert(amount, curr) {
//   console.log('Convert = ' + curr * amount);
//   return curr * amount;
// }

// function promotion(result) {
//   console.log('Promotion = ' + result * discount);
//   return result * discount;
// }

// console.log(promotion(100));
// const res = convert(500, usdCurr);
// promotion(res);

// ============================================================ 24 функции =====================================================

// const logger = function () {
//   console.log("Hello!");
// };

// logger();

// let num = 30;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 20;
//   console.log(num);
// }

// showFirstMessage("Hello world!");
// console.log(num);

// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(4, 3));
// console.log(calc(11, 23));
// console.log(calc(1, 1));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const a = c + b;
// const calc = (a, b) => {a + b};
// const calc = (a, b) => {return a + b};

// ============================================================ 24 Циклы, условия =====================================================

// const numberOfFilms = +prompt("How many movies have you watched?", '1');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let access = 0;

// for (let i = 1; i <= numberOfFilms; i++) {
//     let a = prompt("Ur last film?", '');
//     let b = prompt("Ur rating for this?", '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 20 && b.length < 20) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error-2');
//         i--;
//     }
// }

// console.log(personalMovieDB);
// console.log('Count = ' + personalMovieDB.count);

// let c = personalMovieDB.count;

// if (c < 10) {
//     console.log('U see few films');
// } else {
//     if (c > 10 && c < 30) {
//         console.log('U classic');
//     } else {
//         if (c > 30) {
//             console.log('U cinemaman');
//         } else {
//             console.log('Error');
//         }
//     }
// }

// if (c < 10) {
//     console.log('U see few films');
// }

// if (c > 10 && c < 30) {
//     console.log('U classic');
// }

// if (c > 30) {
//     console.log('U cinemaman');
// }

// if (c < 10 || (c > 10 && c < 30) || c > 30) {
// } else {
//     console.log('Error');
// }

// const a = prompt("Ur last film?", ''),
//       b = prompt("Ur rating for this?", ''),
//       c = prompt("Ur last film?", ''),
//       d = prompt("Ur rating for this?", '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num<55);

// let result = '';
// const length = 7;

// first: for (let i = 1; i < 3; i++) {
//     console.log (`First lvl: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log (`Second lvl: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log (`Third lvl: ${k}`);
//         }
//     }

// }

// console.log (result);

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Im not hungry!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 3;
// const cola = 1;
// console.log(hamburger === 3 && cola === 1 && fries);
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'asdasdadaw');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('We are all full!');
// } else {
//     console.log('We are hungry!');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = null;
// const nuggets = 1;

// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('We are full!');
// } else {
//     console.log('We are hungry!');
// }

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(hamburger === 3 && cola === 2);

// console.log(!0);

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Okay') : console.log('Error');

// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Ok');
//         break;
//     default:
//         console.log('Default');
//         break;
// }

// const numberOfFilms = +prompt("How many movies have you watched?", '');

// // let numberOfFilms = prompt("How many movies have you watched?");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Ur last film?", ''),
//       b = prompt("Ur rating for this?", ''),
//       c = prompt("Ur last film?", ''),
//       d = prompt("Ur rating for this?", '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log (personalMovieDB);

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;
// console.log(++incr);
// console.log(--decr);

// console.log(5%1);

// console.log(2 + 2 * 2 != 8);

// const isChecked = true,
//     isClosed = false;

// console.log(isChecked || isClosed);

// const category = 'toys';
// console.log(`https://someur.com/${category}/5`);

// const user = "Ivan";
// alert(`Hi, ${user}`);

// alert('hello');

// const answer = +prompt("How are u old?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('How ur name?', '');
// answers[1] = prompt('How ur second name?', '');
// answers[2] = prompt('How ur old?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// document.write(answers);

// const result = confirm("Are u here?");
// console.log(result);

// let number=4;
// const persone = "Alex";

// const bool = false;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// // console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[2]);

"use strict";

// ============================================================ 37 Практика, ч. 4 используем объекты =====================================================


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             } 
            
//             // Альтернативный вариант из урока
            
//             // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             // if (genres === '' || genres == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres = genres.split(', ');
//             //     personalMovieDB.genres.sort();
//             // } 
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };



// ============================================================ 36 основы ООП, прототипно-ориентированное программирование =====================================================

// let str = " some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier);


// const john = {
//     health: 200
// };

// john.__proto__ = soldier; // old variant

// Object.setPrototypeOf(john, soldier);

// john.sayHello();




// ============================================================ 35 Передача по ссылке или по значениею, Spread оператор ЕС6-9 =====================================================

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает ссылку, а не значение
// copy.a = 10; // здесь получается передача значения по ссылке

// console.log(obj);
// console.log(copy);

// const newNumbers = {...numbers}; // метод без цикла
// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);


// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[2] = 'test';

// console.log(oldArray);
// console.log(newArray);



// const video = ['youtube', 'viemo', 'rutube'],
//       blogs = ['wp', 'lj', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook', 'ok'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);



// const array = ["a", "b", "c"];

// const newArray2 = [...array];

// console.log(newArray2);




// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(newObj);

// ============================================================ 33 Масситвы и псевдомассивы =====================================================

// const arr = [1, 22, 13, 26, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inner array ${arr}`);
// });

// const str = prompt ("","");

// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join('; '));

// arr.pop();
// console.log(arr);

// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }




// ============================================================ 32 Объекты =====================================================

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("Test");
//   }
// }

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border, bg);

// console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;


// for (let key in options) {
//   if (typeof(options[key]) == 'object') {
//     for (let i in options[key]) {
//       console.log(`Options ${i}: ${options[key][i]}`);
//       counter++;
//     }
//   }
//   else {
//     console.log(`Options ${key}: ${options[key]}`);
//     counter++;
//   }

// } 

// for (let key in options) {
//   if (typeof(options[key]) == 'object') {
//     counter++;
//   }

// } 

// console.log(counter);

// console.log(Object.keys(options.colors));
// console.log(Object.keys(options));
// console.log(Object.keys(options).length);


// ============================================================ 31 Callback функция =====================================================

// function first() {
//   // Do something
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }
// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`I learn: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('I complete this..');
// }

// learnJS('JS', done);

// ============================================================ 29 Практика ч.3 Используем функции =====================================================


// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("How many movies have you watched?", '');
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("How many movies have you watched?", '');
//   }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//   for (let i = 1; i <= numberOfFilms; i++) {
//     let a = prompt("Ur last film?", '').trim();
//     let b = prompt("Ur rating for this?", '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 20 && b.length < 20) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error-2');
//         i--;
//     }
//   }
// }

// rememberMyFilms();

// let c = personalMovieDB.count;

// function detectPersonalLevel() {
//     if (c < 10) {
//       console.log('U see few films');
//   } else {
//       if (c > 10 && c < 30) {
//           console.log('U classic');
//       } else {
//           if (c > 30) {
//               console.log('U cinemaman');
//           } else {
//               console.log('Error');
//           }
//       }
//   }
// }

// detectPersonalLevel();

// // console.log(personalMovieDB);
// console.log('Count = ' + personalMovieDB.count);

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// // ============ мой вариант ================
// // function showMyDB() {
// //   if (personalMovieDB.privat == false) {
// //     console.log(personalMovieDB);
// //   }
// // }

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt(`How ur like genre for N ${i}?`, '');
//     personalMovieDB.genres[i-1] = genre;
//   }
// }

// ============ мой вариант ================
// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i-1] = prompt("How ur like genre for N" + i + "?", '');
//   }
// }

// console.log(personalMovieDB.genres);
// writeYourGenres();



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

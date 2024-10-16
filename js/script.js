"use strict"

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num<55);

let result = '';
const length = 7;

first: for (let i = 1; i < 3; i++) {
    console.log (`First lvl: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log (`Second lvl: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log (`Third lvl: ${k}`);
        }
    }

}

console.log (result);


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

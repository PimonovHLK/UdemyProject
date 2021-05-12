"use strict";

// динамическа типизация
// 1)
console.log(String(null));
console.log(String(4));
// 2)
console.log(typeof(null + ''));
const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontsize = 26 + 'px';

// 3) to Number

console.log(typeof(+'5'));
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// to boolean

// 0, '', null, undefined, NaN;

let switcher = null;
switcher = 1;
if (switcher) {
    console.log('Working....');
}
// 2 способ преобразования

console.log(typeof(Boolean('4')));
console.log(typeof(!!"4444"));
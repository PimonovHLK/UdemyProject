"use strict";
let num = 15;

function showFirstMessage(text) {
    console.log(text);    
}

showFirstMessage("Hello world");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => {
  console.log('1');
  return a + b;  
};
console.log(calc(5, 5));
"use strict";

const arr = [2, 3, 48, 5, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}
'use strict'

/// filter

// const names = ['ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map 

// let answers = ['Ivan', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// every/some

// const some = [4, 2, 1];
// // console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 5, 4, 6];
// const res = arr.reduce((sum, curren) => sum + curren, 3);
// console.log(res);


// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, curren) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);
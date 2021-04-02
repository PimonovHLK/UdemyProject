"use strict";
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
    
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
// delete(options.name);
// let counter = 0;

// for (let key in options){
//     if(typeof(options[key]) === 'object') {
//         for(let i in options[key]){
//             console.log(`Свойство ${i} значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} значение ${options[key]}`);
//         counter++;    
//     }        
// }

console.log(Object.keys(options).length);
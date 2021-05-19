"use strict";
// Lesson 29 Действия с элементами на странице

const box = document.getElementById('box'),
btns = document.getElementsByTagName('button'),
circles = document.getElementsByClassName('circle'),
wrapper = document.querySelector('.wrapper'),
hearts = wrapper.querySelectorAll('.heart'),
oneHeart = wrapper.querySelector('div');


box.style.backgroundColor  = 'blue';
box.style.width = '500px';

box.style.cssText = 'backround-color; blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].after(div);
// hearts[0].before(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML ="<h1>Hello world</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Alyarm</h2>')
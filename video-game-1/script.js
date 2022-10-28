"use strict";

// WINNING CORRECT TITLE
console.log(window.getComputedStyle(document.querySelector('.game__score'), '::after').getPropertyValue('content'));
// SET THE WINNING CORRECT TO VISIBLE
const element = document.querySelector('.game__score');
element.style.setProperty('--on', '1');

// TITLE TOO HIGH
console.log(window.getComputedStyle(document.querySelector('.game__numberGuessLabel'), '::after').getPropertyValue('content'));
const element1 = document.querySelector('.game__numberGuessLabel');
element1.style.setProperty('--off', '1');
// TITLE TOO LOW
console.log(window.getComputedStyle(document.querySelector('.game__numberGuessLabel'), '::before').getPropertyValue('content'));
let obj = (window.getComputedStyle(document.querySelector('.game__numberGuessLabel'), '::before'));
const element2 = document.querySelector('.game__numberGuessLabel');
element2.style.setProperty('--on', '1');

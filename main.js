'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const numberInput = document.querySelector('.number');
const tryButton = document.querySelector('.submit-button');
const clueInput = document.querySelector('.clue-text');
const attempsInput = document.querySelector('.attemps-number');

let attemps = 0;

function tryLuck() {
    attemps = parseInt(attemps) + 1;
    attempsInput.value = `Número de intentos: ${attemps}`;

    if (parseInt(numberInput.value) === randomNumber) {
        clueInput.value = '¡¡¡Has ganado, campeona!!!';
    }
    if (numberInput.value < randomNumber) {
        clueInput.value = 'El número es demasiado bajo';
    }
    if (numberInput.value > randomNumber) {
        clueInput.value = 'El número es demasiado alto';
    }
    
}


tryButton.addEventListener('click', tryLuck);

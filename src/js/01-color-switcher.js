'use strict';

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let changeColors = null;
buttonStop.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
  changeColors = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
});

buttonStop.addEventListener('click', () => {
  clearInterval(changeColors);
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', '');
});

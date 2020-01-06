import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) { //creating a field with colors
  return colors
    .map(
      color =>
        `<span class="color ${color} ${
          isDark(color) ? 'dark' : ''
        }" style="background: ${color};">${color}</span>`
    )
    .join('');
}

//webkit prefix is because it is not funished API yet.
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if their browser supports this
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech reco. ');
    return;
  }
  // it does work
  console.log('Starting...');
  // make a new speech reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true; //should it continue recognition or stop it
  recognition.interimResults = true; // give the results as you are speaking rather than waiting until you are done speaking
  recognition.onresult = handleResult; //adding the EventListener
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);

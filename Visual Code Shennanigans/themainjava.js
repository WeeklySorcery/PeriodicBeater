window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 7,
  hard: 1
};

// To change level
const currentLevel = levels.medium;

let time = 8;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hydrogen h',
  'helium he',
  'lithium li',
  'beryllium be',
  'boron b',
  'carbon c',
  'nitrogen n',
  'oxygen o',
  'fluorine f',
  'neon ne',
  'sodium na',
  'magnesium mg',
  'aluminum al',
  'silicon si',
  'phosphorus p',
  'sulfur s',
  'chlorine cl',
  'argon ar',
  'potassium k',
  'calcium ca',
  'scandium sc',
  'titanium ti',
  'vanadium v',
  'chromium cr',
  'manganese mn',
  'iron fe',
  'cobalt co',
  'nickel ni',
  'copper cu',
  'zinc zn',
  'gallium ga',
  'germanium ge',
  'arsenic as',
  'selenium se',
  'bromine br',
  'krypton kr',
  'rubidium rb',
  'strontium sr',
  'yttrium y',
  'zirconium zr',
  'niobium nb',
  'molybdenum mo',
  'technetium tc',
  'ruthenium ru',
  'rhodium rh',
  'palladium pd',
  'silver ag',
  'cadmium cd',
  'indium in',
  'tin sn',
  'antimony sb',
  'tellurium te',
  'iodine i',
  'xenon xe',
  'cesium cs',
  'barium ba',
  'hafnium hf',
  'tantalum ta',
  'tungsten w',
  'rhenium re',
  'osmium os',
  'iridium ir',
  'platinum pt',
  'gold au',
  'mercury hg',
  'thallium tl',
  'lead pb',
  'bismuth bi',
  'polonium po',
  'astatine at',
  'radon rn',
  'francium fr',
  'radium ra',
  'rutherfordium rf',
  'dubnium db',
  'seaborgium sg',
  'bohrium bh',
  'hassium hs',
  'meitnerium mt',
  'darmstadtium ds',
  'roentgenium rg',
  'copernicium cn',
  'nihonium nh',
  'flerovium fl',
  'moscovium mc',
  'livermorium lv',
  'tennessine ts',
  'oganesson og',
  'lanthanum la',
  'cerium ce',
  'praseodymium pr',
  'neodymium nd',
  'promethium pm',
  'samarium sm',
  'europium eu',
  'gadolinium gd',
  'terbium tb',
  'dysprosium dy',
  'holmium ho',
  'erbium er',
  'thulium tm',
  'ytterbium yb',
  'lutetium lu',
  'actinium ac',
  'thorium th',
  'protactinium pa',
  'uranium u',
  'neptunium np',
  'plutonium pu',
  'americium am',
  'curium cm',
  'berkelium bk',
  'californium cf',
  'einsteinium es',
  'fermium fm',
  'mendelevium md',
  'nobelium no',
  'lawrencium lr',
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) { 
    // Game is over
    isPlaying = false;
    
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!'; 
    score = -1;
  }
}

// Sound Board

let song;

function preload() {
song =loadSound("sadroamnce.mp3")
}

if (matchWords()) {
  isPlaying = true === function preload() {
    song =loadSound("sadroamnce.mp3") }} ;

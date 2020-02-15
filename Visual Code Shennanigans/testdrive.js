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
  'H',
  'He',
  'Li',
  'Be',
  'B',
  'C',
  'N',
  'O',
  'F',
  'Ne',
  'Na',
  'Mg',
  'Al',
  'Si',
  'P',
  'S',
  'Cl',
  'Ar',
  'K',
  'Ca',
  'Sc',
  'Ti',
  'V',
  'Cr',
  'Mn',
  'Fe',
  'Co',
  'Ni',
  'Cu',
  'Zn',
  'Ga',
  'Ge',
  'As',
  'Se',
  'Br',
  'Kr',
  'Rb',
  'Sr',
  'Y',
  'Zr',
  'Nb',
  'Mo',
  'Tc',
  'Ru',
  'Rh',
  'Pd',
  'Ag',
  'Cd',
  'In',
  'Sn',
  'Sb',
  'Te',
  'I',
  'Xe',
  'Cs',
  'Ba',
  'Hf',
  'Ta',
  'W',
  'Re',
  'Os',
  'Ir',
  'Pt',
  'Au',
  'Hg',
  'Tl',
  'Pb',
  'Bi',
  'Po',
  'At',
  'Rn',
  'Fr',
  'Ra',
  'Rf',
  'Db',
  'Sg',
  'Bh',
  'Hs',
  'Mt',
  'Ds',
  'Rg',
  'Cn',
  'Nh',
  'Fl',
  'Mc',
  'Lv',
  'Ts',
  'Og',
  'La',
  'Ce',
  'Pr',
  'Nd',
  'Pm',
  'Sm',
  'Eu',
  'Gd',
  'Tb',
  'Dy',
  'Ho',
  'Er',
  'Tm',
  'Yb',
  'Lu',
  'Ac',
  'Th',
  'Pa',
  'U',
  'Np',
  'Pu',
  'Am',
  'Cm',
  'Bk',
  'Cf',
  'Es',
  'Fm',
  'Md',
  'No',
  'Lr',
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
  if (wordInput.value === "helium" && currentWord.innerHTML === 'He' 
  ||wordInput.value === "hydrogen" && currentWord.innerHTML === 'H'
  ||wordInput.value === "lithium" && currentWord.innerHTML === 'Li'
  ||wordInput.value === "beryllium" && currentWord.innerHTML === 'Be'
  ||wordInput.value === "boron" && currentWord.innerHTML === 'B'
  ||wordInput.value === "carbon" && currentWord.innerHTML === 'C'
  ||wordInput.value === "nitrogen" && currentWord.innerHTML === 'N'
  ||wordInput.value === "oxygen" && currentWord.innerHTML === 'O'
  ||wordInput.value === "fluorine" && currentWord.innerHTML === 'F'
  ||wordInput.value === "neon" && currentWord.innerHTML === 'Ne'
  ||wordInput.value === "sodium" && currentWord.innerHTML === 'Na'
  ||wordInput.value === "magnesium" && currentWord.innerHTML === 'Mg'
  ||wordInput.value === "aluminum" && currentWord.innerHTML === 'Al'
  ||wordInput.value === "silicon" && currentWord.innerHTML === 'Si'
  ||wordInput.value === "phosphorus" && currentWord.innerHTML === 'P'
  ||wordInput.value === "sulfur" && currentWord.innerHTML === 'S'
  ||wordInput.value === "chlorine" && currentWord.innerHTML === 'Cl'
  ||wordInput.value === "argon" && currentWord.innerHTML === 'Ar'
  ||wordInput.value === "potassium" && currentWord.innerHTML === 'K'
  ||wordInput.value === "calcium" && currentWord.innerHTML === 'Ca'
  ||wordInput.value === "scandium" && currentWord.innerHTML === 'Sc'
  ||wordInput.value === "titanium" && currentWord.innerHTML === 'Ti'
  ||wordInput.value === "vanadium" && currentWord.innerHTML === 'V'
  ||wordInput.value === "chromium" && currentWord.innerHTML === 'Cr'
  ||wordInput.value === "manganese" && currentWord.innerHTML === 'Mn'
  ||wordInput.value === "iron" && currentWord.innerHTML === 'Fe'
  ||wordInput.value === "cobalt" && currentWord.innerHTML === 'Co'
  ||wordInput.value === "nickel" && currentWord.innerHTML === 'Ni'
  ||wordInput.value === "copper" && currentWord.innerHTML === 'Cu'
  ||wordInput.value === "zinc" && currentWord.innerHTML === 'Zn'
  ||wordInput.value === "gallium" && currentWord.innerHTML === 'Ga'
  ||wordInput.value === "germanium" && currentWord.innerHTML === 'Ge'
  ||wordInput.value === "arsenic" && currentWord.innerHTML === 'As'
  ||wordInput.value === "selenium" && currentWord.innerHTML === 'Se'
  ||wordInput.value === "bromine" && currentWord.innerHTML === 'Br'
  ||wordInput.value === "krypton" && currentWord.innerHTML === 'Kr'
  ||wordInput.value === "rubidium" && currentWord.innerHTML === 'Rb'
  ||wordInput.value === "strontium" && currentWord.innerHTML === 'Sr'
  ||wordInput.value === "yttrium" && currentWord.innerHTML === 'Y'
  ||wordInput.value === "zirconium" && currentWord.innerHTML === 'Zr'
  ||wordInput.value === "niobium" && currentWord.innerHTML === 'Nb'
  ||wordInput.value === "molybdenum" && currentWord.innerHTML === 'Mo'
  ||wordInput.value === "technetium" && currentWord.innerHTML === 'Tc'
  ||wordInput.value === "ruthenium" && currentWord.innerHTML === 'Ru'
  ||wordInput.value === "rhodium" && currentWord.innerHTML === 'Rh'
  ||wordInput.value === "palladium" && currentWord.innerHTML === 'Pd'
  ||wordInput.value === "silver" && currentWord.innerHTML === 'Ag'
  ||wordInput.value === "cadmium" && currentWord.innerHTML === 'Cd'
  ||wordInput.value === "indium" && currentWord.innerHTML === 'In'
  ||wordInput.value === "tin" && currentWord.innerHTML === 'Sn'
  ||wordInput.value === "antimony" && currentWord.innerHTML === 'Sb'
  ||wordInput.value === "tellurium" && currentWord.innerHTML === 'Te'
  ||wordInput.value === "iodine" && currentWord.innerHTML === 'I'
  ||wordInput.value === "xenon" && currentWord.innerHTML === 'Xe'
  ||wordInput.value === "cesium" && currentWord.innerHTML === 'Cs'
  ||wordInput.value === "barium" && currentWord.innerHTML === 'Ba'
  ||wordInput.value === "hafnium" && currentWord.innerHTML === 'Hf'
  ||wordInput.value === "tantalum" && currentWord.innerHTML === 'Ta'
  ||wordInput.value === "tungsten" && currentWord.innerHTML === 'W'
  ||wordInput.value === "rhenium" && currentWord.innerHTML === 'Re'
  ||wordInput.value === "osmium" && currentWord.innerHTML === 'Os'
  ||wordInput.value === "iridium" && currentWord.innerHTML === 'Ir'
  ||wordInput.value === "platinum" && currentWord.innerHTML === 'Pt'
  ||wordInput.value === "gold" && currentWord.innerHTML === 'Au'
  ||wordInput.value === "mercury" && currentWord.innerHTML === 'Hg'
  ||wordInput.value === "thallium" && currentWord.innerHTML === 'Tl'
  ||wordInput.value === "lead" && currentWord.innerHTML === 'Pb'
  ||wordInput.value === "bismuth" && currentWord.innerHTML === 'Bi'
  ||wordInput.value === "polonium" && currentWord.innerHTML === 'Po'
  ||wordInput.value === "astatine" && currentWord.innerHTML === 'At'
  ||wordInput.value === "radon" && currentWord.innerHTML === 'Rn'
  ||wordInput.value === "francium" && currentWord.innerHTML === 'Fr'
  ||wordInput.value === "radium" && currentWord.innerHTML === 'Ra'
  ||wordInput.value === "rutherfordium" && currentWord.innerHTML === 'Rf'
  ||wordInput.value === "dubnium" && currentWord.innerHTML === 'Db'
  ||wordInput.value === "seaborgium" && currentWord.innerHTML === 'Sg'
  ||wordInput.value === "bohrium" && currentWord.innerHTML === 'Bh'
  ||wordInput.value === "hassium" && currentWord.innerHTML === 'Hs'
  ||wordInput.value === "meitnerium" && currentWord.innerHTML === 'Mt'
  ||wordInput.value === "darmstadtium" && currentWord.innerHTML === 'Ds'
  ||wordInput.value === "roentgenium" && currentWord.innerHTML === 'Rg'
  ||wordInput.value === "copernicium" && currentWord.innerHTML === 'Cn'
  ||wordInput.value === "nihonium" && currentWord.innerHTML === 'Nh'
  ||wordInput.value === "flerovium" && currentWord.innerHTML === 'Fl'
  ||wordInput.value === "moscovium" && currentWord.innerHTML === 'Mc'
  ||wordInput.value === "livermorium" && currentWord.innerHTML === 'Lv'
  ||wordInput.value === "tennessine" && currentWord.innerHTML === 'Ts'
  ||wordInput.value === "oganesson" && currentWord.innerHTML === 'Og'
  ||wordInput.value === "lanthanum" && currentWord.innerHTML === 'La'
  ||wordInput.value === "cerium" && currentWord.innerHTML === 'Ce'
  ||wordInput.value === "praseodymium" && currentWord.innerHTML === 'Pr'
  ||wordInput.value === "neodymium" && currentWord.innerHTML === 'Nd'
  ||wordInput.value === "promethium" && currentWord.innerHTML === 'Pm'
  ||wordInput.value === "samarium" && currentWord.innerHTML === 'Sm'
  ||wordInput.value === "europium" && currentWord.innerHTML === 'Eu'
  ||wordInput.value === "gadolinium" && currentWord.innerHTML === 'Gd'
  ||wordInput.value === "terbium" && currentWord.innerHTML === 'Tb'
  ||wordInput.value === "dysprosium" && currentWord.innerHTML === 'Dy'
  ||wordInput.value === "holmium" && currentWord.innerHTML === 'Ho'
  ||wordInput.value === "erbium" && currentWord.innerHTML === 'Er'
  ||wordInput.value === "thulium" && currentWord.innerHTML === 'Tm'
  ||wordInput.value === "ytterbium" && currentWord.innerHTML === 'Yb'
  ||wordInput.value === "lutetium" && currentWord.innerHTML === 'Lu'
  ||wordInput.value === "actinium" && currentWord.innerHTML === 'Ac'
  ||wordInput.value === "thorium" && currentWord.innerHTML === 'Th'
  ||wordInput.value === "protactinium" && currentWord.innerHTML === 'Pa'
  ||wordInput.value === "uranium" && currentWord.innerHTML === 'U'
  ||wordInput.value === "neptunium" && currentWord.innerHTML === 'Np'
  ||wordInput.value === "plutonium" && currentWord.innerHTML === 'Pu'
  ||wordInput.value === "americium" && currentWord.innerHTML === 'Am'
  ||wordInput.value === "curium" && currentWord.innerHTML === 'Cm'
  ||wordInput.value === "berkelium" && currentWord.innerHTML === 'Bk'
  ||wordInput.value === "californium" && currentWord.innerHTML === 'Cf'
  ||wordInput.value === "einsteinium" && currentWord.innerHTML === 'Es'
  ||wordInput.value === "fermium" && currentWord.innerHTML === 'Fm'
  ||wordInput.value === "mendelevium" && currentWord.innerHTML === 'Md'
  ||wordInput.value === "nobelium" && currentWord.innerHTML === 'No'
  ||wordInput.value === "lawrencium" && currentWord.innerHTML === 'Lr'

  ) 
   {
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




// This Part is Experimental
        // Soundboard

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
  
} 

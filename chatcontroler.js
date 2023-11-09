// Create an object to store key states
const keyState = {};

// Function to play a key
function playKey(key) {
  jouer(key);
  setTimeout(() => {
    depresser(key);
    console.log('hey');
  }, 300);

  const son = document.getElementById("song-" + key);
  if (son) son.attente = false;
}

// Function to release a key
function releaseKey(note) {
  depresser(note);
  const son = document.getElementById("song-" + note);
  if (son) son.attente = false;
}

// Event listener for key press using keydown
document.addEventListener('keydown', e => {
  const key = e.key.toUpperCase();
  const index = touche.indexOf(key) + 1 || uppertouche.indexOf(key) + 1;
  if (index && !keyState[key]) {
    keyState[key] = true;
    console.log(key, uppertouche.indexOf(key));
    jouer(key);
  }
});

// Event listener for key release using keyup
document.addEventListener('keyup', e => {
  const key = e.key.toUpperCase();
  const index = touche.indexOf(key) + 1 || uppertouche.indexOf(key) + 1;
  if (index) {
    delete keyState[key];
    console.log("depresser", key);
    releaseKey(key);
  }
});

// Function to toggle key class
function toggleKeyClass(key, addClass, removeClass) {
  const element = document.getElementById(key);
  if (element && element.className.indexOf(removeClass) !== -1) {
    element.className = element.className.replace(removeClass, addClass);
  }
}

// Function to press a key
function pressKey(key) {
  toggleKeyClass(key, "touched", "untouched");
}

// Function to depress a key
function depressKey(key) {
  toggleKeyClass(key, "untouched", "touched");
}
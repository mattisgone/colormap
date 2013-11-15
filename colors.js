// Colors
var colors = [
  "#F11E65", "#E0F11E", "#1EF18B",
  "#1EF1B8", "#F15A1E", "#461EF1",
  "#1E9AF1", "#8B1EF1", "#1ED1F1"
];

// Initialize last color
lastColor = random();

/**
 * Return a random color
 * @return character specifying a color in hexdecimal
 */
function random () {
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Get the next color, setting it as the new last color
 * @return string specifying the next color
 */
function getNext () {
  var i = 0;
  // Sample until we get a new color... or i gets too large
  do {
    color = random();
  } while (lastColor === color && ++i < 100);
  // Store sampled color
  lastColor = color;
  // Return
  return lastColor;
}

/**
 * Return the last color
 * @return string specifying the last color that was returned
 */
function last () {
  return lastColor;
}

/*
 * next : get next color
 * random : get a *random*
 * last : get the last color
 */
exports.next = getNext;
exports.random = random;
exports.last = last;

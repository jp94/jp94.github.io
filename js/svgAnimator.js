
/* Fallback image */
// Pseudo-random background color (of my choice ofc :P)
var MIN_RANGE = 30, MAX_RANGE = 100;
var colors = [MIN_RANGE, MAX_RANGE, getRandomIntRange(MIN_RANGE, MAX_RANGE)];
var temp;

// Shuffle RGB values
for (var i = 0; i < colors.length; i++) {
    var index = getRandomIntRange(0, colors.length - 1);
    temp = colors[index];
    colors[index] = colors[i];
    colors[i] = temp;
}
// Set image
document.body.style.background = "rgb(" + colors[0] + ", " + colors[1] + "," + colors[2] + ")";

/* SVG Text animation */
// Settings
var transitionType = ["async", "oneByOne", "delayed"];

new Vivus('svg', {
    type: transitionType[getRandomIntRange(0, transitionType.length - 1)],
    duration: 150
});

// Helper method for getting a random integer in a range (inclusive)
function getRandomIntRange(min, max) {
    return parseInt((Math.random() * (max - min + 1)) + min);
}

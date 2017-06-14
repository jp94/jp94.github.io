var DEBUG = false;

/* Fallback background */
var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', 
                        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', 
                        '#ff5722', '#795548', '#607d8b'];

// Set background
document.body.style.background = colors[getRandomIntRange(0, colors.length)];

/* SVG Text animation */
// Settings
var transitionType = ["async", "oneByOne", "delayed"];

new Vivus('svg', {
    type: transitionType[getRandomIntRange(0, transitionType.length - 1)],
    duration: 100
});

/* Misc */
function getRandomIntRange(min, max) {
    if (typeof(min) !== 'number' || typeof(max) !== 'number') 
        throw new TypeError('min and max must be a number.');

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Test (DEBUG = true;) */
if (DEBUG) {
    var count = 0;
    setInterval(function() {
        changeColor(count++ % colors.length);
    }, 500);
}

async function changeColor(id) {
    if (typeof(id) !== 'number')
        throw new TypeError('id and millis must be a number.')

    id = count % colors.length;
    document.body.style.background = colors[id];
}
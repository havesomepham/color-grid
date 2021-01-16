const vintage = [[26, 46, 53], [42, 157, 143], [233, 196, 106], [244, 162, 97], [231, 111, 81]];
const solarizedDark = [[133, 153, 0], [181, 137, 0], [203, 75, 22], [220, 50, 47], [211, 54, 130], [108, 113, 196], [38, 139, 210], [42, 161, 152]]
var palette;
var P_LEN;
var options = [];
var letters = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  frameRate(2);

  palette = solarizedDark;
  P_LEN = palette.length;
  
  for (var i = 0; i < P_LEN; i++) { // loads array "options" with numbers from 0 to P_LEN-1
    options.push(i);
  }

  for (var i = 0x0041; i <= 0x005A; i++) { // loads array "letters" with letters A-Z
    letters.push(String.fromCharCode(i));
  }
}

function draw() {
  for (var i = 0; i < P_LEN; i++) {
    options = shuffle(options);
    for (var j = 0; j < P_LEN; j++) {
      //let c = palette[j]; for non-random placement of colors
      let c = palette[options[j]];
      fill(c);

      let x = ((i + j) * width / P_LEN) % width; // evenly spaced!
      let y = i * height / P_LEN;
      rect(x, y, width / P_LEN, height / P_LEN);

      fill(255);
      textSize(36);
      text(letters[options[j]], x + 0.55 * width / P_LEN, y + 0.45 * width / P_LEN) // change params to your liking
    }
  }
}

function shuffle(array) { // shuffles values in array "options"
  var m = array.length, t, i;

  while (m) {
    i = floor(random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
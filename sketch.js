const txt = [
  "وَعَاشِرُوهُنَّ", "بِالْمَعْرُوفِ",
  "وَلَهُنَّ", "مِثْلُ", "الَّذِي", "عَلَيْهِنَّ", "بِالْمَعْرُوفِ",
  "يَا", "أَيُّهَا", "النَّاسُ", "اتَّقُوا", "رَبَّكُمُ", "الَّذِي", "خَلَقَكُم", "مِّن", "نَّفْسٍ", "وَاحِدَةٍ"
];

let sz = 20;
let flashlightRadius = 50; // adjust size of light

function setup() {
  createCanvas(400, 400);
  textSize(sz);
  textAlign(LEFT, TOP);
}

function draw() {
  background(0);

  for (let i = 0; i < floor(height / sz); i++) {
    for (let j = 0; j < floor(width / sz); j++) {
      let x = j * sz;
      let y = i * sz;
      let tIndex = (i + j) % txt.length;

      // distance from mouse to this text cell
      let d = dist(mouseX, mouseY, x, y);

      // brightness fades as you move away from mouse
      let brightness = map(d, 0, flashlightRadius, 255, 0);
      brightness = constrain(brightness, 0, 255);

      fill(brightness);
      text(txt[tIndex], x, y);
    }
  }
}



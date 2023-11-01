let mImg;
let MONDRIAN_BLUE = color(20, 20, 220);

function preload() {
  mImg = loadImage("Mondriaan.jpeg"); // Replace with the path to your image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height);
}

function draw() {
  background("white");
  noStroke();

  mImg.loadPixels();

  let spacing = 32;

  for (let y = 0; y < mImg.height; y += spacing) {
    for (let x = 0; x < mImg.width; x += spacing) {
      let pixelIndex = 4 * (y * mImg.width + x);
      let redVal = mImg.pixels[pixelIndex + 0];
      let greenVal = mImg.pixels[pixelIndex + 1];
      let blueVal = mImg.pixels[pixelIndex + 2];

      if (redVal > 150) {
        mImg.pixels[pixelIndex] = 255; // Set red component to max
        mImg.pixels[pixelIndex + 1] = 0; // Green component remains 0
        mImg.pixels[pixelIndex + 2] = 255; // Set blue component to max
      }
      if (greenVal < 100) {
        mImg.pixels[pixelIndex + 1] = 128; // Set green component to a different value
      }
      if (blueVal < 100) {
        mImg.pixels[pixelIndex + 2] = 128; // Set blue component to a different value
      }
    }
  }

  

  mImg.updatePixels();
  image(mImg, (width - mImg.width) / 2, 0);
}
let originalImg;
let slider;
let randomRGB1;
let randomRGB2;
let randomRGB3;
let randomRGB4;



function preload() {
  originalImg = loadImage("Mondriaan.jpeg"); // Replace with the path to your image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  originalImg.resize(0, height);
  frameRate(1);

  cp = createColorPicker("#FF0000")
  cp.position(100,100)

  randomRGB1 = [random(0, 255), random(0, 255), random(0, 255)]
  randomRGB2 = [random(0, 255), random(0, 255), random(0, 255)]
  randomRGB3 = [random(0, 255), random(0, 255), random(0, 255)]
  randomRGB4 = [random(0, 255), random(0, 255), random(0, 255)]
}

function isSimilar(redA, greenA, blueA, redB, greenB, blueB){
  let SIMILARITY_VALUE = 50;
  if ( abs(redA - redB) < SIMILARITY_VALUE && abs(blueA - blueB) < SIMILARITY_VALUE && abs(greenA - greenB) < SIMILARITY_VALUE) {
    return true
  }
  return false
}


function draw() {
  background("white");
  noStroke();
  mImg = originalImg.get()
  mImg.loadPixels();
  
  let spacing = 1

  for (let y = 0; y < mImg.height; y += spacing) {
    for (let x = 0; x < mImg.width; x += spacing) {
      let pixelIndex = 4 * (y * mImg.width + x);
      let redVal = mImg.pixels[pixelIndex + 0];
      let greenVal = mImg.pixels[pixelIndex + 1];
      let blueVal = mImg.pixels[pixelIndex + 2];

      // mondriaan red
      if (isSimilar(redVal, greenVal, blueVal, 255, 50, 50)) {
        mImg.pixels[pixelIndex] = randomRGB1[0]; // Set red component 
        mImg.pixels[pixelIndex + 1] = randomRGB1[1]; // Set green component
        mImg.pixels[pixelIndex + 2] = randomRGB1[2]; // Set blue component
      }

      // mondriaan blue
      if (isSimilar(redVal, greenVal, blueVal, 0, 50, 100)) {
        mImg.pixels[pixelIndex] = randomRGB2[0]; // Set red component 
        mImg.pixels[pixelIndex + 1] = randomRGB2[1]; // Set green component
        mImg.pixels[pixelIndex + 2] = randomRGB2[2]; // Set blue component
      }

      // mondriaan yellow
      if (isSimilar(redVal, greenVal, blueVal, 255, 200, 50)) {
        mImg.pixels[pixelIndex] = randomRGB3[0]; // Set red component 
        mImg.pixels[pixelIndex + 1] = randomRGB3[1]; // Set green component
        mImg.pixels[pixelIndex + 2] = randomRGB3[2]; // Set blue component
      }

      // selected color
      if (isSimilar(redVal, greenVal, blueVal, red(cp.color()), green(cp.color()), blue(cp.color()))) {
        mImg.pixels[pixelIndex] = randomRGB4[0]; // Set red component 
        mImg.pixels[pixelIndex + 1] = randomRGB4[1]; // Set green component
        mImg.pixels[pixelIndex + 2] = randomRGB4[2]; // Set blue component
      }

    }
  }

  mImg.updatePixels();
  image(mImg, (width - mImg.width) / 2, 0);
}
let originalImg;

function preload() {
  originalImg = loadImage("Mondriaan.jpeg"); // Replace with the path to your image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  originalImg.resize(0, height);
  frameRate(0.5);

  cp = createColorPicker("#FF0000")
  cp.position(100,100)
}

function isRedSimilar(redA, greenA, blueA, redB, greenB, blueB){
  let RED_SIMILARITY_VALUE = 60;
  let OTHER_SIMILARITY_VALUE = 100;
  if ( abs(redA - redB) < RED_SIMILARITY_VALUE && abs(blueA - blueB) < OTHER_SIMILARITY_VALUE && abs(greenA - greenB) < OTHER_SIMILARITY_VALUE) {
    return true
  }
  return false
}


function isSimilar(redA, greenA, blueA, redB, greenB, blueB){
  let SIMILARITY_VALUE = 100;
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

      
      
      if (isSimilar(redVal, greenVal, blueVal, red(cp.color()), green(cp.color()), blue(cp.color()))) {
        mImg.pixels[pixelIndex] = 0; // Set red component to slider
        mImg.pixels[pixelIndex + 1] = 255; // Set green component
        mImg.pixels[pixelIndex + 2] = randomizeColorsButton; // Set blue component
      }

    }
  }

  mImg.updatePixels();
  image(mImg, (width - mImg.width) / 2, 0);
}
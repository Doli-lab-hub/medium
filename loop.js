let spacingX=50;
let spacingY=50;
let size;
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);

// ellipse(width/2-25, height/2, 50, 30);
// circle(width/2, height/2, 50);

    for (let j =0; j<8; j = j+1) {
        for (let i =0; i<10; i=i+1) {
            let distance = dist(mouseX, mouseY,50+i*spacingX, 50+j*spacingY);
            size = map(distance, 0, 200, 50, 0);
            if (size < 0) {
                size = 0;
            }
            circle(50+i*spacingX, 50+j*spacingY, size);
           
    }
    }
  }
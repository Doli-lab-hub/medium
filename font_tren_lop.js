let font;
let points;

function preload(){
    font = loadFont("folder/CalSans-Regular.ttf")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    points = font.textToPoints('CodeSurfing', 0, height/2, 200,{
        sampleFactor: 0.2,
        simplifyThreshold: 0.2
// tên biến của font-> font.textToPoints
})
}

function draw(){
    background(220);
    noStroke();
    fill(255, 100, 0);
    for (let i=0; i<points.length; i=i+1) {
        let distance = dist(mouseX, mouseY,points[i].x, points[i].y);
        let size = map(distance, 0, 400, 20, 0);
if (size<0) {
    size=0;
}
        circle(points[i].x, points[i].y, size);
      
    }
}
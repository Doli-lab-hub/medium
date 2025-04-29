let font;
let points;

function preload(){
    font = loadFont("folder/Tagesschrift-Regular.ttf")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    points = font.textToPoints('Witch', 0, height/2, 200,{
        sampleFactor: 0.2,
        simplifyThreshold: 0
// tên biến của font-> font.textToPoints
})
}

function draw(){
    background(220);
    noStroke();

// lớp màu cam
    fill(255, 100, 0);
    for (let i1=0; i1<points.length; i1=i1+7) {
        let distance1 = dist(mouseX, mouseY,points[i1].x, points[i1].y);
        let size1 = map(distance1, 0, 400, 30, 5);
if (size1<10) {
    size1=0;
}
        square(points[i1].x, points[i1].y, size1);
      
    }

// lớp màu vàng
fill(255, 200, 0);
for (let i2=0; i2<points.length; i2=i2+5) {
    let distance2 = dist(mouseX, mouseY,points[i2].x, points[i2].y);
    let size2 = map(distance2, 600, 0, 30, 0);
if (size2<0) {
size2=0;
}
    square(points[i2].x, points[i2].y, size2);
  
}

// lớp màu trắng
fill(255, 255, 255);
for (let i3=0; i3<points.length; i3=i3+5) {
    let distance3 = dist(mouseX, mouseY,points[i3].x, points[i3].y);
    let size3 = map(distance3, 0, 100, 15, 0);
if (size3<0) {
size3=0;
}
    square(points[i3].x, points[i3].y, size3);
  
}

}
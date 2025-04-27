let images = [];
let img, img2, img3;
let index=0;

    
function preload(){ 
    img = loadImage("folder/starlayer.png");
    img2 = loadImage("folder/cloudlayer.png");
    img3 = loadImage("folder/cloud.png");
    }


function setup(){ 
createCanvas (windowWidth, windowHeight);
images = [img, img2,img3];
}

function draw() {
    background(220);
    image(images[index%images.length], 0, 0);
}

function keyPressed(){ 
    if(keyCode === RIGHT_ARROW) { 
        index = index + 1;
        } else if (keyCode === LEFT_ARROW) {
            index = index -1;
        }
    if (index < 0) {
        index = index + images.length -1;
    }
        console.log(index);
    }

 

// nhấn arrow left đi ngược lại và arow right đi tới

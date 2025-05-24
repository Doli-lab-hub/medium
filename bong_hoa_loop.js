
let angle = 0;

function setup (){
createCanvas (500, 500);
angleMode(DEGREES);
}

function draw(){
    background(220);

// hoi them ve vi tri cua push pop,
// de push pop len tren for thi khong chay dc


for (let i = 0; i<8; i=i+1){
        push();
        translate(width / 2, height / 2); 
        angle = i*30 + 20;  
        rotate(angle);                  
        ellipse(30, 0, 50, 30);    
        ellipse(-30, 0, 50, 30);    
        // console.log(angle);
        pop();
    }

    translate(width / 2, height / 2); 
    circle(0, 0, 30);


}
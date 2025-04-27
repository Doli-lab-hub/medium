let animals = ["lama", "capy", "deer"];
let index = 0;

function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);
    text(animals[index % animals.length

    ], 200, 200);
// if (mouseIsPressed === TRUE) {
//     index = index + 1;
}

function mouseClicked(){
    index=index+1;
// if (index>= animals.length){
//     index = index - animals.length;
// }
}
// viet code de bam chuot thi chay den animal tiep theo
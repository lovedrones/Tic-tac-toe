/*----------variables/contraints--------*/

const ticTac  = [
    ['','',''],
    ['','',''],
    ['','',''],
];
const p1 = 'X';
const p2 = 'O';
/*----------functions--------------*/ 
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);
    let w = width / 3;
    let y = height / 3;
    for (let i  = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            let x = w * i + w/2;
            let y = h * j + h/2;
            let spot = tictac[i][j];
            textSize(32);
            strokeWeight(4);
            if (spot == p2){
                nofill();
                ellipse(x,y,w/2);
            } else if (spot == p1 ){
                let xr = w/4;
                line(x-xr, y-xr, x + xr, y + xr);
                line(x + xr, y-xr, x, y + h);
            }            

        }
    }
}

console.log('Hello World');
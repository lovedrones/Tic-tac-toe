/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/
var board;
var turn = 'X';
var win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/


document.getElementById('board').addEventListener('click', handleTurn);

const messages = document.querySelector('h2');

document.getElementById('reset-button').addEventListener('click', init);

// const ticTac  = [
//     ['','',''],
//     ['','',''],
//     ['','',''],
// ];
// const p1 = 'X';
// const p2 = 'O';

/*----------functions--------------*/ 
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
   
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

init();

// function setup() {
//     createCanvas(400, 400);
// }
// function draw() {
//     background(220);
//     let w = width / 3;
//     let y = height / 3;
//     for (let i  = 0; i < 3; i++){
//         for (let j = 0; j < 3; j++){
//             let x = w * i + w/2;
//             let y = h * j + h/2;
//             let spot = tictac[i][j];
//             textSize(32);
//             strokeWeight(4);
//             if (spot == p2){
//                 nofill();
//                 ellipse(x,y,w/2);
//             } else if (spot == p1 ){
//                 let xr = w/4;
//                 line(x-xr, y-xr, x + xr, y + xr);
//                 line(x + xr, y-xr, x, y + h);
//             }            

//         }
//     }
// }

// console.log('Hello World');


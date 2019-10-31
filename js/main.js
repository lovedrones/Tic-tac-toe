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

/*----- variables -----*/
var board;
var turn = 'X';
var win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', headTurn);

const messages = document.querySelector('h2');

document.getElementById('reset').addEventListener('click', init);

 

/*----------functions--------------*/ 
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function headTurn(evt) {
    if (evt.target.textContent === 'X' || evt.target.textContent === 'O') {
        return;
    }
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
    messages.textContent = win === 'T' ? `Tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

init();

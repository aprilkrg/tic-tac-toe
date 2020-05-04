/*----- constants -----*/
const colorLookup = {
    '1': 'X',
    '-1': 'O',
    'null': null
};

// const winArrays = {
//     [[0], [4], [8]],
//     [[2], [4], [6]],
//     [[0], [3], [6]],
//     [[1], [4], [7]],
//     [[2], [5], [8]],
//     [[0], [1], [2]],
//     [[3], [4], [5]],
//     [[6], [7], [8]],
// };
//commented out idea for adding the sum of the variables to find winner

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;
/*----- cached element references -----*/
const cellEls = Array.from(document.querySelectorAll('div'));
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick);
document.getElementById('btn').addEventListener('click', init);
/*----- functions -----*/
init();
function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
};
function render() {
    renderBoard();
};
function renderBoard() {
    board.forEach(function (cell, cellIdx) {
        //cellEls[cellIdx].style.backgroundColor = colorLookup[cell];
        //commenting out above to try different style. property
        cellEls[cellIdx].innerHTML = colorLookup[cell];
    });
};
function handleClick(evt) {
    const cellIdx = cellEls.indexOf(evt.target);
    const cell = board[cellIdx];
    if (cell !== null) return;
    board[cellIdx] = turn;
    turn *= -1;
    render();
};

// function winner() {
// //if the sum of any of the winArrays is equal to 3 then x is the winner
// };
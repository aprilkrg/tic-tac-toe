 /*----- constants -----*/
 const colorLookup = {
    '1': 'purple',
    '-1': 'lime',
    'null': 'transparent'
};
/*----- app's state (variables) -----*/
let board;
let turn;
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
        cellEls[cellIdx].style.backgroundColor = colorLookup[cell];
    });
};
function handleClick(evt) {
    const cellIdx = cellEls.indexOf(evt.target);
    // if (!cellIdx.includes(null).style.visibility = 'hidden');
    const cell = board[cellIdx];
    if (cell !== null) return;
    board[cellIdx] = turn;
    turn *= -1;
    render();
};
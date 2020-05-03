 /*----- constants -----*/
 const colorLookup = {
    // '1': 'lime',
    // '-1': 'yellow',
    // commenting out above lines to try different style. property
    '1': 'X',
    '-1': 'O',
    'null': null
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
 
    // or is this where I need to tell the code to interpret lime as x and yellow as o ?
    // redefine some variables?
    // do i need to set up the x and o in the constants or in the renderBoard function?
    // ie do i change 'lime' or do i make 'lime' equal something else here?

};
function renderBoard() {
    board.forEach(function (cell, cellIdx) {
        //cellEls[cellIdx].style.backgroundColor = colorLookup[cell];
        //commenting out above to try different style. property

        // I THINK THIS IS WHERE I NEED TO WORK TO STOP THE CLICK FROM FILLING THE BACKGROUND        
        //OORRRR IS THIS WHERE I NEED TO TELL THE CELL TO STOP POPULATING A BACKGROUND COLOR??
        cellEls[cellIdx].innerHTML = colorLookup[cell];
        // style.backgroud
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
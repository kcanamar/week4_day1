console.log("JavaScript is on")

/* ------------ Constants --------------- */
// X & O - Players
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
}
// Win conditions
const COMBOS = [
    [0,1,2,],
    [3,4,5,],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


/* ------------ App's State (variables) --------------- */
// where the users click (where to put an x or o) - make sure a square is not taken
let board; // a data variable that stores board positions, and what they hold
// whose turn is it
let turn; // will be either X or O
// when there is a winning combination or a tie - if game is ongoing
let winner; // this can be 3 things X/O, Tie, or null
// Bonus - timer for each players turn
// Bonus - score for games won
// Bonus - if the player wants to quit

/* ------------ Cached Element Referances --------------- */
// message container - h2 
const domMessage = document.querySelector('h2');

// the game board spaces
const domSquares = document.querySelectorAll('.square') // contains array of squares

// reset button
const resetButton = document.querySelector('.reset') 

const gameBoard = document.querySelector('.gameboard')

/* ------------ Event Listeners --------------- */
// mouse click on the 9 squares
gameBoard.addEventListener("click", handleMove); // game squares through delegation

// mouse click on reset button
resetButton.addEventListener("click", init);

// optional - user initiates game start


/* ------------ Functions --------------- */
// initialize (start) game
// init()

// handle user interaction 
// handleMove()

// Bonus- render choice to the DOM
// check for 3 in a row - winner (main game logic)
// render messages to the DOM
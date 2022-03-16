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
function init() {
    console.log("init funciton called")
    // we need a data set to keep track of our player moves
    board = new Array(9).fill(null) // [null,null,null....] x9 - tracks game play
    turn = 1; // X goes first
    winner = null; // set initial winner to no one
    render();
}

// starts the game on page load
init()

// handle user interaction 
function handleMove(event) {
    // console.log(`${event.target.dataset.square} was clicked`); // dataset.square console.logs the "data-" tag square
    const squareNumber = parseInt(event.target.dataset.square);
    //
    if (board[squareNumber] || winner) {
        return 
    }
    // set the index in the board array so we know that spot has been claimed
    board[squareNumber] = turn;
    // check for winner
    winner = checkForWinner();
    // switched the turn
    turn *= -1;
    // render message to user
    render();
}
// handleMove()

// check for 3 in a row - winner (main game logic)
function checkForWinner() {
    console.log("check for winner called")
    // this can be 3 things X/O, Tie, or null
    // if (board[COMBOS[0[0]]] === turn && board[COMBOS[0[1]]] === turn && board[COMBOS[0[2]]] === turn) {}
    for (let index in COMBOS) {
        if (
            board[COMBOS[index][0]] == turn &&
            board[COMBOS[index][1]] == turn &&
            board[COMBOS[index][2]] == turn 
            ) {
                return turn
            }
    }
    // makes sure that the game deos not end and the winner state stays null
    if (board.includes(null)) {
        return null
    }

    return "tie"
}

// render messages to the DOM
function render() {
    // console.log("render function called")
    board.forEach(function(value, index) {
        domSquares[index].textContent = PLAYERS[value] // puts an X or O on the board mapped from board 
    })

    if (!winner) {
        // tell whos turn it is
        domMessage.textContent = `${PLAYERS[turn]}'s turn`
    } else if (winner === "tie") {
        // tell the user there is a tie
        domMessage.textContent = "The game is a tie!"
    } else {
        // the users who the winner using a game state variable
        domMessage.textContent = `${PLAYERS[winner]} Wins!`
    }

}
// Bonus- render choice to the DOM
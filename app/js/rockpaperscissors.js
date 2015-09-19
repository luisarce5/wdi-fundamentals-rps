////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();/* Your Expression */
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();/* Your Expression */
}

function getWinner(playerMove,computerMove) { //opening fuction statement
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == 'rock') { // opening first level 'if' statement
        if (computerMove == 'rock') { // opening second level 'if statement
            winner = 'tie';
        } else if (computerMove == 'paper') {
            winner = 'computer';
        } else if (computerMove == 'scissors') {
            winner = 'player';
        } else {
            winner = 'error computerMove input';
        } // closing else statement
    } else if (playerMove == 'paper') { //opening 'else if' statement
        
        if (computerMove == 'rock') {
            winner = 'player';
        } else if (computerMove == 'paper') {
            winner = 'tie';
        } else if (computerMove == 'scissors') {
            winner = 'computer';
        } else {
            winner = 'error computerMove input';
        }
    } else if (playerMove == 'scissors') {
        if (computerMove == 'rock') {
            winner = 'computer';
        } else if (computerMove == 'paper') {
            winner = 'player';
        } else if (computerMove == 'scissors') {
            winner = 'tie';
        } else {
            winner = 'error ComputerMove input';
        } 
    } else {
        winner = 'error in inputs';
        }   
    return winner;
} // closing function statement

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


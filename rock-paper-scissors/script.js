// create variables to keep track of wins/losses/draws
let wins = 0, losses = 0, draws = 0;


// create a function that will randomly return 'rock', 'paper', or 'scissors'
function computerPlay() {
    let hand = ["rock","paper","scissors"];
    return hand[Math.floor(Math.random()*3)];
}


// create a function that compares player input to computer input and determines a winner
// add score tracking
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection == computerSelection:
            draws++;
            return `Draw! You both chose ${playerSelection}`;
        case playerSelection == "rock" && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "paper":
        case playerSelection == "paper" && computerSelection == "rock":
            wins++;
            return `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        default:
            losses++;
            return `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    }
}

function game() {
    let computerInput = computerPlay();

    // create a variable that takes player input in any case
    // put it inside game() so that it loops and players can input again each round
    let playerInput = prompt("Rock, paper, or scissors?").toLowerCase();
    // make player input only allow 'rock', 'paper', or 'scissors'
    while (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
        playerInput = prompt("Please type either rock, paper, or scissors.");
    }

    let roundResult = playRound(playerInput, computerInput);
    computerPlay();
    console.log(roundResult);
    console.log(`Wins: ${wins}\nLosses: ${losses}\nDraws: ${draws}`);
}


// create for loop to play the game multiple times
for (let i = 0; i < 5; i++) {
    game();   
}
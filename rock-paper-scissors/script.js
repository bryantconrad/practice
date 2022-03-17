function computerPlay() {
    const hand = ["rock","paper","scissors"];
    return hand[Math.floor(Math.random()*3)];
}

let computerInput = computerPlay();

let playerInput = prompt("Rock, paper, or scissors?").toLowerCase();

while (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
    playerInput = prompt("Please type either rock, paper, or scissors.");
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection == computerSelection:
            console.log(`Draw! You both chose ${playerSelection}`);
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "paper":
        case playerSelection == "paper" && computerSelection == "rock":
            console.log(`You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`);
            break;
        default:
            console.log(`You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`);
    } 
}

playRound(playerInput, computerInput);
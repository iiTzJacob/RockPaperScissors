function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices.at((Math.random() * 3))
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection.toLowerCase() == computerSelection) {
        return `Tie game! You both chose ${playerSelection}.`
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose rock, paper, or scissors:");
        let computerSelection = getComputerChoice();

        alert(playRound(playerSelection, computerSelection))
    }
}
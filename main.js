const newDiv = document.createElement('div')
const scores = document.querySelector('.scores')


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices.at((Math.random() * 3))
}


const btn = document.querySelectorAll('button');

btn.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    
    if (playerScore == 5) {
        result = '';
        result += "You win!"
    } else if (computerScore == 5) {
        result = '';
        result += "You lose!"
    } else {
    
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            result += `You win! ${playerSelection} beats ${computerSelection}.`
            playerScore += 1;
        } else if (playerSelection == computerSelection) {
            result += "Its a tie."
        } else {
            result += `You lose. The computer chose ${computerSelection}`;
            computerScore += 1;
        }
        
    }
    newDiv.textContent = `${result}` + '\n' +
                        `Your Score: ${playerScore}` + '\n' +
                        `Computer Score: ${computerScore}`;
    scores.append(newDiv);
}
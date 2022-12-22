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

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    let playerScore = 0;
    let computerScore = 0;

    
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
            result += `You win! ${playerSelection} beats ${computerSelection}.`
            playerScore += 1;
        } else if (playerSelection == computerSelection) {
            result += "Its a tie."
        } else {
            result += "You lose."
            computerScore += 1;
        }
        newDiv.textContent = `${result}
        Your Score: ${playerScore};
        Computer Score: ${computerScore}`;
    }
    scores.append(newDiv);
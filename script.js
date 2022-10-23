function getComputerChoice() {
  let choice = "";
  let generatedChoice = Math.floor(Math.random() * 100) % 3; // Generate a number from 0 to 2
  
  // Assign a choice based on the generated number
  if (generatedChoice == 0) {
    choice = "rock";
  } else if (generatedChoice == 1) {
    choice = "paper";
  } else if (generatedChoice == 2) {
    choice = "scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection, selection, announce) {
  playerSelection = playerSelection.toLowerCase();
  selection.textContent = "You chose " + playerSelection + "."
  if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" ) {
    return undefined;
  }
  let outcome = "";
  if (playerSelection == computerSelection) {
    outcome = "tie";
    announce.textContent = "Tie, no winner this round."
  } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    outcome = "player";
    announce.textContent = "Player wins the round!"
    playerScore += 1;
  } else {
    outcome = "computer";
    announce.textContent = "Computer wins the round!"
    computerScore += 1;
  }

  return outcome;
}

function updateScore() {
  playerScoreText.textContent = `Player Score: ${playerScore}`;
  computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

// function checkWinner() {
//   if (playerScore === 5) {
//     gameButtons.disabled = true;
//   }
// }

function restartGame() {
  playerScore = computerScore = 0;
  updateScore();
  selection.textContent = announce.textContent = "";
}

const gameButtons = document.querySelectorAll('.gameBtn');
const selection = document.querySelector('.selection');
const announce = document.querySelector('.announce');
const restartButton = document.querySelector('#restart');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const winner = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

gameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice(), selection, announce);
    updateScore();
    // checkWinner();
  });
});

restartButton.addEventListener('click', () => {
  restartGame();
});
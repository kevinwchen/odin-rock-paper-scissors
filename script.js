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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection)
  console.log(computerSelection)
  let outcome = "";
  if (playerSelection == computerSelection) {
    outcome = "tie";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "paper" && computerSelection == "rock") ||
  (playerSelection == "scissors" && computerSelection == "paper")) {
    outcome = "player";
  } else {
    outcome = "computer";
  }

  return outcome;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log (playRound(playerSelection, computerSelection));
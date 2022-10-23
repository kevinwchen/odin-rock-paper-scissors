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
  if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors" ) {
    return undefined;
  }
  let outcome = "";
  if (playerSelection == computerSelection) {
    outcome = "tie";
    console.log("Tie, no winner this round.")
    alert("Tie, no winner this round.")
  } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    outcome = "player";
    console.log("Player wins the round!")
    alert("Player wins the round!")
  } else {
    outcome = "computer";
    console.log("Computer wins the round!")
    alert("Computer wins the round!")
  }

  return outcome;
}

function game() {
  let roundsTotal = 5;
  let playerScore = computerScore = 0;

  for (let i = 0; i < roundsTotal; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter rock, paper, or scissors:");
    let outcome = playRound(playerSelection, computerSelection);
    
    // Track the score based on the outcome returned
    if (outcome == "player") {
      playerScore += 1;
    } else if (outcome == "computer") {
      computerScore += 1;
    }
  }

  // Print the results of the game
  if (playerScore > computerScore) {
    console.log("Player wins the game, congratulations!");
    alert("Player wins the game, congratulations!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game, better luck next time.");
    alert("Computer wins the game, better luck next time.");
  } else {
    console.log("Tie game.");
    alert("Tie game.");
  }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
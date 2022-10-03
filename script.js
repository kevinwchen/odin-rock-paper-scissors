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

getComputerChoice()

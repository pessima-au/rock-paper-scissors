// Step 1:
// Get Computer's Choice
// Declare a function getComputerChoice().
function getComputerChoice() {
  // Generate a random number between 0 and 2 using Math.floor(Math.random() * 3).
  const randInt = Math.floor(Math.random() * 3);
  // Return the random number as the computer's choice.
  return randInt;
}

/*
// Step 2:
// Assign Numbers to Choices
// Create a rock variable and assign it 0 (represents "Rock").
const rock = 0;
// Create a paper variable and assign it 1 (represents "Paper").
const paper = 1; 
// Create a scissors variable and assign it 2 (represents "Scissors").
const scissors = 2;
*/


// Step 3:
// Get Human's Choice
// Declare a function getHumanChoice().
function getHumanChoice() {
  // Prompt the user to enter a 'rock', 'paper' or 'scissors'.
  const choice = prompt("Please enter 'rock', 'paper' or 'scissors': ").toLowerCase();
  // If the input is invalid (not rock, paper, or scissors), prompt again until a valid input is given.
  if (choice != "rock" && choice !== "paper" && choice !== "scissors") {
    return getHumanChoice();
  } else {
    // Return the valid entry as the human's choice.
    return choice;
  }
}

// Step 4:
// Initialize Scores
// Create humanScore variable and initialize it to 0.
let humanScore = 0;
// Create computerScore variable and initialize it to 0.
let computerScore = 0;

// Step 5:
// Play One Round
// Create a function playRound(humanChoice, computerChoice).
function playRound(humanChoice, computerChoice) {
  // Convert computerChoice int into a string.
  let computerChoiceStr;
  if (computerChoice == 0) {
    computerChoiceStr = 'rock';
  } else if (computerChoice == 1) {
    computerChoiceStr = 'paper';
  } else if (computerChoice == 2) {
    computerChoiceStr = 'scissors';
  }

  // Compare humanChoice and computerChoice:
  let result;
  // If choices are the same, it's a tie.
  if (humanChoice === computerChoiceStr) {
    result = console.log("It's a tie");

    // Rock (0) beats Scissors (2), Paper (1) beats Rock (0), Scissors (2) beats Paper (1).
    // Console log a message like "You lose! Paper beats Rock".
    // Increase humanScore or computerScore based on the winner.
  } else if (
    (humanChoice == 'rock' && computerChoiceStr == 'scissors') ||
    (humanChoice == 'paper' && computerChoiceStr == 'rock') ||
    (humanChoice == 'scissors' && computerChoiceStr == 'paper')
  ) {
    result = console.log(`You win! ${humanChoice} beats ${computerChoiceStr}`);
    humanScore += 1;
  } else {
    result = console.log(`You lose! ${computerChoiceStr} beats ${humanChoice}`);
    computerScore += 1;
  }

  // Return the round result.
  return result;
}

const human = getHumanChoice();
const computer = getComputerChoice();
playRound(human, computer);

console.log(`Computer Score: ${computerScore}`)
console.log(`Human Score: ${humanScore}`);

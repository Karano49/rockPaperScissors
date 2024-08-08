let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) return "rock";
  else if (choice >= 0.33 && choice <= 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let value = prompt(
    "Please enter your choice (rock, paper or scissors)"
  ).toLowerCase();
  let correctValues = ["rock", "paper", "scissors"];
  if (!correctValues.includes(value)) {
    alert("Please entre one of the three possible values");
    getHumanChoice();
    return;
  }
  return value;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        console.log("No winner! Try again!");
        break;
      case "paper":
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
        break;
      case "scissors":
        console.log("You win! Rock beats Scissors!");
        humanScore += 1;
        break;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        console.log("You win! Paper beats Rock");
        humanScore += 1;
        break;
      case "paper":
        console.log("No winner! Try again!");
        break;
      case "scissors":
        console.log("You loose! Scissors beats Paper!");
        computerScore += 1;
        break;
    }
  } else if (humanChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
        break;
      case "paper":
        console.log("You win! Scissors beats Paper!");
        humanScore += 1;
        break;
      case "scissors":
        console.log("No winner! Try again!");
        break;
    }
  }
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
}

function playGame() {
  let i = 0;
  while (i < 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    i++;
  }
}

playGame();

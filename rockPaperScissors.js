let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) return "rock";
  else if (choice >= 0.33 && choice <= 0.66) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  let message = "";
  if (humanChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        message = "No winner! Try again!";
        break;
      case "paper":
        message = "You lose! Paper beats Rock";
        computerScore += 1;
        break;
      case "scissors":
        message = "You win! Rock beats Scissors!";
        humanScore += 1;
        break;
    }
  } else if (humanChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        message = "You win! Paper beats Rock";
        humanScore += 1;
        break;
      case "paper":
        message = "No winner! Try again!";
        break;
      case "scissors":
        message = "You loose! Scissors beats Paper!";
        computerScore += 1;
        break;
    }
  } else if (humanChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
        message = "You lose! Rock beats Scissors";
        computerScore += 1;
        break;
      case "paper":
        message = "You win! Scissors beats Paper!";
        humanScore += 1;
        break;
      case "scissors":
        message = "No winner! Try again!";
        break;
    }
  }
  document.querySelector(
    ".playerScore"
  ).textContent = `Your score: ${humanScore}`;
  document.querySelector(
    ".computerScore"
  ).textContent = `Computer score: ${computerScore}`;
  document.querySelector(".result").textContent = message;
}

function playGame(button) {
  let i = 0;
  const humanChoice = button.textContent.toLowerCase();
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  if (humanScore === 5) {
    document.querySelector(".result").textContent = `Congrats! You've won!`;
  } else if (computerScore === 5) {
    document.querySelector(".result").textContent = `Too bad! You've lost!`;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button);
  });
});

let computerScore = 0;
let humanScore = 0;
let rounds = 0;
const MAX_ROUNDS = 0;
const MAX_POINTS = 5;

let rockBtn = document.querySelector(".rock-btn");
let paperBtn = document.querySelector(".paper-btn");
let scissorsBtn = document.querySelector(".scissors-btn");
let results = document.querySelector(".results");
let statusText = document.querySelector(".status-text");

function getChoice(choice) {
  if (choice == "rock" || choice == 1) return "Rock";
  else if (choice == "paper" || choice == 2) return "Paper";
  else return "Scissors";
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  return getChoice(choice);
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let outcome;

  if (humanChoice == computerChoice) outcome = "draw";
  else if (
    (humanChoice == "Rock" && computerChoice == "Scissors") ||
    (humanChoice == "Paper" && computerChoice == "Rock") ||
    (humanChoice == "Scissors" && computerChoice == "Paper")
  )
    outcome = "win";
  else outcome = "lose";

  if (outcome == "draw")
    results.textContent = `Draw! You both played ${humanChoice} and ${computerChoice}. No points awarded.`;
  else if (outcome == "win") {
    humanScore += 1;
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}. +1 Point awarded to you.`;
  } else {
    computerScore += 1;
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}. +1 Point awarded to computer.`;
  }

  statusText.innerHTML = `Current Score:</br>
                          You: ${humanScore}</br>
                          Computer: ${computerScore}
                          `;

  if (humanScore >= MAX_POINTS || computerScore >= MAX_POINTS) {
    if (humanScore == computerScore)
      alert("Too bad! The game ended in a DRAW.");
    else if (humanScore > computerScore) alert("Congratulations! You WIN.");
    else alert("Too bad! You LOST.");

    location.reload();
  }
}

function playGame() {
  console.log("Game Started.");
  rockBtn.addEventListener("click", () => playRound("Rock"));
  paperBtn.addEventListener("click", () => playRound("Paper"));
  scissorsBtn.addEventListener("click", () => playRound("Scissors"));
}

playGame();

function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let result = 0;
  if (playerSelection == computerSelection) {
    return [playerSelection, computerSelection, (result = 2)];
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return [playerSelection, computerSelection, (result += 0)];
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return [playerSelection, computerSelection, (result = 1)];
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return [playerSelection, computerSelection, (result = 1)];
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return [playerSelection, computerSelection, (result = 0)];
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return [playerSelection, computerSelection, (result = 1)];
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return [playerSelection, computerSelection, (result = 0)];
  }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const mainDiv = document.querySelector(".info");
const mainResult = document.querySelector(".results");

let points = 0;
let playerScore = 0;
let botScore = 0;
let round = 0;
let playerSelection = "";

rockButton.addEventListener("click", () => {
  mainResult.textContent = "";
  playerSelection = "rock";
  const [playerValue, botValue, gameDecision] = playRound(
    playerSelection,
    getComputerChoice()
  );

  if (gameDecision == 0) {
    mainDiv.textContent =
      "You lost this round! " + playerValue + " vs. " + botValue + ".";
    botScore += 1;
    round += 1;
  } else if (gameDecision == 1) {
    mainDiv.textContent =
      "You won this round! " + playerValue + " vs. " + botValue + ".";
    playerScore += 1;
    round += 1;
  } else {
    mainDiv.textContent = "Draw! " + playerValue + " vs. " + botValue + ".";
    round += 1;
  }

  if (round >= 5) {
    if (playerScore > botScore) {
      mainResult.textContent =
        "You won this match! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    } else if (botScore > playerScore) {
      mainResult.textContent =
        "You lost this match! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    } else {
      mainResult.textContent =
        "This match is a draw! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    }
  }
});
paperButton.addEventListener("click", () => {
  mainResult.textContent = "";
  playerSelection = "paper";
  const [playerValue, botValue, gameDecision] = playRound(
    playerSelection,
    getComputerChoice()
  );

  if (gameDecision == 0) {
    mainDiv.textContent =
      "You lost this round! " + playerValue + " vs. " + botValue + ".";
    botScore += 1;
    round += 1;
  } else if (gameDecision == 1) {
    mainDiv.textContent =
      "You won this round! " + playerValue + " vs. " + botValue + ".";
    playerScore += 1;
    round += 1;
  } else {
    mainDiv.textContent = "Draw! " + playerValue + " vs. " + botValue + ".";
    round += 1;
  }

  if (round >= 5) {
    if (playerScore > botScore) {
      mainResult.textContent =
        "You won this match! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    } else if (botScore > playerScore) {
      mainResult.textContent =
        "You lost this match! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    } else {
      mainResult.textContent =
        "This match is a draw! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    }
  }
});
scissorButton.addEventListener("click", () => {
  mainResult.textContent = "";
  playerSelection = "scissors";
  const [playerValue, botValue, gameDecision] = playRound(
    playerSelection,
    getComputerChoice()
  );

  if (gameDecision == 0) {
    mainDiv.textContent =
      "You lost this round! " + playerValue + " vs. " + botValue + ".";
    botScore += 1;
    round += 1;
  } else if (gameDecision == 1) {
    mainDiv.textContent =
      "You won this round! " + playerValue + " vs. " + botValue + ".";
    playerScore += 1;
    round += 1;
  } else {
    mainDiv.textContent = "Draw! " + playerValue + " vs. " + botValue + ".";
    round += 1;
  }

  if (round >= 5) {
    if (playerScore > botScore) {
      mainResult.textContent =
        "You won this match! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    } else if (botScore > playerScore) {
      mainResult.textContent =
        "You lost this match! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    } else {
      mainResult.textContent =
        "This match is a draw! " + playerScore + " vs. " + botScore + ".";
      botScore = 0;
      playerScore = 0;
      round = 0;
    }
  }
});

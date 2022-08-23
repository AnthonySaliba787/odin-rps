function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return [
      console.log(
        "Draw! " + playerSelection + " vs " + computerSelection + "."
      ),
      2,
    ];
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return [
      console.log(
        "You lose! " + playerSelection + " vs " + computerSelection + "."
      ),
      0,
    ];
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return [
      console.log(
        "You win! " + playerSelection + " vs " + computerSelection + "."
      ),
      1,
    ];
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return [
      console.log(
        "You win! " + playerSelection + " vs " + computerSelection + "."
      ),
      1,
    ];
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return [
      console.log(
        "You lose! " + playerSelection + " vs " + computerSelection + "."
      ),
      0,
    ];
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return [
      console.log(
        "You win! " + playerSelection + " vs " + computerSelection + "."
      ),
      1,
    ];
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return [
      console.log(
        "You lose! " + playerSelection + " vs " + computerSelection + "."
      ),
      0,
    ];
  }
}

function game() {
  let playerScore = 0;
  let botScore = 0;

  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice:");
    let computerSelection = getComputerChoice();
    let [result, scoreDecision] = playRound(playerSelection, computerSelection);

    console.log(result);
    if (scoreDecision == 0) {
      botScore += 1;
    } else if (scoreDecision == 1) {
      playerScore += 1;
    } else {
      playerScore += 1;
      botScore += 1;
    }
  }
  if (playerScore > botScore) {
    console.log(
      "Congratulations! You won with a score of " +
        playerScore +
        " vs " +
        botScore +
        "."
    );
  } else if (playerScore < botScore) {
    console.log(
      "Whoops! You lost with a score of " +
        playerScore +
        " vs " +
        botScore +
        "."
    );
  } else {
    console.log(
      "There's a draw with a score of " + playerScore + " vs " + botScore + "."
    );
  }
}

game();

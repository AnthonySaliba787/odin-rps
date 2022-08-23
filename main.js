function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let plrSel = playerSelection.toLowerCase();
  if (plrSel == computerSelection) {
    return [
      console.log("Draw! " + plrSel + " vs " + computerSelection + "."),
      2,
    ];
  } else if (plrSel == "rock" && computerSelection == "paper") {
    return [
      console.log("You lose! " + plrSel + " vs " + computerSelection + "."),
      0,
    ];
  } else if (plrSel == "rock" && computerSelection == "scissors") {
    return [
      console.log("You win! " + plrSel + " vs " + computerSelection + "."),
      1,
    ];
  } else if (plrSel == "paper" && computerSelection == "rock") {
    return [
      console.log("You win! " + plrSel + " vs " + computerSelection + "."),
      1,
    ];
  } else if (plrSel == "paper" && computerSelection == "scissors") {
    return [
      console.log("You lose! " + plrSel + " vs " + computerSelection + "."),
      0,
    ];
  } else if (plrSel == "scissors" && computerSelection == "paper") {
    return [
      console.log("You win! " + plrSel + " vs " + computerSelection + "."),
      1,
    ];
  } else if (plrSel == "scissors" && computerSelection == "rock") {
    return [
      console.log("You lose! " + plrSel + " vs " + computerSelection + "."),
      0,
    ];
  }
}

function game() {}

game();

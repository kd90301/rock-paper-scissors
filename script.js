// console.log("Rock, Paper, Scissors")

function getComputerChoice() {
  // let options = ("rock", "paper", "scissors"); oh, right - this isn't Python

  let randomChoice = Math.random()
  let computerChoice = "";
  if (randomChoice <= .333) {
    computerChoice = "rock";
  }
  else if (randomChoice >= .666) {
    computerChoice = "scissors"
  }
  else {
    computerChoice = "paper"
  }
  // console.log(computerChoice) 
}

function getPlayerChoice() {
  let playerChoice = prompt("Please select rock, paper or scissors. Lowercase answers only.")
  console.log(playerChoice)
}


getComputerChoice();
getPlayerChoice();
// console.log("Rock, Paper, Scissors")

function getComputerChoice(){
  // let options = ("rock", "paper", "scissors");

  let randomChoice = Math.random()
  let computerChoice = "";
  if (randomChoice <= .333) {
    computerChoice = "Rock";
  }
  else if (randomChoice >= .666) {
    computerChoice = "Scissors"
  }
  else {
    computerChoice = "Paper"
  }
  console.log(computerChoice)
  
}

getComputerChoice()
// console.log("Rock, Paper, Scissors")


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // let options = ("rock", "paper", "scissors"); oh, right - this isn't Python

  let randomChoice = Math.random();
  let computerChoice = "";
  if (randomChoice <= .333) {
    computerChoice = "rock";
  }
  else if (randomChoice >= .666) {
    computerChoice = "scissors";
  }
  else {
    computerChoice = "paper";
  }
  // console.log(computerChoice) 
  return computerChoice ;
}

function getHumanChoice() {
  let humanChoice = prompt("Please select rock, paper or scissors.");
  let caseInsensitiveChoice = humanChoice.toLowerCase();
  return caseInsensitiveChoice ;
  // console.log(humanChoice)
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It\'s a tie!");
  } 
  else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Rock is covered by paper! Computer gets 1 point.");
  }
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Rock breaks scissors! You get 1 point.");
  }
  else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Paper covers rock! You get 1 point.");
  }
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Paper is cut by scissors! Computer gets 1 point.");
  }
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Scissors cut paper! You get 1 point");
  }
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Scissors are broken by rock! Computer gets 1 point.");
  }
  else {
    console.log("it\'s ... not a tie ...");
  }
  
} 


console.log(computerSelection);
console.log(humanSelection);

playRound(humanSelection, computerSelection);
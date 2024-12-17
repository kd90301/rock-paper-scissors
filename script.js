// console.log("Rock, Paper, Scissors")

let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector('.buttonContainer');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

const computerSelection = document.querySelector('.computerSelection');
const roundOutcome = document.querySelector('.roundOutcome');
const scoreCard = document.querySelector('.scoreCard');
const gameStatus = document.querySelector('.gameStatus');

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

rockButton.addEventListener('click',choseRock )
paperButton.addEventListener('click', chosePaper )
scissorsButton.addEventListener('click', choseScissors)

function getComputerChoice() { 

  let randomChoice = Math.random();
  let computerChoice = '';
  if (randomChoice <= .333) {
    computerChoice = "rock";
  }
  else if (randomChoice >= .666) {
    computerChoice = "scissors";
  }
  else {
    computerChoice = "paper";
  }
  return computerChoice;
}

function choseRock() {
  console.log("you chose rock");
  humanChoice = 'rock';
  let computerChoice = getComputerChoice();
  computerSelection.textContent = `Computer chose: ${computerChoice}!`;
  playRound(humanChoice, computerChoice);

}

function chosePaper() {
  console.log('you chose paper')
  humanChoice = 'paper';
  let computerChoice = getComputerChoice();
  computerSelection.textContent = `Computer chose: ${computerChoice}!`;
  playRound(humanChoice, computerChoice);
}

function choseScissors() {
  console.log('you chose scissors')
  humanChoice = 'scissors';
  let computerChoice = getComputerChoice();
  computerSelection.textContent = `Computer chose: ${computerChoice}!`;
  playRound(humanChoice, computerChoice);
}

function playRound(humanChoice, computerChoice) {
  console.log(computerChoice);

  if (humanChoice == computerChoice) {
    roundOutcome.textContent = "It\'s a tie!";
    
  } 
  else if (humanChoice == "rock" && computerChoice == "paper") {
    roundOutcome.textContent = "Rock is covered by paper! Computer gets 1 point.";
    computerScore++;
  }
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    roundOutcome.textContent = "Rock breaks scissors! You get 1 point.";
    humanScore++;
  }
  else if (humanChoice == "paper" && computerChoice == "rock") {
    roundOutcome.textContent = "Paper covers rock! You get 1 point.";
    humanScore++;
  }
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    roundOutcome.textContent = "Paper is cut by scissors! Computer gets 1 point.";
    computerScore++;
  }
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    roundOutcome.textContent = "Scissors cut paper! You get 1 point";
    humanScore++;
  } 
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    roundOutcome.textContent = "Scissors are broken by rock! Computer gets 1 point.";
    computerScore++;
  } 
  else {
    roundOutcome.textContent = "it\'s ... not a tie ... I don\'t know what went wrong .."; 
  }
  scoreCard.textContent = `your score is: ${humanScore} || the computer's score is ${computerScore}`;
  
  
  if (humanScore == 5) {
  gameStatus.textContent = 'Game Over! You won!'
  // alert('Game Over!');
  }
  else if (computerScore == 5) {
  gameStatus.textContent = 'Game Over! The computer won...'
  }
  else if (humanScore > 5 || computerScore > 5) {
  gameStatus.textContent = "The game is over, refresh your browser to play again!"
  alert("The game is over, refresh your browser to play again!")
  }
}
  



// function getHumanChoice() { // get player's choice via console input 
//   // let humanChoice = prompt("Please select rock, paper or scissors.");
//   let caseInsensitiveChoice = humanChoice.toLowerCase(); // convert to case insensetive 
//   return caseInsensitiveChoice;
// }






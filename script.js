// console.log("Rock, Paper, Scissors")


let humanScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector('.buttonContainer');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');


rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);


function getComputerChoice() { // get randomized computer choice

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
  return computerChoice;
}

function getHumanChoice() { // get player's choice via prompt
  // let humanChoice = prompt("Please select rock, paper or scissors.");
  let caseInsensitiveChoice = humanChoice.toLowerCase(); // convert to case insensetive 
  return caseInsensitiveChoice;
}


// choices to variables for playRound func parameters
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();



function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It\'s a tie!");
  } 
  else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Rock is covered by paper! Computer gets 1 point.");
    computerScore++;
  }
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Rock breaks scissors! You get 1 point.");
    humanScore++;
  }
  else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Paper covers rock! You get 1 point.");
    humanScore++;
  }
  else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Paper is cut by scissors! Computer gets 1 point.");
    computerScore++;
  }
  else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Scissors cut paper! You get 1 point");
    humanScore++;
  } 
  else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Scissors are broken by rock! Computer gets 1 point.");
    computerScore++;
  } 
  else {
    console.log("it\'s ... not a tie ... you may have spelled a word wrong .."); 
  }
} 



  function playGame() {

    // playRound(humanChoice, computerChoice);
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore, computerScore);
    if (humanScore > computerScore) 
      { console.log("You won!")
    } else if (computerScore > humanScore) {
      console.log("You lost!")
    } else if (humanScore == computerScore) {
      console.log("It's a tie!")
    }

}
  

// playGame();




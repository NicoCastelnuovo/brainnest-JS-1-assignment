function getRandomNumber(min = 0, max = 2) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function computerPlay() {
  let randomNumber = getRandomNumber();
  let computerSelection; 
  switch (randomNumber) {
    case 0:
      computerSelection = 'Rock';
      break;
    case 1:
      computerSelection = 'Paper';
      break;
    case 2: 
      computerSelection = 'Scissors';
      break;
  }
  return computerSelection;
}

function checkForValidInput(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case 'rock':
    case 'paper':
    case 'scissors':
      return true; // the input is valid
      break;
    default:
      return false; // the input is invalid
  };
}

function playRound(playerSelection, computerSelection) {
  let winner;
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      winner = computerSelection;
    }
    else if (computerSelection === 'Scissors') {
      winner = playerSelection;
    }
    else {
      winner = 'Even';
    }
  }
  else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      winner = playerSelection;
    }
    else if (computerSelection === 'Scissors') {
      winner = computerSelection;
    }
    else {
      winner = 'Even';
    }
  }
  else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      winner = computerSelection;
    }
    else if (computerSelection === 'Paper') {
      winner = playerSelection;
    }
    else {
      winner = 'Even';
    }
  }
  // if (winner == computerSelection) {
  //   return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  // } else if (winner == playerSelection) {
  //   return `You Win! ${playerSelection} beats ${computerSelection}!`;
  // } else {
  //   return `No one Win! ${playerSelection} is equal to ${computerSelection}!`
  // }
  return winner; 
};

function game() {
  let playerCounter = 0;
  let computerCounter = 0;
  for (i = 0; i < 5; i++) {
    let userInput = prompt('Rock, Paper or Scissors?');
    while (checkForValidInput(userInput) === false) {
      userInput = prompt('Your selection is invalid! Retry!')
    }
    userInput = userInput[0].toUpperCase() + userInput.slice(1); // Format the input - capitalize the first letter
    let roundWinner = playRound(userInput, computerPlay());
    console.log(roundWinner);
    if (roundWinner[4] === 'L') {
      computerCounter += 1;
    } else if (roundWinner[4] === 'W') {
      playerCounter += 1;
    }
  }
  if (computerCounter > playerCounter) {
    console.log(`Oh Noooo! Computer beats you ${computerCounter} to ${playerCounter}!`);
  } else if (computerCounter < playerCounter) {
    console.log(`Congratulation! You beat the Computer ${playerCounter} to ${computerCounter}!`)
  } else {
    console.log(`The final result is even!`)
  }
}

game();
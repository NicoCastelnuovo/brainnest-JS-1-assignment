function getRandomNumber(min = 0, max = 2) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(num);
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
    default:
      computerSelection = `Sorry, something didn't work. Retry!`;
  }
  console.log(`computerSelection is: ` + computerSelection);
  return computerSelection;
}

function checkForValidInput(playerSelection) {
  switch (playerSelection) {
    case 'rock':
    case 'paper':
    case 'scissors':
      break;
    default:
      playerSelection = 'Invalid input';
  };
  return playerSelection;
}

function checkTheWinner(a, b) {
  let winner;
  if (a === 'rock' && b === 'scissors') {
    winner = a;
  }
  else if (a === 'rock' && b === 'paper') {
    winner = b;
  }
  else if (a === 'scissors' && b === 'paper') {
    winner = a;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // make the input case insensitive
  if (checkForValidInput(playerSelection) == 'Invalid input') {
    return playerSelection; // exit the function in case of invalid input
  }
  return (checkTheWinner(playerSelection, computerSelection));
}

playRound('RoCK', computerPlay());
playRound('SCISSORS', computerPlay());
playRound('paaaaper', computerPlay());
playRound('paper', computerPlay());
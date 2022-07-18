const getRandomNumber = (min = 0, max = 2) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

const computerPlay = () => {
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

const checkForValidInput = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
    case 'paper':
    case 'scissors':
      return true; // the userInput is valid
      break;
    default:
      return false; // the userInput is invalid
  };
}

const playRound = (playerSelection, computerSelection) => {
  let roundInfo = {
    playerSelection: playerSelection,
    computerSelection: computerSelection,
    winner: '',
  };
  if (playerSelection == computerSelection) {
    roundInfo.winner = 'Even';
  } else {
    if (playerSelection == 'Rock') {
      if (computerSelection == 'Paper') {
        roundInfo.winner = 'Computer';
      } else if (computerSelection == 'Scissors') {
        roundInfo.winner = 'Player';
      }
    } else if (playerSelection == 'Paper') {
      if (computerSelection == 'Rock') {
        roundInfo.winner = 'Player';
      } else if (computerSelection == 'Scissors') {
        roundInfo.winner = 'Computer';
      }
    } else if (playerSelection == 'Scissors') {
      if (computerSelection == 'Rock') {
        roundInfo.winner = 'Computer';
      } else if (computerSelection == 'Paper') {
        roundInfo.winner = 'Player';
      }
    }
  }
  return roundInfo;
};

const askToReplay = () => {
  let replayChoice = prompt(`Do you want to play another time? Type 'yes' or 'no'`);
  while (replayChoice.toLowerCase() != 'yes' && replayChoice.toLowerCase() != 'no') {
    alert(`I don't understand what you mean with ${replayChoice}`);
    replayChoice = prompt(`Do you want to play another time? Type 'yes' or 'no'`);
  } 
  if (replayChoice.toLowerCase() === 'yes') {
    game();
  } else {
    alert('Thanks for playing! Bye!');
  }
};

const game = () => {
  let playerCounter = 0;
  let computerCounter = 0;
  for (i = 0; i < 5; i++) {
    let userInput = prompt('Rock, Paper or Scissors?');
    while (checkForValidInput(userInput) == false) {
      userInput = prompt('Your selection is invalid! Retry!')
    };
    userInput = userInput[0].toUpperCase() + userInput.toLowerCase().slice(1); // Format the input - capitalize the first letter
    let roundInfo = playRound(userInput, computerPlay());
    if (roundInfo.winner == 'Computer') {
      computerCounter += 1;
      console.log(`You Lose! ${roundInfo.computerSelection} beats ${roundInfo.playerSelection}!`)
    } else if (roundInfo.winner == 'Player') {
      playerCounter += 1;
      console.log(`You Win! ${roundInfo.playerSelection} beats ${roundInfo.computerSelection}!`)
    } else {
      console.log(`No one Win! ${roundInfo.playerSelection} is equal to ${roundInfo.computerSelection}!`)
    }
  }
  if (computerCounter > playerCounter) {
    console.log(`Oh Noooo! Computer beats you ${computerCounter} to ${playerCounter}!`);
  } else if (computerCounter < playerCounter) {
    console.log(`Congratulation! You beat the Computer ${playerCounter} to ${computerCounter}!`)
  } else {
    console.log(`The final result is even!`)
  };
  askToReplay();
}

game();

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error: Not a valid input');
  }
}

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won'
    } else {
      return 'User Won'
    }
  }
 if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won'
    } else {
      return 'User Won'
    }
 }
 if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won'
    } else {
      return 'User Won'
    }
 }
}

const playGame = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.dataset.choice || btn.textContent.trim().toLowerCase();
        const userChoice = getUserChoice(choice);
        if (!userChoice) return; // invalid input
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        console.log(`user: ${userChoice}, computer: ${computerChoice}`);
        console.log(result);
        const out = document.getElementById('result-text');
        if (out) out.textContent = `You: ${userChoice} - Computer: ${computerChoice} -> ${result}`;
      });
    });
  });
  // const userChoice = getUserChoice('rock');
  // const computerChoice = getComputerChoice();
  // console.log(`user: ${userChoice}, computer: ${computerChoice}`);
  // console.log(determineWinner(userChoice, computerChoice));
}

playGame()


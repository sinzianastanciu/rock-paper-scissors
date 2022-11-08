const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userChoice
let computerChoice
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(choice => {
    choice.addEventListener('click', (event) => {
        playGame(event);
    })
})

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'scissors';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        default:
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "It's a tie!";
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = "You win!";
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = "You lost!";
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = "You lost!";
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = "You win!";
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = "You win!";
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = "You lost!";
    }
}

function playGame(event) {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}

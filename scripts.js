const textInput = document.querySelector('#text-input');
const startGame = document.querySelector('#start-game');
const textOutput = document.querySelector('#text-output');
const gameArea = document.querySelector('#game-area');

const paperButton = document.createElement('button');
const rockButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const buttonContainer = document.createElement('div');

const playScoreDisplay = document.createElement('h3');
const compScoreDisplay = document.createElement('h3');
const roundTracker = document.createElement('h3');
const scoreContainer = document.createElement('div');

const retryButton = document.createElement('button');
retryButton.setAttribute('class', 'button');
retryButton.textContent = 'Retry';

let rounds = 0;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

scoreContainer.appendChild(playScoreDisplay);
scoreContainer.appendChild(compScoreDisplay);
scoreContainer.setAttribute('class', 'score-container');

paperButton.textContent = 'Paper';
rockButton.textContent = 'Rock';
scissorsButton.textContent = 'Scissors';
paperButton.setAttribute('class', 'button')
rockButton.setAttribute('class', 'button')
scissorsButton.setAttribute('class', 'button')
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

function retry() {
    gameArea.removeChild(scoreContainer);
    gameArea.removeChild(retryButton);
    textOutput.textContent = "How many rounds would you like to play?";
    gameArea.appendChild(textInput);
    gameArea.appendChild(startGame);
}

function endGame() {
    gameArea.removeChild(roundTracker);
    gameArea.removeChild(buttonContainer);
    gameArea.appendChild(retryButton);
    if(computerScore > playerScore) {
        textOutput.textContent = `Sorry you lose, would you like to try again?`;
    } else if(playerScore > computerScore) {
        textOutput.textContent = `You win! You can play again if you want to test your luck...`;
    } else {
        textOutput.textContent = "You both tied...Try again?";
    }
}

function updateUI() {
    roundTracker.textContent = `Round: ${currentRound} / ${rounds}`;
    playScoreDisplay.textContent = `Current Score: ${playerScore}`;
    compScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
}

function computerPlay() {
    let selection = Math.ceil(Math.random() * 3);
    switch(selection){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    switch(computerSelection.toLowerCase()) {
        case "rock":
            switch(playerSelection.toLowerCase()) {
                case "rock":
                    return "tie";
                case "paper":
                    return "win";
                case "scissors":
                    return "lose";
            }
        case "paper":
            switch(playerSelection.toLowerCase()) {
                case "rock":
                    return "lose";
                case "paper":
                    return "tie";
                case "scissors":
                    return "win";
            }
        case "scissors":
            switch(playerSelection.toLowerCase()) {
                case "rock":
                    return "win";
                case "paper":
                    return "lose";
                case "scissors":
                    return "tie";
            }
    }
}

function playChoice(e) {
    let choice = e.target.textContent;
    let computerChoice = computerPlay();
    let results = playRound(computerChoice, choice);
    if(results == "lose") {
        computerScore++;
        textOutput.textContent = `You lose! ${computerChoice} beats ${choice}`;
    } else if(results == "win") {
        playerScore++;
        textOutput.textContent = `You win! ${choice} beats ${computerChoice}`;
    } else {
        textOutput.textContent = `No one wins, you both choose ${computerChoice}`;
    }
    if(currentRound != rounds) {
        currentRound++;
        updateUI();
    } else {
        updateUI();
        endGame();
    }
}

function prepareGame() {
    if(parseInt(textInput.value) !== parseInt(textInput.value)){
        alert('Please enter a number into the text field.')
        return;
    } else {
        rounds = parseInt(textInput.value);
        currentRound = 1;
        playerScore = 0;
        computerScore = 0;
        updateUI();
        gameArea.removeChild(textInput);
        gameArea.removeChild(startGame);
        gameArea.appendChild(roundTracker);
        gameArea.appendChild(scoreContainer);
        gameArea.appendChild(buttonContainer);
        textOutput.textContent = "Rock, Paper or Scissors?";
    }
}

startGame.addEventListener('click', () => {
    prepareGame(); 
});

paperButton.addEventListener('click', (e) => {
    playChoice(e)
});

rockButton.addEventListener('click', (e) => {
    playChoice(e)
});

scissorsButton.addEventListener('click', (e) => {
    playChoice(e)
});

retryButton.addEventListener('click', () =>{
    retry();
});
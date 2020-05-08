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


paperButton.addEventListener('click', (e) => {
    playChoice(e)
});

rockButton.addEventListener('click', (e) => {
    playChoice(e)
});

scissorsButton.addEventListener('click', (e) => {
    playChoice(e)
});

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

function capitalize(string) {
    lowerString = string.toLowerCase();
    outString = lowerString[0].toUpperCase() + lowerString.slice(1);
    return outString;
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

function game() {
    let options = ["rock", "paper", "scissors"];
    let user_in;
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        while(true){
            user_in = prompt("Please enter Rock, Paper, or Scissors:");
            if(options.indexOf(user_in.toLowerCase()) == -1) {
                alert("Sorry that is incorrect, try again.");
                continue;
            } else {
                break;
            }
        }
        let result = playRound(computerSelection, user_in);
        if(result == "lose") {
            computerScore++;
            alert(`You lose! ${computerSelection} beats ${capitalize(user_in)}`);
        } else if(result == "win") {
            playerScore++;
            alert(`You win! ${capitalize(user_in)} beats ${computerSelection}`);
        } else {
            alert(`No one wins, you both choose ${computerSelection}`);
        }
    }
    if(computerScore > playerScore) {
        alert(`Sorry you lose, the computer got a score of ${computerScore} while you only had ${playerScore}`);
    } else if(playerScore > computerScore) {
        alert(`You win! With a score of ${playerScore} the computer only had ${computerScore}`)
    } else {
        alert("You both tied...")
    }
}
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
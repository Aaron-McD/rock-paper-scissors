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
                    return "No one wins, you both choose Rock";
                case "paper":
                    return "You win! Paper beats Rock";
                case "scissors":
                    return "You lose! Rock beats Sciccors";
            }
        case "paper":
            switch(playerSelection.toLowerCase()) {
                case "rock":
                    return "You lose! Paper beats Rock";
                case "paper":
                    return "No one wins, you both choose Paper";
                case "scissors":
                    return "You win! Scissors beats Paper";
            }
        case "scissors":
            switch(playerSelection.toLowerCase()) {
                case "rock":
                    return "You win! Rock beats Scissors";
                case "paper":
                    return "You lose! Scissors beats Paper";
                case "scissors":
                    return "No one wins, you both choose Scissors";
            }
    }
}
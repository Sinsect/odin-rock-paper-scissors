function computerPlay() {
    let roll = Math.floor(Math.random() * 3);
    switch (roll) {
        case 0: 
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
        default:
            return "computer forgot to make a move!";
    }
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    console.log("Computer: " + computerSelection);
    console.log("Player: " + playerSelection);
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                return "Tie!";
                break;
            case "paper": 
                return "You lose! Paper covers rock!";
                break;
            case "scissors":
                return "You win! Rock beats scissors!";
                break;
            default: 
                return;
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win! Paper covers rock!";
                break;
            case "paper": 
                return "Tie!";
                break;
            case "scissors":
                return "You lose! Scissors cut paper!";
                break;
            default: 
                return;
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You lose! Rock beats scissors!";
                break;
            case "paper": 
                return "You win! Scissors cut paper!";
                break;
            case "scissors":
                return "Tie!";
                break;
            default: 
                return;
        }
    }
    else {
        return "Invalid input";
    }
}
console.log(playRound("   RoCK   ", computerPlay()));
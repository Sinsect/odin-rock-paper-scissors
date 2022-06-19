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
                return "tie";
                break;
            case "paper": 
                return "lose";
                break;
            case "scissors":
                return "win";
                break;
            default: 
                return;
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                return "win";
                break;
            case "paper": 
                return "tie";
                break;
            case "scissors":
                return "lose";
                break;
            default: 
                return;
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                return "lose";
                break;
            case "paper": 
                return "win";
                break;
            case "scissors":
                return "tie";
                break;
            default: 
                return;
        }
    }
    else {
        return "Invalid input";
    }
}
function game(numberOfRounds) {
    let roundsWon = 0;
    let roundsLost = 0;
    let roundsTied = 0;
    let results = "";
    for (let i = 0; i < numberOfRounds; i++){
        let playerPlay = prompt("Rock, Paper, Scissors?", "Rock");
        let outcome = playRound(playerPlay, computerPlay());
        console.log(outcome);
        if (outcome == "win") {
            roundsWon++;
        }
        else if (outcome == "lose") {
            roundsLost++;
        }
        else {
            roundsTied++;
        }
        console.log(roundsWon + "W - " + roundsLost + "L - " + roundsTied + "T");
    }
    results += "Player: " + roundsWon;
    results += "\nComputer: " + roundsLost;
    if (roundsTied > 0) {
        results += "\nTies: " + roundsTied;
    }
    if (roundsWon > roundsLost) {
        results += "\nYou won!";
    }
    else if (roundsWon < roundsLost) {
        results += "\nYou lost!";
    }
    else {
        results += "\nTie game!";
    }
    return results;
}
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerPlay = button.id;
        console.log(playRound(playerPlay, computerPlay()));
    });
});
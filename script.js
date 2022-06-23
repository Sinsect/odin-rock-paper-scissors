//randomly decides and returns computer move between rock, paper, and scissors
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
//compares player and computer choices and returns winner
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
const results = document.querySelector('.results');
const roundText = document.createElement('div');
const playerMoveText = document.createElement('p');
const computerMoveText = document.createElement('p');
const roundResultText = document.createElement('p');
roundText.appendChild(playerMoveText);
roundText.appendChild(computerMoveText);
roundText.appendChild(roundResultText);
const scoreText = document.createElement('p');
const gameEndText = document.createElement('p');
results.appendChild(roundText);
results.appendChild(scoreText);
results.appendChild(gameEndText);
console.log(results.children);
let wins = 0;
let losses = 0;
let ties = 0;
let roundTotal = 0;
let winCondition = 5;
//empty all results data;
function clearResults() {
    wins = 0;
    losses = 0;
    ties = 0;
    roundTotal = 0;
    roundResultText.textContent = "";
    scoreText.textContent = "";
    gameEndText.textContent = "";
}
//update results according to results of round
function updateResults(roundResult) {
    if (wins >= winCondition || losses >= winCondition) {
        clearResults();
    }
    roundResultText.textContent = "Round winner: ";
    switch (roundResult) {
        case "win":
            wins++;
            roundResultText.textContent += " Player";
            break;
        case "lose":
            losses++;
            roundResultText.textContent += " Computer";
            break;
        case "tie":
            ties++;
            roundResultText.textContent += " Tie";
            break;
        default:
            break;
    }
    roundTotal++;
}

function updateResultsText() {
    scoreText.textContent = "\nW: " + wins +
        " L: " + losses + " T: " + ties;
    let outcome = "";
    if (wins == 5) {
        outcome += "Game Over! You win!";
    }
    else if (losses == 5) {
        outcome += "Game Over! You lose!";
    }
    gameEndText.textContent += outcome;

}
// function game() {
//     let numberOfRounds = 5;
//     let roundsWon = 0;
//     let roundsLost = 0;
//     let roundsTied = 0;
//     let resultsTracker = "";
//     updateResults("");
//     for (let i = 0; i < numberOfRounds; i++){
//         let outcome = playRound(playerPlay, computerPlay());
//         console.log(outcome);
//         if (outcome == "win") {
//             roundsWon++;
//         }
//         else if (outcome == "lose") {
//             roundsLost++;
//         }
//         else {
//             roundsTied++;
//         }
//         resultsTracker = roundsWon + "W - " + roundsLost + "L - " + roundsTied + "T";
//         updateResults(resultsTracker);
//     }
//     if (roundsTied > 0) {
//         resultsTracker += "\nTies: " + roundsTied;
//     }
//     if (roundsWon > roundsLost) {
//         resultsTracker += "\nYou won!";
//     }
//     else if (roundsWon < roundsLost) {
//         resultsTracker += "\nYou lost!";
//     }
//     else {
//         resultsTracker += "\nTie game!";
//     }
//     return results;
// }
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerMove = button.id;
        let computerMove = computerPlay();
        let roundResult = playRound(playerMove, computerMove);
        playerMoveText.textContent = "Player: " + playerMove;
        computerMoveText.textContent = "Computer: " + computerMove;
        updateResults(roundResult);
        updateResultsText();
    });
});

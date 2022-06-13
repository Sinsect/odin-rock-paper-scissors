function computerPlay() {
    let roll = Math.floor(Math.random() * 3);
    console.log(roll);
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
console.log(computerPlay());
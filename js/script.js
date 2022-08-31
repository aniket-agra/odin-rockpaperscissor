function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) 
        return "Rock";
    if (number === 1)
        return "Paper";
    if (number === 2)
        return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    // get value of player selection
    let lowerPlayerSelection = playerSelection.toLowerCase();
    // get value of computer selection
    let lowerComputerSelection = computerSelection.toLowerCase();
    // if both equal return draw
    if (lowerPlayerSelection === lowerComputerSelection)
        return `You draw! ${playerSelection} draws with ${computerSelection}`;
    // else check if player loses or wins
        // for each choice of player, player either loses or wins
    else {
        if (lowerPlayerSelection === "rock" && lowerComputerSelection === "paper")
            return `You lose! ${playerSelection} loses over ${computerSelection}`;
        if (lowerPlayerSelection === "paper" && lowerComputerSelection === "scissors")
            return `You lose! ${playerSelection} loses over ${computerSelection}`;    
        if ((lowerPlayerSelection === "scissors" || lowerPlayerSelection === "scissor") && 
            lowerComputerSelection === "rock")
            return `You lose! ${playerSelection} loses over ${computerSelection}`;    
    }
    // return result
    return `You win! ${playerSelection} wins over ${computerSelection}`;
}
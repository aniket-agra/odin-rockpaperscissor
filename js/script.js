function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) 
        return "Rock";
    if (number === 1)
        return "Paper";
    if (number === 2)
        return "Scissors";
}

function capitalize(text) {
    return ((text.charAt(0).toUpperCase()) + text.substring(1));
}

function playRound(playerSelection, computerSelection) {
    // get value of player selection
    let lowerPlayerSelection = playerSelection.toLowerCase();
    // update player selection for printing
    playerSelection = capitalize(lowerPlayerSelection);
    // get value of computer selection
    let lowerComputerSelection = computerSelection.toLowerCase();
    // update computer selection for printing
    computerSelection = capitalize(lowerComputerSelection);
    // if both equal return draw
    if (lowerPlayerSelection === lowerComputerSelection)
        return `You Draw! ${playerSelection} draws with ${computerSelection}`;
    // else check if player loses or wins
        // for each choice of player, player either loses or wins
    else {
        if (lowerPlayerSelection === "rock" && lowerComputerSelection === "paper")
            return `You Lose! ${playerSelection} loses over ${computerSelection}`;
        if (lowerPlayerSelection === "paper" && lowerComputerSelection === "scissors")
            return `You Lose! ${playerSelection} loses over ${computerSelection}`;    
        if ((lowerPlayerSelection === "scissors" || lowerPlayerSelection === "scissor") && 
            lowerComputerSelection === "rock")
            return `You Lose! ${playerSelection} loses over ${computerSelection}`;    
    }
    // return result
    return `You Win! ${playerSelection} wins over ${computerSelection}`;
}

function game(numGames = 5) {
    // plays a game of numGames (default: 5) rounds and keeps score
    // store player score and computer score in a variable 
    // store both since there's a possibility of draws
    let playerScore = 0;
    let computerScore = 0;
    // run a round displaying winner for each round
        // accept player input for each round
    for (let i = 0; i < numGames; i++) {
        let playerSelection = prompt("Enter your call: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        // if player wins increment score, if player loses increment computer score
        if (result.substring(4, 7) === "Win")
            playerScore += 1;
        if (result.substring(4, 7) === "Los")
            computerScore += 1;
    }
    // return whether player wins or loses overall 
    if (playerScore > computerScore)
        console.log(`You Won the game ${playerScore} - ${computerScore}!`);
    else {
        if (playerScore < computerScore)
            console.log(`You Lost the game ${playerScore} - ${computerScore}!`);
        else
            console.log (`It's a draw ${playerScore} - ${computerScore}!`);
    }
}

// listen for click on start button 
const startButton = document.querySelector("button#start");
const playerScore = document.querySelector("#player .score");
const computerScore = document.querySelector("#computer .score");
let pScore;
let cScore;
startButton.addEventListener('click', function (e) {
    // on click - set scores of player and computer to zero - makes start a reset button
    pScore = 0;
    cScore = 0;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
});
// listen for clicks on each of rock/paper/scissors buttons
const playButtons = document.querySelectorAll(".buttons > *");
for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', function (e) {
        if (pScore !== 0 && cScore !== 0)   return;
    });
}
// on click, get choice for computer and play round with the two choices
// increment score based on result 
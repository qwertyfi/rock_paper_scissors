function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    return randomChoice ;
}

let computerSelection  = getComputerChoice();

let playerChoice = prompt('enter you keyword here');
playerSelection = playerChoice.toLowerCase();

function playRound (computerSelection, playerSelection) {
    if (playerSelection === computerSelection){
        return `It's a tie`;
    } else if ( 
        playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === "paper" && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'rock'
    ) {
        return `You've lost the game`;
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === "paper" && computerSelection === 'rock' || playerSelection === 'scissor' && computerSelection === 'paper'
    )  {
        return  `You've won the game, woohoo!!`;
    }
    
} 
let result = playRound(computerSelection, playerSelection);
console.log( `Since you've chosen ${playerChoice} and the computer has chosen ${computerSelection}.
Therefore, ${result}.`)

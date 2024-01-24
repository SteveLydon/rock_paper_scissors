'use strict'

const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "nobody";

function getComputerChoice(){
    let choice = "rock";
    switch(Math.floor(Math.random() * 3 + 1)){
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    let winner = TIE;
    switch(playerSelection.toLowerCase()){
        case "rock":
            if(computerSelection == "scissors"){
                winner = PLAYER;
            }
            else if(computerSelection == "paper"){
                winner = COMPUTER;
            }
            break;
        case "paper":
            if(computerSelection == "scissors"){
                winner = COMPUTER;
            }
            else if(computerSelection == "rock"){
                winner = PLAYER;
            }
            break;
        case "scissors":
            if(computerSelection == "rock"){
                winner = COMPUTER;
            }
            else if(computerSelection == "paper"){
                winner = PLAYER;
            }
            break;
    }
    return winner;
}

function getPlayerChoice(){
    let choice = "";
    while(choice !== "rock" && choice !=="paper" && choice !=="scissors"){
        choice = prompt("Please enter your selection (rock, paper, scissors)").toLowerCase();
    }
    return choice;
}

function printWinner(winner, playerSelection, computerSelection){
    console.log(`   ${winner} was the winner
    player had ${playerSelection}
    computer had ${computerSelection}`);
}

function playGame(){
    let winner = TIE;
    while(winner == TIE){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        winner = playRound(playerSelection,computerSelection);
        printWinner(winner,playerSelection,computerSelection);
    }

}

playGame();
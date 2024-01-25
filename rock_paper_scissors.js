'use strict'

const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "nobody";

let userScore=0;
let pcScore=0;

let btnRock = document.getElementById("rock-btn");
let btnPaper = document.getElementById("paper-btn");
let btnScissors = document.getElementById("scissors-btn");
let userScoreDisplay = document.getElementById("user-score");
let pcScoreDisplay = document.getElementById("pc-score");
let winnerDisplay = document.getElementById("winner");

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

function playRound(playerSelection){
    let winner = TIE;
    let computerSelection = getComputerChoice();
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
    displayWinner(winner, playerSelection, computerSelection);
    adjustScores(winner);
    return winner;
}

function getPlayerChoice(){
    let choice = "";
    while(choice !== "rock" && choice !=="paper" && choice !=="scissors"){
        choice = prompt("Please enter your selection (rock, paper, scissors)").toLowerCase();
    }
    return choice;
}

function adjustScores(winner){
    if(winner == COMPUTER){
        pcScore +=1;
    }
    else if(winner == PLAYER){
        userScore +=1;
    }

    if(pcScore >= 5){
        userScore = 0;
        pcScore = 0;
        winnerDisplay.textContent = COMPUTER + " has won!! Start Again!";
    }
    else if(userScore >= 5){
        userScore = 0;
        pcScore = 0;
        winnerDisplay.textContent = PLAYER + " has won!! Start Again!";
    }

    userScoreDisplay.textContent = "Your Score: " + userScore;
    pcScoreDisplay.textContent = "PC Score: " + pcScore;
}

function displayWinner(winner, playerSelection, computerSelection){
    winnerDisplay.textContent = `${winner} was the winner, player had ${playerSelection}, computer had ${computerSelection}`;
}

btnRock.addEventListener(
    'click', (e)=>{
        playRound("rock");
    }
);
btnPaper.addEventListener(
    'click', (e)=>{
        playRound("paper");
    }
);
btnScissors.addEventListener(
    'click', (e)=>{
        playRound("scissors");
    }
);
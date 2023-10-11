console.log("Hello, let's play Rock Paper Scissors!");

function chooseRock(){
    return "rock";
}

function choosePaper(){
    return "paper";
}

function chooseScissors(){
    return "scissors";
}


function getPlayerChoice(){
    let input = prompt("Rock, paper, Scissors?");
    switch (input.toLowerCase()) {
        case "rock":
            return"rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "Bad Input!";
      }
      
}

function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Bad option!";
      }
}

const myfuncton = function playRound(playerSelection, computerSelection){
    const container = document.querySelector('#container');
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'Rock vs Rock, Tie!';
                    return 0;
                    
                case "paper":
                    container.textContent = 'Rock vs Paper, You Lose!';
                    return -1;
                    
                case "scissors":
                    container.textContent = 'Rock vs Scissors, Win!';
                    return 1;
                    
                default:
                    container.textContent = 'Something went wrong!';
                    return "Something went wrong!";
                    
            }
            
        case "paper":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'Paper vs Rock, Win!';
                    return 1;
                    
                case "paper":
                    container.textContent = 'Paper vs Paper, Tie!';
                    return 0;
                    
                case "scissors":
                    container.textContent = 'Paper vs Scissors, Lose!';
                    return -1;
                    
                default:
                    container.textContent = 'Something went wrong!';
                    return "Something went wrong!";
                    
            }
            
        case "scissors":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'Scissors vs Rock, Lose!';
                    return -1;
                    
                case "paper":
                    container.textContent = 'Scissors vs Paper, Win!';
                    return 1;
                    
                case "scissors":
                    container.textContent = 'Scissors vs Scissors, Tie!';
                    return 0;
                    
                default:
                    return "Something went wrong!";
                    
            }
           
        default:
            return "Bad input!";
            
      }
}


const myObject = myfuncton.bind(this);

document.getElementById("myBtn").addEventListener("click", myObject);
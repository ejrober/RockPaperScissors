console.log("Hello, let's play Rock Paper Scissors!");


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

function playRound(playerSelection, computerSelection){
    const container = document.querySelector('#container');
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'Tie!';
                    return 0;
                    
                case "paper":
                    container.textContent = 'You Lose!';
                    return -1;
                    
                case "scissors":
                    container.textContent = 'Win!';
                    return 1;
                    
                default:
                    container.textContent = 'Something went wrong!';
                    return "Something went wrong!";
                    
            }
            
        case "paper":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'Win!';
                    return 1;
                    
                case "paper":
                    container.textContent = 'Tie!';
                    return 0;
                    
                case "scissors":
                    container.textContent = 'Lose!';
                    return -1;
                    
                default:
                    container.textContent = 'Something went wrong!';
                    return "Something went wrong!";
                    
            }
            
        case "scissors":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'Lose!';
                    return -1;
                    
                case "paper":
                    container.textContent = 'Win!';
                    return 1;
                    
                case "scissors":
                    container.textContent = 'Tie!';
                    return 0;
                    
                default:
                    return "Something went wrong!";
                    
            }
           
        default:
            return "Bad input!";
            
      }
}
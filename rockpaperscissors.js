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
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection){
                case "rock":
                    console.log("You Tie!");
                    return 0;
                    
                case "paper":
                    console.log("You lose!");
                    return -1;
                    
                case "scissors":
                    console.log("You win!");
                    return 1;
                    
                default:
                    return "Something went wrong!";
                    
            }
            
        case "paper":
            switch (computerSelection){
                case "rock":
                    console.log("You win!");
                    return 1;
                    
                case "paper":
                    console.log("You Tie!");
                    return 0;
                    
                case "scissors":
                    console.log("You lose!");
                    return -1;
                    
                default:
                    return "Something went wrong!";
                    
            }
            
        case "scissors":
            switch (computerSelection){
                case "rock":
                    console.log("You lose!");
                    return -1;
                    
                case "paper":
                    console.log("You win!");
                    return 1;
                    
                case "scissors":
                    console.log("You Tie!");
                    return 0;
                    
                default:
                    return "Something went wrong!";
                    
            }
           
        default:
            return "Bad input!";
            
      }
}

function game(){
    let i = 0;
    let wins = 0;
    while (i < 5) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        wins += playRound(playerSelection, computerSelection);
        i++;
    }

    if (wins >=3){
        console.log("You beat the computer!");
    }
    else{
        console.log("You lost to the computer!");
    }
}

game();
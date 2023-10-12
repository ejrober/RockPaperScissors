let playerScore = 0;
let computerScore = 0;

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
                    container.textContent = 'Tie! Player Score \n' + playerScore + ', Computer Score ' + computerScore;
                    return 0;
                    
                case "paper":
                    container.textContent = 'You Lose! Player Score \n' + playerScore + ', Computer Score ' + (computerScore += 1);
                    return -1;
                    
                case "scissors":
                    container.textContent = 'You Win! Player Score \n' + (playerScore += 1) + ' Computer Score ' + computerScore;
                    return 1;
                    
                default:
                    container.textContent = 'Something went wrong!';
                    return "Something went wrong!";
                    
            }
            
        case "paper":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'You Win! Player Score \n' + (playerScore += 1) + ', Computer Score ' + computerScore;
                    return 1;
                    
                case "paper":
                    container.textContent = 'Tie! Player Score \n' + playerScore + ', Computer Score ' + computerScore;
                    return 0;
                    
                case "scissors":
                    container.textContent = 'You Lose! Player Score \n' + playerScore + ', Computer Score ' + (computerScore += 1);
                    return -1;
                    
                default:
                    container.textContent = 'Something went wrong!';
                    return "Something went wrong!";
                    
            }
            
        case "scissors":
            switch (computerSelection){
                case "rock":
                    container.textContent = 'You Lose! Player Score \n' + playerScore + ', Computer Score ' + (computerScore += 1);
                    return -1;
                    
                case "paper":
                    container.textContent = 'You Win! Player Score \n' + (playerScore += 1) + ', Computer Score ' + computerScore;
                    return 1;
                    
                case "scissors":
                    container.textContent = 'Tie! Player Score \n' + playerScore + ', Computer score ' + computerScore;
                    return 0;
                    
                default:
                    return "Something went wrong!";
                    
            }
           
        default:
            return "Bad input!";
            
      }
}

    // the rockButton functionality
    const rockButton = document.querySelector('#rockButton'); //Select the rockButton
    rockButton.addEventListener('click', () => { //Add event listener to the rockButton with anonymous function to play round with user choice rock.
        playRound("rock", getComputerChoice());
    });

    // the paperButton functionality
    const paperButton = document.querySelector('#paperButton'); //Select the paperButton
    paperButton.addEventListener('click', () => { //Add event listener to the paperButton with anonymous function to play round with user choice rock.
        playRound("paper", getComputerChoice());
    });

    // the scissorsButton functionality
    const scissorsButton = document.querySelector('#scissorsButton'); //Select the scissorsButton
    scissorsButton.addEventListener('click', () => { //Add event listener to the scissorsButton with anonymous function to play round with user choice rock.
        playRound("scissors", getComputerChoice());
    });

  
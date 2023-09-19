console.log("Hello, let's play Rock Paper Scissors!");
var playerSelection = prompt("Enter your choice: ");

function checkUserChoice(input){
    if(input == "Rock"){
        console.log("Good! You chose rock!");
    }
    else if(input == "Paper"){
        console.log("Good! You chose paper!");
    }
    else if(input == "Scissors"){
        console.log("Good! You chose scissors!");
    }
    else{
        console.log("Please enter rock, paper, or scissors next time!");
    }
}

function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)
}

checkUserChoice(playerSelection)
getComputerChoice()
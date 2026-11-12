let choice = prompt("Choose rock paper or scissor", "");

function getHumanChoice() {
    if (choice == "rock") {
        return (1); 
    } else if (choice == "paper") {
        return (2);
    } else if (choice == "scissor") {
        return (3);
    }
    else return null;      
    }

let humanChoice = getHumanChoice();
if (humanChoice === null) {
    alert("Wrong answer");
} else {



function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
    alert ("Computer choose rock");
    } else if (random == 2) {
    alert ("Computer choose paper");
    } else {
    alert ("Computer choose scissor");
    }   
}

let computerChoice = getComputerChoice();

function battle (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        alert("draw");
    }

}

let result = battle();

}

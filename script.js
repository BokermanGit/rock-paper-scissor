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

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
    alert ("Computer choose rock");
    } else if (random === 2) {
    alert ("Computer choose paper");
    } else {
    alert ("Computer choose scissor");
    } 
    return random;  
}

function battle (a, b) {
    if (a === b) {
        alert("draw");
    } else if ((a +1) === b || (a - 2) === b) {
        alert("You lose");
    } else  {
    alert ("You win!");
    }
}

let choice = prompt("Choose rock paper or scissor", "");

// let humanChoice = getHumanChoice();
// console.log(humanChoice);

if (getHumanChoice() === null) {
    alert("Wrong answer");
} else {

// let computerChoice = getComputerChoice();
// console.log(computerChoice);

battle(getHumanChoice(), getComputerChoice());

}

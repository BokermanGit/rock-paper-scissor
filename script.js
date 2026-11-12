function playGame(){

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
        return null;
        } else if ((a +1) === b || (a - 2) === b) {
        alert("You lose");
        return false;
        } else  {
        alert ("You win!");
        return true;
        }
    }

    let choice = prompt("Choose rock paper or scissor", "");
    if (getHumanChoice() === null) {
    alert("Wrong answer");
    return;
    }

    let result = battle(getHumanChoice(), getComputerChoice());
    if (result === true) humanScore++;
    else if (result === false) computerScore++;
    rounds++;

    console.log("Round: " + rounds + "  You " + humanScore + " - Computer " + computerScore);

     if (rounds === 5) {
        alert("Game over!");
        if (humanScore === computerScore)
            alert("Draw");
            else if (humanScore < computerScore)
            alert("You lost game!");
            else alert("You won game!");

            humanScore = 0;
            computerScore = 0;
            rounds = 0;
        return;
    } 
     
}

    let humanScore = 0;
    let computerScore = 0; 
    let rounds = 0;
    
document.querySelector("#play").addEventListener("click", playGame);





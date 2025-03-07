// script.js

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    // Update the DOM with the choices and result
    document.getElementById("user-choice").textContent = `You chose: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;
    document.getElementById("game-result").textContent = result;
}

// Get a random computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine the winner
function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    }

    switch (user) {
        case 'rock':
            return computer === 'scissors' ? "You win!" : "You lose!";
        case 'paper':
            return computer === 'rock' ? "You win!" : "You lose!";
        case 'scissors':
            return computer === 'paper' ? "You win!" : "You lose!";
        default:
            return "Invalid choice!";
    }
}

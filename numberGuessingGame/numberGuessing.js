// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum + 1))

let attempts = 0;
let guess;
let running = true;

console.log(answer)

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++
        if(guess < answer){
            window.alert("Too low! Try Again")
        }
        else if(guess > answer){
            window.alert("Too high! Try Again")
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`)
            running = false 
        }
    }
}



// COUNTER PROGRAM
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

// .textContentsets changes or sets the value or text in 
// a HTML element 

// Increase by 1
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

//decrease by 1
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
} 

// reset to 0
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
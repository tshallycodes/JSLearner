// 1. TAKING USER INPUT 
let username;

// username = window.prompt("What is your username?") 
// console.prompt for console
// console.log(username)


// get data when you click submit button
document.getElementById("mySubmit").onclick = function() {
    // set which element to get data from and store it in the username variable
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
    // print out the value or result
    // console.log(username);
}


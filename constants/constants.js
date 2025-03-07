// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

// PI = 420.69;

document.getElementById("mySubmit").onclick = function(){
    // Get radius value from input element
    radius = document.getElementById("myText").value;
    // Convert radius value to a number
    radius = Number(radius);
    // Set formular for circumference
    circumference = 2 * PI * radius;
    // Display circumference value in H3 element 
    document.getElementById("myH3").textContent = circumference + "cm";
}
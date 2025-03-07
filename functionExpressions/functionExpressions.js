// function expressions = a way to define functions as
//                                           values or variables

//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners

// const hello = function(){
//     console.log("Hello");
// }
 
// hello();
 
// setTimeout(function() {
//      console.log("Goodbye");
// }, 3000);


// Function Declaration
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square)

console.log(squares)

function square(element){
    return Math.pow(element, 2)
}

// Function Expression
squares = numbers.map(function(element){
    return  Math.pow(element, 2)
})
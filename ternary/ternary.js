// ternary operator = a shortcut to if() and else() statements
// helps to assign a variable based on a condition
// syntax ==           condition ? codeifTrue : codeifFalse

// Example 1
// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message)

// Example 2
// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting)

let purchaseAmount = 125
let discount = purchaseAmount >= 100 ? "Here's a 10% discount, new price is " + (purchaseAmount - (0.1 * purchaseAmount)) : "Not eligible for discount. Thanks"
console.log(discount)



// Longer code
// if(age >= 18){
//     message = "You're an adult";
// }
// else{
//     message = "You're a minor";
// }
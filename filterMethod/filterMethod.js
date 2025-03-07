// .filter() = creates a new array by filtering out
//                 elements with a callback



// ---------- EXAMPLE 1 ----------
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// } 


// EXAMPLE 2
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const shortwords = words.filter(getshortwords);
const longwords = words.filter(getlongwords)

console.log(shortwords);
console.log(longwords);

function getshortwords(element){
    return element.length <= 6;
}

function getlongwords(element){
    return element.length > 6;
}

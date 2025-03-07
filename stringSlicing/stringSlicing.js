// string slicing = creating a substring 
//                            from a portion of another string
//                             string.slice(start, end)

// ----------- EXAMPLE 1 -----------
const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);

console.log(firstName);
console.log(lastName);

// ----------- EXAMPLE 2 -----------

const email = "Bro1@gmail.com";
// end at the index of the first @
let username = email.slice(0, email.indexOf("@"));
// go to the first @ then start on the next char
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
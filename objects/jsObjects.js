// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

console.log(person1.firstName);
person1.sayHello();
person1.eat();

let dictionaryMap = new Map();
dictionaryMap.set("apple", "a fruit");
dictionaryMap.set("banana", "a yellow fruit");
dictionaryMap.set("car", "a vehicle");

console.log(dictionaryMap.get("apple")); // Output: a fruit

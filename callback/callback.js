// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

hello(goodbye); // It makes sure the function passed as an argument is executed next.
wait();
function hello(callback){
    console.log("Hello!");
    callback(); 
}

function wait(){
    console.log("wait");
}

function goodbye(){
    console.log("Goodbye!");
}



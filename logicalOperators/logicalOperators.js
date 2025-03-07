// logical operators =  used to combine or manipulate Boolean values 
//                                    (true or false)

// AND = &&
// OR  = ||
// NOT = !=

let username = "me";
let age = 18



if(username != "me" && age != 18){
    console.log("Wrong username")
}
else if(username != "me" || age != 18){
    console.log("correct username")
}
else{
    console.log("Correct username and age")
}
// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage. 

let buttons = document.querySelectorAll(".myButtons")
buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "dd";
        }
        else{
            event.target.classList.replace("enabled", "disabled")
        }
        event.target.classList.replace("enabled", "disabled");
    });
});
 
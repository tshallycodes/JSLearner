const myImg = document.getElementById("myImg")
const myButton = document.getElementById("myButton")
 

myButton.addEventListener("click", event => {

    if(myImg.style.display === "none"){
        myImg.style.display = "block"
        myButton.textContent = "Hide"
        myButton.style.marginTop = "0px"
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "Show"
        myButton.style.marginTop ="150px"
    }
})

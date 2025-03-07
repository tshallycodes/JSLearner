// Dice Roller

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value);
        const image = value === 1
            ? `<img src="images/one.png" alt="1" style="width: 50px;">`
            : value === 2
            ? `<img src="images/two.png" alt="2" style="width: 50px;">`
            : value === 3
            ? `<img src="images/three.png" alt="3" style="width: 50px;">`
            : value === 4
            ? `<img src="images/four.png" alt="4" style="width: 50px;">`
            : value === 5
            ? `<img src="images/five.png" alt="5" style="width: 50px;">`
            : `<img src="images/six.png" alt="6" style="width: 50px;">`;

        images.push(image)
    }
        // Display the dice results
        diceResult.textContent = `Dice: ${values.join(", ")}`;

        // Render the dice images
        diceImages.innerHTML = images.join(" ");
    
}
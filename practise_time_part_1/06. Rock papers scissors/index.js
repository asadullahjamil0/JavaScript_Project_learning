let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHands(){
    let randomValue = Math.floor(Math.random() * 3) 
    console.log(hands[randomValue]);
}

getHands();

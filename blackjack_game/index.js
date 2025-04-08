let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let hasBlackJack = false;
let isAllive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let sum = firstCard + secondCard;


function startGame(){

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Whoo! You've got blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of game!";
        isAllive = true;
    }   
    messageEl.textContent = message;
    sumEl.innerText = `Sum:${sum}`;
    cardsEl.innerHTML =  `Cards: ${firstCard} ${secondCard}`
}

function newCard(){
    console.log("New Card created!");
    
}


let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let isAllive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let sum = cards[0] + cards[1];

function startGame() {
    renderGame();
}

function renderGame() {

    sumEl.innerText = `Sum:${sum}`;

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += ` ${cards[i]}`;
    }
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
}

function newCard() {
    let card = Math.floor(Math.random() * 10) + 2;
    cards.push(card);
    sum += cards[2];
    cardsEl.innerHTML =  "Cards: ";
    renderGame(); 
}


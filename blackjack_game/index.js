let cards = []
let hasBlackJack = false;
let isAllive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let sum = 0;

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        console.log(randomNumber);
        return 11;
    } else if (randomNumber > 10) {
        console.log(randomNumber)
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAllive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards = [firstCard , secondCard]
    sum = cards[0] + cards[1];

    renderGame();
}

function renderGame() {

    cardsEl.innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]}`;
    }

    sumEl.innerText = `Sum:${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Whoo! You've got blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of game!";
        isAllive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    cards.push(card);
    sum += cards[2];
    renderGame();
}


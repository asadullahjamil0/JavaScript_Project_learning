let cards = []
let sum = 0;
let hasBlackJack = false;
let isAllive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let nameEl = document.getElementById("name-el");

let player = {
    playerName: "Jack",
    playerChips: 145
}

nameEl.innerHTML = `${player.playerName}: $${player.playerChips}`;



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAllive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;

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
        player.playerChips = 100;
        nameEl.innerHTML = `${player.playerName}: $${player.playerChips}`;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAllive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}


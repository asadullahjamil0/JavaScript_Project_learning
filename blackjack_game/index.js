let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let hasBlackJack = false;
let isAllive = true;
let message = "";

let sum = firstCard + secondCard;
console.log(sum);

if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message = "Whoo! You've got blackjack";
    hasBlackJack = true;
} else {
    message = "You're out of game!";
    isAllive = true;
}

console.log(message);



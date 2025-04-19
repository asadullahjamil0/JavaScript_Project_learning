/* adjectives :
Crazy Amazing Fire
Shop Name :
Engine Food Garments
Another word:
Bros Limited Hub
*/
const randomNumber1 = Math.floor(Math.random() * 3) + 1;
const randomNumber2 = Math.floor(Math.random() * 3) + 1;
const randomNumber3 = Math.floor(Math.random() * 3) + 1;

const obj1 = {
    1 : "Crazy",
    2 : "Fire",
    3 : "Amazing"
}

const obj2 = {
    1 : "Engine",
    2 : "Food",
    3 : "Garments"
}

const obj3 = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

//Shorter Version to get random names
function nameGenerator (){
    return `${obj1[randomNumber1]} ${obj2[randomNumber2]} ${obj3[randomNumber3]}`

}

//Another solution but very lengthy
// function nameGenerator() {
//     let name, shop, suffix;

//     if (randomNumber1 == 1) {
//         name = "Crazy";
//     } else if (randomNumber1 == 2) {
//         name = "Amazing";
//     } else {
//         name = "Fire"
//     }

//     if (randomNumber2 == 1) {
//         shop = "Engine";
//     } else if (randomNumber2 == 2) {
//         shop = "Food";
//     } else {
//         shop = "Garments";
//     }

//     if (randomNumber3 == 1) {
//         suffix = "Bros";
//     } else if (randomNumber3 == 2) {
//         suffix = "Limited";
//     } else {
//         suffix = "Hub";
//     }
//     return `${name} ${shop} ${suffix}`
// }

console.log(nameGenerator());
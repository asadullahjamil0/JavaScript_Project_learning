const getBoxes = document.querySelectorAll(".box");
const colorBtn = document.getElementById("color-btn");

//by for loop
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.backgroundColor = "red";
// }

function getRandomColor() {
    const randomNumber1 = Math.floor(Math.random() * 255) + 1;
    const randomNumber2 = Math.floor(Math.random() * 255) + 1;
    const randomNumber3 = Math.floor(Math.random() * 255) + 1;
    return `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

// by forEach loop
function renderBoxes() {
    return getBoxes.forEach(e => {
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
        e.style.border = "1px solid white";
    })
}

colorBtn.addEventListener('click', function () {
    return renderBoxes();
})
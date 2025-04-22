const btn = document.querySelector(".btn");
const cntr = document.querySelector(".container");
const output = document.getElementById("pre");

function randomNumber() {
    let rndm = Math.floor(Math.random() * 255) + 1;
    return rndm;
}

function handleClick(e) {
    output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
  }

cntr.addEventListener('click', (e) => {
    console.log(e);
    let rndmClr = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = rndmClr;
    btn.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
})

//Event Bubbling
btn.addEventListener('click', handleClick);
document.body.addEventListener('click', handleClick);
cntr.addEventListener('click', handleClick);

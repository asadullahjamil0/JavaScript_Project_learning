
let myLead = ["Facebook.com", "Amazon.com", "linkedin.com"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let renderBtn = document.getElementById("render-btn");

inputBtn.addEventListener('click', function () {
    console.log("Button Clicked from addEventListener!");
    myLead.push(inputEl.value);
    console.log(myLead);
})


for (let i = 0; i < myLead.length; i++) {
    // ulEl.innerHTML += `<li>${myLead[i]}</li>`;

    //Another way to create elements
    const li = document.createElement("li");
    li.textContent = myLead[i];
    ulEl.append(li);
}

renderBtn.addEventListener('click', function (){
    renderBtn.innerHTML = "Thank you for buying!";
    
})
renderBtn.innerHTML = "<button>Buy</button>";



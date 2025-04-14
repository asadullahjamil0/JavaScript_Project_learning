let myLead = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener('click', function () {
    myLead.push(inputEl.value);
    renderFunction();
    inputEl.value = "";
})


function renderFunction() {
    let listItem = "";
    for (let i = 0; i < myLead.length; i++) {
        // ulEl.innerHTML += `<li>${myLead[i]}</li>`;

        //Another way to create elements
        // const li = document.createElement("li");
        // li.textContent = myLead[i];
        // ulEl.append(li);

        listItem += `<li>${myLead[i]}</li>`
    }
    ulEl.innerHTML = listItem;
}

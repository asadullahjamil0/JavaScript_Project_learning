let myLead = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// localStorage.setItem("Key", "value.com");
localStorage.clear();


inputBtn.addEventListener('click', function () {
    myLead.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLead.length; i++) {
        listItems += `<li>
          <a href="https://${myLead[i]}.com" target="_blank">
            www.${myLead[i]}.com
          </a>
        </li>`
    }
    ulEl.innerHTML = listItems;
}

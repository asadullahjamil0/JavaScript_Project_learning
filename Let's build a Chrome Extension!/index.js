let myLead = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

if (leadFromLocalStorage) {
  myLead = leadFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener('click', function () {
  myLead.push(inputEl.value);
  
  localStorage.setItem("myLead", JSON.stringify(myLead));
  
  renderLeads();
  inputEl.value = "";
  
})


function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLead.length; i++) {
    listItems += `<li>
          <a href="https://${myLead[i]}" target="_blank">
            ${myLead[i]}
          </a>
        </li>`
  }
  ulEl.innerHTML = listItems;
}

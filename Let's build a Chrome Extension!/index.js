let myLead = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));
if (leadFromLocalStorage) {
  myLead = leadFromLocalStorage;
  render(myLead);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
          <a href="https://${leads[i]}" target="_blank">
            ${leads[i]}
          </a>
        </li>`
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener('click', function () {
  myLead.push(inputEl.value);

  localStorage.setItem("myLead", JSON.stringify(myLead));

  render(myLead);
  inputEl.value = "";
})

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLead = [];
  ulEl.textContent = "";
})
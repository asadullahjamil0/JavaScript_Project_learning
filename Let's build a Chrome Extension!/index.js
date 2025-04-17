let myLead = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));
if (leadFromLocalStorage) {
  myLead = leadFromLocalStorage;
  render(myLead);
}

tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLead.push(tabs[0].url);
    localStorage.setItem("myLead", JSON.stringify(myLead));
    render(myLead);
  })
})

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a href="${leads[i]}" target="_blank">
        ${leads[i]}
      </a>
    </li>`
  }
  ulEl.innerHTML = listItems;
  console.log(ulEl.textContent);
  
}



inputBtn.addEventListener('click', function () {
  let inputVal = inputEl.value.trim();
  if (!inputVal.startsWith("https://") && !inputVal.startsWith("http://")) {
    inputVal = "https://" + inputVal;
  }

  myLead.push(inputVal);

  localStorage.setItem("myLead", JSON.stringify(myLead));
  render(myLead);
  inputEl.value = "";
})

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLead = [];
  ulEl.textContent = "";
})
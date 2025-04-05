let content = document.getElementById("count-el");
let savedContent = document.getElementById("saved-content");
let previousEn = document.getElementById("previousEn");

let count = 0;
function increment() {
    count += 1;
    content.innerText = count;
}

function save() {
    savedContent.innerText = "Your saved score is:" + count;
    previousEn.innerText += count + "-";
}
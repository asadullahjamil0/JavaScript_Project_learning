let content = document.getElementById("count-el");
let savedContent = document.getElementById("saved-content");
let previousEn = document.getElementById("previousEn");
let count = 0;

function increment() {
    count += 1;
    content.innerHTML = count;
}

function save() {
    savedContent.innerHTML = "Current Entry:" + count;
    previousEn.innerHTML += count + " - ";
    content.innerHTML = 0;
    count = 0;
}
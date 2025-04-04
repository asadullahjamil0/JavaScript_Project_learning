let content = document.getElementById("count-el"); 
let savedContent = document.getElementById("saved-content");

let count = 0;
function increment(){
    count = count + 1;
    content.innerText = count;
}

function save(){
    savedContent.innerText = "Your saved score is:" + count;
    console.log("Saved!")
}
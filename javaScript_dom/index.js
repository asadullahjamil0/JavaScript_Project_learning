const boxes = document.querySelectorAll(".box");

//by for loop
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "red";
}

// by forEach loop
boxes.forEach(e =>{
    e.style.backgroundColor = "green";
    e.style.color = "white";
    e.style.border = "none";
})
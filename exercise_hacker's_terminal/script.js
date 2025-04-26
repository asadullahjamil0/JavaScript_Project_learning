const contentEl = document.getElementById("content-el");
let dotEl = document.getElementById("dot");

const arr = ["Initializing Hacking", "Reading your files", "Password Files Detected", "Sending all passwords and personal files to server", "Cleaning up"]

function getRandomDelay() {
    let timeOut = Math.floor((1 + 6 * Math.random()) * 1000);
    console.log(timeOut);
    return timeOut;
}

async function getData(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            contentEl.innerHTML += `${str}...<br>`;
            resolve("Success")
        }, getRandomDelay())
    })
}

async function displayData() {
    for (let i = 0; i < arr.length; i++) {
        await getData(arr[i]);
    }
}
displayData();
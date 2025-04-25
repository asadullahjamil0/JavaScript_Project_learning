const contentEl = document.getElementById("content-el");

const arr = ["Initializing Hacking...", "Reading your files...", "Password Files Detected...", "Sending all passwords and personal files to server...", "Cleaning up..."]

async function getData(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            contentEl.innerHTML += `${str}<br>`;
            resolve("Success")
        }, 3000)
    })
}

async function displayData() {
    for (let i = 0; i < arr.length; i++) {
        let data = await getData(arr[i]);
    }
}

displayData();
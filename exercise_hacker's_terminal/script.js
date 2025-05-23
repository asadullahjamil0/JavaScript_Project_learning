function getRandomDelay() {
    let timeOut = Math.floor((1 + 6 * Math.random()) * 1000);
    return timeOut;
}

async function getData(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dv = document.createElement("div");
            dv.innerHTML = str;
            document.body.append(dv);

            resolve("Success")
        }, getRandomDelay())
    })
}

async function displayData() {
    const arr = ["Initializing Hacking", "Reading your files", "Password Files Detected", "Sending all passwords and personal files to server", "Cleaning up", "Cleaned"]

    for (let i = 0; i < arr.length; i++) {
        await getData(arr[i]);
        let t = setInterval(() => {
            let last = document.body.querySelectorAll("div");
            last = last[last.length - 1]
            if (last.innerHTML.endsWith("...")) {
                last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 1);
            } else {
                last.innerHTML = last.innerHTML + ".";
            }
        }, 500);   
    }
    clearInterval();
}
displayData();
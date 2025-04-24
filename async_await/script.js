// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success")
//         }, 3000)
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    return data
}

async function main() {
    console.log("Doing Something");
    console.log("Doing Another Thing");

    //Async await function to wait for previous action
    let data = await getData();
    console.log(data);
    console.log("Doing After await");
}

main();
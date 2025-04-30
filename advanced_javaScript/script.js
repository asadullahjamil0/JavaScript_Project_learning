
async function sleep(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(n);
            resolve(n + " Resolved")
        }, 1000)
    })
}

//IIFE - immediately invoked function in JavaScript
// (async function main() {
//     console.log("This is IIFE")
//     let a = await sleep("First");
//     console.log(a);
//     let b = await sleep("Second");
//     console.log(b);
// })();

// Spread Operator
(async function main() {
    let [x, y, ...rest] = [1, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (let e of rest) {
        console.log(e);
    }

    //Destructuring
    const obj = {
        'name': "AsadUllah",
        'username': 'asad234',
        address: {
            str: "Main Str",
            house: 5,
            location: {
                City: "Sheikhupura",
                Division: "Lahore",
                Country: "Pakistan"
            }
        }
    }

    //Nested Destructuring
    let { name, username, address: { str, house, location: { City, Division, Country } } } = obj
    console.log(`Name:${name}, Username:${username}, Street:${str}, House No:${house}, City:${City}, Division:${Division} Country:${Country}`);

})();


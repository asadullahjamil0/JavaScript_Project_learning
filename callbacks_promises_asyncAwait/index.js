// console.log("First");
// console.log("Second");

// setTimeout(() => {
//     console.log("Third: Hey I am inside setTimeOut");

// }, 3000)

// console.log("Fourth");
// console.log("Fifth");

// // More in Callback functions
// function getData(dataId, getNextData) {
//     return promise =  new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("success")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000)
//     })
// }

//This is called callback Hell in JavaScript which we can say nested callbacks
// getData(12, () => {
//     console.log("Getting data13...");
//     getData(13, () => {
//         console.log("Getting data14...");
//         getData(14, () => {
//             console.log("Getting data15...");
//             getData(15, () => {
//                 console.log("Getting data16...");
//                 getData(16);
//             })
//         });
//     });
// });

// const getPromise1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1 Successfully fetched!");
//             resolve("success");
//             // reject("Rejected");
//         }, 4000)
//     })
// }

// const getPromise2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2 Successfully fetched!");
//             resolve("success");
//             // reject("Rejected");
//         }, 4000)
//     })
// }

// console.log("Fetching data1...");
// getPromise1().then((res) => {
//     console.log("Fetching Data2...");
//     getPromise2().then((res) => {
//         console.log(res);
//     })
// })

//Another Example of using promise
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data" + dataId);
            resolve("Success");
            // reject("Rejected")
        }, 3000)
    })
}

console.log("Getting data1...");
getData(1).then(() => {
    console.log("Getting data2...");
    return getData(2);
}).then(() => {
    console.log("Getting data3...");
    return getData(3);
}).then((res) => {
    console.log(res);
})

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//         getData(3).then((res) => {
//             console.log(res);
//         }).catch((rej) => {
//             console.log(rej);
//         })
//     }).catch((rej) => {
//         console.log(rej);
//     })
// }).catch((rej) => {
//     console.log(rej);
// })
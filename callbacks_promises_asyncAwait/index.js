// console.log("First");
// console.log("Second");

// setTimeout(() => {
//     console.log("Third: Hey I am inside setTimeOut");

// }, 3000)

// console.log("Fourth");
// console.log("Fifth");

// // More in Callback functions
function getData(dataId, getNextData) {
    return promise =  new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success")
            if (getNextData) {
                getNextData();
            }
        }, 2000)
    })
}

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

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("Reject");
// })
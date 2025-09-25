// function createCounter() {
//     let count = 0; // `count` is a private variable

//     return {
//         increment: function() {
//             count++;
//             console.log("Count after increment:", count);
//         },
//         decrement: function() {
//             count--;
//             console.log("Count after decrement:", count);
//         },
//         reset: function() {
//             count = 0;
//             console.log("Counter reset. Count:", count);
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// // Usage:
// const counter1 = createCounter();
// counter1.increment(); // Count after increment: 1
// counter1.increment(); // Count after increment: 2
// console.log("Current count:", counter1.getCount()); // 2
// counter1.decrement(); // Count after decrement: 1
// counter1.reset();     // Counter reset. Count: 0


// function createDelayedLoggers(messages) {
//   const loggers = [];

//   for (let i = 0; i < messages.length; i++) {
//     loggers.push(function() {
//       setTimeout(function() {
//         console.log(messages[i]);
//       }, i * 1000);
//     });
//   }

//   return loggers;
// }

// const messages = ["First", "Second", "Third"];
// const loggers = createDelayedLoggers(messages);

// Call each logger
// loggers[0](); // Logs "First" after 0s
// loggers[1](); // Logs "Second" after 1s
// loggers[2](); // Logs "Third" after 2s

//Another example of closure 

// Unusual Closure: Self-destructing counter
function secretCounter(limit) {
  let count = 0;

  return function () {
    if (count >= limit) {
      console.log("⛔ Counter destroyed!");
      return (() => "This closure is gone!")(); // weird self-execution
    }
    count++;
    console.log("Count:", count);
  };
}

// Create a closure with hidden state
const counter = secretCounter(3);

counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
counter(); // ⛔ Counter destroyed!
counter(); // Always "This closure is gone!"


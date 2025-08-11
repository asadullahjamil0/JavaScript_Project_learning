function createCounter() {
    let count = 0; // `count` is a private variable

    return {
        increment: function() {
            count++;
            console.log("Count after increment:", count);
        },
        decrement: function() {
            count--;
            console.log("Count after decrement:", count);
        },
        reset: function() {
            count = 0;
            console.log("Counter reset. Count:", count);
        },
        getCount: function() {
            return count;
        }
    };
}

// Usage:
const counter1 = createCounter();
counter1.increment(); // Count after increment: 1
counter1.increment(); // Count after increment: 2
console.log("Current count:", counter1.getCount()); // 2
counter1.decrement(); // Count after decrement: 1
counter1.reset();     // Counter reset. Count: 0

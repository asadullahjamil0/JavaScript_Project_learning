// Simulated API call with a delay
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1: { name: 'Alice', age: 25 },
                2: { name: 'Bob', age: 30 },
                3: { name: 'Charlie', age: 35 }
            };
            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        }, 2000); // Simulates a 2 second delay
    });
}

// Async function using await
async function showUserData(userId) {
    try {
        console.log("Fetching user data...");
        const user = await fetchUserData(userId);
        console.log("User data received:", user);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
showUserData(1);

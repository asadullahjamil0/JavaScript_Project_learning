try {
    const jsonString = '{"name": "John", "age": 30}'; // Valid JSON
    const user = JSON.parse(jsonString);

    console.log('Parsed user:', user);
} catch (err) {
    console.error('Caught error:', err.message);
} finally {
    console.log('This runs no matter what.');
}

// Same code but with a minor error here
// try {
//     const jsonString = '{"name": "John", "age": 30}'; // Valid JSON
//     const user = JSON.parse(jsonString);

//     console.log('Parsed user:', user1);
// } catch (err) {
//     console.error('Caught error:', err.message);
// } finally {
//     console.log('This runs no matter what.');
// }


// Another example of error hanlding technique try catch
try {
    // Code that might throw an error
    console.log("Trying to execute code...");
    let result = 10 / 0;
    console.log("Result is:", result);

    // You can also throw a custom error
    if (result === Infinity) {
        throw new Error("Division by zero detected!");
    }

} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);

} finally {
    // Code that will always run, regardless of error
    console.log("This will always run, error or not.");
}

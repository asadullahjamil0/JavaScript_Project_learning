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

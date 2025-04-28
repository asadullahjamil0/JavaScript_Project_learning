let a = prompt("Enter first number:")
let b = prompt("Enter Second number:")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This sytax is not allowed!");
}

let sum = parseInt(a) + parseInt(b)

function main() {

    try {
        console.log("The sum is:", sum * x)
        return true
    } catch (error) {
        // console.log(error.name);
        // console.log(error.message)
        // console.log(error.stack)
        // throw ReferenceError("Reference Error detected!")
        console.log("Error detected");
        return false
    } finally {
        console.log("Files are being closed and db connections is closed");
    }
}

let c = main();
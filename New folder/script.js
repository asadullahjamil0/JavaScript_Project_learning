function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers.");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

function runDivision(a, b) {
  try {
    const result = divide(a, b);
    console.log(`Result: ${result}`);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Type Error:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  } finally {
    console.log("Division attempt finished.\n");
  }
}

// Test cases
runDivision(10, 2);     // Valid
runDivision(10, 0);     // Division by zero
runDivision("10", 2);   // Type error

let randomAge = Math.floor(Math.random() * 100 ) + 1;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the Age variable

console.log(randomAge);

if (randomAge < 6) {
    console.log("Free");
} else if (randomAge < 18) {
    console.log("Child Discount");
} else if (randomAge < 27) {
    console.log("Student Discount");
} else if (randomAge < 67) {
    console.log("Full price");
} else {
    console.log("Senior citizen discount");
}
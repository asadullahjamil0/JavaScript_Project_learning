let a = 7;

//Factorial using for loop
function factorial(a) {
    if (a < 0) {
        return `Factorial can't be calculate for negative numbers.`;
    }
    let num = 1;
    for (let i = 1; i <= a; i++) {
      num *= i;
    }
  return num;
}
console.log(factorial(a))
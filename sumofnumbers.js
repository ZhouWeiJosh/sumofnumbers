"use strict";
function sumFor(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function sumWhile(numbers) {
    let sum = 0;
    while (numbers.length > 0) {
        sum += numbers.pop();
    }
    return sum;
}
function sumRecursion(numbers) {
    let sum = 0;
    if (numbers.length === 0) {
        return 0;
    }
    sum = numbers.pop() + sumRecursion(numbers);
    return sum;
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(`For loop sum: ${sumFor([1, 2, 3, 4])}`);
console.log(`While loop sum: ${sumWhile([1, 2, 3, 4])}`);
console.log(`Recursion sum: ${sumRecursion([1, 2, 3, 4])}`);
console.log(`Functional sum: ${sumTheFunctionalWay([1, 2, 3, 4])}`);

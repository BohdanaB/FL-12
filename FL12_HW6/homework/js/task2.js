let a = parseFloat(prompt('Enter a value'));
let b = parseFloat(prompt('Enter b value'));
let c = parseFloat(prompt('Enter c value'));



if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Input values should be ONLY numbers ');
} else if (a + b < c || a + c < b || b + c < a) {
    console.log('Triangle doesn’t exist');
} else if (a === b && b === c && a === c) {
    console.log('Equilateral triangle');
} else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle');
} else if (a !== b && a !== c && b !== c) {
    console.log('Scalene triangle');
} else {
    alert('Invalid data type, please try again!');
}
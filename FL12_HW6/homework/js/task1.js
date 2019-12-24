let a = parseFloat(prompt('Enter a value'));
let b = parseFloat(prompt('Enter b value'));
let c = parseFloat(prompt('Enter c value'));
let sq = b * b;
let fo = 4;
let D = sq - fo * a * c;
let tu = 2;
let x1 = Math.round((-b + Math.sqrt(D)) / (tu * a));
let x2 = Math.round((-b - Math.sqrt(D)) / (tu * a));


if (D < 0) {
    console.log('No solution!');
} else if (isNaN(x1) || isNaN(x2)) {
    console.log('Invalid input data')
} else if (D === 0) {
    console.log('x1 = x2 = ' + x1);
} else if (D > 0) {
    console.log('x1 = ' + x1 + ' and x2 = ' + x2);
} else {
    console.log('Invalid data type! Please, try again..');
}
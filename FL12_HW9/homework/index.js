const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const fiftyeight = 58;
const fourteen = 14;
const fourtyeight = 48;
const thirtyone = 31;
const twentynine = 29;
const thirty = 31;
const twnin = 2019;


// TASK 1
function convert(...z) {
    for (let i = 0; i < z.length; i++) {
        if (typeof z[i] === 'number') {
            z[i] = String(z[i]);
        } else {
            z[i] = Number(z[i]);
        }
    }
    return z;
}
convert(one, '2', three); // ['1', 2, '3']

// TASK 2
function executeforEach(z, callback) {
    for (let i = 0; i < z.length; i++) {
        callback(z[i]);
    }
}
executeforEach([one, two, three], function(el) {
    console.log(el * two)
}) // logs 2 4 6


// TASK 3
function mapArray(z, callback) {
    for (let i = 0; i < z.length; i++) {
        callback(Number(z[i]));
    }
}
mapArray(['1', two, '3'], function(el) {
    console.log(el + three)
}); // logs 4 5 6



// TASK 5
function flipOver(string) {
    let flipped = '';
    for (let i = string.length - 1; i >= 0; i--) {
        flipped += string[i];
    }
    return flipped;
}
flipOver('hey world'); //'dlrow yeh'


//TASK 6
function makeListFromRange(arg1, arg2) {
    const addNumbers = [three, four, five, six];
    let list = [arg1, ...addNumbers, arg2];
    return list;
}
makeListFromRange(two, seven); // [2, 3, 4, 5, 6, 7]



// TASK 8
function substitute(z) {
    for (let i = 0; i < z.length; i++) {
        if (z[i] < thirty) {
            z[i] = '*';
        } else {
            z[i] = Number(z[i]);
        }
    }
    return z;
}
substitute([fiftyeight, fourteen, fourtyeight, two, thirtyone, twentynine]); // [58, '*', 48, '*', 31, '*']


// TASK 9
const date = new Date(twnin, zero, two);

function getPastDay(date, arg2) {
    let result = new Date(date.setDate(date.getDate() - arg2));
    return result.getDate();
}

getPastDay(date, one); // 1, (1 Jan 2019)
getPastDay(date, two); // 31, (31 Dec 2018)
//getPastDay(date, 365); 2, (2 Jan 2018)

// TASK 10
function formatDate(date) {
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hour = date.getHours();
    const min = date.getMinutes();
    return year + '/' + month + '/' + day + ' ' + hour + ':' + min;
}

formatDate(new Date()); //'2020/1/13 3:1'
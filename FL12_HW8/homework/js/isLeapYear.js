function isLeapYear(argument) {
    let date = argument;
    let response;
    if ((date % 4 === 0 && date % 100 !== 0) || date % 400 === 0) {
        response = date + ' is a leap year';
    } else {
        response = date + ' is not a leap year';
    }
    return (response);
}

isLeapYear(2020);
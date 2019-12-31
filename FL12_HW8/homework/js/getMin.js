function getMin() {
    let minNr = arguments[0];
    let i;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < minNr) {
            minNr = arguments[i];
        }
    }
    return minNr;
}

getMin(5, 15, 7, 7, 8, 1, -9, 10000, -3509);
function makeNumber(string) {
    let numbers = [];
    let words = string.split('');
    for (let i = 0; i < words.length; i++) {
        numbers.push(+words[i] || '');
    }
    return numbers.join('');
}

makeNumber("AEHGkjnkkr973458276926kdsnjkESG46534969157777711111");
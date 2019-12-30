let userChance = confirm('Do you want to play a game?');
if (userChance === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let endConf = true;
    let i = 0;
    let win = 0;
    do {
        i++;
	    const four = 4;
        let chanceNr = four + four * i;
        let magicNumber = Math.round(Math.random() * chanceNr);
        console.log(magicNumber);
        const hundr = 100;
        let prize1 = hundr * i;
        let userAttempt1 = parseFloat(prompt('Choose a roulette pocket number from 0 to ' + 
                            chanceNr + '\nAttempts left: 3 \nTotal prize: ' + 
                            win + '$ \nPossible prize on current attempt: ' + prize1 + '$'));
        if (userAttempt1 === magicNumber) {
            let win1 = win + prize1;
            win = win1;
            alert('Congratulations, you won! Your prize is: ' + prize1 + '$.');
        } else {
            const fifty = 50;
            let prize2 = fifty * i;
            let userAttempt2 = parseFloat(prompt('Choose a roulette pocket number from 0 to ' + 
                                chanceNr + ' \nAttempts left: 2 \nTotal prize: ' + 
                                win + '$\nPossible prize on current attempt: ' + prize2 + '$'));
            if (userAttempt2 === magicNumber) {
                let win2 = win + prize2
                win = win2;
                alert('Congratulations, you won! Your prize is: ' + prize2 + '$.');
            } else {
                const twfif = 25;
                let prize3 = twfif * i;
                let userAttempt3 = parseFloat(prompt('Choose a roulette pocket number from 0 to ' + 
                                   chanceNr + '\nAttempts left: 1 \nTotal prize: ' + 
                                   win + '$ \nPossible prize on current attempt: ' + prize3 + '$'));
                if (userAttempt3 === magicNumber) {
                    let win3 = win + prize3;
                    win = win3;
                    alert('Congratulations, you won! Your prize is: ' + prize3 + '$.');
                } else {
                    alert('Thank you for your participation. Your prize is: ' + win + '$');
                }
            }
        }
        endConf = confirm('Do you want to play again?');
    }
    while (endConf === true);
}
let email = prompt('Please, enter your email');
const five = 5;
const six = 6;
if (email === '' || email === null || email === 'null') {
    alert('Canceled');
} else if (email.length < five) {
    alert('I don’t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Please, enter your password');
    if (password === '' || password === null || password === 'null') {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
               email === 'admin@gmail.com' && password === 'AdminPass') {
        console.log('Correct password');
        let changeRequest = confirm('Do you want to change your password?');
        if (changeRequest === false) {
            alert('You have failed the change.')
        } else {
            let password = prompt('Please, enter your old password');
            if (email === 'user@gmail.com' && password === 'UserPass' ||
                email === 'admin@gmail.com' && password === 'AdminPass') {
                console.log('Correct password');
                let newPassword1 = prompt('Please, enter NEW password');
                if (newPassword1 === '' || newPassword1 === null || newPassword1 === 'null') {
                    alert('Canceled');
                } else if (newPassword1.length < six) {
                    alert('It’s too short password. Sorry.');
                } else if (newPassword1.length >= six) {
                    let newPassword2 = prompt('Please, enter new password AGAIN');
                    if (newPassword1 === newPassword2) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
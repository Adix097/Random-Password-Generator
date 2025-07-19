const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const setOfNumbers = '0123456789';
const setOfSymbols = '!@#$%^&*()_-+=[];/.,<>?:"{}|~`';

const passwordLength = document.getElementById('passwordLength');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let allowedChars = '';

    const charOptions = [
        { checkbox: lowercase, chars: lowercaseChars },
        { checkbox: uppercase, chars: uppercaseChars },
        { checkbox: numbers, chars: setOfNumbers },
        { checkbox: symbols, chars: setOfSymbols }
    ];

    charOptions.forEach(option => {
        if (option.checkbox.checked) {
            allowedChars += option.chars;
        }
    });

    if (!allowedChars) {
        console.log('select at least one set of characters');
        return;
    }

    let password = '';
    for (let i = 0; i < passwordLength.value; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    };
    document.getElementById('generatedPassword').textContent = `This is your password: ${password}`;
});
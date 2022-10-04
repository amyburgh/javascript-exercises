const palindromes = function (string) {
    const temp = string
        .toLowerCase()
        .split('')
        .filter(char => char.match(/[a-z]/i))
        .join('');
    return temp === temp.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

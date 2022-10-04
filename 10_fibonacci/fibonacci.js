const fibonacci = function (n) {
    if (n < 0) return 'OOPS';
    if (!n) return 0;
    let a = 0;
    let b = 0;
    let result = 1;
    for (let i = 1; i < n; i++) {
        a = b;
        b = result;
        result = a + b;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

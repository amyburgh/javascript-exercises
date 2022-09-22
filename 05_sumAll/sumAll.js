const sumAll = function (min, max) { // inclusive sum all
    if (min > max) return sumAll(max, min);
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';

    let sum = 0;
    for (let i = min; i <= max; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

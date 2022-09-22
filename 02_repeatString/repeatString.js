const repeatString = function (string, num) {
  if (num < 0) return 'ERROR';
  if (!num) return '';
  if (num == 1)
    return string;
  return string + repeatString(string, num - 1);
};
// Alternative: string.repeat(num);

// Do not edit below this line
module.exports = repeatString;

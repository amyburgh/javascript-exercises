const ftoc = function (f) { // [°C] = ([°F] − 32) × 5⁄9
  return Math.round(((f - 32) * 5 / 9) * 10) / 10;
};

const ctof = function (c) { // [°F] = [°C] × 9⁄5 + 32
  return Math.round((c * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

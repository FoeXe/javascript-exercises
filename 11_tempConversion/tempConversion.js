const convertToCelsius = function(temp) {
  // x °C = (x * 9/5 + 32) °F
    let convertedTemp = (temp - 32) * 5/9;
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  // x °F = (x - 32) * 5/9 °C
  let convertedTemp = temp * 9/5 + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

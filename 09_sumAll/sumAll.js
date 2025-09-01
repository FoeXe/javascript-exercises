const sumAll = function(firstNumber, secondNumber) {
  let sum = 0;

  // Check for invalid inputs: non-number or non-integer
  if (
    typeof firstNumber !== 'number' ||
    typeof secondNumber !== 'number' ||
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber) ||
    firstNumber < 0 ||
    secondNumber < 0
  ) {
    return "ERROR";
  }

  let startNumber = Math.min(firstNumber, secondNumber);
  let endNumber = Math.max(firstNumber, secondNumber);

  for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

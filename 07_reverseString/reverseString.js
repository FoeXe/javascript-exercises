const reverseString = function(string) {
  let reversedString = "";
  let arrCharacters = String(string).split("");
  for (let i = arrCharacters.length - 1; i >= 0; i--) {
    reversedString += arrCharacters[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

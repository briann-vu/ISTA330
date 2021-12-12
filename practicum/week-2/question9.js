/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

/*
var suffleString = function(input, shuffleIndices) {
    var answer = ""
    for (var x of shuffleIndices) {
        answer += input[x]
    }
    return answer
};


var suffleString = function (input, shuffleIndices) {
    let shuffled = new Array(shuffleIndices.length);

    const inputSplit = input.split("");
    inputSplit.forEach((letter, index) => {
        shuffled[shuffleIndices[index]] = letter;
        //shuffled += input[i];
    });

    return shuffled.join("");
};


var suffleString = function (input, shuffleIndices) {
  let output = {};
  for (var i = 0; i < shuffleIndices.length; i++) {
    output[shuffleIndices[i]] = input[i];
  }
  var retval = "";
  for (var j = 0; j < input.length; j++) {
    retval += output[j];
  }

  return retval;
};
*/

var suffleString = function (input, shuffleIndices) {
    var temp = new Array(shuffleIndices.length);
    for (var i = 0; i < shuffleIndices.length; i++) {
        temp[shuffleIndices[i]] = input[i];
    }
    var answer = "";
    //var index = 0;
    for (var x of temp) {
        answer += x
    }
    return answer;
};
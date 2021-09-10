/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  var counter = 0
  var aCount
  var bCount
  var prev = input[0]

  for (var x = 0; x < input.length; x++) {
    var aCount = 0
    var bCount = 0
    if (prev == input[x]) {
      if (prev == "a") {
        aCount++
      } else {
        bCount++
      }
      prev = input[x]
    } else {
      if (prev == "a") {
        aCount++
      } else {
        bCount++
      }
      prev = input[x]
    }
    if (aCount == bCount) {
      return aCount
    }
    return 0
  }
};
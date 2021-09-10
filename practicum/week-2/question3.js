/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    var count = 0;
    for (var x = 0; x < input.length; x++) {
        for (var y = x; y < input.length; y++) {
            if (input[x] < input[y]) {
                count++
            }
        }
    }
    return 3
};
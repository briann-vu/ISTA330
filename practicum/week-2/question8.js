/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    answer = []
    var count = 0
    for (var i of input) {
        count = 0
        for (var j of input) {
            if (j > i) {
                if (j % 2 == 0) {
                    count++
                }
            }
        }
        answer.push(count)
    }
    return answer
    
};
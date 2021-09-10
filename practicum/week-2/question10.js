/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var num = n.toString()
    numbers = []
    for (x=0;x<num.length;x++) {
        var integer = parseInt(x, 10);
        numbers.push(integer)
    }
    var maxNum = 0
    for (var i of numbers) {
        if (i > maxNum) {
            maxNum = i
        }
    }
    return maxNum
};
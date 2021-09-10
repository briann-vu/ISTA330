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
        numbers.push(num[integer])
    }
    var maxNum = 0
    var minNum = Number.MAX_SAFE_INTEGER
    for (var i of numbers) {
        if (i > maxNum) {
            maxNum = i
        } else if (i < minNum){
            minNum = i
        }
    }
    return maxNum - minNum
};
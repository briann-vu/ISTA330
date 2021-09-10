/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    if (input.length % 2 == 0) {
        var midIndex1 = input.length / 2
        var midIndex2 = midIndex1 - 1
        return ((input[midIndex1] + input[midIndex2]) / 2)
    } else {
        var midIndex = (input.length - 1) / 2
        return input[midIndex]
    }
};
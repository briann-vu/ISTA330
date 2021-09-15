/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    var array = []
    for (var i = 0; i < input.length - 1; i++) {
        array.push(input[i] - input[i + 1])
    }

    return (isIncreasing(array) || isDecreasing(array))
};

var isIncreasing = function(array) {
    
    for (var x of array) {
        if (x >= 0) {
            continue
        } else {
            return false
        }
    }
    return true
};

var isDecreasing = function(array) {
    for (var x of array) {
        if (x <= 0) {
            continue
        } else {
            return false
        }
    }
    return true
};


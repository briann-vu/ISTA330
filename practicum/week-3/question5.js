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
    for (var i = 0; i <= input.length; i++) {
        answer.push(input[i] - input[i + 1])
    }

    if (isIncreasing(array) || isDecreasing(array)) {
        return true
    } return false
};

var isIncreasing = function(array) {
    for (var x of array) {
        if (x <= 0) {
            continue
        } else {
            return false
        }
    }
    return true
}

var isDecreasing = function(array) {
    for (var x of array) {
        if (x >= 0) {
            continue
        } else {
            return false
        }
    }
    return true
}


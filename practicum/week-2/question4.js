/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var count = 0
    var newA = A.toUpperCase()
    var newB = B.toUpperCase()
    for (var letter in B) {
        if (newA.includes(letter)) {
            count++
        }
    }
    return count
};
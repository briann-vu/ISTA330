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
    for (var letter in A) {
        for (var letter2 in B) {
            if (B[letter2] == A[letter]) {
                count++
            }
        }
    }
    return count
};
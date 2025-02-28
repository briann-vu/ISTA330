/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/


var largestNumberIsAtLeastTwice = function(input) {
   var maxNum = Math.max(...input)
   var maxIndex = input.indexOf(maxNum);
   input.splice(maxIndex, maxNum);
   for (var x of input) {
        if (maxNum >= (x * 2) ) {
                continue
        } else {
                return false
        }
   }
   return true
};
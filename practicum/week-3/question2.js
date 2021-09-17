
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
        var allSubArr = []
        for (var x = 0; x < input.length; x++) {
                for (var y = 1; y < input.length + 1; y++) {
                        var temp = input.slice(x,y)
                        if (temp.length != 0) {
                                allSubArr.push(temp)
                        }
                }
        }
        var maxSum = Number.MIN_VALUE
        var ans = []
        for (var array of allSubArr) {
                var possMax = 0
                for (var num of array) {
                        possMax += num
                }
                if (possMax > maxSum) {
                        maxSum = possMax
                        ans = array
                }
        }
        return ans

};




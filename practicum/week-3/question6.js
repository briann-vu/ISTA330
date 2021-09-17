/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var nOverTwo = input.length / 2
    var dict = {}
    for (var x of input) {
        if (x in dict) {
            dict[x]++
        } else {
            dict[x] = 1
        }
    }

    //for (var key of dict) 
	for (const [key, value] of Object.entries(dict)) {
        if (value > nOverTwo) {
            return key //change
        }
    } return -1

};

console.log(m_element([1, 2, 2, 3, 2, 7, 2]))
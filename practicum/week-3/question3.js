/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  if (n == 1) {
    return [1]
  } else if (n == 2) {
    return [[1], [1,1]]
  }
  var answer = [[1], [1,1]]
  var prev = [1,1]
  for (var x = 0; x < n - 2; x ++) {
    var arrToAdd = [1]
    for (var i = 0; i < prev.length-1; i++) {
      arrToAdd.push(prev[i] + prev[i+1])
    }
    arrToAdd.push(1)
    prev = arrToAdd
    answer.push(arrToAdd)
  }
	return answer
};





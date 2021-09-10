
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

var canGetEqualCookies = function(cookies, extraCookies) {
        var maxCookies = Math.max.apply(null, cookies)
        for (var cookie of cookies) {
                if (cookie < maxCookies) {
                        var temp = maxCookies - cookie
                        cookie += temp
                        extraCookies -= temp
                }
        }
                if (extraCookies > 0) {
                        for (var cookie of cookies) {
                                cookie++
                                extraCookies--
                        }
                }
        if (extraCookies < 0) {
        return false
        } 
        return true
        };

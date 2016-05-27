/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // var substrings = [];
    var maxSubString = "";
    var tmp = "";
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            if (tmp.indexOf(s[j]) < 0) {
                tmp += s[j];
            } else {
                // substrings.push(tmp);
                if (maxSubString.length < tmp.length) {
                    maxSubString = tmp;
                }
                tmp = ""
                break;
            }
        }
    }
    return maxSubString;
};
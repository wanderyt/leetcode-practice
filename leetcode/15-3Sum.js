/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)
*/

var threesum = function(nums) {
    nums = nums.sort();
    var resultObj = {};

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] > 0) {
                break;
            }
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    var newResult = [nums[i], nums[j], nums[k]];
                    resultObj[newResult] = resultObj[newResult] || newResult;
                } else if (nums[i] + nums[j] + nums[k] > 0) {
                    break;
                }
            }
        }
    }

    var result = [];
    for (var item in resultObj) {
        result.push(resultObj[item]);
    }

    return result;
};

var nums = [-1, 0, 1, 2, -1, -4];
console.log(threesum(nums));
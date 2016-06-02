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

/*var threeSum = function(nums) {
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
console.log(threeSum(nums));*/

/*
Test Case:
[-10,-11,13,0,-11,9,1,-6,-1,-12,10,-9,0,-15,-13,4,-13,
-1,-12,2,-11,-6,10,2,-6,6,-8,-12,11,-2,1,9,2,-1,-14,-1,
-6,-6,0,0,-3,-4,-2,4,-12,-8,-7,-10,6,-11,-1,2,-2,-14,-10,
7,7,-3,10,-4,3,-11,-10,12,3,13,-4,4,-8,4,-11,-4,-15,-6,-15,
-12,1,-15,-15,14,-11,-8,2,-6,-7,-1,-14,-14,11,4,-3,-1,8,-6,
-3,-12,-8,0,8,-1,11,4,2,11,14,2,6,-8,-6,-1,-8,-1,6]
*/

var threeSumOptimized = function(nums) {
    var sortByNumber = function(a, b) {
        return a - b;
    }
    nums = nums.sort(sortByNumber);
    var resultObj = {};
    var result = [];

    for (var i = 0; i < nums.length - 2; i++) {
        var j = i + 1;
        var k = nums.length - 1;

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                resultObj[[nums[i], nums[j], nums[k]]] = resultObj[[nums[i], nums[j], nums[k]]] || [nums[i], nums[j], nums[k]];
                j++;
                k--;
            }
        }
    }

    for (var item in resultObj) {
        result.push(resultObj[item]);
    }

    return result;
};

var nums = [-10,-11,13,0,-11,9,1,-6,-1,-12,10,-9,0,-15,-13,4,-13,
-1,-12,2,-11,-6,10,2,-6,6,-8,-12,11,-2,1,9,2,-1,-14,-1,
-6,-6,0,0,-3,-4,-2,4,-12,-8,-7,-10,6,-11,-1,2,-2,-14,-10,
7,7,-3,10,-4,3,-11,-10,12,3,13,-4,4,-8,4,-11,-4,-15,-6,-15,
-12,1,-15,-15,14,-11,-8,2,-6,-7,-1,-14,-14,11,4,-3,-1,8,-6,
-3,-12,-8,0,8,-1,11,4,2,11,14,2,6,-8,-6,-1,-8,-1,6];
console.log(threeSumOptimized(nums));
/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function(nums, target) {
    nums = nums.sort();
    var result;
    var dif = Infinity;
    var minDif = Infinity;

    for (var i = 0; i < nums.length; i++) {
        // nums[i]大于当前的最小值，已经可以不用继续循环了，后续之和肯定更大
        if (nums[i] > minDif) {
            break;
        }
        for (var j = i + 1; j < nums.length; j++) {
            // nums[i]+nums[j] 大于当前的最小值，已经可以不用继续循环了，后续之和肯定更大
            if (nums[i] + nums[j] > minDif) {
                break;
            }
            for (var k = j + 1; k < nums.length; k++) {
                var curDif = Math.abs(nums[i] + nums[j] + nums[k] - target);
                if (curDif < minDif) {
                    result = [nums[i], nums[j], nums[k]];
                    dif = nums[i] + nums[j] + nums[k] - target;
                    minDif = curDif;
                } else {
                    break;
                }
            }
        }
    }

    return {
        result: result,
        target: minDif
    };
};

var nums = [-1, 2, 1, -4];
var target = 1;
console.log(threeSumClosest(nums, target));
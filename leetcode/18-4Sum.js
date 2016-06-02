/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:
Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
The solution set must not contain duplicate quadruplets.
    For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

    A solution set is:
    (-1,  0, 0, 1)
    (-2, -1, 1, 2)
    (-2,  0, 0, 2)
*/

/*var fourSum = function(nums, target) {
    nums = nums.sort();
    var resultObj = {};

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            break;
        }

        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] > target) {
                break;
            }

            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] > target) {
                    break;
                }

                for (var l = k + 1; l < nums.length; l++) {
                    if (nums[i] + nums[j] + nums[k] + nums[l] == target) {
                        var tmp = [nums[i], nums[j], nums[k], nums[l]];
                        resultObj[tmp] = resultObj[tmp] || tmp;
                    } else if (nums[i] + nums[j] + nums[k] + nums[l] > target) {
                        break;
                    }
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

var nums = [1, 0, -1, 0, -2, 2];
var target = 0;
console.log(fourSum(nums, target));*/

/*
Time Limit Exceeded
Test Case:
[-479,-472,-469,-461,-456,-420,-412,-403,-391,-377,-362,-361,-340,-336,
-336,-323,-315,-301,-288,-272,-271,-246,-244,-227,-226,-225,-210,-194,
-190,-187,-183,-176,-167,-143,-140,-123,-120,-74,-60,-40,-39,-37,-34,
-33,-29,-26,-23,-18,-17,-11,-9,6,8,20,29,35,45,48,58,65,122,124,127,
129,145,164,182,198,199,206,207,217,218,226,267,274,278,278,309,322,
323,327,350,361,372,376,387,391,434,449,457,465,488]
1979
*/

var fourSumOptimized = function(nums, target) {
    nums = nums.sort();
    var map = {};
    var resultMap = {};
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (map[nums[i] + nums[j]]) {
                map[nums[i] + nums[j]].push([i, j]);
            } else {
                map[nums[i] + nums[j]] = [[i, j]];
            }
        }
    }

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var rest = target - nums[i] - nums[j];
            if (map[rest]) {
                var tmpArray = map[rest];
                for (var item in tmpArray) {
                    var indices = tmpArray[item].slice();
                    if (indices.indexOf(i) < 0 && indices.indexOf(j) < 0) {
                        indices.push(i, j);
                        indices.sort();
                        resultMap[indices] = resultMap[indices]
                                             || [nums[indices[0]], nums[indices[1]], nums[indices[2]], nums[indices[3]]].sort();
                    }
                }
            }
        }
    }

    for (var i in resultMap) {
        result.push(resultMap[i]);
    }

    return result;
};

/*var nums = [1, 0, -1, 0, -2, 2];
var target = 0;*/
var nums = [
-479,-472,-469,-461,-456,-420,-412,-403,-391,-377,-362,-361,-340,-336,
-336,-323,-315,-301,-288,-272,-271,-246,-244,-227,-226,-225,-210,-194,
-190,-187,-183,-176,-167,-143,-140,-123,-120,-74,-60,-40,-39,-37,-34,
-33,-29,-26,-23,-18,-17,-11,-9,6,8,20,29,35,45,48,58,65,122,124,127,
129,145,164,182,198,199,206,207,217,218,226,267,274,278,278,309,322,
323,327,350,361,372,376,387,391,434,449,457,465,488];
var target = 1979;
console.log(fourSumOptimized(nums, target));
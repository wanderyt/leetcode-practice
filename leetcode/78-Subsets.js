/*
Given an array of integers, print all subsets of size k
E.g. A = [ 1 2 4 2], printSubsets(A, 1) should output
1
2
4
printSubsets(A, 2) should output
1 2
1 4
2 4
printSubsets(A, 3) should output
1 2 4
*/

var printSubsets = function(array, num) {
    var result = [];
    if (num == 1) {
        for (var i in array) {
            pushElement(result, [array[i]]);
        }
        return result;
    } else {
        return combineElement(array, printSubsets(array, num - 1));
    }
};

var pushElement = function(array, element) {
    var newElement = element.sort(); // [1,2], [2,1] = > [1,2]
    var flag = false;
    for (var i in array) {
        flag = array[i].toString() == element.toString() || flag;
    }
    if (!flag) {
        array.push(newElement);
    }
    return array;
};

var combineElement = function(array, result) {
    var targetResult = [];
    for (var i in array) {
        for (var j in result) {
            if (result[j].indexOf(array[i]) < 0) {
                var resultClone = deepCloneArray(result[j]);
                resultClone.push(array[i]);
                pushElement(targetResult, resultClone);
            }
        }
    }
    return targetResult;
};

var cloneArray = function(element) {
    var result = [];
    for (var i in element) {
        result.push(element[i]);
    }
    return result;
};

var deepCloneArray = function(element) {
    var result = [];
    for (var i in element) {
        if (typeof i == "array") {
            result.push(deepCloneArray(element[i]));
        } else {
            result.push(element[i]);
        }
    }
    return result;
};
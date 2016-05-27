/**
 * Test clone for array
 */
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
        if (typeof element[i] == "object") {
            result.push(deepCloneArray(element[i]));
        } else {
            result.push(element[i]);
        }
    }
    return result;
};

/**
 * Test clone for object
 */
var cloneObject = function(element) {
    var result = {};
    for (var i in element) {
        result[i] = element[i];
    }
    return result;
};

var deepCloneObject = function(element) {
    var result = {};
    for (var i in element) {
        if (typeof element[i] == "object") {
            result[i] = deepCloneObject(element[i]);
        } else {
            result[i] = element[i];
        }
    }
    return result;
};
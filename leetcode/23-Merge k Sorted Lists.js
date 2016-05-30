/*
Merge k Sorted Lists
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
*/

var mergeTwoSortedArray = function(arrayA, arrayB) {
    var lengthA = arrayA.length;
    var lengthB = arrayB.length;
    var indexA = lengthA - 1;
    var indexB = lengthB - 1;
    var finalIndex = lengthA + lengthB - 1;

    while (indexA >= 0 && indexB >= 0) {
        arrayA[finalIndex--] = arrayA[indexA] > arrayB[indexB] ? arrayA[indexA--] : arrayB[indexB--];
    }

    /*while (indexA >= 0) {
        arrayA[indexA];
    }*/
    while (indexB >= 0) {
        arrayA[indexB] = arrayB[indexB];
        indexB--;
    }

    return arrayA;
};

var mergeKSortedArray = function(arrayList) {
    var length = arrayList.length - 1;
    var startUp = arrayList[length];
    for (var i = length - 1; i >= 0; i--) {
        startUp = mergeTwoSortedArray(startUp, arrayList[i]);
    };

    return startUp;
};

var testArray = [
    [1,2,3,5],
    [2,4,8],
    [10,11,25],
    [7,10,13,20]
];

console.log(mergeKSortedArray(testArray));
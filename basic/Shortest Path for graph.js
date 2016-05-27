var MAX_LENGTH = 99999;
var matrix = [
    [0, 2, 6, 4],
    [MAX_LENGTH, 0, 3, MAX_LENGTH],
    [7, MAX_LENGTH, 0, 1],
    [5, MAX_LENGTH, 12, 0]
];

var floyd = function (e) {
    for (var k = 0; k < 4; k++) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                e[i][j] = e[i][j] < e[i][k] + e[k][j] ? e[i][j] : e[i][k] + e[k][j];
            }
        }
    }

    return e;
};

floyd(matrix);

// =====================================================================================
var MAX_LENGTH = 99999;
var matrix = [
    [0, 1, 12, MAX_LENGTH, MAX_LENGTH, MAX_LENGTH],
    [MAX_LENGTH, 0, 9, 3, MAX_LENGTH, MAX_LENGTH],
    [MAX_LENGTH, MAX_LENGTH, 0, MAX_LENGTH, 5, MAX_LENGTH],
    [MAX_LENGTH, MAX_LENGTH, 4, 0, 13, 15],
    [MAX_LENGTH, MAX_LENGTH, MAX_LENGTH, MAX_LENGTH, 0, 4],
    [MAX_LENGTH, MAX_LENGTH, MAX_LENGTH, MAX_LENGTH, MAX_LENGTH, 0]
];

var dijkstra = function (matrix) {
    var dis = new Array(6), book = new Array(6), min, tmp;
    for (var i = 0; i < 6; i++) {
        dis[i] = 0;
        book[i] = 0;
    }
    book[0] = 1;

    // Dijkstra
    for (var j = 0; j < 6; j++) {
        for (var k = 0; k < 6; k++) {
            min = MAX_LENGTH;
            if (book[k] == 0 && min > dis[k]) {
                min = dis[k];
                tmp = k;
            }
        }

        book[tmp] = 1;
        for (var v = 0; v < 6; v++) {
            if (matrix[tmp][v] < MAX_LENGTH) {
                dis[tmp] = matrix[tmp][v] + dis[tmp] < dis[v] ? matrix[tmp][v] + dis[tmp] : dis[tmp];
            }
        }
    }

    return dis;
};

dijkstra(matrix);

// ===============================================================

var subset = function(a) {
    var all = 1 << a.length;
    var result = [];

    for (var i = 0; i < all; i++) {
        var b = 1;
        var tmpList = [];
        for (var j = 0; j < a.length; j++) {
            if ((i & b) != 0) {
                tmpList.push(a[j]);
            }
            b <<= 1;
        }
        result.push(tmpList);
    }
    return result;
}

// ===================================================================

var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return x;
    } else {
        return x * myPow(x, n - 1);
    }
};
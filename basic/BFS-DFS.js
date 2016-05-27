/*Construct Tree*/
var Node = function(num, children) {
    this.number = num;
    this.children = children;
};

var node6 = new Node(6, []);
var node7 = new Node(7, []);
var node2 = new Node(2, [node6, node7]);
var node3 = new Node(3, []);
var node8 = new Node(8, []);
var node4 = new Node(4, [node8]);
var node5 = new Node(5, []);
var node1 = new Node(1, [node2, node3, node4, node5]);

/*DFS*/
console.log("===================== DFS ======================");

var dfs = function(rootNode) {
    console.log(rootNode.number);
    for (var node in rootNode.children) {
        dfs(rootNode.children[node]);
    }
}

dfs(node1);

/*BFS*/
console.log("===================== BFS ======================");

var bfs = function(rootNode) {
    var queue = [];
    queue.push(rootNode);

    while (queue.length) {
        var currentNode = queue.shift();
        console.log(currentNode.number);

        queue = queue.concat(currentNode.children);
    }
};

bfs(node1);
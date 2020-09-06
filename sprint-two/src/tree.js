var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var recursive = function(node) {
    if (node.value && node.value === target) {
      return true;
    } else if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        if (recursive(node.children[i])) {
          return true;
        }
      }
    }
    return false;
  };
  return recursive(this);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

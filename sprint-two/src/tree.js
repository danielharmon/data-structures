var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  if (parent === undefined) {
    parent = null;
  }
  newTree.parent = parent;
  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.size = function(tree) {
  var count = 0;
  var recursive = function(node) {
    count++;
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        recursive(node.children[i]);
      }
    }
  };
  recursive(this);
  return count;
};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};
treeMethods.removeFromParent = function() {
  for (let i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }

  this.parent = null;
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

treeMethods.traverse = function(cb) {
  var recursive = function(node) {
    cb(node);
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        recursive(node.children[i]);
      }
    }
  };
  recursive(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

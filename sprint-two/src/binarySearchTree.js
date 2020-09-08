class BinarySearchTree {
  constructor(value) {
    this.value = value;
  }

  insert(value) {
    var current = this;
    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new BinarySearchTree(value);
          break;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new BinarySearchTree(value);
          break;
        }
      }
    }

  }

  contains(target) {
    var current = this;
    while (current) {
      if (target === current.value) {
        return true;
      } else if (target < current.value) {
        current = current.left;
      } else if (target > current.value) {
        current = current.right;
      }
    }
    return false;
  }

  depthFirstLog(cb) {
    var recursiveFunction = function(node) {
      cb(node.value);
      if (node.left) {
        recursiveFunction(node.left);
      }
      if (node.right) {
        recursiveFunction(node.right);
      }
    };
    recursiveFunction(this);
  }

  size() {
    var count = 0;
    var recursiveFunction = function(node) {
      count++;
      if (node.left) {
        recursiveFunction(node.left);
      }
      if (node.right) {
        recursiveFunction(node.right);
      }
    };
    recursiveFunction(this);
    return count;
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value, key) {
    if (list.head === null) {
      list.head = Node(value, key);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value, key);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.removeNode = function(target) {
    var recursive = function(node) {
      if (node.value === target) {
        node.removeHead();
      } else if (node.next.value === target) {
        node.next = node.next.next;
      } else if (node.next) {
        recursive(node.next);
      }
    };
    recursive(this.head);

  };

  list.contains = function(target) {
    var recursive = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return recursive(node.next);
      } else if (!node.next) {
        return false;
      }
    };
    return recursive(this.head);
  };

  return list;
};

var Node = function(value, key) {
  var node = {};
  if (key === undefined) {
    key = null;
  }
  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var DoublyLinkedList = function() {
  var dList = {};
  dList.head = null;
  dList.tail = null;

  dList.addToTail = function(value) {
    if (dList.head === null) {
      dList.head = Node(value);
      dList.tail = dList.head;
    } else {
      dList.tail.next = Node(value, dList.tail);
      dList.tail = dList.tail.next;
    }
  };

  dList.removeHead = function() {
    var temp = dList.head;
    dList.head = dList.head.next;
    return temp.value;
  };

  dList.contains = function(target) {
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
  dList.addToHead = function(value) {
    if (dList.head === null) {
      dList.head = Node(value);
      dList.tail = dList.head;
    } else {
      //create a new node at the previous
      dList.head.previous = Node(value);
      //set the new nodes next to be the head
      dList.head.previous.next = dList.head;
      //reset the head
      dList.head = dList.head.previous;
    }
  };
  dList.removeTail = function() {
    var temp = dList.tail.value;
    dList.tail.previous.next = null;
    dList.tail = dList.tail.previous;
    return temp;
  };

  return dList;
};

var Node = function(value, caller) {
  var node = {};
  if (caller === undefined) {
    caller = null;
  }
  node.value = value;
  node.previous = caller;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value, list.tail);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    console.log(list.head);
    return temp.value;
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
  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      //create a new node at the previous
      list.head.previous = Node(value);
      //set the new nodes next to be the head
      list.head.previous.next = list.head;
      //reset the head
      list.head = list.head.previous;
    }
  };
  list.removeTail = function() {
    var temp = list.tail.value;
    list.tail.previous.next = null;
    list.tail = list.tail.previous;
    return temp;
  };

  return list;
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

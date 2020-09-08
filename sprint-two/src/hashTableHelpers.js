/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index, k) {
    checkLimit(index);
    if (storage[index]) {
      var list = storage[index].head;
      while (k !== list.key) {
        list = list.next;
      }
      return list.value;
    }
  };
  limitedArray.set = function(index, value, key) {
    checkLimit(index);
    if (!storage[index]) {
      storage[index] = LinkedList();
      storage[index].addToTail(value, key);
    } else {
      //if key exists in list
      var list = storage[index].head;
      if (storage[index].contains(key, 'key')) {
        //set value to new value at key
        while (list.key !== key) {
          list = list.next;
        }
        list.value = value;
      } else {
      //just add to tail
        storage[index].addToTail(value, key);
      }
    }
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };
  limitedArray.remove = function(index) {
    checkLimit(index);
    delete storage[index];
  };


  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};


// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
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

  list.contains = function(target, property) {
    property = property || 'value';
    var recursive = function(node) {
      if (node[property] === target) {
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
  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};
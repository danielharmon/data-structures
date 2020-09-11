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
  limitedArray.get = function(index, key) {
    checkLimit(index);
    // debugger;
    if (storage[index]) {
      var list = storage[index].head;
      // get specific key value pair
      while (list.key !== key) {
        list = list.next;
      }
      return list.value;
    } else {
      return undefined;
    }
  };
  limitedArray.set = function(index, value, key) {
    checkLimit(index);
    // if there is something at index,
    if (storage[index]) {
      // then add to list
      if (key === storage[index].head.key) {
        storage[index].head.value = value;
      }
      storage[index].addToTail(value, key);
    } else {
      // create a new LinkedList
      storage[index] = LinkedList();
      storage[index].addToTail(value, key);
    }
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      if (!storage[i]) {
        continue;
      }
      var list = storage[i].head;
      while (list.next) {
        callback(list, i, storage);
        list = list.next;
      }
      callback(list, i, storage);

    }
  };
  limitedArray.remove = function(index) {
    checkLimit(index);
    delete storage[index];
  };
  limitedArray.has = function(index) {
    checkLimit(index);
    return (storage[index]);
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

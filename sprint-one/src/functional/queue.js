var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[0] = value;
    } else {
      storage[Object.keys(storage).length] = value;
    }
  };

  someInstance.dequeue = function() {
    var first = storage[0];
    for (var key in storage) {
      storage[Number(key)] = storage[Number(key + 1)];
    }
    delete storage[Object.keys(storage).length - 1];
    return first;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

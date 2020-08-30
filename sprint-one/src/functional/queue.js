var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var current = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[current] = value;
    current++;
  };

  someInstance.dequeue = function() {
    var result = storage[start];
    delete storage[start];
    start++;
    return result;
  };

  someInstance.size = function() {
    return (current - start > 0 ? current - start : 0);
  };

  return someInstance;
};

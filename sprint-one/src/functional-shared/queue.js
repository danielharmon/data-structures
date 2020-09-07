var Queue = function() {
  var instance = {};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  first: 0,
  current: 0,
  enqueue: function(value) {
    this[this.current] = value;
    this.current += 1;
  },
  dequeue: function() {
    if (this.first >= 0) {
      var result = this[this.first];
      delete this[this.first];
      this.first += 1;
      return result;
    }
  },
  size: function() {
    return (this.current - this.first) < 0 ? 0 : (this.current - this.first);
  }
};

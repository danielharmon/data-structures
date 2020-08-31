var Stack = function() {
  var instance = {};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  index: 0,
  push: function(value) {
    this[this.index] = value;
    this.index += 1;
  },
  pop: function() {
    if (this.index > 0) {
      this.index -= 1;
      var result = this[this.index];
      delete this[this.index];
      return result;
    }
  },
  size: function() { return this.index; }
};



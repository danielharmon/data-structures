var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[0] = value;
  } else {
    this.storage[Object.keys(this.storage).length] = value;
  }
};

Stack.prototype.pop = function() {
  var last = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return last;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

// var Newstack = new Stack();
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[0] = value;
  } else {
    this.storage[Object.keys(this.storage).length] = value;
  }
};

Queue.prototype.dequeue = function() {
  var first = this.storage[0];
  for (var key in this.storage) {
    this.storage[Number(key)] = this.storage[Number(key + 1)];
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return first;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

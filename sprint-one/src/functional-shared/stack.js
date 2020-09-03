var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[0] = value;
  } else {
    this.storage[Object.keys(this.storage).length] = value;
  }
};

stackMethods.pop = function() {
  var last = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return last;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

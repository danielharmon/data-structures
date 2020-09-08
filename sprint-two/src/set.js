var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.difference = function(otherSet) {
  var returnSet = Set();
  for (key in this._storage) {
    if (!otherSet.contains(key)) {
      returnSet.add(key);
    }
  }

  return returnSet;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

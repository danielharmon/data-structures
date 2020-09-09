var Set = function() {
  var set = Object.create(setPrototype);
  set._limit = 8;
  set._storage = LimitedArray(8); // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  this._storage.set(index, item, item);
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  return this._storage.has(index) ? true : false;
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  delete this._storage.remove(index);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

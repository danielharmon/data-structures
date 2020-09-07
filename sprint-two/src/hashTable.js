

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
  // var values = this._storage.get(index);
  // console.log(values);
  // for (var i = 0; i < values.length; i++) {
  //   console.log(values[i]);
  //   if (values[i] === k) {
  //     return values[i];
  //   }
  // }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.remove(index);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



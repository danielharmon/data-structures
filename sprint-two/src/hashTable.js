

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, destination) {
  destination = destination || this._storage;
  var index = getIndexBelowMaxForKey(k, this._limit);
  destination.set(index, v, k);
  this.size++;
  if (this.size >= this._limit) {
    this.double();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.remove(index);
  this.size--;
};

HashTable.prototype.size = 0;
HashTable.prototype.double = function() {
  this._limit = this._limit * 2;
  this._tempStorage = LimitedArray(this._limit);
  this._storage.each(function(item) {
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



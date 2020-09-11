

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, destination) {
  destination = destination || this._storage;
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, k);
  this.size++;
  if (this.size === this._limit * .75) {
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
  if (this.size === this._limit * .25) {
    this.half();
  }
};

HashTable.prototype.clear = function() {
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.size = 0;

HashTable.prototype.double = function() {
  this._limit = this._limit * 2;
  this._tempStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
  this._tempStorage.each(function(item) {
    this.insert(item.key, item.value);
  }.bind(this));

  delete this._tempStorage;
};

HashTable.prototype.half = function() {
  this._limit = this._limit / 2;
  this._tempStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
  this._tempStorage.each(function(item) {
    this.insert(item.key, item.value);
  }.bind(this));

  delete this._tempStorage;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



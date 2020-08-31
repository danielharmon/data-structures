var Stack = function() {
//this
};
Stack.prototype.index = 0;
Stack.prototype.push = function(value) {
  this[this.index] = value;
  this.index += 1;
};
Stack.prototype.pop = function() {
  if (this.index > 0) {
    this.index -= 1;
    var result = this[this.index];
    delete this[this.index];
    return result;
  }
};
Stack.prototype.size = function() {
  return this.index;
};



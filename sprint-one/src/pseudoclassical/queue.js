var Queue = function() {
//this
};
Queue.prototype.start = 0;
Queue.prototype.current = 0;
Queue.prototype.enqueue = function(value) {
  this[this.current] = value;
  this.current += 1;
};
Queue.prototype.dequeue = function() {
  if (this.current > 0) {
    var result = this[this.start];
    delete this[this.start];
    this.start += 1;
    return result;
  }
};
Queue.prototype.size = function() {
  return (this.current - this.start) < 0 ? 0 : (this.current - this.start);
};

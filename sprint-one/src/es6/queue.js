class Queue {
  constructor() {
    this.start = 0;
    this.current = 0;
  }
  enqueue(value) {
    this[this.current] = value;
    this.current += 1;
  }
  dequeue() {
    if (this.current > 0) {
      var result = this[this.start];
      delete this[this.start];
      this.start += 1;
      return result;
    }
  }
  size() {
    return (this.current - this.start) < 0 ? 0 : (this.current - this.start);
  }

}

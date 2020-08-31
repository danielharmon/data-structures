class Stack {
  constructor() {
    this.index = 0;
  }
  push(value) {
    this[this.index] = value;
    this.index += 1;
  }
  pop() {
    if (this.index > 0) {
      this.index -= 1;
      var result = this[this.index];
      delete this[this.index];
      return result;
    }
  }
  size() {
    return this.index;
  }

}
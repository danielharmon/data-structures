class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      this.storage[Object.keys(this.storage).length] = value;
    }
  }

  pop() {
    var last = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return last;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
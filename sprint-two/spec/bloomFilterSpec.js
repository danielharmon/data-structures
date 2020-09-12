describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new bloomFilter(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(bloomFilter.insert).to.be.a('function');
    expect(bloomFilter.contains).to.be.a('function');
    expect(bloomFilter.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    bloomFilter.insert(2);
    bloomFilter.insert(3);
    bloomFilter.insert(7);
    bloomFilter.insert(6);
    expect(bloomFilter.left.right.value).to.equal(3);
    expect(bloomFilter.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    bloomFilter.insert(2);
    bloomFilter.insert(3);
    bloomFilter.insert(7);
    expect(bloomFilter.contains(7)).to.equal(true);
    expect(bloomFilter.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    bloomFilter.insert(2);
    bloomFilter.insert(3);
    bloomFilter.insert(7);
    bloomFilter.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('NEW: should return total number of nodes', function() {
    bloomFilter.insert(2);
    bloomFilter.insert(3);
    bloomFilter.insert(7);
    expect(bloomFilter.size()).to.equal(4);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    bloomFilter.insert(2);
    bloomFilter.insert(3);
    bloomFilter.insert(7);
    bloomFilter.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });
});

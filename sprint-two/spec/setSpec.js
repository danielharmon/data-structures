describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
    set2 = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('NEW: should return a new set containing the difference between sets', function() {
    set.add('Danny');
    set.add('Jenny');
    set.add('Sam');
    set.add('Barsha');
    set2.add('Sam');
    set2.add('Barsha');
    expect(JSON.stringify(set.difference(set2)._storage)).to.equal('{"Danny":"Danny","Jenny":"Jenny"}');
  });

});

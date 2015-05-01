'use strict';

describe('map', function() {

  it('can apply a function to each element', function() {
    debugger;
    expect(map([1,2,3], function(element) { return element * element})).toEqual([1,4,9]);
  });

  it('can apply a function to each element', function() {
    expect(map([16,12,3,45], function(element) { return element - 1})).toEqual([15,11,2,44]);
  });
});

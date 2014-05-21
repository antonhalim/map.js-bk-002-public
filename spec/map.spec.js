'use strict';

describe('map', function() {

  var map;
  beforeEach(function() {
    map = require('../lib/map');
  });

  it('does a thing', function() {
    expect(map([1,2,3], function(element) {element * element})).toEqual([1,4,9]);
  });
});

'use strict';

var map = function(array, command){
  var result = [];
  for(var i = 0; i < array.length; i++){
    result.push(command(array[i]));
  }
  return result;
};

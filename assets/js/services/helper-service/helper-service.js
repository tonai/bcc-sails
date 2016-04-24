angular.module('bcc').factory('helperService', function(){
  'use strict';

  var api = {};

	api.objectToArray = function(object) {
    var array = [];
    for (var i in object) {
      array.push(object[i]);
    }
    return array;
	};

  api.getArrayIndex = function(array, id) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return i;
      }
    }
    throw "Couldn't find object with id: " + id;
  };

	return api;
});

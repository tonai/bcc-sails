angular.module('bcc').factory('categoryService', function(){
  'use strict';

  var categories = [
    '- 9 ans',
    'Poussins',
    'Benjamins',
    'Minimes',
    'Cadets',
    'Juniors',
    'Séniors',
    'Vétérans 1',
    'Vétérans 2',
    'Vétérans 3',
    'Vétérans 4',
    'Vétérans 5',
    'Vétérans 6',
    'Vétérans 7'
  ];

  var api = {};

  api.getCategories =function() {
    return categories;
  };

  api.getCategory =function(birthYear, currentSeason) {
    var category;
    if (currentSeason.startYear - birthYear <= 7) {
      category = categories[0];
    } else if (currentSeason.startYear - birthYear <= 9) {
      category = categories[1];
    } else if (currentSeason.startYear - birthYear <= 11) {
      category = categories[2];
    } else if (currentSeason.startYear - birthYear <= 13) {
      category = categories[3];
    } else if (currentSeason.startYear - birthYear <= 15) {
      category = categories[4];
    } else if (currentSeason.startYear - birthYear <= 17) {
      category = categories[5];
    } else if (currentSeason.startYear - birthYear <= 34) {
      category = categories[6];
    } else if (currentSeason.startYear - birthYear <= 39) {
      category = categories[7];
    } else if (currentSeason.startYear - birthYear <= 44) {
      category = categories[8];
    } else if (currentSeason.startYear - birthYear <= 49) {
      category = categories[9];
    } else if (currentSeason.startYear - birthYear <= 54) {
      category = categories[10];
    } else if (currentSeason.startYear - birthYear <= 59) {
      category = categories[11];
    } else if (currentSeason.startYear - birthYear <= 64) {
      category = categories[12];
    } else {
      category = categories[13];
    }
    return category;
  };

	return api;
});

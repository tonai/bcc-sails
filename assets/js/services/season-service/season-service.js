angular.module('bcc').factory('seasonService', function(){
  'use strict';

  var currentSeason;
  var date = new Date();
  var year = date.getFullYear();
  var seasons = {
    '2015': '2015 - 2016',
    '2016': '2016 - 2017'
  };

  if (date.getMonth() > 7) {
    // From september
    currentSeason = {
      label: seasons[year],
      startYear: year,
      endYear: year + 1
    }
  } else {
    // To August
    currentSeason = {
      label: seasons[year - 1],
      startYear: year - 1,
      endYear: year
    }
  }

  var api = {};

	api.getSeasons = function() {
    return seasons;
	};

  api.getCurrentSeason = function(array, id) {
    return currentSeason;
  };

	return api;
});

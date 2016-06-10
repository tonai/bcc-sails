angular.module('bcc').directive('registrationList', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : 'js/directives/registration-list/registration-list.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: ['$rootScope', '$scope', 'registrationService', 'helperService', 'categoryService', 'seasonService', function($rootScope, $scope, registrationService, helperService, categoryService, seasonService){
      var currentSeason = seasonService.getCurrentSeason();
      this.seasons = seasonService.getSeasons();
      this.registrations = [];
      this.current = 0;
      this.limit = 10;
      this.ageCategories = categoryService.getCategories();

      // Add callback.
      this.addDone = function(event, registration) {
        registration.ageCategory = categoryService.getCategory(registration.birthyear, currentSeason);
        this.registrations.push(registration);
        $scope.$digest();
      }

      // Remove callback.
      this.remove = function(registration) {
        if (confirm('Cette action est irréversible')) {
          registrationService.remove(registration.id).then(function(){
            if (!registrationService.isOffline()) {
              $rootScope.$broadcast('message', {
                type: 'success',
                message: 'Inscription supprimée.'
              });
            } else {
              registration.offline = true;
            }
          });
        }
      }

      // Remove callback.
      this.removeDone = function(event, registration) {
        var index = helperService.getArrayIndex(this.registrations, registration.id);
        this.registrations.splice(index, 1);
      }

      // Get formula Label;
      this.getFormulaLabel = function(formulaId) {
        return this.formulas.filter(function(item){
          return item.id == formulaId;
        })[0].label;
      };

      // Bind.
      $scope.$on('add.registration', this.addDone.bind(this));
      $scope.$on('remove.registration', this.removeDone.bind(this));
      $scope.$on('initStart.registration', function(){
        this.registrations = [];
      }.bind(this));

      // Initialization.
      this.registrations = helperService
        .objectToArray(registrationService.findAll())
        .map(function(registration){
          registration.ageCategory = categoryService.getCategory(registration.birthyear, currentSeason);
          return registration;
        }.bind(this));
		}]
	};
});

angular.module('bcc').directive('registrationList', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : '/js/directives/registration-list/registration-list.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function($rootScope, $scope, registrationService, helperService){
      this.registrations = [];
      this.current = 0;
      this.limit = 10;

      // Add callback.
      this.addDone = function(event, registration) {
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
      this.registrations = helperService.objectToArray(registrationService.findAll());
		}
	};
});

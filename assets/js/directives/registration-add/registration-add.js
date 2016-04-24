angular.module('bcc').directive('registrationAdd', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : '/js/directives/registration-add/registration-add.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function($rootScope, registrationService){

      this.add = function(newRegistration){
        registrationService.add(newRegistration).then(function(){
          $rootScope.$broadcast('message', {
            type: 'success',
            message: 'Inscription créée.'
          });
          document.getElementById('registration-add').reset();
        });
      }

		}
	};
});

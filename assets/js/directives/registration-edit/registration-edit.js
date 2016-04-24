angular.module('bcc').directive('registrationEdit', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : '/js/directives/registration-edit/registration-edit.html',
		scope: {
      id: '='
    },
		bindToController: true,
		controllerAs: 'ctrl',
		controller: ['$rootScope', '$scope', 'registrationService', function($rootScope, $scope, registrationService){
      this.registration = registrationService.findOne(this.id);

      if (!this.registration) {
        $scope.$on('initEnd.registration', function(){
          this.registration = registrationService.findOne(this.id);
        }.bind(this));
      }

      this.edit = function(registration){
        registrationService.update(registration).then(function(){
          $rootScope.$broadcast('message', {
            type: 'success',
            message: 'Inscription modifiée.'
          });
        });
      }

      // Bind.
      $scope.$on('update.registration', function(data){
        if (data.id == this.registration.id) {
          // Warning data has been updated !
        }
      }.bind(this));
		}]
	};
});

angular.module('bcc').directive('registrationForm', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : 'js/directives/registration-form/registration-form.html',
		scope: {
      id: '='
    },
		bindToController: true,
		controllerAs: 'ctrl',
		controller: ['$rootScope', '$scope', 'registrationService', function($rootScope, $scope, registrationService){
      if (this.id) {
        this.labels = {
          submit: 'Modifier l\'inscription',
          message: 'Inscription modifiée.'
        };
        // Load registration.
        this.registration = registrationService.findOne(this.id);
        if (!this.registration) {
          $scope.$on('initEnd.registration', function(){
            this.registration = registrationService.findOne(this.id);
          }.bind(this));
        }
      } else {
        this.labels = {
          submit: 'Ajouter l\'inscription',
          message: 'Inscription créée.'
        };
      }

      this.edit = function(registration){
        registrationService.update(registration).then(function(){
          $rootScope.$broadcast('message', {
            type: 'success',
            message: this.labels.message
          });
          if (!registration.id) {
            document.getElementById('registration-form').reset();
          }
        }.bind(this));
      }

      // Bind.
      /*$scope.$on('update.registration', function(data){
        if (data.id == this.registration.id) {
          // Warning data has been updated !
        }
      }.bind(this));*/
		}]
	};
});

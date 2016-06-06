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
      var i;
      var date = (new Date()).getFullYear();

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
          if (!registration.id) {
            this.registration.year = date;
            //this.registration.confirmed = 1;
          }
          $rootScope.$broadcast('message', {
            type: 'success',
            message: this.labels.message
          });
          if (!registration.id) {
            this.registration.contacts = {};
            document.getElementById('registration-form').reset();
          }
        }.bind(this));
      };

      this.addContact = function(){
        this.registration = this.registration || {};
        this.registration.contacts = this.registration.contacts || {};
        this.registration.contacts[Date.now()] = {};
      };

      this.removeContact = function(index){
        console.log(index, this.registration.contacts);
        delete this.registration.contacts[index];
      };

      this.days = [];
      for (i = 0; i < 31; i++) {
        this.days.push(i + 1);
      }
      this.months = [];
      for (i = 0; i < 12; i++) {
        this.months.push(i + 1);
      }
      this.years = [];
      for (i = date; i > date - 100; i--) {
        this.years.push(i);
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

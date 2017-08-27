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
		controller: ['$rootScope', '$scope', 'registrationService', 'categoryService', 'seasonService', 'Upload', '$http', function($rootScope, $scope, registrationService, categoryService, seasonService, Upload, $http){
      var i;
      var date = (new Date()).getFullYear();
      var currentSeason = seasonService.getCurrentSeason();
      this.seasons = seasonService.getSeasons();

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
        this.registration = getDefaultRegistration();
      }

      function getDefaultRegistration() {
        return {
          category: 'adult',
          country: 'FR'
        };
      };

      this.edit = function(registration, file, fileDeleted, form){
        var promise = new Promise(function(resolve){
          resolve();
        });

        if (!registration.id) {
          registration.season = currentSeason.label;
          // Uncomment following line for re-registration.
          //this.registration.confirmed = 1;
        }

        if (fileDeleted) {
          promise = promise.then(this.deleteFile.bind(this, registration));
        }
        if (file) {
          promise = promise.then(this.uploadFile.bind(this, registration, file));
        }

        return promise
          .then(registrationService.update.bind(this, registration))
          .then(function(){
            $rootScope.$broadcast('message', {
              type: 'success',
              message: this.labels.message
            }, true);
            if (!registration.id) {
              form.$setPristine();
              form.$setUntouched();
              this.registration = getDefaultRegistration();
              $scope.$broadcast('show-errors-reset');
            }
            this.file = null;
            $(window).scrollTop(0);
            $scope.$digest();
          }.bind(this))
          .catch(function(error){
            $rootScope.$broadcast('message', {
              type: 'danger',
              message: error.message ? error.message : error
            }, true);
          });
      };

      this.uploadFile = function(registration, file) {
        return Upload
          .upload({
            url: '/file/upload',
            data: {image: file},
            objectKey: '.k'
          })
          .then(function (response) {
            registration.image = response.data.file;
          }, function (response) {
            if (response.status > 0)
              throw response.status + ': ' + response.data;
          });
      }

      this.deleteFile = function(registration) {
        return $http.delete('/file/delete/?name=' + registration.image)
          .then(function() {
            registration.image = null;
            return registrationService.update(registration);
          });
      };

      this.addContact = function(){
        this.registration = this.registration || {};
        this.registration.contacts = this.registration.contacts || {};
        this.registration.contacts[Date.now()] = {};
      };

      this.removeContact = function(index){
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
      $scope.$watch('ctrl.registration.birthyear', function(newValue) {
        if (newValue) {
          this.category = categoryService.getCategory(newValue, currentSeason);
        }
      }.bind(this));
		}]
	};
});

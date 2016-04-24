angular.module('bcc').directive('registrationCounter', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : '/js/directives/registration-counter/registration-counter.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function($scope, registrationService){
      var registrations, i;
      this.counters = {};

      // Add callback.
      this.addDone = function(event, registration) {
        this.counters[registration.formula] = this.counters[registration.formula] || 0;
        this.counters[registration.formula]++;
        this.counters[registration.category] = this.counters[registration.category] || 0;
        this.counters[registration.category]++;
        this.animate(registration);
        $scope.$digest();
      };

      // Remove callback.
      this.removeDone = function(event, registration) {
        this.counters[registration.formula]--;
        this.counters[registration.category]--;
        this.animate(registration);
        $scope.$digest();
      };

      // Color animation.
      this.animate = function(registration) {
        var $panel = $('#panel-' + registration.formula);
        var highlightClass = 'highlight-info';
        var limit = this.formulas.filter(function(item){
          return item.id == registration.formula;
        })[0].limit;

        if (this.counters[registration.formula] / limit > 0.8) {
          highlightClass = 'highlight-danger';
        } else if (this.counters[registration.formula] / limit > 0.5) {
          highlightClass = 'highlight-warning';
        }
        $panel.addClass(highlightClass);
        setTimeout(function(){$panel.removeClass(highlightClass)}, 0);
      };

      // Get total per category.
      this.getTotal = function(category) {
        return this.formulas
          .filter(function(item){
            return item.category == category;
          })
          .reduce(function(prev, item){
            return prev + item.limit;
          }, 0);
      };

      // Bind.
      $scope.$on('add.registration', this.addDone.bind(this));
      $scope.$on('remove.registration', this.removeDone.bind(this));
      $scope.$on('initStart.registration', function(){
        this.counters = {};
      }.bind(this));

      // Initialization.
      registrations = registrationService.findAll();
      for (i in registrations) {
        this.addDone(null, registrations[i]);
      }
		}
	};
});

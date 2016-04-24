angular.module('bcc').directive('nav', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : '/js/directives/nav/nav.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function($scope, $route){
      this.currentPath = $route.current.$$route.originalPath;

      // Bind.
      $scope.$on('$locationChangeSuccess', function(event) {
        this.currentPath = $route.current.$$route.originalPath;
      }.bind(this));
		}
	};
});

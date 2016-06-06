angular.module('bcc').directive('nav', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : 'js/directives/nav/nav.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: ['$scope', '$route', function($scope, $route){
      var setCurrentPath = function(event) {
        this.currentPath = $route.current.$$route.originalPath;
      };

      // Bind.
      $(window).on('load', setCurrentPath.bind(this));
      $scope.$on('$locationChangeSuccess', setCurrentPath.bind(this));
		}]
	};
});

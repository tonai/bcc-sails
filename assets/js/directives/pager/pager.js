angular.module('bcc').directive('pager', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : '/js/directives/pager/pager.html',
		scope: {
      current: '=',
      limit: '=',
      total: '='
    },
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function($scope){
      this.pages = [];
      this.totalPage = 1;

      this.addDone = function() {
        this.pages = [];
        this.totalPage = parseInt(this.total / this.limit, 10) + 1;

        for (var i = 0; i < this.totalPage; i++) {
          this.pages.push(i + 1);
        }
      };

      this.paginate = function(page) {
        this.current = page;
      };

      // Initialization.
      $scope.$on('add.registration', this.addDone.bind(this));
    }
	};
});

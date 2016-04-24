angular.module('bcc').directive('messages', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : '/js/directives/messages/messages.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: function($scope){
      this.messages = [];

      // type: success, info, warning, danger
      this.addMessage = function(event, data, digest) {
        this.messages.length && this.dismiss(0);
        this.messages.push(data);
        digest && $scope.$digest();
      };

      this.dismiss = function(index) {
        this.messages.splice(index, 1);
      };

      // Initialization.
      $scope.$on('message', this.addMessage.bind(this));
    }
	};
});

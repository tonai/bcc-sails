angular.module('bcc').directive('messages', function(){
  'use strict';

	return {
		restrict: 'E',
		templateUrl : 'js/directives/messages/messages.html',
		scope: {},
		bindToController: true,
		controllerAs: 'ctrl',
		controller: ['$scope', function($scope){
      this.messages = [];

      // type: success, info, warning, danger
      this.addMessage = function(event, data, digest) {
        this.messages.length && this.dismiss(0);
        this.messages.push(data);
        digest && $scope.$digest();
        setTimeout(function(data){
          this.dismiss(data);
          digest && $scope.$digest();
        }.bind(this, data), 5000);
      };

      this.dismiss = function(message) {
        var index = this.messages.indexOf(message);
        if (index !== -1) {
          this.messages.splice(index, 1);
        }
      };

      // Initialization.
      $scope.$on('message', this.addMessage.bind(this));
    }]
	};
});

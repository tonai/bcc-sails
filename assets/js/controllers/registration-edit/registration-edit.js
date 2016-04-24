'use strict';

/**
 * @ngdoc function
 * @name bcc.controller:RegistrationEditCtrl
 * @description
 * # RegistrationEditCtrl
 * Controller of the bcc app
 */
angular.module('bcc').controller('RegistrationEditCtrl', function ($route) {
  this.registrationId = $route.current.params.id;
});

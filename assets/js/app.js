'use strict'

/**
 * @ngdoc overview
 * @name bcc
 * @description
 * # bcc
 *
 * Main module of the application.
 */
angular
  .module('bcc', [
    'ngRoute',
    'templates-dist',
    'ui.bootstrap.showErrors',
    'ngSanitize',
    'ngCsv',
    'ngFileUpload',
    'ui.bootstrap'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/controllers/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl'
      })
      .when('/registrations', {
        templateUrl: 'js/controllers/registration-list/registration-list.html',
        controller: 'RegistrationListCtrl',
        controllerAs: 'ctrl'
      })
      .when('/registration/:id', {
        templateUrl: 'js/controllers/registration-edit/registration-edit.html',
        controller: 'RegistrationEditCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

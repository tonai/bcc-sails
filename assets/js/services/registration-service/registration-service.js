angular.module('bcc').factory('registrationService', ['$rootScope', '$q', '$http', function($rootScope, $q, $http){
  'use strict';

  var registrations = {};
  var api = {};
  var limit = 30;

  var offline = false;
  var offlineActions = [];

	api.add = function(newRegistration) {
    if (!offline) {
      return $http.post('registration', newRegistration);
    } else {
      return $q(function(resolve){
        offlineActions.push({
          method: 'add',
          data: newRegistration
        });
        resolve();
      });
    }
	};

  api.remove = function(id) {
    if (!offline) {
      return $http.delete('registration/' + id);
    } else {
      return $q(function(resolve){
        offlineActions.push({
          method: 'remove',
          data: id
        });
        resolve();
      });
    }
  };

  api.update = function(registration){
    if (!offline) {
      return $http.put('registration/' + registration.id, registration);
    } else {
      return $q(function(resolve){
        offlineActions.push({
          method: 'update',
          data: registration
        });
        resolve();
      });
    }
  };

  api.reconnect = function(){
    offline = false;
    $rootScope.$broadcast('message', {
      type: 'info',
      message: 'Vous êtes maintenant en ligne.'
    });
    offlineActions.forEach(function(action){
      api[action.method](action.data);
    });
    offlineActions = [];
  };

  api.disconnect = function(){
    offline = true;
    console.log('disconnect');
    $rootScope.$broadcast('message', {
      type: 'warning',
      message: 'Vous êtes maintenant hors ligne.'
    }, true);
  };

	api.isOffline = function() {
    return offline;
	};

	api.findAll = function() {
    return registrations;
	};

	api.findOne = function(id) {
    return registrations[id];
	};

  api.count = function() {
    return $http.get('registration/count');
  };

  api.getRegistrations = function(offset) {
    offset = offset || 0;
    return $q(function(resolve){
      io.socket.get('/registration', {
        limit: limit,
        skip: offset
      }, function(response) {
        response.forEach(function(registration){
          registrations[registration.id] = registration;
          $rootScope.$broadcast('add.registration', registration);
        });
        resolve();
      });
    });
  };

  api.getRegistrationsRecursive = function(total, offset) {
    offset = offset || 0;
    return api.getRegistrations(offset).then(function(){
      if (Object.keys(registrations).length < total) {
        return api.getRegistrationsRecursive(total, offset + limit);
      }
    });
  };

  api.init = function(){
    registrations = {};
    $rootScope.$broadcast('initStart.registration');
    return api.count().then(function(response){
      var count = response.data.count;
      return api.getRegistrationsRecursive(response.data.count).then(function(){
        $rootScope.$broadcast('initEnd.registration');
      });
    });
    io.socket.off('connect', api.init);
  };

  /* Events */
  io.socket.on('connect', api.init);
  io.socket.on('reconnect', api.reconnect);
  io.socket.on('disconnect', api.disconnect);
  io.socket.on('registration', function(event){
    var registration;

    switch (event.verb) {
      case 'created':
        registration = event.data;
        registrations[registration.id] = registration;
        $rootScope.$broadcast('add.registration', registration);
        break;

      case 'destroyed':
        registration = registrations[event.id];
        $rootScope.$broadcast('remove.registration', registration);
        delete registrations[event.id];
        break;

      case 'updated':
        registration = event.data;
        registrations[registration.id] = registration;
        $rootScope.$broadcast('update.registration', registration);
        break;
    }
  });

	return api;
}]);

'use strict';

angular.module('loginMdouleV11App').controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
  $scope.submit = function () {

    var url = '/';
    var user = {};

    $http.post(url, user)
      .success(function(res) {
        alert('success', 'OK!', 'you are now registered');
      })
      .error(function(err) {
        alert('warning', 'oops there is a problem!', 'could not register');
      });
  };
});

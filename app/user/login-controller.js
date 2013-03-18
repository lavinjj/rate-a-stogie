'use strict';

Application.Controllers.controller('login-controller', ['$scope', '$location', 'authenticate', function($scope, $location, authenticate) {
    $scope.login = new rateastogie.LogIn();
    $scope.currentUser = null;

    $scope.$on('USER_UPDATED', function () {
        $scope.currentUser = authenticate.currentUser;
    });

    $scope.login = function () {
        authenticate.login($scope.login.userName, $scope.login.password);
        $scope.login = new rateastogie.LogIn();
    };

    $scope.logout = function () {
        authenticate.logout();
    };

    $scope.register = function () {
        $location.path('/register');
    };

    $scope.isUserLoggedIn = function () {
        return authenticate.isUserLoggedIn();
    };
}]);
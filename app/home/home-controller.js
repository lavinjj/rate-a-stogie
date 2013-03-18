'use strict';

Application.Controllers.controller('home-controller', ['$scope', '$location', 'authenticate', 'localize', function($scope, $location, authenticate, localize) {
    $scope.changeToEnglish = function() {
        localize.setLanguage('en-US');
    };

    $scope.changeToPigLatin = function() {
        localize.setLanguage('en-pl');
    };
}]);
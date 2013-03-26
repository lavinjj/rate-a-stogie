'use strict';

Application.Controllers.controller('cigar-entry-controller', ['$scope', '$location', 'CigarResource', 'authenticate', function ($scope, $location, CigarResource, authenticate) {
    $scope.Cigar = new rateastogie.Cigar();
    $scope.errorMessages = [];
    $scope.shapes = ['Churchill', 'Cigarillos', 'Corona', 'Corona Extra', 'Corona Gigante', 'Corona Grande', 'Double Corona', 'Gigante', 'Long Corona', 'Long Panatela', 'Lonsdale', 'Panatela', 'Petit Corona', 'Robusto', 'Robusto Gordo', 'Rothschild', 'Salomon', 'Short Gordo', 'Short Panatela', 'Slim Panatela', 'Small Panatela', 'Toro', 'Toro Gordo', 'Torpedo'];
    $scope.colors = ['Double Claro', 'Claro', 'Colorado Claro', 'Colorado Manduro', 'Natural', 'Maduro', 'Oscuro', 'Double Manduro'];
    $scope.countries = ['Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.binders = ['Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.fillers = ['Corojo', 'Criollo', 'Connecticut Shade', 'Connecticut Broadleaf', 'Costa Rican Maron', 'San Andres', 'Sumatra', 'Brazilian Mata Fina', 'Piloto Cubano', 'San Vincente', 'Olor', 'Volado', 'Seco', 'Ligero', 'Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.wrappers = ['Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.strengths = ['Mild', 'Mild-Medium', 'Medium', 'Medium-Full', 'Full'];

    $scope.errorsExist = function () {
        var result = false;
        $scope.errorMessages = [];

        if ($scope.registerForm.UserName.$error.uniqueUserName && !$scope.registerForm.UserName.$pristine) {
            result = true;
            $scope.errorMessages.push('That user name is already in use.')
        }
        if ($scope.registerForm.UserName.$error.required && !$scope.registerForm.UserName.$pristine) {
            result = true;
            $scope.errorMessages.push('User Name is required.')
        }
        if ($scope.registerForm.FirstName.$error.required && !$scope.registerForm.FirstName.$pristine) {
            result = true;
            $scope.errorMessages.push('First Name is required.')
        }
        if ($scope.registerForm.LastName.$error.required && !$scope.registerForm.LastName.$pristine) {
            result = true;
            $scope.errorMessages.push('Last Name is required.')
        }
        if ($scope.registerForm.Email.$error.uniqueEmail && !$scope.registerForm.Email.$pristine) {
            result = true;
            $scope.errorMessages.push('That Email already has an account.')
        }
        if ($scope.registerForm.Password.$error.equal && !$scope.registerForm.Password.$pristine) {
            result = true;
            $scope.errorMessages.push('Passwords does not match.')
        }

        return result;
    };

    $scope.create = function () {
        var cigar = new CigarResource($scope.Cigar);

        cigar.DateCreated = new Date();
        cigar.DateUpdated = cigar.DateCreated;

        cigar.$save(function (cigar) {
            $location.path('/');
        });
    };

    $scope.init = function () {
        if (!authenticate.isUserLoggedIn()) {
            $location.path('/');
        }

        $scope.User = authenticate.currentUser;
    };

    $scope.init();
}]);
'use strict';

Application.Controllers.controller('cigar-entry-controller', ['$scope', '$location', 'CigarResource', 'authenticate', function ($scope, $location, CigarResource, authenticate) {
    $scope.Cigar = new rateastogie.Cigar();
    $scope.errorMessages = [];
    $scope.shapes = ['Churchill', 'Cigarillos', 'Corona', 'Corona Extra', 'Corona Gigante', 'Corona Grande', 'Double Corona', 'Gigante', 'Long Corona', 'Long Panatela', 'Lonsdale', 'Panatela', 'Petit Corona', 'Presidente', 'Robusto', 'Robusto Gordo', 'Rothschild', 'Salomon', 'Short Gordo', 'Short Panatela', 'Slim Panatela', 'Small Panatela', 'Toro', 'Toro Gordo', 'Torpedo'];
    $scope.colors = ['Double Claro', 'Claro', 'Colorado Claro', 'Colorado Manduro', 'Natural', 'Maduro', 'Oscuro', 'Double Manduro'];
    $scope.countries = ['Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.binders = ['Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.fillers = ['Corojo', 'Criollo', 'Connecticut Shade', 'Connecticut Broadleaf', 'Costa Rican Maron', 'San Andres', 'Sumatra', 'Brazilian Mata Fina', 'Piloto Cubano', 'San Vincente', 'Olor', 'Volado', 'Seco', 'Ligero', 'Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.wrappers = ['Brazil', 'Barbados', 'Camaroon', 'Canary Islands', 'Connecticut Shade', 'Connecticut Broadleaf', 'Costa Rica ', 'Cuba', 'Dominican Republic', 'Ecuador', 'Honduras', 'Indonesia', 'Jamaica', 'Java', 'Mexico', 'Nicaragua', 'Peru', 'Philippines', 'Puerto Rico', 'United States'];
    $scope.strengths = ['Mild', 'Mild-Medium', 'Medium', 'Medium-Full', 'Full'];

    $scope.errorsExist = function () {
        var result = false;
        $scope.errorMessages = [];

        if ($scope.createForm.Manufacturer.$error.required && !$scope.createForm.Manufacturer.$pristine) {
            result = true;
            $scope.errorMessages.push('Manufacturer is required.')
        }
        if ($scope.createForm.Brand.$error.required && !$scope.createForm.Brand.$pristine) {
            result = true;
            $scope.errorMessages.push('Brand is required.')
        }
        if ($scope.createForm.Name.$error.required && !$scope.createForm.Name.$pristine) {
            result = true;
            $scope.errorMessages.push('Name is required.')
        }
        if ($scope.createForm.RingGauge.$error.required && !$scope.createForm.RingGauge.$pristine) {
            result = true;
            $scope.errorMessages.push('Ring Gauge is required.')
        }
        if ($scope.createForm.Length.$error.required && !$scope.createForm.Length.$pristine) {
            result = true;
            $scope.errorMessages.push('Length is required.')
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
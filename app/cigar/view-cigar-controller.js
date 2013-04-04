'use strict';

Application.Controllers.controller('view-cigar-controller', ['$scope', '$location', '$routeParams', 'CigarResource', function ($scope, $location, $routeParams, CigarResource) {
    $scope.Cigar = null;

    $scope.rateCigar  = function() {
        $location.path("/ratecigar/$scope.Cigar._id.$oid");
    };

    $scope.init = function () {
        CigarResource.getById($routeParams.id, function(cigar){
            $scope.Cigar = cigar;
        });
    };

    $scope.init();
}]);
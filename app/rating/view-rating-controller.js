'use strict';

Application.Controllers.controller('view-rating-controller', ['$scope', '$routeParams', '$location', 'CigarResource', 'RatingResource', function ($scope, $routeParams, $location, CigarResource, RatingResource) {
    $scope.Cigar = null;
    $scope.Rating = null;

    $scope.init = function () {
        RatingResource.getById($routeParams.id, function(rating){
            $scope.Rating = rating;
            CigarResource.getById($scope.Rating.CigarId, function(cigar){
                $scope.Cigar = cigar;
            });
        });
    };

    $scope.init();
}]);
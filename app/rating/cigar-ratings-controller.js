'use strict';

Application.Controllers.controller('cigar-ratings-controller', ['$scope', '$routeParams', '$location', 'CigarResource', 'RatingResource',
                                    function ($scope, $routeParams, $location, CigarResource, RatingResource) {
    $scope.Cigar = null;
    $scope.Ratings = [];

    $scope.rateCigar = function () {
        $location.path('/ratecigar/' + $scope.Cigar._id.$oid);
    };

    $scope.init = function () {
        CigarResource.getById($routeParams.id).then(function (cigar) {
            $scope.Cigar = cigar;

            RatingResource.query({"CigarId": cigar._id.$oid}, {sort: {"ReviewDate": -1}}).then(function (ratings) {
                $scope.Ratings = ratings;
            });
        });
    };

    $scope.init();
}]);
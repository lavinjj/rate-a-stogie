'use strict';

Application.Controllers.controller('add-rating-controller', ['$scope', '$routeParams', '$location', 'CigarResource', 'RatingResource', 'authenticate', function ($scope, $routeParams, $location, CigarResource, RatingResource, authenticate) {
    $scope.Cigar = null;
    $scope.Rating = new rateastogie.Rating();

    $scope.saveRating = function () {
        $scope.Rating.Rating = $scope.Rating.AppearanceRating +
            $scope.Rating.FlavorRating + $scope.Rating.SmokeRating +
            $scope.Rating.OverallImpressionRating;
        $scope.Rating.ReviewDate = new Date();

        if($scope.Cigar.AverageRating > 0){
            $scope.Cigar.AverageRating = (($scope.Cigar.AverageRating +
                $scope.Rating.Rating) / 2.0);
        } else {
            $scope.Cigar.AverageRating = $scope.Rating.Rating;
        }

        var rating = new RatingResource($scope.Rating);

        rating.$save();

        var cigar = new CigarResource($scope.Cigar);

        cigar.$update(function(){
           $location.path("/");
        });
    };

    $scope.init = function () {
        if (!authenticate.isUserLoggedIn()) {
            $location.path('/');
        }

        CigarResource.getById($routeParams.id, function(cigar){
            $scope.Cigar = cigar;
            $scope.Rating.CigarId = $scope.Cigar._id.$oid;
            $scope.Rating.UserId = authenticate.currentUser._id.$oid;
        });
    };

    $scope.init();
}]);
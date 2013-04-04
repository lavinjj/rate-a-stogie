'use strict';

Application.Controllers.controller('add-rating-controller', ['$scope', '$routeParams', '$location', 'CigarResource', 'RatingResource', 'UserResource', 'authenticate', function ($scope, $routeParams, $location, CigarResource, RatingResource, UserResource, authenticate) {
    $scope.Cigar = null;
    $scope.Rating = new rateastogie.Rating();
    $scope.existingRating = false;
    $scope.originalRating = 0;

    $scope.saveRating = function () {
        $scope.Rating.CigarId = $scope.Cigar._id.$oid;
        $scope.Rating.Brand = $scope.Cigar.Brand;
        $scope.Rating.Name = $scope.Cigar.Name;
        $scope.Rating.UserId = authenticate.currentUser._id.$oid;
        $scope.Rating.UserName = authenticate.currentUser.UserName;
        $scope.Rating.ReviewDate = new Date();
        $scope.Rating.Rating = $scope.Rating.AppearanceRating +
            $scope.Rating.FlavorRating + $scope.Rating.SmokeRating +
            $scope.Rating.OverallImpressionRating;

        var rating = new RatingResource($scope.Rating);

        rating.$saveOrUpdate();

        if($scope.Cigar.AverageRating > 0){
            $scope.Cigar.AverageRating = (($scope.Cigar.AverageRating +
                $scope.Rating.Rating) / 2.0);
        } else {
            $scope.Cigar.AverageRating = $scope.Rating.Rating;
        }
        $scope.Cigar.NumberOfReviews = $scope.Cigar.NumberOfReviews + 1;

        $scope.Cigar.DateUpdated = new Date();

        var cigar = new CigarResource($scope.Cigar);

        cigar.$update();

        authenticate.currentUser.Ratings = authenticate.currentUser.Ratings + 1;
        authenticate.currentUser.DateUpdated = new Date();

        var user = new UserResource(authenticate.currentUser);

        user.$update(function(){
            $location.path("/");
        });
    };

    $scope.init = function () {
        if (!authenticate.isUserLoggedIn()) {
            $location.path('/');
        }

        CigarResource.getById($routeParams.id).then(function(cigar){
            $scope.Cigar = cigar;

            RatingResource.query({"CigarId": cigar._id.$oid, "UserId": authenticate.currentUser._id.$oid}).then(function(ratings){
               $scope.Rating = ratings[0];
                $scope.existingRating = true;
                $scope.originalRating = $scope.Rating.Rating;
            });
        });
    };

    $scope.init();
}]);
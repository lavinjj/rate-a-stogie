/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 4/4/13
 * Time: 8:37 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

Application.Controllers.controller('rating-list-controller', ['$scope', '$location', 'RatingResource', 'authenticate', function($scope, $location, RatingResource, authenticate){
    $scope.ratings = [];
    $scope.mySelections = [];
    $scope.gridOptions = {
        data: 'ratings',
        selectedItems: $scope.mySelections,
        multiSelect: false,
        columnDefs: [
            {field:'ReviewDate', displayName:'Review Date', width: 100},
            {field: 'Brand', displayName:'Brand', width: 200},
            {field:'Name', displayName:'Name', width: 500},
            {field:'Rating', displayName:'Rating', width: 100}
        ]
    };

    $scope.getRatings = function() {
        RatingResource.query({"UserId": authenticate.currentUser._id.$oid}, {sort: {"ReviewDate": 1}}).then(function(ratings){

            $scope.ratings = ratings;
        });
    }

    $scope.reviewRating = function() {
        $location.path('/ratecigar/' + $scope.mySelections[0].CigarId);
    };

    $scope.deleteRating = function() {
        var rating = new RatingResource($scope.mySelections[0]);

        rating.$remove();

        $scope.getRatings();
    };

    $scope.init = function() {
        if (!authenticate.isUserLoggedIn()) {
            $location.path('/');
        }

        $scope.getRatings();
    };

    $scope.init();
}]);
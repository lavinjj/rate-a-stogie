'use strict';

Application.Controllers.controller('cigar-list-controller', ['$scope', '$location', 'CigarResource', function($scope, $location, CigarResource){
    $scope.cigars = [];
    $scope.mySelections = [];
    $scope.gridOptions = {
        data: 'cigars',
        selectedItems: $scope.mySelections,
        multiSelect: false,
        columnDefs: [
            {field: 'Brand', displayName:'Brand', width: 200},
            {field:'Name', displayName:'Name', width: 500},
            {field:'Shape', displayName:'Shape', width: 100},
            {field:'RingGauge', displayName:'RingGauge', width: 100},
            {field:'Length', displayName:'Length', width: 100},
            {field:'AverageRating', displayName:'Rating', width: 100},
            {field:'NumberOfReviews', displayName:'Reviews', width: '*'}
        ]
    };

    $scope.rateCigar = function() {
      $location.path('/ratecigar/' + $scope.mySelections[0]._id.$oid);
    };

    $scope.init = function() {
        CigarResource.query({}, {sort: {Brand: 1, Name: 1, Shape: 1}}).then(function(cigars){
            $scope.cigars = cigars;
        });
    };

    $scope.init();
}]);
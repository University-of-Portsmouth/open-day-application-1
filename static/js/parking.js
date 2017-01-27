app.controller('parkingController', ['$scope', '$http', function($scope, $http, $location) {

    
    $scope.destination = '';
    $scope.highlightAll = false;

    $scope.carParks = [];

    $scope.setTravelMode = function() {
        if ($scope.highlightAll) {
            $scope.destination = 'car parks';
        } else {
            $scope.destination = '';
        }
    };



    $http.get("../../parking.php")
        .then(function (response) {
            $scope.carParks = response.data.records;
            $scope.getNearestCarPark();
        });

}]);

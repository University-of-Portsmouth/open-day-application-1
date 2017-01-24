app.controller('navController', ['$scope', '$http', function($scope, $http) {
 
    $scope.destination = '';
    $scope.walking = true;

    $scope.travelMode = 'WALKING';

    $scope.buildings = [];

    $scope.clearDestination = function() {
        $scope.destination = '';
    };

    $scope.setDestination = function(dest) {
        $scope.destination = dest;
    };

    $scope.setTravelMode = function() {
        if ($scope.walking) {
            $scope.travelMode = 'WALKING';
        } else {
            $scope.travelMode = 'DRIVING';
        }
    };
    
        $http.get("../../navigator.php")
            .then(function (response) {
                $scope.buildings = response.data.records;
                console.log($scope.buildings);
        });

}]);

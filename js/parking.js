app.controller('parkingController', ['$scope', '$http', function($scope, $http) {
 
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

    $http.get("parking/parking.php")
        .then(function (response) {
            $scope.carParks = response.data.records;
            
            var firstLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var secondLoc = new google.maps.LatLng();

            console.log(google.maps.geometry.spherical.computeDistanceBetween(firstLoc, secondLoc));
            //$scope.getNearestCarPark();
        });

    /*
     * Gross
     *
    $scope.getNearestCarPark = function() {
        var i = 0;
        var nearest;
        var length = 0;

        for (carPark in $scope.carParks) {
            
                console.log("pop");
            $scope.destination = carPark[i].location;

            if (length == 0 || document.map.directionsRenderers[0].directions.routes[0].overview_path.length < length) {
                length = document.map.directionsRenderers[0].directions.routes[0].overview_path.length;
                nearest = carPark;
            }

            i++;
        }

        console.log(nearest);
        $scope.nearestCarPark = $scope.getNearestCarPark();
    };
*/
}]);

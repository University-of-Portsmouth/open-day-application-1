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


    $scope.getNearestCarPark = function() {

        var pos;
        var currNearest = -1;
        var nearest;

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function(position) {

                pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var promise = new Promise(function(resolve, reject) {

                    for (i in $scope.carParks) {

                        var tempPos = new google.maps.LatLng($scope.carParks[i].location.replace(' ', '').split(',')[0], $scope.carParks[i].location.replace(' ', '').split(',')[1]);

                        if (google.maps.geometry.spherical.computeDistanceBetween(pos, tempPos) < currNearest || currNearest == -1) {
                            currNearest = google.maps.geometry.spherical.computeDistanceBetween(pos, tempPos);
                            nearest = $scope.carParks[i];
                        }
                    }

                    if (nearest !== 'undefined' && i == $scope.carParks.length - 1) {
                        resolve("The nearest car park was found");
                    } else {
                        reject(Error("Something went wrong, the nearest car park was not found"));
                    }

                });

                promise.then(function() {
                    $scope.destination = nearest.location;
                });
            });
        }
    };

    $http.get("../../parking.php")
        .then(function (response) {
            $scope.carParks = response.data.records;
            $scope.getNearestCarPark();
        });

}]);

app.controller('navController', ['$scope', '$http', function($scope, $http, $location) {


    $scope.destination = '';

    $scope.transportType = 'WALKING';
    $scope.transportTypes = [
        {
            label: 'Walking',
            value: 'WALKING'
        },
        {
            label: 'Driving',
            value: 'DRIVING'
        }
    ];

    $scope.navMode = 'buildings';
    $scope.navTypes = [
        {
            label: 'Buildings',
            value: 'buildings',
            click: null
        },
        {
            label: 'Trains',
            value: 'trains',
            click: null
        },
        {
            label: 'Park and Ride',
            value: 'parkandride',
            click: null
        },
        {
            label: 'Food',
            value: 'food',
            click: null
        },
        {
            label: 'Car parks',
            value: 'parking'
        }
    ];


    $scope.buildings = [];
    $scope.trains = [];
    $scope.parkandrides = [];
    $scope.foods = [];
    $scope.carparks = [];

    $scope.getNearestCarPark = function() {

        var pos;
        var currNearest = -1;
        var nearest;

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function(position) {

                pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var promise = new Promise(function(resolve, reject) {

                    for (i in $scope.carparks) {

                        var tempPos = new google.maps.LatLng($scope.carparks[i].location.replace(' ', '').split(',')[0], $scope.carparks[i].location.replace(' ', '').split(',')[1]);

                        if (google.maps.geometry.spherical.computeDistanceBetween(pos, tempPos) < currNearest || currNearest == -1) {
                            currNearest = google.maps.geometry.spherical.computeDistanceBetween(pos, tempPos);
                            nearest = $scope.carparks[i];
                        }
                    }

                    if (nearest !== 'undefined' && i == $scope.carparks.length - 1) {
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

    $scope.chkParking = function() {
            if ($scope.navMode == 'parking') {
                $scope.getNearestCarPark();
            }
    };

    $http.get("../../navigatorBuildings.php")
        .then(function (response) {
            $scope.buildings = response.data.records;
        });

    $http.get("../../navigatorTrains.php")
        .then(function (response) {
            $scope.trains = response.data.records;
        });

    $http.get("../../navigatorParkandrides.php")
        .then(function (response) {
            $scope.parkandrides = response.data.records;
        });

    $http.get("../../navigatorFoods.php")
        .then(function (response) {
            $scope.foods = response.data.records;
        });

    $http.get("../../navigatorParking.php")
        .then(function (response) {
            $scope.carparks = response.data.records;
        });
}]);

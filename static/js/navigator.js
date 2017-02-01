app.controller('navController', ['NgMap', '$scope', '$http', '$timeout', '$interval', function(NgMap, $scope, $http, $timeout, $interval, $location, $route) {

    $scope.userLocation;
    $scope.loading = false;
    $scope.geoFail = false;

    var map;
    

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
            value: 'buildings'
        },
        {
            label: 'Trains',
            value: 'trains'
        },
        {
            label: 'Food',
            value: 'food'
        },
        {
            label: 'Car parks',
            value: 'parking'
        }
    ];


    $scope.buildings = [];
    $scope.trains = [];
    $scope.foods = [];
    $scope.carparks = [];
    
    $scope.spawnListeners = function() {
    
        NgMap.getMap().then(function(evtMap) {
            map = evtMap;
            map.addListener('idle', function() {
                $scope.loading = false;
            });
        });
    };
    
    $scope.spawnListeners();
    
    $scope.setLoading = function() {
        $scope.loading = true;
    };

    $scope.getUserLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // Timeout is called because it refreshes the view without disturbing the current digest (Google: $timeout)
                $timeout(function() { $scope.userLocation = { lat: position.coords.latitude, lng: position.coords.longitude }; }, 50);
            },

        function() {
            $scope.geoFail = true;            
        }
        );
        } 
    };

    $scope.$on('$routeChangeSuccess', function() {
        $scope.getUserLocation();
    });

    $interval(function() { $scope.getUserLocation(); console.log($scope.userLocation); }, 2000);

    $scope.clearDest = function() {
        $scope.destination = '';
    };

    $scope.parkAndRide = function() {
        console.log($scope.destination);
        $scope.destination = "Park and Ride Portsmouth, Tipner Lane, Portsmouth";
        $scope.transportType = 'DRIVING';    
        console.log($scope.destination);
    };

    $scope.getNearestCarPark = function() {
        
        $scope.loading = true;
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
                        console.log("Success");
                        resolve("The nearest car park was found");
                    } else {
                        console.log("Failure");
                        reject(Error("Something went wrong, the nearest car park was not found"));
                    }

                });

                promise.then(function() {
                    console.log("Promise fulfilled");
                    
                    $timeout(function() { 
                        $scope.destination = nearest.location;
                        $scope.transportType = 'DRIVING';
                        $scope.loading = false;
                    });

                    console.log("Promise fulfilled end");
                });
            });
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

    $http.get("../../navigatorFoods.php")
        .then(function (response) {
            $scope.foods = response.data.records;
        });

    $http.get("../../navigatorParking.php")
        .then(function (response) {
            $scope.carparks = response.data.records;
        });
}]);

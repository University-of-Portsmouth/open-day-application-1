app.controller('navController', ['NgMap', '$scope', '$http', '$timeout', '$interval', function(NgMap, $scope, $http, $timeout, $interval, $location, $route) {

    $scope.userLocation;
    $scope.loading = false;
    $scope.geoFail = false;
    $scope.destination = '';
    var map;
    $scope.panorama;
    var geocoder;

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

    $scope.navMode = '';
    $scope.navTypes = [
        {
            label: 'Buildings',
            value: 'buildings'
        },
        {
            label: 'Train stations',
            value: 'trains'
        },
        {
            label: 'Food',
            value: 'food'
        },
        {
            label: 'Car parks',
            value: 'parking'
        },
        {
            label: 'Student halls',
            value: 'halls'
        }
    ];


    $scope.buildings = [];
    $scope.trains = [];
    $scope.foods = [];
    $scope.carparks = [];
    $scope.halls = [];

    $scope.toggleStreetView = function() {

            var toggle = $scope.panorama.getVisible();

            if (toggle == false) {

                //geocoder.geocode( { 'address': $scope.destination}, function(results, status) {
                    //if (status == 'OK') {
                        //panorama.setPosition($scope.userLocation);
                        //panorama.setVisible(true);
                    //} else {
                        //alert('Geocoding failed due to: ' + status);
                    //}
                //});
                $scope.panorama.setPosition($scope.userLocation);
                $scope.panorama.setVisible(true);
            } else {
                $scope.panorama.setVisible(false);
            }

            
    };

    NgMap.getMap({id:"navMap"}).then(function(evtMap) {
        geocoder = new google.maps.Geocoder();
        map = evtMap;
        map.addListener('idle', function() {
            $scope.loading = false;
        });

        var panoramaOptions = {
            motionTracking: false
        };

        $scope.panorama = map.getStreetView();
        $scope.panorama.setOptions(panoramaOptions);

    });


    $scope.setLoading = function() {
        $scope.loading = true;
    };

    $scope.getUserLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // Timeout is called because it refreshes the view without disturbing the current digest (Google: $timeout)
                $timeout(function() { $scope.userLocation = { lat: position.coords.latitude, lng: position.coords.longitude }; $scope.panorama.setPosition($scope.userLocation); }, 50);
            });
        } else {
            $scope.geoFail = true;
        }
    };

    $scope.$on('$routeChangeSuccess', function() {
        $scope.getUserLocation();
        //$scope.panorama.setVisible(false);
    });

    $interval(function() { $scope.getUserLocation(); }, 2000);

    $scope.clearDest = function() {
        $timeout(function() { $scope.destination = ''; }, 50);
    };

    $scope.parkAndRide = function() {
        $scope.destination = "Park and Ride Portsmouth, Tipner Lane, Portsmouth";
        $scope.transportType = 'DRIVING';    
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
                        resolve("The nearest car park was found");
                    } else {
                        reject(Error("Something went wrong, the nearest car park was not found"));
                    }

                });

                promise.then(function() {

                    $timeout(function() { 
                        $scope.destination = nearest.location;
                        $scope.transportType = 'DRIVING';
                        $scope.loading = false;
                    });

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

    $http.get("../../navigatorHalls.php")
        .then(function (response) {
            $scope.halls = response.data.records;
        });

}]);

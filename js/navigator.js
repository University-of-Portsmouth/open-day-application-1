app.controller('navController', ['$scope', function($scope) {
 
    $scope.destination = '';

    

    $scope.buildings = [
        {
            name: "Lion Gate Building",
            realName: "Lion Gate Building, Portsmouth",
            code: "LG",
        },

        {
            name: "Buckingham Building",
            realName: "Buckingham Building, Portsmouth",
            code: "BK",
        },
        {
            name: "St. Andrews Court",
            realName: "St Andrews Court, Saint Michael's Road, Portsmouth",
            code: "SAC",
        },
            
    ];

    $scope.clearDestination = function() {
        $scope.destination = '';
    };

    $scope.setDestination = function(dest) {
        $scope.destination = dest;
    };
    
}]);

app.controller('contactusController', ['$scope', '$interval', function($scope, $interval, $location) {
    var d;

    $scope.spawnDate = function() {
        d = new Date();
    };

    $scope.spawnDate();

    $interval(function() { $scope.spawnDate(); console.log($scope.officeHours()); }, 1000);

    $scope.officeHours = function() {

        // First day (0) is Sunday
        if ((d.getDay() >= 1 && d.getDay() <= 5) && (d.getDay() >= 1 && d.getDay() <= 4 && d.getHours() >= 8 && d.getHours() <= 17) || (d.getDay() == 5 && d.getHours() >= 8 && d.getHours() <= 16)) {

            if (d.getDay() >= 1 && d.getDay() <= 4 && d.getHours() == 8 && d.getMinutes < 30) {
                return false;
            }

            if (d.getDay() >= 1 && d.getDay() <= 4 && d.getHours() == 17 && d.getMinutes > 15) {
                return false;
            }

            if (d.getDay() == 5 && d.getHours() == 8 && d.getMinutes < 30) {
                return false;
            }

            if (d.getDay() == 5 && d.getHours() == 16 && d.getMinutes > 15) {
                return false;
            }

            return true;
        }

        return false;
    };

}]);

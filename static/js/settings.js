app.controller('settingsController', function($scope, $mdDialog) {

    $scope.result = ' ';

    $scope.showSettings = function(ev, path) {
        $mdDialog.show({
            scope: $scope,
            preserveScope: true,
            controller: settingsController,
            templateUrl: path,
            targetEvent: ev,
            clickOutsideToClose: false,
        })
            .then(function(_result) {
                $scope.result = _result;
            }, function() {
            });
    };
});

function DialogController($scope, $mdDialog) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
}

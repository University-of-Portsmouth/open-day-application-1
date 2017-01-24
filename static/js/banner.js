app.controller('bannerController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.interval = 5000;
    
    $scope.slides = [
        {
            image: 'img/1.png',
            text: '',
            id: 0
        },
        {
            image: 'img/2.png',
            text: '',
            id: 1
        },
        {
            image: 'img/3.png',
            text: '',
            id: 2
        }];

}]);

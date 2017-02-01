app.controller('bannerController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.interval = 5000;
    
    $scope.slides = [
        {
            image: 'img/1x.jpg',
            text: '',
            id: 0
        },
        {
            image: 'img/2x.jpg',
            text: '',
            id: 1
        },
        {
            image: 'img/3x.jpg',
            text: '',
            id: 2
        },
        {
            image: 'img/4x.jpg',
            text: '',
            id: 3
        },
        {
            image: 'img/5x.jpg',
            text: '',
            id: 4

        }];

}]);

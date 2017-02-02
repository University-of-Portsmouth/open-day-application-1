app.controller('bannerController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.interval = 5000;
    
    $scope.slides = [
        
        {
            image: 'img/banner1.jpg',
            text: '',
            id: 0
        },

        {
            image: 'img/banner2.jpg',
            text: '',
            id: 1
        },

        {
            image: 'img/banner3.jpg',
            text: '',
            id: 2
        },
        

        {
            image: 'img/banner4.jpg',
            text: '',
            id: 3
        },

        {
            image: 'img/banner5.jpg',
            text: '',
            id: 4
        },

        {
            image: 'img/banner6.jpg',
            text: '',
            id: 5
        },

        {
            image: 'img/banner7.jpg',
            text: '',
            id: 6
        },

        {
            image: 'img/banner8.jpg',
            text: '',
            id: 7
        },

        {
            image: 'img/banner9.jpg',
            text: '',
            id: 8
        },

        {
            image: 'img/banner10.jpg',
            text: '',
            id: 9
        }];

}]);

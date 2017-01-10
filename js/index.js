var app = angular.module('UoPVisitorApp', ['ngMaterial', 'ngMdIcons', 'ngMap', 'ngRoute', 'ngAnimate']);

app.config(function($mdIconProvider, $mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.disableTheming();

    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })
    .when('/navigator', {
        templateUrl: 'navigator/navigator.html',
        controller: 'navController'
    })
    
});


app.controller('mainController', function ($scope, $mdDialog, $route) { 
    $scope.mainMenu = [
        {
            icon: 'near_me',
            title: 'Navigator',
            subtitle: 'Finds relevant buildings and highlights them on Google Maps',
            destination: '#/navigator',
        },

        {
            icon: 'school',
            title: 'Open day plans',
            subtitle: 'Provides details relevant to you regarding our open days',
            destination: '#/plans',

        },

        {
            icon: 'pets',
            title: 'Placeholder',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            destination: '',
        },

        {
            icon: 'accessibility',
            title: 'Placeholder',
            subtitle: 'Fusce lobortis in diam vitae ultricies',
            destination: '',
        },
    ];

    var originatorEv;

    this.openMainMenu = function($mdOpenMainMenu, ev) {
        originatorEv = ev;
        $mdOpenMainMenu(ev);
    };
});

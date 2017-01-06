var app = angular.module('UoPVisitorApp', ['ngMaterial', 'ngMdIcons', 'ngMap', 'ngRoute']);

app.config(function($mdIconProvider, $mdThemingProvider, $routeProvider, $locationProvider) {
    $mdThemingProvider.disableTheming();

    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })
    
});


app.controller('mainController', function ($scope, $mdDialog, $route) { 
    $scope.mainMenu = [
        {
            icon: 'business',
            title: 'Building locator',
            subtitle: 'Finds relevant buildings and highlights them on Google Maps',
        },

        {
            icon: 'school',
            title: 'Open day plans',
            subtitle: 'Provides details relevant to you regarding our open days',

        },

        {
            icon: 'pets',
            title: 'Placeholder',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },

        {
            icon: 'accessibility',
            title: 'Placeholder',
            subtitle: 'Fusce lobortis in diam vitae ultricies',
        },
    ];

    var originatorEv;

    this.openMainMenu = function($mdOpenMainMenu, ev) {
        originatorEv = ev;
        $mdOpenMainMenu(ev);
    };
});

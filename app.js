var app = angular.module('UoPVisitorApp', ['ngMaterial', 'ngMdIcons', 'ngMap', 'ngRoute']);

app.config(function($mdIconProvider, $mdThemingProvider, $routeProvider) {
    $mdThemingProvider.disableTheming();
    $routeProvider
});


app.controller('mainController', function ($scope) { 
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
            subtitle: 'Meaningless text',
        },

        {
            icon: 'accessibility',
            title: 'Another placeholder',
            subtitle: 'More meaningless text',
        },
    ];
});

var app = angular.module('UoPVisitorApp', ['ngMaterial', 'ngMdIcons', 'ngMap']);

app.config(function($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.disableTheming();
});


app.controller('mainController', function ($scope) { 
    $scope.mainMenu = [
        {
            icon: 'placeholder',
            title: 'Building locator',
            subtitle: 'Finds relevant buildings and highlights them on Google Maps',
            meta: null
        },

        {
            icon: 'placeholder',
            title: 'Open day plans',
            subtitle: 'Provides details relevant to you regarding our open days',
            meta: null

        },
    ];
});

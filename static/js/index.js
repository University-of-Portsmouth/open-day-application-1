var app = angular.module('UoPVisitorApp', ['ngMaterial', 'ngMdIcons', 'ngMap', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngMessages']);

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
    .when('/parking', {
        templateUrl: 'parking/parking.html',
        controller: 'parkingController'
    })
    .when('/vcmessage', {
        templateUrl: 'vcmessage/vcmessage.html',
        controller: 'vcmessageController'
    })
    .when('/feedback', {
        templateUrl: 'feedback/feedback.html',
        controller: 'feedbackController'
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
            title: 'Applicant open day plans',
            subtitle: 'Provides details relevant to you regarding our applicant open days',
            destination: '#/plans',

        },

        {
            icon: 'directions_car',
            title: 'Car park locator',
            subtitle: 'Finds nearby car parks',
            destination: '#/parking',
        },

        {
            icon: 'accessibility',
            title: 'Brief message from the VC',
            subtitle: 'A brief video message from the VC',
            destination: '#/vcmessage',
        },

        {
            icon: '',
            title: 'Feedback',
            subtitle: 'Let us know what you thought of our open day',
            destination: '#/feedback',
        },
    ];

    var originatorEv;

    this.openMainMenu = function($mdOpenMainMenu, ev) {
        originatorEv = ev;
        $mdOpenMainMenu(ev);
    };
});

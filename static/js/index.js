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
        .when('/plans', {
            templateUrl: 'plans/plans.html',
            controller: 'plansController'
        })
        .when('/contactus', {
            templateUrl: 'contactus/contactus.html',
            controller: 'contactusController'
        })
});


app.controller('mainController', function ($scope, $mdDialog, $route, $location, $window) {


    $scope.getLocation = function() {
            $scope.location = $location.path();
            console.log($scope.location);
    };

    $scope.$on("$locationChangeSuccess", function(){ $scope.getLocation() });

    $scope.mainMenu = [
        {
            icon: 'near_me',
            title: 'Navigator',
            subtitle: 'Helps you navigate UoP campus',
            destination: '#/navigator',
        },

        {
            icon: 'school',
            title: 'Applicant open day plans',
            subtitle: 'Presents you with the applicant open day plans',
            destination: '#/plans',

        },

        {
            icon: 'directions_car',
            title: 'Car park locator',
            subtitle: 'Allows you to find the nearest car park or choose one manually',
            destination: '#/parking',
        },

        {
            icon: 'accessibility',
            title: 'Brief message from UoP',
            subtitle: 'A brief video message from UoP',
            destination: '#/vcmessage',
        },

        {
            icon: 'feedback',
            title: 'Feedback',
            subtitle: 'Let us know what you thought of our open day',
            destination: '#/feedback',
        },
        {
            icon: 'help',
            title: 'Contact us',
            subtitle: 'Ask us for help',
            destination: '#/contactus',
        }
    ];

    var originatorEv;

    this.openMainMenu = function($mdOpenMainMenu, ev) {
        originatorEv = ev;
        $mdOpenMainMenu(ev);
    };

    checkScreenSize = function() {
        $scope.screenLarge = window.innerWidth > 760;
        $scope.screenMedium = window.innerWidth > 500 && window.innerWidth < 760;
        $scope.screenSmall = window.innerWidth > 200 && window.innerWidth < 500;
    };

    checkScreenSize();

});

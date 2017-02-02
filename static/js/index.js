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
            icon: 'accessibility',
            title: 'Welcome to the University of Portsmouth',
            subtitle: '',
            destination: '#/vcmessage',
        },
        {
            icon: 'near_me',
            title: 'Wayfinding',
            subtitle: 'Travel information, campus map and directions',
            destination: '#/navigator',
        },
        {
            icon: 'school',
            title: 'Applicant Open Days',
            subtitle: 'All the information you need to plan your visit',
            destination: '#/plans',

        },
        {
            icon: 'feedback',
            title: 'Feedback',
            subtitle: 'Chance to win a £100 gift card',
            destination: '#/feedback',
        },
        {
            icon: 'help',
            title: 'Contact us',
            subtitle: 'Have a question?',
            destination: '#/contactus',
        }
    ];
/*
    var originatorEv;

    this.openMainMenu = function($mdOpenMainMenu, ev) {
        originatorEv = ev;
        $mdOpenMainMenu(ev);
    };
*/
    checkScreenSize = function() {
        $scope.screenLarge = window.innerWidth > 760;
        $scope.screenMedium = window.innerWidth > 500 && window.innerWidth < 760;
        $scope.screenSmall = window.innerWidth > 200 && window.innerWidth < 500;
    };

    checkScreenSize();
});

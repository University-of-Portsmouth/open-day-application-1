var app = angular.module('UoPVisitorApp', ['ngMaterial', 'ngMdIcons', 'ngMap', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngMessages', 'ngTouch']);

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
        .when('/wifi', {
            templareUrl: 'wifi/wifi.html',
            controller: 'wifiController'
        })
});


app.controller('mainController', function ($scope, $mdDialog, $route, $location, $window) {


    $scope.getLocation = function() {
            $scope.location = $location.path();
    };

    $scope.$on("$locationChangeSuccess", function(){ $scope.getLocation() });

    $scope.mainMenu = [
        {
            icon: 'accessibility',
            title: 'Welcome',
            subtitle: 'Experience the University of Portsmouth',
            destination: '#/vcmessage',
        },
        {
            icon: 'near_me',
            title: 'Wayfinding',
            subtitle: 'Travel information and directions',
            destination: '#/navigator',
        },
        {
            icon: 'school',
            title: 'Open Days',
            subtitle: 'All the information you need to plan your visit',
            destination: '#/plans',

        },
        {
            icon: 'feedback',
            title: 'Feedback',
            subtitle: 'Your chance to win a £100 gift card',
            destination: '#/feedback',
        },
        {
            icon: 'help',
            title: 'Contact us',
            subtitle: 'Any questions? Get in touch',
            destination: '#/contactus',
        },
        //{
        //    icon: 'wifi',
        //    title: 'Free guest Wi-Fi',
        //    subtitle: 'placeholder',
        //    destination: '#/wifi',
       // }
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

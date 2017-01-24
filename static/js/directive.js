app.directive('stickyFooter', function($mdSticky, $compile) {
    return {
        restrict: 'E',
        template: '<footer flex="none" class="footer purpleBG1">' +
        '<div>Sticky footer for ads</div>' +
        '</footer>',
        link: function(scope, element) {
            $mdSticky(scope, element);
        }
    };
});

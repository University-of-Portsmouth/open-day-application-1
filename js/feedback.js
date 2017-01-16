app.controller('feedbackController', ['$scope', function($scope) {

    $scope.feedbackq1 = ["Wednesday 24th February 2017", "Saturday 27th February 2017", "Wednesday 2nd March 2017", "Wednesday 9th March 2017", "Saturday 12th March 2017", "Wednesday 23rd March 2017", "Saturday 23rd April 2017"];
    
    $scope.feedbackq2 = [
        {
            veryUseful: false,
            useful: false,
            notUseful: false,
            comment: ""
        }];

    $scope.feedbackq3 = [
        {
            veryUseful: false,
            useful: false,
            notUseful: false,
            comment: ""
        }];
    
    $scope.feedbackq4 = [
        {
            first: false,
            insurance: false,
            oneOfFive: false
        }];
    
    $scope.feedbackq5 = [
        {
            moreLikely: false,
            undecided: false,
            lessLikely: false,
            comment: ""
        }];
    
    $scope.feedbackq6 = [
        {
            comment: ""
        }];
    
    $scope.feedbackq7 = [
        {
            comment: ""
        }];


}]);

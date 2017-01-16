app.controller('feedbackController', ['$scope', function($scope) {

    
    $scope.feedbackq1 = ["Wednesday 24th February 2017", "Saturday 27th February 2017", "Wednesday 2nd March 2017", "Wednesday 9th March 2017", "Saturday 12th March 2017", "Wednesday 23rd March 2017", "Saturday 23rd April 2017"];
    $scope.q1 = '';

    $scope.feedbackq2 = [
        { label: 'Very useful', value: 'Very useful' },
        { label: 'Useful', value: 'Useful' },
        { label: 'Not useful', value: 'Not useful' },
        ];
    $scope.q2 = '';
    $scope.q2q = '';
    
    $scope.feedbackq3 = [
        { label: 'Very useful', value: 'Very useful' },
        { label: 'Useful', value: 'Useful' },
        { label: 'Not useful', value: 'Not useful' },
        ];
    $scope.q3 = '';
    $scope.q3q = '';
   
    $scope.feedbackq4 = [
        { label: 'First', value: 'First' },
        { label: 'Insurance', value: 'Insurance' },
        { label: 'One of five universities', value: 'One of five universities' },
        ];
    $scope.q4 = '';
    
    $scope.feedbackq5 = [
        { label: "I'm more likely to enrol", value: "I'm more likely to enrol" },
        { label: "I'm still undecided", value: "I'm still undecided" },
        { label: "I'm less likely to enrol", value: "I'm less likely to enrol" },
        ];
    $scope.q5 = '';
    $scope.q5q = '';

    $scope.q6 = '';
    $scope.q7 = '';

}]);

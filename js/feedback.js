app.controller('feedbackController', ['$scope', '$http', function($scope, $http) {

    
    $scope.feedbackq1 = ["Wednesday 24th February 2017", "Saturday 27th February 2017", "Wednesday 2nd March 2017", "Wednesday 9th March 2017", "Saturday 12th March 2017", "Wednesday 23rd March 2017", "Saturday 23rd April 2017"];
    $scope.q1 = '';

    $scope.feedbackq2 = [
        { label: 'Very useful', value: 'Very useful' },
        { label: 'Useful', value: 'Useful' },
        { label: 'Not useful', value: 'Not useful' },
        ];
    $scope.q2 = '';
    $scope.q2c = '';
    
    $scope.feedbackq3 = [
        { label: 'Very useful', value: 'Very useful' },
        { label: 'Useful', value: 'Useful' },
        { label: 'Not useful', value: 'Not useful' },
        ];
    $scope.q3 = '';
    $scope.q3c = '';
   
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
    $scope.q5c = '';

    $scope.q6 = '';
    
    $scope.feedbackq7 = [
        { label: 'Very useful', value: 'Very useful' },
        { label: 'Useful', value: 'Useful' },
        { label: 'Not useful', value: 'Not useful' },
        ];
    $scope.q7 = '';
    $scope.q7c = '';

    $scope.submitFeedback = function() {
    
        var request = $http({
            method: "post",
            url: "feedback/feedback.php",
            data: {
                question1: $scope.q1,
                question2: $scope.q2,
                question2comment: $scope.q2c,
                question3: $scope.q3,
                question3comment: $scope.q3c,
                question4: $scope.q4,
                question5: $scope.q5,
                question5comment: $scope.q5c,
                question6: $scope.q6,
                question7: $scope.q7,
                question7comment: $scope.q7c,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        console.log($scope.q1); 
        console.log($scope.q2); 
        console.log($scope.q2c); 
        console.log($scope.q3); 
        console.log($scope.q3c); 
        console.log($scope.q4); 
        console.log($scope.q5); 
        console.log($scope.q5c); 
        console.log($scope.q6); 
        console.log($scope.q7); 
        console.log($scope.q7c); 
    };

}]);

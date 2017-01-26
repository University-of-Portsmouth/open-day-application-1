app.controller('feedbackController', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog, $location) {
   
    $scope.formErrors = '';

    $scope.feedbackq1 = ["Wednesday 8th February 2017", "Saturday 11th February 2017", "Wednesday 15th February 2017", "Wednesday 22nd February 2017", "Saturday 25th February 2017", "Wednesday 8th March 2017", "Saturday 11th March 2017", "Wednesday 15th March 2017", "Wednesday 22nd March 2017", "Saturday 25th April 2017"];
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

    $scope.submitFeedback = function(ev) {

        $scope.formErrors = '';

        $scope.feedbackForm.q1.$setDirty();
        $scope.feedbackForm.q2.$setDirty();
        $scope.feedbackForm.q3.$setDirty();
        $scope.feedbackForm.q4.$setDirty();
        $scope.feedbackForm.q5.$setDirty();
        $scope.feedbackForm.q6.$setDirty();
        $scope.feedbackForm.q7.$setDirty();

        if ($scope.formValid) {
            var request = $http({
                method: "post",
                url: "feedback.php",
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

            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#feedbackContainer')))
                .clickOutsideToClose(true)
                .title('Thanks!')
                .textContent('Thank you for providing feedback on your open day experience.')
                .ariaLabel('Feedback form alert')
                .ok('Close')
                .targetEvent(ev)
            );
        } else {

            document.getElementById("formErrors").style.display = "block";

            if ($scope.feedbackForm.q1.$invalid) {
                $scope.formErrors += 'You forgot to answer question 1.\n';
            }

            if ($scope.feedbackForm.q2.$invalid) {
                $scope.formErrors += 'You forgot to answer question 2.\n';
            }

            if ($scope.feedbackForm.q3.$invalid) {
                $scope.formErrors += 'You forgot to answer question 3.\n';
            }

            if ($scope.feedbackForm.q4.$invalid) {
                $scope.formErrors += 'You forgot to answer question 4.\n';
            }

            if ($scope.feedbackForm.q5.$invalid) {
                $scope.formErrors += 'You forgot to answer question 5.\n';
            }

            if ($scope.feedbackForm.q6.$invalid) {
                $scope.formErrors += 'You forgot to answer question 6.\n';
            }

            if ($scope.feedbackForm.q7.$invalid) {
                $scope.formErrors += 'You forgot to answer question 7.\n';
            }
            console.log($scope.formErrors);
        }
    };

}]);

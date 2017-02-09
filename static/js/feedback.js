app.controller('feedbackController', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog, $location) {

    $scope.formErrors = '';

    $scope.feedbackq1 = ["Wednesday 8 February 2017", "Saturday 11 February 2017", "Wednesday 15 February 2017", "Wednesday 22 February 2017", "Saturday 25 February 2017", "Wednesday 8 March 2017", "Saturday 11 March 2017", "Wednesday 15 March 2017", "Wednesday 22 March 2017", "Saturday 22 April 2017"];

    $scope.q1 = '';

    $scope.feedbackq2_1 = ["TV, Film, Media and Creative Practice", "Social, Historical and Literary Studies", "Biology", "Psychology"];

    $scope.feedbackq2_2 = ["Architecture and Interior Architecture", "Social, Historical and Literary Studies", "Criminal Justice Studies", "Education and Childhood Studies", 
        "Language and Area Studies", "Biology", "Geography", "Earth and Environmental Sciences", "Pharmacy and Biomedical Sciences", "Sport and Exercise Science", "Therapeutic Radiography",
        "Civil Engineering and Surveying", "Computing", "Cosmology and Gravitation", "Engineering", "Mathematics", "Accounting and Financial Management", "Economics and Finance", 
        "Marketing and Sales", "Organisation Studies and Human Resource Management", "Strategy Enterprise and Innovation", "Law"];

    $scope.feedbackq2_3 = ["Animation", "Fashion and Textile Design", "Graphic Design", "Illustration", "Photography", "Drama and Musical Theatre", "Broadcast Journalism", 
        "Criminal Justice Studies", "Psychology", "Earth and Environmental Sciences"];

    $scope.feedbackq2_4 = ["Animation", "Fashion and Textile Design", "Graphic Design", "Illustration", "Photography", "Earth and Environmental Sciences", "Pharmacy and Biomedical Science", 
        "Sport and Exercise Science", "Civil Engineering and Surveying", "Computing", "Cosmology and Gravitation", "Engineering", "Mathematics", "Accounting and Financial Management",
        "Economics and Finance", "Law"];

    $scope.feedbackq2_5 = ["Creative Technologies", "Biology", "Geography", "Pharmacy and Biomedical Science", "Therapeutic Radiography", "Accounting and Financial Management",
        "Economics and Finance", "Marketing and Sales", "Organisation Studies and Human Resource Management", "Strategy Enterprise and Innovation", "Law"];

    $scope.feedbackq2_6 = ["Creative Technologies", "Education and Childhood Studies", "Psychology", "Civil Engineering and Surveying", "Computing", "Cosmology and Gravitation",
        "Engineering", "Mathematics"];

    $scope.feedbackq2_7 = ["TV, Film, Media and Creative Practice", "Social, Historical and Literary Studies", "Criminal Justice Studies", "Education and Childhood Studies",
        "Language and Area Studies", "Biology", "Earth and Environmental Sciences", "Sport and Exercise Science", "Therapeutic Radiography", "Civil Engineering and Surveying",
        "Computing", "Cosmology and Gravitation", "Engineering", "Mathematics", "Accounting and Financial Management", "Economics and Finance", "Marketing and Sales",
        "Organisation Studies and Human Resources Management", "Strategy Enterprise and Innovation", "Law"];

    $scope.feedbackq2_8 = ["Animation", "Fashion and Textile Design", "Graphic Design", "Illustration", "Photography", "Drama and Musical Theatre", "Broadcast Journalism",
        "Language and Area Studies", "Psychology", "Geography"];

    $scope.feedbackq2_9 = ["Architecture and Interior Architecture", "Psychology", "Pharmacy and Biomedical Sciences", "Marketing and Sales", "Organisation Studies and Human Resource Management"];

    $scope.feedbackq2_10 = ["TV, Film, Media and Creative Practices", "Architecture and Interior Architecture", "Animation", "Fashion and Textile Design", "Graphic Design", "Illustration",
        "Photography", "Drama and Musical Theatre", "Broadcast Journalism", "Creative Technologies", "Creative and Performance Practice", "Social, Historical and Literary Studies",
        "Criminal Justice Studies", "Education and Childhood Studies", "Language and Area Studies", "Biology", "Psychology", "Geography", "Earth and Envrionmental Sciences",
        "Pharmacy and Biomedical Sciences", "Sport and Exercise Science", "Therapeutic Radiography", "Civil Engineering and Surveying", "Computing", "Cosmology and Gravitation", "Engineering",
        "Mathematics", "Accounting and Financial Management", "Economics and Finance", "Marketing and Sales", "Organisation Studies and Human Resource Management", "Strategy Enterprise and Innovation",
        "Law"];

    $scope.q2 = '';
    $scope.q2_other = '';
    $scope.q2_2 = '';

    $scope.feedbackq3 = [
        { label: 'Very good', value: 'Very good' },
        { label: 'Good', value: 'Good' },
        { label: 'Average', value: 'Average' },
        { label: 'Poor', value: 'Poor' },
        { label: 'Did not attend', value: 'Did not attend' },
    ];

    $scope.q3 = '';
    $scope.q3_comment = '';

    $scope.q4 = '';
    $scope.q4_comment = '';

    $scope.feedbackq5 = [
        { label: 'Your firm choice', value: 'Your firm choice' },
        { label: 'Your insurance choice', value: 'Your insurance choice' },
        { label: 'Still deciding', value: 'Still deciding' },
    ];

    $scope.q5 = '';

    $scope.feedbackq6 = [
        { label: "Much better", value: "Much better" },
        { label: "Slightly better", value: "Slightly better" },
        { label: "About the same", value: "About the same" },
        { label: "Worse", value: "Worse" },
        { label: "First one attended", value: "First one attended" },
    ];

    $scope.q6 = '';
    $scope.q6_comment = '';


    $scope.feedbackq7 = [
        { label: "I'm more likely to make Portsmouth my firm or insurance choice", value: "I'm more likely to make Portsmouth my firm or insurance choice" },
        { label: "I'm still undecided", value: "I'm still undecided" },
        { label: "I'm less likely to make Portsmouth my firm or insurance choice", value: "I'm less likely to make Portsmouth my firm or insurance choice" },
    ];

    $scope.q7 = '';
    $scope.q7_comment = '';

    $scope.q8 = '';

    $scope.q9 = '';
    $scope.q9_comment = '';

    $scope.name = '';
    $scope.email = '';
    $scope.furtherInfo = '';

    $scope.submitFeedback = function(ev) {

        $scope.formErrors = '';

        $scope.feedbackForm.q1.$setDirty();

        if ($scope.q1 != '') {
            $scope.feedbackForm.q2.$setDirty();
        }

        $scope.feedbackForm.q3.$setDirty();
        $scope.feedbackForm.q3_comment.$setDirty();
        $scope.feedbackForm.q4.$setDirty();
        $scope.feedbackForm.q4_comment.$setDirty();
        $scope.feedbackForm.q5.$setDirty();
        $scope.feedbackForm.q6.$setDirty();
        $scope.feedbackForm.q6_comment.$setDirty();
        $scope.feedbackForm.q7.$setDirty();
        $scope.feedbackForm.q8.$setDirty();
        $scope.feedbackForm.q9.$setDirty();
        $scope.feedbackForm.q9_comment.$setDirty();

        console.log($scope.formValid); 
        console.log($scope.q1);
        console.log($scope.q2);
        console.log($scope.q2_2);
        console.log($scope.q3);
        console.log($scope.q3_comment);
        console.log($scope.q4);
        console.log($scope.q4_comment);
        console.log($scope.q5);
        console.log($scope.q6);
        console.log($scope.q6_comment);
        console.log($scope.q7);
        console.log($scope.q7_comment);
        console.log($scope.q8);
        console.log($scope.q9);
        console.log($scope.q9_comment);
        console.log($scope.name);
        console.log($scope.email);
        console.log($scope.furtherInfo);

        if ($scope.formValid) {
            var request = $http({
                method: "post",
                url: "feedback.php",
                data: {
                    q1: $scope.q1,
                    q2: $scope.q2,
                    q2_other: $scope.q2_other,
                    q2_2: $scope.q2_2,
                    q3: $scope.q3,
                    q3_comment: $scope.q3_comment,
                    q4: $scope.q4,
                    q4_comment: $scope.q4_comment,
                    q5: $scope.q5,
                    q6: $scope.q6,
                    q6_comment: $scope.q6_comment,
                    q7: $scope.q7,
                    q7_comment: $scope.q7_comment,
                    q8: $scope.q8,
                    q9: $scope.q9,
                    q9_comment: $scope.q9_comment,
                    name: $scope.name,
                    email: $scope.email,
                    furtherInfo: $scope.furtherInfo,
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

            if ($scope.q1 != '' && $scope.feedbackForm.q2.$invalid) {
                $scope.formErrors += 'You forgot to answer question 2.\n';
            }
            
            if ($scope.feedbackForm.q2_2.$invalid) {
                $scope.formErrors += 'You forgot to answer question 3.\n';
            }

            if ($scope.feedbackForm.q3.$invalid) {
                $scope.formErrors += 'You forgot to answer question 4.\n';
            }

            if ($scope.feedbackForm.q3_comment.$invalid && $scope.q3 == 'Poor') {
                $scope.formErrors += 'You forgot to answer the question 4 comment.\n';
            }

            if ($scope.feedbackForm.q4.$invalid) {
                $scope.formErrors += 'You forgot to answer question 5.\n';
            }

            if ($scope.feedbackForm.q4_comment.$invalid && $scope.q4 == 'Poor') {
                $scope.formErrors += 'You forgot to answer the question 5 comment.\n';
            }

            if ($scope.feedbackForm.q5.$invalid) {
                $scope.formErrors += 'You forgot to answer question 6.\n';
            }

            if ($scope.feedbackForm.q6.$invalid) {
                $scope.formErrors += 'You forgot to answer question 7.\n';
            }

            if ($scope.feedbackForm.q6_comment.$invalid && $scope.q6 == 'Worse') {
                $scope.formErrors += 'You forgot to answer the question 7 comment.\n';
            }

            if ($scope.feedbackForm.q7.$invalid) {
                $scope.formErrors += 'You forgot to answer question 8.\n';
            }

            if ($scope.feedbackForm.q8.$invalid) {
                $scope.formErrors += 'You forgot to answer question 9.\n';
            }

            if ($scope.feedbackForm.q9.$invalid) {
                $scope.formErrors += 'You forgot to answer question 10.\n';
            }

            if ($scope.feedbackForm.q9_comment.$invalid && $scope.q9 == 'Poor') {
                $scope.formErrors += 'You forgot to answer the question 10 comment.\n';
            }
        }
    };

}]);

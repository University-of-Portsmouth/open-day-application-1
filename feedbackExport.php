<?php

require_once 'db_common.php';

$result = $conn->query('SELECT * FROM feedback');

if (!$result) die('Something went wrong fetching data from the database.');

$num_fields = mysqli_num_fields($result);
$headers = array();

$headers = ["ID", "1. On which Applicant Open Day did you attend?", "2. How useful did you find the morning part of the Applicant Open Day? (Accommodation, campus and city tours given by our Student Marketing Assistants in purple", "2. Comments", "3. How useful did you find the afternoon part of the Applicant Open Day? (With your department)", "3. Comments", "4. Are we your first or insurance choice?", "5. Based on your experience of the Applicant Open Day, which of the following applies?", "5. Comments", "6. How could we improve the Applicant Open Day?", "7. Was our open day visitor app useful? How could we improve it?", "7. Comments"];

$fp = fopen('php://output', 'w');

if ($fp && $result) {
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename=uop_feedback_.csv');
    header('Pragma: no-cache');
    header('Expires: 0');
    
    fputcsv($fp, $headers, "\t");

    while ($row = $result->fetch_array(MYSQLI_NUM)) {
        fputcsv($fp, array_values($row), "\t");
    }
    die;
}

$conn->close();
?>

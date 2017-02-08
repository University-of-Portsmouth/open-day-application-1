<?php

require_once 'db_common.php';

$result = $conn->query('SELECT * FROM feedback');

if (!$result) die('Something went wrong fetching data from the database.');

$num_fields = mysqli_num_fields($result);
$headers = array();

$headers = ["ID", "1. On which Open Day did you attend?", "2. Which department did you visit?", "3. How would you rate the morning activities?", "3. Comments", "4. How would you rate the afternoon activities?", "4. Comments", "5. Is the University of Portsmouth likely to be...", "6. How does our Open Day compare to other Open Days you have attended?", "6. Comments", "7. Based on your experience of the Open Day, which of the following applies?", "7. Comments", "8. How could we improve the Open Day?", "9. How would you rate the Visit us app?", "9. Comments", "Name", "E-Mail", "Course Name", "Further information required"];

$fp = fopen('php://output', 'w');

if ($fp && $result) {
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename=uop_feedback_' . date("d-m-y") . '.csv');
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

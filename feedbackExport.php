<?php
if (md5($_GET['pass']) == 'f5f7185bd478a5084f503f3bb7b9b552') {

    require_once 'db_common.php';

    $result = $conn->query('SELECT * FROM feedback');

    if (!$result) die('Something went wrong fetching data from the database.');

    $num_fields = mysqli_num_fields($result);
    $headers = array();

    $headers = ["ID", "1. On which Open Day did you attend?", "2. Which department did you visit?", "2. Other", "3. What course have you been made an offer for?", "4. How would you rate the morning activities?", "4. Comments", "5. How would you rate the afternoon activities?", "5. Comments", "6. Is the University of Portsmouth likely to be...", "7. How does our Open Day compare to other Open Days you have attended?", "7. Comments", "8. Based on your experience of the Open Day, which of the following applies?", "8. Comments", "9. How could we improve the Open Day?", "10. How would you rate the Visit us app?", "10. Comments", "Name", "E-Mail", "Further information required"];

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
} else {
    echo "\n\nPermission denied";
}
?>

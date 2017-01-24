<?php

require_once 'db_common.php';

$result = $conn->query('SELECT * FROM feedback');

if (!$result) die('Something went wrong fetching data from the database.');

$num_fields = mysqli_num_fields($result);
$headers = array();

while ($fieldinfo = mysqli_fetch_field($result)) {
    $headers[] = $fieldinfo->name;
}

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

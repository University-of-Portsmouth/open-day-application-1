<?php

require_once 'db_common.php';

$result = mysqli_query($conn, 'SELECT * FROM feedback');
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

$filePath = fopen('gs://uopvisitorapp.appspot.com/test.csv', 'w');

foreach ($row as $val) {
    fputcsv($filePath, $val);
}

fclose($filePath);
?>

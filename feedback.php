<?php

require_once 'db_common.php';

$submitFeedback = file_get_contents("php://input");
$request = json_decode($submitFeedback);

$q1 = $conn->real_escape_string($request->q1);
$q2 = $conn->real_escape_string($request->q2);
$q2_other = $conn->real_escape_string($request->q2_other);
$q2_2 = $conn->real_escape_string($request->q2_2);
$q3 = $conn->real_escape_string($request->q3);
$q3_comment = $conn->real_escape_string($request->q3_comment);
$q4 = $conn->real_escape_string($request->q4);
$q4_comment = $conn->real_escape_string($request->q4_comment);
$q5 = $conn->real_escape_string($request->q5);
$q6 = $conn->real_escape_string($request->q6);
$q6_comment = $conn->real_escape_string($request->q6_comment);
$q7 = $conn->real_escape_string($request->q7);
$q7_comment = $conn->real_escape_string($request->q7_comment);
$q8 = $conn->real_escape_string($request->q8);
$q9 = $conn->real_escape_string($request->q9);
$q9_comment = $conn->real_escape_string($request->q9_comment);
$name = $conn->real_escape_string($request->name);
$email = $conn->real_escape_string($request->email);
$furtherInfo = $conn->real_escape_string($request->furtherInfo);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connection_error);
}

$sql = $conn->prepare("INSERT INTO feedback (q1, q2, q2_other, q2_2, q3, q3_comment, q4, q4_comment, q5, q6, q6_comment, q7, q7_comment, q8, q9, q9_comment, name, email, furtherInfo) VALUES ('$q1', '$q2', '$q2_other', '$q2_2', '$q3', '$q3_comment', '$q4', '$q4_comment', '$q5', '$q6', '$q6_comment', '$q7', '$q7_comment', '$q8', '$q9', '$q9_comment', '$name', '$email', '$furtherInfo')");

$sql->bind_param('ssssssssssssssssss', $q1, $q2, $q2_2, $q3, $q3_comment, $q4, $q4_comment, $q5, $q6, $q6_comment, $q7, $q7_comment, $q8, $q9, $q9_comment, $name, $email, $furtherInfo);

$sql->execute();

$conn->close();

?>

<?php

require_once 'db_common.php';
header("Access-Control-Allow-Origin: *");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$submitFeedback = file_get_contents("php://input");
$request = json_decode($submitFeedback);
$question1 = $conn->real_escape_string($request->question1);
$question2 = $conn->real_escape_string($request->question2);
$question2comment = $conn->real_escape_string($request->question2comment);
$question3 = $conn->real_escape_string($request->question3);
$question3comment = $conn->real_escape_string($request->question3comment);
$question4 = $conn->real_escape_string($request->question4);
$question5 = $conn->real_escape_string($request->question5);
$question5comment = $conn->real_escape_string($request->question5comment);
$question6 = $conn->real_escape_string($request->question6);
$question7 = $conn->real_escape_string($request->question7);
$question7comment = $conn->real_escape_string($request->question7comment);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connection_error);
}



$sql = "INSERT INTO feedback (question1, question2, question2comment, question3, question3comment, question4, question5, question5comment, question6, question7, question7comment) VALUES ('$question1', '$question2', '$question2comment', '$question3', '$question3comment', '$question4', '$question5', '$question5comment', '$question6', '$question7', '$question7comment')";

if ($conn->query($sql) === TRUE) {
    echo "Feedback submitted";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

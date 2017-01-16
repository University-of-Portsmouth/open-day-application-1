<?php

$postData = file_get_contents("php://input");
$request = json_decode($postData);
$question1 = $request->question1;
$question2 = $request->question2;
$question2comment = $request->question2comment;
$question3 = $request->question3;
$question3comment = $request->question3comment;
$question4 = $request->question4;
$question5 = $request->question5;
$question5comment = $request->question5comment;
$question6 = $request->question6;
$question7 = $request->question7;

$server = "localhost";
$user = "root";
$pass = "";
$db = "visitorapp";

$conn = new mysqli($server, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connection_error);
}

$sql = "INSERT INTO feedback ('question1', 'question2', 'question2comment', 'question3', 'question3comment', 'question4', 'question5', 'question5comment', 'question6', 'question7')
     VALUES ($question1, $question2, $question2comment, $question3, $question3comment, $question4, $question5, $question5comment, $question6, $question7)";

if ($conn->query($sql$ === TRUE) {
    echo "Feedback submitted";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

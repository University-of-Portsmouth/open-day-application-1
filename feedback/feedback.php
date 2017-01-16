<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "visitorapp");

$sql = "INSERT INTO feedback (question1, question2, question2comment, question3, question3comment, question4, question5, question5comment, question6, question7)
     VALUES ()";

$conn->close();

?>

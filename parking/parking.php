<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "visitorapp");

$result = $conn->query("SELECT name, location FROM carparks");

$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"name":"'    . $rs["name"] . '",';
    $outp .= '"location":"' . $rs["location"] . '"}';
}

$outp = '{"records":['.$outp.']}';

$conn->close();

echo($outp);
?>
<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "visitorapp");

$result = $conn->query("SELECT name, realName, code, location FROM buildings");

$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"name":"'    . $rs["name"] . '",';
    $outp .= '"realName":"' . $rs["realName"] . '",';
    $outp .= '"code":"' . $rs["code"] . '",';
    $outp .= '"location":"' . $rs["location"] . '"}';
}

$outp = '{"records":['.$outp.']}';

$conn->close();

echo($outp);
?>

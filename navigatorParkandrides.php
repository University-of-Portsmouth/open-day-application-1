<?php
require_once 'db_common.php';

$result = $conn->query("SELECT name, location FROM parkandrides");

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

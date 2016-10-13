<?php
$jsondata=file_get_contents('../../usdval.json');
$jsondecoded=json_decode($jsondata, true);
echo $jsondecoded["ticker"]["price"]
?>
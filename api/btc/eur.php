<?php
$jsondata=file_get_contents('../../eurval.json');
$jsondecoded=json_decode($jsondata, true);
echo $jsondecoded["ticker"]["price"]
?>
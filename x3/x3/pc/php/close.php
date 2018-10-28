<?php
header("Content-Type: application/json; charset=UTF-8");
$conn=mysqli_connect("qdm123287560.my3w.com", "qdm123287560", "hai674511", "qdm123287560_db");
mysqli_query($conn,"set names utf8");
$sql="select imgsrc,closename,price from closedisc";
$result=mysqli_query($conn,$sql);
while($rows=mysqli_fetch_array($result,MYSQLI_ASSOC)){
	$crows[]=$rows;
}
echo json_encode($crows);
?>
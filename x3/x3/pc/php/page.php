<?php
header("Content-Type: application/json; charset=UTF-8");
$conn=mysqli_connect("qdm123287560.my3w.com", "qdm123287560", "hai674511", "qdm123287560_db");
mysqli_query($conn,"set names utf8");
$sql="select count(*)  from productsList";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$num = ceil(intval($row[0])/8);
$pages=array();
for($i=0;$i<$num;$i++){
	$pages[$i]=$i+1;
}
echo json_encode($pages);
?>
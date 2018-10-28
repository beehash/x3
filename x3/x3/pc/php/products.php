<?php
header("Content-Type: application/json; charset=UTF-8");
@$curnum=$_REQUEST['0'] or die ('{"code":-2,"msg":"页码是必须的"}');
$conn=mysqli_connect("qdm123287560.my3w.com", "qdm123287560", "hai674511", "qdm123287560_db");
mysqli_query($conn,"set names utf8");
if($curnum){
	$pnum=($curnum-1)*8;
}else{
	$pnum=0;
}
$sql="select imgsrc,name,enname,price from productsList limit $pnum, 8";
$result=mysqli_query($conn,$sql);
while($rows=mysqli_fetch_array($result,MYSQLI_ASSOC)){
	$crows[]=$rows;
}
echo json_encode($crows);
?>
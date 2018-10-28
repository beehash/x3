<?php
	header("Content-Type:application/json;charset=utf-8");
	$conn=mysqli_connect("127.0.0.1", "root", "", "imgsdata");
	mysqli_query($conn,"set names utf8");
	$sql="select src from imgslist";
	$result=mysqli_query($conn,$sql);
	while($rows=mysqli_fetch_array($result,MYSQLI_ASSOC)){
		$crows[]=$rows;
	}
	echo json_encode($crows);
?>
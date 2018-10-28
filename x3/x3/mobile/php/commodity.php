<?php
	header("Content-Type:application/json;charset=utf-8");
	$conn=mysqli_connect("qdm123287560.my3w.com", "qdm123287560", "hai674511", "qdm123287560_db");
	mysqli_query($conn,"set names utf8");
	$sql="select brands from commodity";
	$result=mysqli_query($conn,$sql);
	while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
		$rows[]=$row;
	}
	echo json_encode($rows);
?>
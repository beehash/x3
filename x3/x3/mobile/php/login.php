<?php
	header("Content-Type:application/json;charset=utf-8");
	@$username=$_REQUEST["uname"] or die('{"code":-2,"msg":"该用户未注册"}');
	@$password=$_REQUEST["upwd"] or die('{"code":-2,"msg":"密码必须"}');
	$conn=mysqli_connect("qdm123287560.my3w.com", "qdm123287560", "hai674511", "qdm123287560_db");
	mysqli_query($conn,"set names utf8");
	$sql="select * from usersign where username='$username' and password='$password'";
	$result=mysqli_query($conn,$sql);
	if($row=mysqli_fetch_array($result)){
		echo '{"code":1,"msg":"登录成功"}';
	}else{
		echo '{"code":-1,"msg":"尚未注册，请去注册"}';
	}
?>
<?php
	header("Content-Type: application/json; charset=UTF-8");
	@$username=$_REQUEST['username'] or die('{"count":-2,"msg":"请输入正确的用户名")');
	@$password=$_REQUEST['pwd'] or die('{"count":-2,"msg":"请输入正确的密码")');
	@$phone=$_REQUEST['phone'] or die('{"count":-2,"msg":"请输入正确的手机号码")');
	$conn=mysqli_connect("qdm123287560.my3w.com", "qdm123287560", "hai674511", "qdm123287560_db");
	mysqli_query($conn,"set names utf8");
	$sql="insert into usersign values(null,'$username','$password','$phone')";
	$result=mysqli_query($conn,$sql);
	if($result==true){
		echo '{"count":1,"msg":"注册成功"}';
	}else{
		echo '{"count":-1,"msg":"注册失败，请重新注册"}';
	}
?>
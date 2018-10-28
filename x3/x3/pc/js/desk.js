$(document).ready(function(){
	$(".navbox ul li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	/********************登录与注册****************************/
	$(".log-target").on("click",function(){
		$("#login").css("display","block");
	});
	$("#login .closebtn").on("click",function(){
		$("#login").css("display","none");
	});
	$(".sign-target").on("click",function(){
		$("#signin").css("display","block");
	});
	$("#signin .closebtn").on("click",function(){
		$("#signin").css("display","none");
	}); 
	$("#dbpassword").on("keyup",function(){
		var pwdone=$("#spassword").val();
		var pwdtwo=$("#dbpassword").val();
		if(pwdone==pwdtwo){
			var pwd=pwdtwo;
			$("#signin .msgbox").css("display","none");
		}else{
			$("#signin .msgbox").css("display","block");
			$("#signin .msg").text("两次输入的密码不一致");
		}
	});
	//发送验证码
	$("#sendpm").on("click",function(){
		var uphone=$("#phone").val();
		$.ajax({
			type:"post",
			data:{"uphone":uphone},
			url:"php/verifyp.php",
			error:function(jqXHR, error, errorThrown) {
                console.log(error);
           },
			success:function(data){
				console.log(data);
			},
		});
	});
	//用户注册
	$("#signbtn").on("click",function(){
		var username=$("#susername").val();
		var pwdone=$("#spassword").val();
		var pwdtwo=$("#dbpassword").val();
		if(pwdone==pwdtwo){
			var pwd=pwdtwo;
		}
		var phone=$("#phone").val();
		console.log(username+": "+pwd+": "+phone);
		$.ajax({
			type:"post",
			data:{"username":username,"pwd":pwd,"phone":phone},
			url:"php/sign.php",
			error:function(jqXHR, error, errorThrown) {
                console.log(error);
           },
			success:function(data){
				console.log(data);
				if(data.count>0){
					$("#signin .message").text("注册成功")
				}else{
					$("#signin .message").text("注册失败，请稍后重试");
				}
			},
		});
	}); 
	//用户登录
	$("#loginbtn").on("click",function(){
		var uname=$("#username").val();
		var upwd=$("#password").val();
		$.ajax({
			type:"post",
			data:{"uname":uname,"upwd":upwd},
			url:"php/login.php",
			error:function(jqXHR, error, errorThrown) {
                console.log(error);
           },
			success:function(data){
				console.log(data);
				if(data.code>0){
					$("#login .message").text("登录成功");
					$("#login").css("display","none");
					$(".log-target").text("您好,"+uname+"，欢迎回来！！");
				}else{
					$("#login .message").text("尚未注册，请去注册");
				}
			},
		});
	});
	//跳转至注册页面
	$("#loginlocation").on("click",function(){
		$("#login").css("display","none");
		$("#signin").css("display","block");
	});
	//跳转至登录页面
	$("#signlocation").on("click",function(){
		$("#signin").css("display","none");
		$("#login").css("display","block");
	});
	/********************登录与注册****************************/
});

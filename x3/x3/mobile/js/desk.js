$(document).ready(function(){
	//滑动导航页面
	var X,moveX,startX,l,sw,bw,dis,w;
	sw=$(".slider-nav-box").width();
	bw=$(".slider-nav-body").width();
	w=$(".slider-nav-item").width();
	$(".slider-nav-body").on("touchstart",function(e){
		var regs=$(".slider-nav-body").css("webkit-transform");
		var regs1=regs.match(/[0-9-\.]/g).join("");
		var num=regs1.length;
		l=parseInt(regs1.substring(4,num-1));
		startX = e.originalEvent.changedTouches[0].pageX;
	});
	$(".slider-nav-body").on("touchmove",function(e){
		e.preventDefault();
    	moveEndX = e.originalEvent.changedTouches[0].pageX;
    	X = moveEndX - startX;
    	dis=l+X;
    	if(dis<-(bw-sw)){
			dis=-(bw-sw);
		}
		if(dis>0){
			dis=0;
		}
    	$(".slider-nav-body").css("transform","translateX("+dis+"px)");
    	X=0;
	});
	//滑动导航页面
	//导航切换样式
	$(".slider-nav-item").on("tap",function(e){
		e.preventDefault();
		$(this).addClass("slider-active").siblings().removeClass("slider-active");
	});
	//导航切换样式
	//搜索显示div
	$("body").on("focus",".input-group .input-control",function(){
		console.log(33333333);
		$(".concel-list").css("display","block");
	}).on("blur",".input-control",function(){
		$(".concel-list").css("display","none");
	});
	//搜索显示div
	/********************登录与注册****************************/
	$("#log-target").on("click",function(){
		$("#login").css("display","block");
	});
	$("#login .closebtn").on("click",function(){
		$("#login").css("display","none");
	});
	$("#sign-target").on("click",function(){
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
					$("#log-target").text("您好,"+uname+"，欢迎回来！！");
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

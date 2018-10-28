app.controller("myCtrl",function($scope,$http){
	$scope.wpage={0:1};
	$http({
				method:'post',
				url:'php/products.php',
				data:$scope.wpage,
				headers: {
		       		 'Content-Type': 'application/x-www-form-urlencoded'  
		    	},
		    	transformRequest: function ( data ) {  
			        var str = '';  
			        for( var i in data ) {  
			            str += i + '=' + data[i] + '&';  
			        }
			        return str.substring(0,str.length-1);  
			    }
			   }).then(function successCallback(response){
					$scope.product=response.data;
				},function errorCallback(response){
					console.log("请求失败");
				});
	/****************************/
	$http.get("php/page.php").success(function(response){
		$scope.pages=response;
	});
	/********************************************/
	$scope.pgs=function($event){
		$event.preventDefault();
		$scope.wpage=$event.target.text;
		$http({
			method:'post',
			url:"php/products.php",
			data:$scope.wpage,
			headers: {
			    'Content-Type': 'application/x-www-form-urlencoded'  
			},
			transformRequest: function ( data ) {  
			        var str = '';  
			        for( var i in data ) {  
			            str += i + '=' + data[i] + '&';  
			        }  
			        return str.substring(0,str.length-1);  
			    }
		}).then(function successCallback(response){
				$scope.product=response.data;
			},function errorCallback(response){
				console.log("请求数据失败");
		});
	}
});
app.controller("closeCtrl",function($scope,$http){
	$http({
		method:"post",
		url:"php/close.php",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		transformRequest: function ( data ) {  
			var str = '';
			for( var i in data ) {  
			    str += i + '=' + data[i] + '&';  
			}
			return str.substring(0,str.length-1);
			}
	}).then(function successCallback(response){
			$scope.close=response.data;
		},function errorCallback(response){
			console.log("请求数据失败");
		});
});
app.controller("beautyCtrl",function($scope){
	$(".beauty-text").on("mouseover",function(){
		$(this).animate({
			fontSize:"14px"
		},100,"swing");
	}).on("mouseout",function(){
		console.log(22222222);
           $(this).animate({
           	fontSize:"12px"
           },100,"swing");
	});
	$(".beauty-box img:not(.beauty-title img)").on("click",function(){
		$("#imgdisc").css("display","block");
		var discbox=$(".imgdisc");
		var w=$(".imgdisc").width();
		var h=$(".imgdisc").height();
		var cw=window.innerWidth;
		var ch=window.innerHeight;
		$(".imgdisc").css({"left":(cw-w)/2+"px",top:(ch-h)/2+"px"});
		$scope.imgurl=$(this).attr("src");
		$("#imgdisc .imgbox img").attr("src",$scope.imgurl);
	});
	$("#imgdisc .closebtn").on("click",function(){
			$("#imgdisc").css("display","none");
	});
});

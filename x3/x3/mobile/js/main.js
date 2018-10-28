app.controller("myCtrl",function($scope,$http){
	$http({
		method:"post",
		url:"php/imgs.php",
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
			$scope.imgslist=response.data;
			$scope.num=response.data.length-1;
			var gallery = mui('.mui-slider');
			gallery.slider({
  				interval:0
			});
		},function errorCallback(response){
			console.log("服务器连接失败");
		});
});
app.controller("goodsCtrl",function($scope,$http){
	$http({
		method:"post",
		url:"php/commodity.php",
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
		$scope.brands=response.data;
	},function errorCallback(){
		console.log("服务器错误")
	});
});
app.controller("beautyCtrl",function($scope){
	var gallery = mui('.mui-slider');
	gallery.slider({
  		interval:0
	});
});
app.controller("closeCtrl",function($scope){
	var gallery = mui('.mui-slider');
	gallery.slider({
  		interval:0
	});
});
var app=angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{templateUrl:"view/index.html",controller:"myCtrl"})
	.when("/products",{templateUrl:"view/products.html",controller:"goodsCtrl"})
	.when("/flower",{templateUrl:"view/flower.html"})
	.when("/family",{templateUrl:"view/family.html"})
	.when("/beauty",{templateUrl:"view/beauty.html",controller:"beautyCtrl"})
	.when("/close",{templateUrl:"view/close.html",controller:"closeCtrl"})
	.when("/gifts",{templateUrl:"view/gifts.html"})
	.otherwise({redirectTo:"/"});
});

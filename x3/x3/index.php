<?php

	function is_mobile(){

	     //正则表达式,批配不同手机浏览器UA关键词。

	     $regex_match="/(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|";

	     $regex_match.="htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|";

	     $regex_match.="blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|";

	     $regex_match.="symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|";

	     $regex_match.="jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220";

	     $regex_match.=")/i";

	    

	     return isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE']) or preg_match($regex_match, strtolower($_SERVER['HTTP_USER_AGENT'])); //如果UA中存在上面的关键词则返回真。

	}

	   

	     if(is_mobile()) {

	     //如果为真，则进行WAP页面。

	       header( "HTTP/1.1 301 Moved Permanently");  

	       header("Location: http://www.zswindfly.top/x3/mobile/index.html");

	     }else {    

	     //如果为假，则进行WEB页面。

	        header( "HTTP/1.1 301 Moved Permanently"); 
	        header("Location: http://www.zswindfly.top/x3/pc/index.html"); 
	     }

	?>
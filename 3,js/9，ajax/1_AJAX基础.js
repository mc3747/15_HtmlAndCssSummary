
/*
AJAX是异步JavaScript 和 XML，英文全称是Asynchronous JavaScript and XML。
也就是可以通过JavaScript发起HTTP请求，并异步方式获取指定的数据
*/ 

function loadXMLDoc(){
//1，创建XMLHttpRequest对象实例
  var xmlhttp;
  if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
  }else{
	   // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

//2，发起http请求
  xmlhttp.open("GET","https://www.baidu.com",true);
  xmlhttp.send();

 //3，服务器处理请求：此处略
 //4，接收服务器返回的数据
  xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4 && xmlhttp.status==200){
		// 返回正确
      document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	  
    }else{
		// 返回错误
		 document.getElementById("myDiv").innerHTML='我是返回的错误数据';
	}
  }
  
}

/*
总结：
1，发起请求的参数
open(method,url,async)            	规定请求的类型、URL 以及是否异步处理请求。
（1）.method:请求的类型；GET或POST。
（2）.url:文件在服务器上的位置。
（3）.async:true（异步）或 false（同步）。            
send(string)            	将请求发送到服务器。
string:仅用于 POST 请求       
2，响应格式：
 如果来自服务器响应内容不是XML，那么要使用responseText属性来获取
 如果来自服务器的响应是XML，并且需要作为XML对象进行解析，需要使用responseXML属性
3，响应状态：
readyState	存有XMLHttpRequest的状态，返回值是从0到4。
（1）.0: 请求未初始化。
（2）.1: 服务器连接已建立。
（3）.2: 请求已接收。
（4）.3: 请求处理中。
（5）.4: 请求已完成，且响应已就绪。
status	
（1）.200: "OK"。
（2）.404: 未找到页面。

xmlhttp.readyState的值及解释：
0：请求未初始化（还没有调用 open()）。
1：请求已经建立，但是还没有发送（还没有调用 send()）。
2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
4：响应已完成；您可以获取并使用服务器的响应了。
xmlhttp.status的值及解释：
100——客户必须继续发出请求
101——客户要求服务器根据请求转换HTTP协议版本
200——交易成功
201——提示知道新文件的URL
202——接受和处理、但处理未完成
203——返回信息不确定或不完整
204——请求收到，但返回信息为空
205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
206——服务器已经完成了部分用户的GET请求
300——请求的资源可在多处得到
301——删除请求数据
302——在其他地址发现了请求数据
303——建议客户访问其他URL或访问方式
304——客户端已经执行了GET，但文件未变化
305——请求的资源必须从服务器指定的地址得到
306——前一版本HTTP中使用的代码，现行版本中不再使用
307——申明请求的资源临时性删除
400——错误请求，如语法错误
401——请求授权失败
402——保留有效ChargeTo头响应
403——请求不允许
404——没有发现文件、查询或URl
405——用户在Request-Line字段定义的方法不允许
406——根据用户发送的Accept拖，请求资源不可访问
407——类似401，用户必须首先在代理服务器上得到授权
408——客户端没有在用户指定的饿时间内完成请求
409——对当前资源状态，请求不能完成
410——服务器上不再有此资源且无进一步的参考地址
411——服务器拒绝用户定义的Content-Length属性请求
412——一个或多个请求头字段在当前请求中错误
413——请求的资源大于服务器允许的大小
414——请求的资源URL长于服务器允许的长度
415——请求资源不支持请求项目格式
416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求
合起来
500——服务器产生内部错误
501——服务器不支持请求的函数
502——服务器暂时不可用，有时是为了防止发生系统过载
503——服务器过载或暂停维修
504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长
505——服务器不支持或拒绝支请求头中指定的HTTP版本
1xx:信息响应类，表示接收到请求并且继续处理
2xx:处理成功响应类，表示动作被成功接收、理解和接受
3xx:重定向响应类，为了完成指定的动作，必须接受进一步处理
4xx:客户端错误，客户请求包含语法错误或者是不能正确执行
5xx:服务端错误，服务器不能正确执行一个正确的请求
xmlhttp.readyState==4 && xmlhttp.status==200的解释：请求完成并且成功返回
*/ 
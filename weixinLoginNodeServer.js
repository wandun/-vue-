var http = require('http');
var https = require('https');
var url = require('url');

http.createServer(function(request,response){
var params=url.parse(request.url, true).query;
var appid='你的appid';
var secret=' 你的app_secret';


     // 执行 获取assess_token和openid操作
	if(params.operation==='token')
	{
		https.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${params.code}&grant_type=authorization_code`, function (res) {
			res.on('data', function (chunk) {
				//  将获取到的 assess_token 和openid  返回给调用者
				response.writeHead(200,{'Content-Type':'application/json;charset=utf-8' ,"Access-Control-Allow-Origin":"*" });
				response.end(chunk);
				console.log("以获取assess_token和openid");
			});
		})
	}
	// 执行 获取用户信息的操作
	if(params.operation==='userinfo')
	{
		https.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${params.access_token}&openid=${params.openid}`, function (res) {
			
			res.on('data', function (chunk) {
				//  将获取到的 用户信息json串 返回给调用者
				response.writeHead(200,{'Content-Type':'application/json;charset=utf-8' ,"Access-Control-Allow-Origin": "*" });
				response.end(chunk);
				console.log("以获取用户的信息");
			});
		})
	}
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
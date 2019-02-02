import axios from 'axios'

// 工具类
// 向  weixinLoginNodeServer 转发服务 （为防止最后的nickname乱码）

export default {

  // 根据code 获取 access_token 和 openid
  getAccessToken(code){
    return axios.get(`http://localhost:8888?operation=token&code=${code}`)
  },

  // 根据 access_token 获取 用户信息
  getUserinfo(access_token,openid){
    return axios.get(`http://localhost:8888?operation=userinfo&access_token=${access_token}&openid=${openid}`)
  },

  //  获取请求的参数，并截取需要的参数值 工具方法
  getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
  }
}

<template>
  <div>
    <div id="weixin">  </div>
  </div>
</template>

<script>
  import '../../static/wxLogin'

  export default {
    data(){
      return {

      }
    },
    created(){

    },
    methods: {

    },
    mounted(){
      var obj = new WxLogin({
        id: "weixin",
        appid: "你的appid",
        scope: "snsapi_login",
        redirect_uri: "回调的url"  //例如 http://www.guokangjie.cn/weixinlogin    //请在你的域名后面配置/weixinlogin 测试的跳转页面
      });
    },
  }
</script>

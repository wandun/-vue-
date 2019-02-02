<template>
  <div>
    <h1> 这里获取code </h1>
  </div>
</template>

<script>

  import weixinUtils from '@/assets/weixinUtils'

  export default {
    data(){
      return {
        user :{}  //用户信息
      }
    },
    mounted (){
      // 从路径中 获取code 的值
      let code= weixinUtils.getUrlParam('code')
      console.log("code是："+code);

      //如果是微信登陆
      if(code!==null){
        //根据code获取access_token和openid
        weixinUtils.getAccessToken(code).then( res=>{
          let access_token= res.data.access_token
          let openid= res.data.openid
          console.log("access_token: "+access_token);
          console.log("openid: "+openid);

          //根据access_token和openid获取用户信息
          if(access_token !== undefined && openid !== undefined){
            weixinUtils.getUserinfo(access_token,openid).then(res => {
              this.user = res.data;
              console.log(this.user.nickname)
              console.log(this.user.sex)
              console.log(this.user.headimgurl)
              // 存入cookie中
              // authApi.setUser("aaa",res.data.nickname,res.data.headimgurl);
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>

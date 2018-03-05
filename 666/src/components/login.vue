<template>
  <div class="registerdiv">
      <div class="registertop">
          <div class="registertop-logo">
            <xiaomi-logo></xiaomi-logo>
          </div>
        <p class="fs18">小米账号登录</p>
      </div>
      <div class="inputdiv">
          <input id="username" type="text" placeholder="邮箱/手机号码/小米ID">
          <input id="password" type="password" placeholder="密码">
      </div>
      <button @click="login" class="login">登录</button>
      <button @click="toregister" class="register">注册</button>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      toregister(){
          this.$router.push("register");
      },
      login(){
          var obj = {};
          obj.username = $("#username").val();
          obj.password = $("#password").val();
          if(obj.username == ""){
              alert("用户名不能为空");
              return false;
          }
          if(obj.password == ""){
              alert("密码不能为空");
              return false;              
          }
          var loginarr = [];
          var logindata = localStorage.getItem("logindata");
          if(logindata == null || logindata == "" || logindata == undefined){
              alert("用户不存在");
          }else{
              var logindataarr = JSON.parse(logindata);
              var bool = true;
              for(var i = 0; i < logindataarr.length; i++){
                 if(logindataarr[i].username == obj.username && logindataarr[i].password == obj.password){                     
                     alert("登录成功");
                     this.$router.push("/");
                     return;
                 }else{
                     bool = false;
                 }
              }
              if(!bool){
                  alert("用户名或者密码不对");
              }
          }
      }
  },
  created(){
    $.get("static/data.json",function(result) {  
            console.log(result);
    })  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .registerdiv{
        width: 100vw;
        height: 100vh;
        background: #eee;
    }
    .registertop{
        width: 100vw;
        height: 30vh;
        text-align: center;
    }
    .registertop-logo{
        width: 50px;
        height: 50px;
        padding: 40px 0 22px;
        margin: auto;
    }
    .fs18{
        font-size: 18px;
    }
    .inputdiv{
        width: 80vw;
        height: 10vh;
        margin: auto;
    }
    .inputdiv input{
        width: 100%;
        height: 5vh;
        border: 1px solid #fff;
        text-indent: 16px;
    }
    .inputdiv input:nth-child(1){
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: 1px solid #eee;
    }
    .inputdiv input:nth-child(2){
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .login{
        width: 80vw;
        height: 6vh;
        margin: 3vh 10vw 3vh;
        color: #fff;
        text-align: center;
        background: #33b4ff;
        border: 1px solid #33b4ff;
        border-radius: 8px;
    }
    .register{
        width: 80vw;
        height: 6vh;
        margin: 0vh 10vw 3vh;
        text-align: center;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
    }
</style>

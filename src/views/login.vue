<template>
  <div class="login-page">
    <!-- 标题 -->
    <van-nav-bar title="登录" />
    <!-- logo -->
    <img src="../assets/shopCar.png" />
    <!-- from表单 -->
    <van-form style="padding:0 16px;" @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <!-- 立即注册 -->
      <router-link to="/regedit" color="#1daeae" class="reg">立即注册</router-link>
      <!-- 登录 -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>


<script>
export default {
  name: "",

  components: {},

  created() { },

  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    //表单提交事件  点击登录触发
    onSubmit(values) {
      console.log('submit', values);
      //没有路由传参（没有注册）的时候先注册，再登录
      //JSON.stringify(this.$route.params)=="{}" 判断是否是个空对象
      if (JSON.stringify(this.$route.params) == "{}") {
        this.$toast('先注册');
        // 延时跳转
        setTimeout(() => {
          this.$router.push("/regedit")
        }, 1000)
      } else {
        //有传参，直接登录
        //将用户名和密码保存到浏览器缓存
        localStorage.setItem("userInfo",JSON.stringify(this.$route.params))
        //跳转首页
        this.$toast("登陆成功")
        //延迟跳转
        setTimeout(()=>{
          this.$router.push("/")
        },1000)
      }

    },

  },
};
</script>



<style scoped>
img {
  display: block;
  margin: 32px auto;
}

.reg {
  margin: 16px 0 0 16px;
  color: #1d8afa;
  font-size: 12px;
}
</style>

<template>
  <div class="login-page">
    <!-- 标题 -->
    <van-nav-bar title="注册" />
    <!-- logo -->
    <img src="../assets/shopCar.png" />
    <!-- from表单 -->
    <van-form style="padding:0 16px;" @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <!-- 立即注册 -->
      <router-link to="/login" color="#1daeae" class="reg">已有登录账号</router-link>
      <!-- 登录 -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>


    </van-form>

  </div>
</template>


<script>
export default {
  name: "",

  components: {},

  //生命周期函数
  created() {  //组件初始化成功后执行
    //接收路由传参  并且将参数赋值给登录表单
    this.username = this.$route.params.username
    this.username = this.$route.params.password
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    //用户注册
    onSubmit(values) {
      console.log('submit', values);
      this.$toast("注册成功");//弹窗提示
      setTimeout(() => {
        this.$router.push({
          name: "login",
          params: values
        })
      }, 1000)
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
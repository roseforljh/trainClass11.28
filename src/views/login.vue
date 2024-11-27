<template>
  <div class="login-page">
    <!-- 标题 -->
    <van-nav-bar title="登录" />
    <!-- logo -->
    <img src="../assets/shopCar.png" />
    <!-- from表单 -->
    <van-form style="padding:0 16px;" @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- 立即注册 -->
       <router-link to="/regedit" color="#1daeae" class="reg">立即注册</router-link>
      <!-- 登录 -->
      <div style="margin: 16px">
        <router-link to="/index"><van-button  round block type="info" native-type="submit"
          >提交</van-button
        ></router-link>
      </div>


    </van-form>
    
  </div>
</template>


<script>
export default {
  name: "",

  components: {},

  created() {},

  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>



<style scoped>
img {
  display: block;
  margin: 32px auto;
}
.reg{
  margin: 16px 0 0 16px;
  color: #1d8afa;
  font-size: 12px;
}
</style>

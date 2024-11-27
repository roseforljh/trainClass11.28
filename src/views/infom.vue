<template>
  <div class="Infom">
    <van-nav-bar
    title="商品详情"
    left-arrow
    left-text="返回"
    @click-left="$goBack"
  />
  <img src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png" alt="">
  <h3>HUAWEI Mate 40 Pro+ 5G 全网通 12G...</h3>
  <p>5nm麒麟9000旗舰芯片 | 超感光徕卡电...</p>
  <p style="color: #999;">免邮费 顺丰快递</p>
  <span>￥7988</span>
  </div>
  

</template>

<script>
export default {
  name: "",

  components: {},

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
.Infom{
  text-align: center;
}

img{
  width: 200px;
  height: 200px;
}
p{
  text-align: left;
  font-size: 14px;
}
span{
  display: block;
  text-align: left;
  color: red;
}
</style>
<template>
  <div class="index-page" v-if="indexData !=null">
    <!-- v-if="indexData !=null  请求的首页数据不为空  再渲染页面 -->
    <!-- 首页 -->
    <van-nav-bar title="首页" placeholder fixed />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="1baeae">
      <van-swipe-item v-for="(item,index) in indexData.swiperList" :key="index">
        <img :src="item.imgurl" />
      </van-swipe-item>
    </van-swipe>
    <!-- 金刚区 -->
     
    <van-grid column-num="5">
      <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <!-- 商品类别名称 -->
    <div class="shop-type-name">新品上线</div>
    <!-- 商品列表 -->
    <router-link to="/infom">
      <div class="shop-box">
        <div class="shop-item" v-for="i in 4" :key="i">
          <img data-v-5f4d5d03="" src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png" alt="">
          <p>HUAWEI Mate 40 Pro+ 5G 全网通 12G...</p>
          <span>￥7988</span>
        </div>
      </div>
    </router-link>
    <!-- 导航栏 -->
    <van-tabbar v-model="active" placeholder route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classxx">分类</van-tabbar-item>
      <van-tabbar-item badge="1" to="/shopCar" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",

  components: {

  },

  data() {
    return {
      //首页数据
      indexData:null,
      active: 0,
    };
  },

  created() {
    /* axios:封装的一个网络请求库，用来跟服务端进行数据交互。
      使用步骤：
        -安装  npm i axios
        -使用 
      -再将main.js中将axios挂载到Vue全局对象上
        -发起一个get请求：this.$axios.get(请求地址，请求参数)
        -常用请求方式：
          - get:常用作获取数据
          - post:常用作提交数据
    */
    //http://localhost:8888/data 首页数据接口地址
    //http://localhost:8888/category 分类数据接口地址
    //组件初始化成功后，获取首页数据
    this.$axios.get("../assets/data.json").then(res => {
      //.then() 请求成功的回调函数
      // res 请求到的数据
      console.log(res,"首页数据")
      this.indexData=res.data
      //
    }).catch(err=>{
      // .catch() 请求失败的回调函数
      // err失败的提示信息
      console.error(err);
    })
  },

  methods: {},
};
</script>

<style scoped lang="less">
//使用less作为css预处理器
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 200px;

}

img {
  width: 100%;
  height: 200px;
}

.shop-type-name {
  width: 100%;
  height: 50px;
  font-size: 14px;
  color: #1baeae;
  text-align: center;
  line-height: 50px;
  background: #f9f9f9;
}

.shop-box {
  display: flex;
  flex-wrap: wrap;

  .shop-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    width: 50%;
  }

  //&代表父级
  & .shop-item:nth-child(2n-1) {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  & .shop-item:nth-child(2n) {
    border-bottom: 1px solid #eee;
  }

  img {
    height: 150px;
  }

  p {
    margin: 5px 0;
    text-align: center;
    font-size: 14px;
  }

  span {
    font: 14px;
    color: #1baeae;
  }
}
</style>
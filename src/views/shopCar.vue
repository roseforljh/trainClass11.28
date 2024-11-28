<template>
    <div class="shop-car">
        <!-- 头部标题 -->
        <van-nav-bar title="购物车"  left-arrow left-text="返回" @click-left="$goBack" />
        <!-- 购物车内容 -->
        <!-- 没有商品 -->
        <div class="empty-box" v-if="shopCarData.length == 0">
            <van-icon name="smile-o" size="50px" />
            <p>购物车空空如也</p>
            <van-button style="width: 200px;" type="primary" color="#1baeae" to="/">前往首页</van-button>
        </div>
        <!-- 有商品 -->
        <div class="unempty-box" v-if="shopCarData.length > 0">
            <!-- 购物车列表 -->
            <div class="shopList" >
                <div class="list-Item" v-for="i in 10" :key="i">
                    <!-- 多选 -->
                    <van-checkbox v-model="checked"  style="padding-right: 10px;"/>
                    <!-- 图片 -->
                    <img src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png" alt="">
                    <!-- 右侧内容 -->
                    <div class="right-box">
                        <!-- 头部标题 -->
                         <div class="top">
                            <!-- 标题文字 -->
                             <span>HUAWEI Mate 40 Pro+ 5G 全网通 12G................</span>
                            <!-- 数量 -->
                             <span>x1</span>
                        </div>

                            <!-- 底部结构 -->
                        <div class="botton">
                            <!-- 价格信息 -->
                             <span>￥7988</span>
                            <!-- 数量加减 -->
                            <van-stepper v-model="value" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部结算栏 -->
            <van-submit-bar :price="3050" button-color="#000" button-text="结算">
                <van-checkbox v-model="checked">全选</van-checkbox>
            </van-submit-bar>
        </div>
        <!-- 底部导航栏 -->
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
    name: '',

    components: {},

    data() {
        return {
            active: 2,
            shopCarData: [1],//购物车数据
            checked: false,  //全选选中状态
            value:1,//购物车数量
        }
    },

    created() { },

    methods: {},

}

</script>

<style scoped lang="less">

.van-tabbar{
    position: relative !important;
}

.shop-car {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.empty-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    justify-content: center;   
}
.van-submit-bar {
    position: relative;

}
.unempty-box{
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    .shopList{
        flex: 1;
        padding: 0px 12px;
        overflow: auto;
        .list-Item{
            display: flex;
            align-items: center;
            overflow: hidden;
            margin: 20px;
            img{
                height: 60px;
                margin: 0 16px;
            }
            .right-box{
                overflow: hidden;
                .top{
                    display: flex;
                    align-items: center;
                    & span:nth-child(1){
                        flex: 1;
                        margin-right: 16px;
                    // 溢出隐藏，多余部分...表示
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    }
                }
                .botton{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span{
                        color:red;
                    }
                }
            }
        }
    }
}

</style>
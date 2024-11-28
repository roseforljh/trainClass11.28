<template>

    <div class="classxx">
        <van-nav-bar title="分类" left-arrow left-text="返回" @click-left="$goBack" />
        <div class="main-box">
            <div class="left-list">
                <van-sidebar v-model="activeKey" >
                    <van-sidebar-item title="家电 数码 手机" />
                    <van-sidebar-item title="女装 男装 穿搭" />
                    <van-sidebar-item title="家具 家饰 家纺" />
                    <van-sidebar-item title="运动 户外 乐器" />
                    <van-sidebar-item title="游戏 动漫 影视" />
                    <van-sidebar-item title="美妆 清洁 宠物" />
                    <van-sidebar-item title="工具 装修 建材" />
                    <van-sidebar-item title="鞋靴 箱包 配件" />
                    <van-sidebar-item title="玩具 孕产 用品" />
                </van-sidebar>
            </div>

            <div class="right-box" >
                <van-index-bar >
                    <van-index-anchor index="家电" />
                    <van-grid column-num="3">
                        <van-grid-item v-for="i in 13" :key="i" icon="photo-o" text="文字" />
                    </van-grid>

                    <van-index-anchor index="数码" />
                    <van-grid column-num="3">
                        <van-grid-item v-for="i in 13" :key="i" icon="photo-o" text="文字" />
                    </van-grid>

                    <van-index-anchor index="手机" />
                    <van-grid column-num="3">
                        <van-grid-item v-for="i in 13" :key="i" icon="photo-o" text="文字" />
                    </van-grid>
                </van-index-bar>
            </div>
        </div>
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
    name: '',

    components: {},

    data() {
        return {
           active:1,
           activeKey:1,
        }
    },

    created() { },

    methods: {

    },

}

</script>

<style scoped lang="less">
.main-box {
    display: flex;
}
</style>
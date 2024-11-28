import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = 
[
  {
    path:"/",
    name:"index",
    component:()=>import("../views/index.vue")
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/login.vue")
  },
  {
    path:"/regedit",
    name:"regedit",
    component:()=>import("../views/regedit.vue")
  },
  {
    path:"/infom",
    name:"infom",
    component:()=>import("../views/infom.vue")
  },
  {
    path:"/shopCar",
    name:"shopCar",
    component:()=>import("../views/shopCar.vue")
  },
  {
    path:"/classxx",
    name:"classxx",
    component:()=>import("../views/classxx.vue")
  }
]

const router=new VueRouter({
    routes
})

export default router
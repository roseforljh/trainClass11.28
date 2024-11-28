import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全部导入vantUI组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false
//全局的返回上一页
Vue.prototype.$goBack=()=>{
  router.go(-1)
}
//导入axios并挂载Vue全局对象
import axios from "axios"

Vue.prototype.$axios=axios;

Vue.config.productionTip=false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

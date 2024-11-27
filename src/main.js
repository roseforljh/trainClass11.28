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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

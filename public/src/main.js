import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import App from './App.vue'

// element UI
Vue.use(ElementUI)

//  --------------- AOP -------------------
axios.interceptors.request.use(function (config) {
    // pjax
    NProgress.inc(0.2);
    return config;
  }, function (error) {
    // Do something with request error 
    return Promise.reject(error);
});

// ----------- nprogress effect -----------
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})

router.afterEach((transition) => {
    NProgress.done()
})

new Vue({
    router,
    store,// 把 store 对象提供给 store 选项，这可以把 store 的实例注入所有的子组件
    el: '#app',
    render: h => h(App)
})
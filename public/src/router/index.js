import Vue from 'vue'
import VueRouter from 'vue-router'

import introduction from '../components/introduction/index.vue'
import counter from '../components/test/counter.vue'
import request from '../components/test/request.vue'

// 加载路由中间件
Vue.use(VueRouter)

//定义路由
const router = new VueRouter({
    mode: 'hash',
    routes: [
        {path:'/introduction', component: introduction},
        {path:'/counter', component: counter},
        {path:'/request', component: request},

        // ...
    ]
})

export default router
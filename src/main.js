import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(Element)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    dir: __dirname,
    routes: routes
})

new Vue({
    render: h => h(App),
}).$mount('#app')

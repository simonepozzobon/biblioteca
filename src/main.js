require('dotenv').config()
import App from './App.vue'
import axios from 'axios'
// import Element from 'element-ui'
import routes from './routes'
import Store from './store'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// Vue.use(Element)

Vue.config.productionTip = false

const store = new Store({
    configName: 'user-data',
    defaults: {
        token: '',
        user: ''
    }
})

Vue.prototype.$store = store

Vue.prototype.$http = axios.create({
    baseURL: process.env.VUE_APP_API_BASE
})

const router = new VueRouter({
    mode: 'history',
    dir: __dirname,
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // eslint-disable-next-line
        // console.log('autorizzazione richiesta');
        // eslint-disable-next-line
        // console.log(store);

        const app = router.app
        let user = store.get('user')
        let token = store.get('token')
        let auth = Object.prototype.hasOwnProperty.call(app.$http.defaults.headers.common, 'Authorization')

        if (user && token && auth) {
            app.$http.defaults.headers.common.Authorization = `Bearer ${token}`
            // eslint-disable-next-line
            // console.log('ci sono sia user che token');
            next();
        }
        else if (user && (typeof token == 'undefined' || !auth)) {
            // eslint-disable-next-line
            // console.log('ce user');
            let data = new FormData()
            data.append('id', user.id)
            data.append('email', user.email)

            app.$http.post('auth/get-token', data).then(response => {
                if (response.data.success) {
                    store.set('user', response.data.user)
                    store.set('token', response.data.token)
                    app.$http.defaults.headers.common.Authorization = `Bearer ${token}`
                    // eslint-disable-next-line
                    // console.log('login dal cookie riuscito dal router');

                    app.$nextTick(next)
                }
                else {
                    store.set('user', null)
                    store.set('token', null)
                    delete app.$http.defaults.headers.common.Authorization

                    // eslint-disable-next-line
                    // console.log('login dal cookie non riuscito');
                    router.push('/')
                    return false
                }
            })
        }
        else {
            // non ci sono ne user ne token -> redirect al login
            // eslint-disable-next-line
            console.log('redirect al login');
            router.push({
                name: 'login'
            })
            return false
        }
    }
    else {
        // console.log('nessuna autorizzazione necessaria');
        next()
    }
})

new Vue({
    router,
    data: function () {
        return {
            api_base: process.env.VUE_APP_API_BASE,
            base: process.env.VUE_APP_BASE,
            records: []
        }
    },
    methods: {
        goToWithParams: function (name, params) {
            this.$router.push({
                name: name,
                params: params
            })
        },
        goTo: function (name) {
            this.$router.push({
                name: name
            })
        },
        getData: function () {
            if (!this.$store.get('archives')) {
                this.$store.set('archives', [])
            }
            let records = this.$store.get('archives')
            console.log('records', records);
            this.$http.get('catalogo').then(response => {
                console.log(response.data);
                if (response.data.success) {
                    this.records = response.data.archives
                }
            })
        }
    },
    created: function () {
        this.getData()
    },
    mounted: function () {
        this.$router.push('/')
        console.log('mounted');
    },
    render: h => h(App)
}).$mount('#app')

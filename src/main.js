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
        user: '',
        records: [],
        genres: [],
        themes: [],
        featuredGenres: [],
        featuredThemes: [],
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
            app.ready = true
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
                    app.ready = true
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
            records: [],
            genres: [],
            themes: [],
            totalRecords: 0,
            ready: false,
            current: null,
            featuredGenres: [],
            featuredThemes: [],
        }
    },
    watch: {
        ready: function (value) {
            if (value === true) {
                this.getData()
            }
        },
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
            this.records = this.$store.get('records')
            this.featuredGenres = this.$store.get('featuredGenres')
            this.featuredThemes = this.$store.get('featuredThemes')
            this.$http.get('catalogo/genre-themes').then(response => {
                if (response.data.success) {
                    this.genres = response.data.genre
                    this.themes = response.data.themes
                    this.$store.set('genres', this.genres)
                    this.$store.set('themes', this.themes)
                }
            })
            this.$http.get('catalogo').then(response => {
                // console.log(response.data);
                if (response.data.success) {
                    this.records = response.data.archives
                    this.totalRecords = response.data.total
                    this.$store.set('records', this.records)

                    this.filterRecords()
                }
            })
        },
        filterRecords: function () {
            for (let i = 0; i < this.records.length; i++) {
                let current = this.records[i]
                this.addGenre(current)
                this.addThemes(current)
            }

            this.addRecordsArrays()
        },
        addRecordsArrays: function () {
            for (let i = 0; i < this.themes.length; i++) {
                if (!this.themes[i].hasOwnProperty('records')) {
                    this.themes[i].records = []
                }
            }

            for (let i = 0; i < this.genres.length; i++) {
                if (!this.genres[i].hasOwnProperty('records')) {
                    this.genres[i].records = []
                }
            }

            this.sortGenresAndThemes()
        },
        sortGenresAndThemes: function () {
            this.themes.sort((a, b) => {
                return a.records.length - b.records.length
            }).reverse()

            this.genres.sort((a, b) => {
                return a.records.length - b.records.length
            }).reverse()

            let featured = []
            let maxFeatured = 10
            for (let i = 0; i < this.themes.length; i++) {
                let current = this.themes[i]
                if (current.records.length > 0 && featured.length <= maxFeatured) {
                    featured.push(current.records[0])
                }
            }
            this.featuredThemes = featured
            this.$store.set('featuredThemes', this.featuredThemes)

            this.featuredGenres = this.genres.slice(0, 10)
            for (let i = 0; i < this.featuredGenres.length; i++) {
                this.featuredGenres[i].records = this.featuredGenres[i].records.slice(0, 10)
            }

            this.$store.set('featuredGenres', this.featuredGenres)
        },
        addGenre: function (obj) {
            let idx = this.genres.findIndex(genre => genre.id == obj.genre_id)
            if (idx > -1) {
                if (this.genres[idx].hasOwnProperty('records')) {
                    this.genres[idx].records.push(obj)
                }
                else {
                    this.genres[idx].records = [obj]
                }
            }
        },
        addThemes: function (obj) {
            for (let i = 0; i < obj.themes.length; i++) {
                let current = obj.themes[i]
                let idx = this.themes.findIndex(theme => theme.id == current.id)
                if (idx > -1) {
                    if (this.themes[idx].hasOwnProperty('records')) {
                        this.themes[idx].records.push(obj)
                    }
                    else {
                        this.themes[idx].records = [obj]
                    }
                }
            }
        }
    },
    created: function () {},
    mounted: function () {
        this.$router.push('/')
        console.log('mounted');
    },
    render: h => h(App)
}).$mount('#app')

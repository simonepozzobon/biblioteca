import Home from './views/Home.vue'
import Lasts from './views/Lasts.vue'
import Favourites from './views/Favourites.vue'
import Login from './views/Login.vue'
import MainTemplate from './containers/MainTemplate.vue'
import RecordSingle from './views/RecordSingle.vue'
import Register from './views/Register.vue'
import Search from './views/Search.vue'
import SearchResults from './views/SearchResults.vue'

const routes = [{
        path: '/',
        component: MainTemplate,
        children: [{
                path: '',
                name: 'home',
                component: Home,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'login',
                name: 'login',
                component: Login
            },
            {
                path: 'register',
                name: 'register',
                component: Register,
            },
            {
                path: 'lasts',
                name: 'lasts',
                component: Lasts,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'favourites',
                name: 'favourites',
                component: Favourites,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'search',
                name: 'search',
                component: Search,
            },
            {
                path: 'record-single/:id',
                name: 'record-single',
                component: RecordSingle,
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: 'search/:string',
                name: 'simple-search',
                component: SearchResults,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    }

]

export default routes

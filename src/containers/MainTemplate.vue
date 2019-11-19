<template>
<div>
    Main template
    <div class="flex bg-red">
        Cao
    </div>
</div>
<!-- <el-container class="main-container">
    <el-header class="header">
        <div class="header__title">
            <el-link @click="$root.goTo('home')">
                <h1>
                    Biblioteca di Morando
                </h1>
            </el-link>
        </div>
        <div
            class="header__logout"
            v-if="logged"
        >
            <div class="logout">
                <el-button
                    @click="logout"
                    icon="el-icon-switch-button"
                    type="danger"
                    round
                >
                    logout
                </el-button>
            </div>
            <div class="logout">
                <el-button
                    @click="$root.goTo('search')"
                    icon="el-icon-search"
                    type="info"
                    round
                >
                    Ricerca
                </el-button>
            </div>
            <div class="avatar">
                <span class="avatar__initial">{{ this.initial }}</span>
            </div>
        </div>
    </el-header>
    <el-main class="main">
        <router-view />
    </el-main>
    <el-footer class="footer">
        <small>www.cinetecamilano.it</small>
    </el-footer>
</el-container> -->
</template>

<script>
import '../assets/css/tailwind.css'
export default {
    name: 'MainTemplate',
    data: function () {
        return {
            logged: false,
            name: null
        }
    },
    computed: {
        initial: function () {
            if (this.name) {
                return this.name.substring(0, 2).toUpperCase()
            }
            return null
        },
    },
    watch: {
        '$route.params': function () {
            this.getUser()
        }
    },
    methods: {
        getUser: function () {
            if (this.$store.get('user')) {
                this.logged = true
                this.name = this.$store.get('user').name
            }
            else {
                this.logged = false
            }
        },
        logout: function () {
            this.$http.get('auth/logout').then(() => {
                this.$store.set('user', null)
                this.$store.set('token', null)
                delete this.$http.defaults.headers.common.Authorization

                this.name = null
                this.$root.goTo('login')
            })
        }
    },
    created: function () {
        this.getUser()


    },
}
</script>

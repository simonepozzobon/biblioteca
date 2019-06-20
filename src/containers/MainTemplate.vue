<template>
<el-container class="main-container">
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
                    @click="$root.goTo('search')"
                    icon="el-icon-search"
                >
                    Ricerca
                </el-button>
            </div>
            <div class="logout">
                <el-link
                    type="primary"
                    @click="logout"
                >
                    logout
                </el-link>
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
</el-container>
</template>

<script>
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
        '$route.params': function (route) {
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
            this.$http.get('auth/logout').then(response => {
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

<style lang="scss">
@import '../scss/styles.scss';

.main-container {
    min-height: 100vh;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $gray-lightest;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;

    &__title {
        font-weight: bold;
    }

    &__logout {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.main {
    margin-top: 60px;
}

.logout {
    margin-right: $spacer;
}

.avatar {
    background-color: $gray-lighter;
    border-radius: 50%;
    position: relative;
    height: $spacer * 2 * 1.618;
    width: $spacer * 2 * 1.618;

    &__initial {
        position: absolute;
        font-weight: bold;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $gray-lightest;
    color: $gray;
}
</style>
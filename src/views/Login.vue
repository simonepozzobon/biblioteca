<template>
<el-row
    type="flex"
    justify="center"
>
    <el-col
        :span="6"
        class="form"
    >
        <h2 class="form__title">Login</h2>
        <el-input
            class="form__input"
            placeholder="Email"
            v-model="email"
            clearable
        />
        <el-input
            class="form__input"
            placeholder="Password"
            v-model="password"
            show-password
        />
        <el-button
            type="primary"
            @click="attemptLogin"
        >
            Entra
        </el-button>
        <el-button
            type="warning"
            @click="$root.goTo('register')"
        >
            Effettua Registrazione
        </el-button>
    </el-col>
</el-row>
</template>

<script>
export default {
    name: 'Login',
    data: function () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        attemptLogin: function () {
            let data = new FormData()
            data.append('email', this.email)
            data.append('password', this.password)

            this.$http.post('auth/login', data).then(response => {
                if (response.data.success) {
                    this.$store.set('user', response.data.user)
                    this.$store.set('token', response.data.token)
                    this.$http.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
                    this.$router.push({
                        name: 'home'
                    })
                }
                else {
                    this.$store.set('user', null)
                    this.$store.set('token', null)
                    delete this.$http.defaults.headers.common.Authorization
                }
            })
        }
    },
}
</script>

<style lang="scss">
</style>
<template>
<el-row
    type="flex"
    justify="center"
>
    <el-col
        :span="10"
        class="form"
    >
        <h2 class="form__title">Registrazione</h2>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-input
                    class="form__input"
                    placeholder="Nome"
                    v-model="name"
                    clearable
                />
            </el-col>
            <el-col :span="12">
                <el-input
                    class="form__input"
                    placeholder="Cognome"
                    v-model="surname"
                    clearable
                />
            </el-col>
            <el-col :span="12">
                <el-input
                    class="form__input"
                    placeholder="Tipologia"
                    v-model="type"
                    clearable
                />
            </el-col>
            <el-col :span="12">
                <el-input
                    class="form__input"
                    placeholder="Numero tessera"
                    v-model="card_id"
                    clearable
                />
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-input
                    class="form__input"
                    placeholder="Email"
                    v-model="email"
                    clearable
                />
                <el-input
                    class="form__input"
                    placeholder="Telefono"
                    v-model="phone"
                    clearable
                />
                <el-input
                    class="form__input"
                    placeholder="Password"
                    v-model="password"
                    show-password
                />
            </el-col>
        </el-row>
        <el-button
            type="primary"
            @click="attemptLogin"
        >
            Salva
        </el-button>
        <el-button
            type="warning"
            @click="$root.goTo('login')"
        >
            Torna a login
        </el-button>
    </el-col>
</el-row>
</template>

<script>
export default {
    name: 'Login',
    data: function () {
        return {
            name: '',
            surname: '',
            type: '',
            phone: '',
            card_id: '',
            email: '',
            password: '',
        }
    },
    methods: {
        attemptLogin: function () {
            let data = new FormData()
            data.append('name', this.name)
            data.append('surname', this.surname)
            data.append('type', this.type)
            data.append('phone', this.phone)
            data.append('card_id', this.card_id)
            data.append('email', this.email)
            data.append('password', this.password)

            this.$http.post('auth/registrazione-biblioteca', data).then(response => {
                if (response.data.success) {
                    this.$root.goTo('login')
                }
            })
        }
    },
}
</script>

<style lang="scss">
</style>
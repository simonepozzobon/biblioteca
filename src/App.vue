<template>
<el-container id="app">
    <router-view />
</el-container>
</template>

<script>
export default {
    name: 'app',
    components: {},
    data: function () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        attemptLogin: function () {

        }
    },
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.form {

    &__input {
        margin-bottom: 16px;
    }
}
</style>

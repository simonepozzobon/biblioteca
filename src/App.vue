<template>
<div id="app">
    <router-view />
</div>
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
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}

.form {

    &__input {
        margin-bottom: 16px;
    }
}
</style>

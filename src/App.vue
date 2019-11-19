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

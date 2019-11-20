<template>
<div
    id="app"
    class="min-h-screen"
    style="-webkit-app-region: drag;"
>
    <router-view />
</div>
</template>

<script>
import './assets/css/tailwind.css'

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

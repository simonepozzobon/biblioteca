<template>
<div>
    <div class="text-gray-500 text-sm font-semibold tracking-wide">
        <a
            href="#"
            @click.prevent="$root.goTo('home')"
            class="hover:text-gray-600"
        >
            Home
        </a>
        <span>
            /
        </span>
        <span>
            Ultimi Arrivi
        </span>
    </div>
    <h1 class="mt-3 text-4xl uppercase text-gr-orange font-bold">
        Ultimi Arrivi
    </h1>
</div>
</template>

<script>
export default {
    name: 'Lasts',
    created: function () {
        this.$root.current = 'lasts'
    },
}
</script>

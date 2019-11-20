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
            Preferiti
        </span>
    </div>
    <h1 class="mt-3 text-4xl uppercase text-gr-orange font-bold">
        Preferiti
    </h1>
</div>
</template>

<script>
export default {
    name: 'Favourites',
    created: function () {
        this.$root.current = 'favourites'
    },
}
</script>

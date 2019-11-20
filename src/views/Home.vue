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
            Ricerca Avanzata
        </span>
    </div>
    <ui-single-film
        v-for="(record, i) in records"
        :key="i"
        :record="record"
    />
</div>
</template>

<script>
import UiSingleFilm from '../ui/UiSingleFilm.vue'
export default {
    name: 'Home',
    components: {
        UiSingleFilm,
    },
    data: function () {
        return {
            records: []
        }
    },
    methods: {
        getData: function () {
            this.records = this.$root.records
        }
    },
    created: function () {
        this.getData()
        this.$root.current = 'home'
    },
}
</script>

<style lang="scss">
</style>

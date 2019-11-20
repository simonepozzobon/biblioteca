<template>
<div class="px-8">
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
    },
}
</script>

<style lang="scss">
</style>

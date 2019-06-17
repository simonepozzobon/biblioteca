<template>
<div>
    <ui-single-film
        v-for="(record, i) in records"
        :key="i"
        :record="record"
    />
</div>
</template>

<script>
import {
    UiSingleFilm
}
from '../ui'
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
            this.$http.get('catalogo').then(response => {
                if (response.data.success) {
                    this.records = response.data.archives
                }
            })
        }
    },
    created: function () {
        this.getData()
    },
}
</script>

<style lang="scss">
</style>
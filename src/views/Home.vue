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

    </div>
    <div style="-webkit-app-region: no-drag;">
        <ui-featured-slider title="In Evidenza" />
        <ui-small-featured-slider
            v-for="genre in this.$root.featuredGenres"
            :key="genre.id"
            :item="genre"
            class="mt-6"
        />
    </div>
    <!-- <ui-single-film
        v-for="(record, i) in records"
        :key="i"
        :record="record"
    /> -->
</div>
</template>

<script>
// import UiSingleFilm from '../ui/UiSingleFilm.vue'
import UiSmallFeaturedSlider from '../ui/UiSmallFeaturedSlider.vue'
import UiFeaturedSlider from '../ui/UiFeaturedSlider.vue'
export default {
    name: 'Home',
    components: {
        // UiSingleFilm,
        UiSmallFeaturedSlider,
        UiFeaturedSlider,
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

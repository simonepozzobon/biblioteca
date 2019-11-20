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
    <h1 class="mt-3 text-2xl uppercase text-gr-orange font-bold">
        Ricerca Avanzata
    </h1>
    <hr class="mt-1">
    <div class="mt-3">
        <ui-input
            name="title"
            label="Titolo"
            placeholder="Titolo"
        />
        <div class="flex flex-row mt-6">
            <ui-input
                name="director"
                label="Regista"
                placeholder="Regista"
                class="mr-4 w-6/12"
            />
            <ui-input
                name="cast"
                label="Cast"
                placeholder="Cast"
                class="ml-4 w-6/12"
            />
        </div>
        <div class="flex flex-row mt-6">
            <ui-input
                name="country"
                label="Paese"
                placeholder="Paese"
                class="mr-4 w-6/12"
            />
            <ui-input
                name="year"
                label="Anno"
                placeholder="Anno"
                class="ml-4 w-6/12"
            />
        </div>
        <div class="mt-6">
            <ui-select
                label="Genere"
                name="genre"
                placeholder="Seleziona un genere"
                :options="$root.genres"
            />
        </div>
        <div class="mt-6">
            <ui-select
                label="Tema"
                name="theme"
                placeholder="Seleziona un percorso tematico"
                :options="$root.themes"
            />
        </div>
    </div>
    <div class="mt-8">
        <button class="px-6 py-3 rounded-full gr-orange text-white tracking-wider focus:outline-none">
            Esegui Ricerca Avanzata
        </button>
    </div>

    <ui-single-film
        v-for="(record, i) in results"
        :key="i"
        :record="record"
    />
</div>
</template>

<script>
import UiInput from '../ui/UiInput.vue'
import UiSelect from '../ui/UiSelect.vue'
import {
    UiSingleFilm
}
from '../ui'
export default {
    name: 'Search',
    components: {
        UiSingleFilm,
        UiInput,
        UiSelect,
    },
    data: function () {
        return {
            activeSearch: 'simple',
            advanced: false,
            simple_query: '',
            title: '',
            director: '',
            cast: '',
            country: '',
            year: '',
            genre: '',
            theme: '',
            results: [],
        }
    },
    methods: {
        search: function () {
            if (this.simple_query.length > 1) {
                let data = new FormData()
                data.append('string', this.simple_query)

                this.$http.post('catalogo/simple-search', data).then(response => {
                    this.formatResults(response.data)
                })
            }
        },
        advancedSearch: function () {
            let data = new FormData()
            data.append('title', this.title)
            data.append('director', this.director)
            data.append('cast', this.cast)
            data.append('country', this.country)
            data.append('year', this.year)
            data.append('genre', this.genre)
            data.append('theme', this.theme)

            this.$http.post('catalogo/advanced-search', data).then(response => {
                this.results = response.data
            })
        },
        formatResults: function (results) {
            let formatted = []
            for (let i = 0; i < results.length; i++) {
                formatted.push(results[i].searchable)
            }

            this.results = formatted
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.section-container {
    margin-bottom: $spacer;
    // background-color: $black;
}
</style>

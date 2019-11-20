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
        <div class="flex flex-row">
            <ui-input
                name="director"
                label="Regista"
                placeholder="Regista"
                class="mt-6 mr-4 w-6/12"
            />
            <ui-input
                name="cast"
                label="Cast"
                placeholder="Cast"
                class="mt-6 ml-4 w-6/12"
            />
        </div>
        <div class="flex flex-row">
            <ui-input
                name="country"
                label="Paese"
                placeholder="Paese"
                class="mt-6 mr-4 w-6/12"
            />
            <ui-input
                name="year"
                label="Anno"
                placeholder="Anno"
                class="mt-6 ml-4 w-6/12"
            />
        </div>
    </div>
    <div class="mt-4">
        <button class="px-6 py-3 rounded-full gr-orange text-white tracking-wider focus:outline-none">
            Esegui Ricerca Avanzata
        </button>
    </div>

    <el-row class="section-container">
        <el-col
            :span="8"
            :offset="8"
        >
            <el-tabs v-model="activeSearch">
                <el-tab-pane
                    label="Ricerca Avanzata"
                    name="advanced"
                >
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-select
                                class="form__input"
                                v-model="genre"
                                placeholder="Genere"
                            >
                                <el-option value="test">Test</el-option>
                                <el-option value="test">Test</el-option>
                                <el-option value="test">Test</el-option>
                                <el-option value="test">Test</el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="12">
                            <el-select
                                class="form__input"
                                v-model="theme"
                                placeholder="Percorso Tematico"
                            >
                                <el-option value="test">Test</el-option>
                                <el-option value="test">Test</el-option>
                                <el-option value="test">Test</el-option>
                                <el-option value="test">Test</el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-input
                        class="form__input"
                        placeholder="Nazionalità"
                        v-model="country"
                        clearable
                    />
                    <el-input
                        class="form__input"
                        placeholder="Anno di produzione"
                        v-model="year"
                        clearable
                    />

                    <el-button
                        type="primary"
                        @click="advancedSearch"
                    >
                        Esegui Ricerca Avanzata
                    </el-button>
                    <el-button
                        type="warning"
                        @click="$root.goTo('home')"
                    >
                        Torna al catalogo
                    </el-button>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
    <el-row class="section-container">
        <el-col :span="24">
            <ui-single-film
                v-for="(record, i) in results"
                :key="i"
                :record="record"
            />
        </el-col>
    </el-row>
</div>
</template>

<script>
import UiInput from '../ui/UiInput.vue'
import {
    UiSingleFilm
}
from '../ui'
export default {
    name: 'Search',
    components: {
        UiSingleFilm,
        UiInput,
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

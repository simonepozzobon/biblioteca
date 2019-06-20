<template>
<div>
    <el-row class="section-container">
        <el-col
            :span="8"
            :offset="8"
        >
            <el-tabs v-model="activeSearch">
                <el-tab-pane
                    label="Ricerca Semplice"
                    name="simple"
                >
                    <el-input
                        class="form__input"
                        placeholder="Ricerca..."
                        v-model="simple_query"
                        clearable
                    />
                    <el-button
                        type="primary"
                        @click="search"
                    >
                        Esegui Ricerca
                    </el-button>
                    <el-button
                        type="warning"
                        @click="$root.goTo('home')"
                    >
                        Torna al catalogo
                    </el-button>
                </el-tab-pane>
                <el-tab-pane
                    label="Ricerca Avanzata"
                    name="advanced"
                >

                    <p class="color-info">
                        <i class="el-icon-info"></i> Non è necessario compilare tutti i campi.
                    </p>
                    <el-input
                        class="form__input"
                        placeholder="Titolo"
                        v-model="title"
                        clearable
                    />
                    <el-input
                        class="form__input"
                        placeholder="Regista"
                        v-model="director"
                        clearable
                    />
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
                        placeholder="Cast"
                        v-model="cast"
                        clearable
                    />
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
import {
    UiSingleFilm
}
from '../ui'
export default {
    name: 'Search',
    components: {
        UiSingleFilm,
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
<template>
<el-row
    type="flex"
    justify="center"
>
    <el-col :span="8">
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
                <el-button type="primary">Esegui Ricerca</el-button>
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
                    v-model="simple_query"
                    clearable
                />
                <el-input
                    class="form__input"
                    placeholder="Regista"
                    v-model="simple_query"
                    clearable
                />
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-select
                            class="form__input"
                            v-model="simple_query"
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
                            v-model="simple_query"
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
                    v-model="simple_query"
                    clearable
                />
                <el-input
                    class="form__input"
                    placeholder="Nazionalità"
                    v-model="simple_query"
                    clearable
                />
                <el-input
                    class="form__input"
                    placeholder="Anno di produzione"
                    v-model="simple_query"
                    clearable
                />

                <el-button type="primary">Esegui Ricerca Avanzata</el-button>
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
</template>

<script>
export default {
    name: 'Search',
    data: function () {
        return {
            activeSearch: 'simple',
            advanced: false,
            simple_query: '',
        }
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.color-info {}
</style>
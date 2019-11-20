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
    <h1 class="mt-3 text-4xl uppercase text-gr-orange font-bold">
        Ricerca Avanzata
    </h1>
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
        <div class="mt-6">
            <label class="uppercase tracking-wider font-bold text-gr-dark">
                Includi nei risultati di ricerca:
            </label>
            <ui-checkbox
                label="Streaming"
                class="mt-2"
            />
            <ui-checkbox
                label="In videoteca"
                class="mt-2"
            />
            <ui-checkbox
                label="A pagamento"
                class="mt-2"
            />
        </div>
    </div>
    <div class="mt-8">
        <button class="px-6 py-3 rounded-full gr-orange text-white tracking-wider focus:outline-none">
            Esegui Ricerca Avanzata
        </button>
    </div>
</div>
</template>

<script>
import UiCheckbox from '../ui/UiCheckbox.vue'
import UiInput from '../ui/UiInput.vue'
import UiSelect from '../ui/UiSelect.vue'

export default {
    name: 'Search',
    components: {
        UiCheckbox,
        UiInput,
        UiSelect,
    },
    data: function () {
        return {
            title: null,
            director: null,
            cast: null,
            country: null,
            year: null,
            genre: null,
            theme: null,
            results: [],
        }
    },
    methods: {},
    created: function () {
        this.$root.current = 'search'
    },
}
</script>

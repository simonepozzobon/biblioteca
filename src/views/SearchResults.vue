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
            Risultati della ricerca
        </span>
    </div>
    <h1 class="mt-3 text-4xl uppercase text-gr-orange font-bold">
        Risultati: {{ searchString }}
    </h1>
    <div class="flex flex-row items-center">
        <div class="ml-auto text-xs tracking-wide font-semibold text-gray-500">
            Visualizza:
        </div>
        <div class="ml-2 text-orange cursor-pointer">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="th"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-4"
            >
                <path
                    d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm320-16v106.667H192V64h128zm160 245.333H352V202.667h128v106.666zm-160 0H192V202.667h128v106.666zM32 202.667h128v106.667H32V202.667zM160 64v106.667H32V80c0-8.837 7.163-16 16-16h112zM32 432v-90.667h128V448H48c-8.837 0-16-7.163-16-16zm160 16V341.333h128V448H192zm160 0V341.333h128V432c0 8.837-7.163 16-16 16H352zm128-277.333H352V64h112c8.837 0 16 7.163 16 16v90.667z"
                    class="fill-current"
                ></path>
            </svg>
        </div>
        <div class="ml-2 text-gray-500 cursor-pointer hover:text-orange">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="list"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-4"
            >
                <path
                    d="M88 56H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16zm0 160H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16zm0 160H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16zm416 24H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-320H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8zm0 160H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h336a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"
                    class="fill-current"
                ></path>
            </svg>
        </div>
    </div>
    <div class="flex flex-wrap -ml-4 -mr-4">
        <div
            v-for="result in results"
            :key="result.id"
            class="w-4/12"
        >
            <div class="relative m-4">
                <div class="overflow-hidden rounded-lg shadow-lg">
                    <img
                        :src="result.thumb.landscape | setPath"
                        :alt="result.title"
                        class=""
                    >
                </div>
                <div class="absolute w-full bottom-0 opacity-96 cursor-pointer">
                    <div class="gr-dark p-4 rounded-lg">
                        <h2
                            class="capitalize font-semibold text-light tracking-wide hover:text-orange"
                            @click.prevent.stop="goToRecord(result)"
                        >
                            {{ result.title | shortTitle }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SearchResults',
    data: function () {
        return {
            results: [],
        }
    },
    computed: {
        searchString: function () {
            return decodeURI(this.$route.params.string)
        },
    },
    methods: {
        search: function () {
            let string = this.searchString
            this.results = this.$root.records.filter(record => {
                let check = false

                if (record.title.toLowerCase().includes(string)) {
                    check = true
                }

                if (record.description.toLowerCase().includes(string)) {
                    check = true
                }

                if (record.country && record.country.name.toLowerCase().includes(string)) {
                    check = true
                }

                if (record.director && record.director.name.toLowerCase().includes(string)) {
                    check = true
                }

                for (let i = 0; i < record.actors.length; i++) {
                    if (record.actors[i].name.toLowerCase().includes(string)) {
                        check = true
                    }
                }

                for (let i = 0; i < record.themes.length; i++) {
                    if (record.themes[i].name.toLowerCase().includes(string)) {
                        check = true
                    }
                }

                return check
            })
        },
        goToRecord: function (item) {
            this.$root.goToWithParams('record-single', {
                id: item.id
            })
        }
    },
    filters: {
        setPath: function (path) {
            let url = '/storage' + path.replace('/public', '')
            return process.env.VUE_APP_BASE + url
        },
        shortTitle: function (string) {
            let n = 20
            if (string.length > 20) {
                return string.substr(0, n - 1) + '...'
            }
            return string
        }
    },
    created: function () {
        this.search()
        this.$root.current = null
    },
    beforeDestroy: function () {
        if (this.$route.name != 'simple-search') {
            this.$root.search = null
        }
    }
}
</script>

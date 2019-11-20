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
        Risultati: {{ this.$route.params.string }}
    </h1>
    <div>
        <pre>
        {{ this.$root.records[0] }}
        </pre>
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
    methods: {
        search: function () {
            let string = decodeURI(this.$route.params.string)
            this.results = this.$root.records.filter(record => {
                let check = false

                if (record.title.toLowerCase().includes(string)) {
                    check = true
                }



                return check
            })
            console.log(this.results);
        }
    },
    created: function () {
        this.search()
        this.$root.current = null
    },
    beforeDestroy: function () {
        this.$root.search = null
    }
}
</script>

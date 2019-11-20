<template>
<div class="flex flex-row mt-6">
    <div class="w-3/12 pointer">
        <div class="overflow-hidden rounded-lg shadow-md">
            <img
                :src="record.thumb.landscape | setPath"
                class="object-cover"
            >
        </div>
    </div>
    <div class="w-8/12 ml-6">
        <div class="tracking-wide font-bold text-dark text-xl">
            {{ record.title }}
        </div>
        <div class="mt-1">
            <span class="px-2 py-1 rounded-full gr-light-inv text-orange-500 uppercase text-xs tracking-wider font-semibold">
                {{ record.streaming ? 'streaming' : 'catalogo' }}
            </span>
            <div class="inline-block ml-1">
                <span
                    v-if="record.country"
                    class="text-sm text-gray-400 font-semibold"
                >
                    • {{ record.country.name }}
                </span>
                <span
                    v-if="record.year"
                    class="text-sm text-gray-400 font-semibold"
                >
                    • {{ record.year }}
                </span>
                <span
                    v-if="record.duration"
                    class="text-sm text-gray-400 font-semibold"
                >
                    • {{ record.duration }}'
                </span>
            </div>
        </div>
        <div class="mt-2">
            <p class="text-dark">
                {{ shortDescription }}
            </p>
        </div>
        <div class="mt-2">
            <button
                class="tracking-widest text-sm uppercase text-orange-500 border border-orange-500 rounded-full px-4 py-1 hover:gr-orange hover:text-white"
                @click="goToRecord"
            >
                Apri
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'UiSingleFilm',
    components: {},
    props: {
        record: {
            type: Object,
            default: function () {
                return {
                    title: 'Titolo',
                }
            },
        },
    },
    computed: {
        shortDescription: function () {
            // https://stackoverflow.com/questions/1199352/smart-way-to-shorten-long-strings-with-javascript
            let n = 200
            if (Object.prototype.hasOwnProperty.call(this.record, 'description')) {
                if (this.record.description.length > 200) {
                    return this.record.description.substr(0, n - 1) + '...'
                }
                return this.record.description
            }
            return null
        },
    },
    filters: {
        setPath: function (path) {
            let url = '/storage' + path.replace('/public', '')
            return process.env.VUE_APP_BASE + url
        }
    },
    methods: {
        goToRecord: function () {
            this.$root.goToWithParams('record-single', {
                id: this.record.id
            })
        }
    },
}
</script>

<style lang="scss">
@import '../scss/styles.scss';

.ui-single-film {
    margin-bottom: $spacer;

    &__title {
        color: $primary;
        text-transform: uppercase;

        h1 {
            margin-top: 0;
            margin-bottom: $spacer / 2;
        }
    }

    &__details {
        color: $gray-light;
    }

    &__description {
        margin-bottom: $spacer;
    }

    .image-container {
        border-radius: 5px;
        overflow: hidden;
        height: inherit;
        position: relative;
        cursor: pointer;

        .el-image {
            display: block;
        }

        &__overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1;
            transform: translate(-50%, -50%);
            color: $red;
        }

        &:hover & {
            &__overlay {
                background-color: $red;
            }
        }
    }
}
</style>

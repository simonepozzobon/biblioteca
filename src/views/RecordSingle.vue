<template>
<div class="pb-24">
    <div class="flex text-sm text-gray-400 font-light tracking-wider">
        <a
            href="#"
            class="text-dark"
            @click="$root.goTo('home')"
        >
            Home
        </a>
        <span class="ml-2">
            /
        </span>
        <span class="ml-2">
            {{ title }}
        </span>
    </div>
    <h1 class="mt-3 text-2xl uppercase text-gr-orange font-bold">
        Film: {{ record.title }}
    </h1>
    <div class="relative w-full mt-4 overflow-hidden rounded-lg shadow-lg">
        <iframe
            v-if="record.video && record.video.url"
            :src="record.video.url | setUri"
            allowfullscreen
        >
        </iframe>
        <img
            v-else-if="record.thumb"
            :src="record.thumb.slide_img | setPath"
            class="w-full"
        >
        <span v-else>Error image</span>
        <div class="absolute z-10 bottom-0 right-0 mr-4 mb-4 gr-light px-4 py-1 rounded-full text-orange shadow-md uppercase tracking-wider text-xs">
            {{ record.streaming ? 'streaming' : 'catalogo' }}
        </div>
        <button class="absolute z-10 bottom-0 left-0 ml-4 mb-4 px-2 py-2 rounded-full border-orange border text-orange focus:outline-none hover:gr-orange hover:text-white">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="w-4"
            >
                <path
                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z"
                    class="fill-current"
                ></path>
            </svg>
        </button>
    </div>

    <div class="mt-10 flex flex-row">
        <div class="w-8/12 mr-4">
            <ui-title title="Descrizione" />
            <div class="mt-2">
                <p class="leading-relaxed">
                    {{ record.description }}
                </p>
            </div>
        </div>
        <div class="w-3/12 ml-4">
            <ui-title title="Dettagli" />
            <div class="mt-2">
                <div v-if="record.country">
                    <span class="block font-semibold">
                        Nazione
                    </span>
                    <span class="text-sm">
                        {{ record.country.name }}
                    </span>
                </div>
                <div
                    v-if="record.year"
                    class="mt-1"
                >
                    <span class="block font-semibold">
                        Anno
                    </span>
                    <span class="text-sm">
                        {{ record.year }}
                    </span>
                </div>
                <div
                    v-if="record.duration"
                    class="mt-1"
                >
                    <span class="block font-semibold">
                        Durata
                    </span>
                    <span class="text-sm">
                        {{ record.duration }}
                    </span>
                </div>
                <div class="mt-1">
                    <span class="block font-semibold">
                        Regista
                    </span>
                    <span class="text-sm">
                        {{ record.director.name }}
                    </span>
                </div>
                <div class="mt-1">
                    <span class="block font-semibold">
                        Cast
                    </span>
                    <span class="text-sm">
                        <span
                            v-for="(actor, i) in record.actors"
                            :key="i"
                        >
                            {{ actor.name }},
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    UiTitle
}
from '../ui'
export default {
    name: 'RecordSingle',
    components: {
        UiTitle,
    },
    data: function () {
        return {
            record: {},
            type: null,
            archivePlaceholderImg: require('../assets/archive-placeholder.svg'),
            title: null
        }
    },
    watch: {
        record: function (record) {
            let type = Number(this.record.type)
            switch (type) {
            case 1:
                type = 'local'
                break;
            case 2:
                type = 'streaming'
                break;
            default:
                type = null
            }

            this.title = record.title.toLowerCase().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
        }
    },
    filters: {
        setPath: function (path) {
            let url = '/storage' + path.replace('/public', '')
            return process.env.VUE_APP_BASE + url
        },
        setUri: function (url) {
            if (url) {
                // eslint-disable-next-line
                url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

                if (RegExp.$3.indexOf('youtu') > -1) {
                    return 'https://www.youtube.com/embed/' + RegExp.$6
                }
                else if (RegExp.$3.indexOf('vimeo') > -1) {
                    // console.log('vimeoooooo');
                    return 'https://player.vimeo.com/video/' + RegExp.$6
                }
                return null
            }
            return null
        },
    },
    methods: {
        getData: function () {
            let url = 'catalogo/' + this.$route.params.id
            this.$http.get(url).then(response => {
                if (response.data.success) {
                    this.record = response.data.archive
                    // console.log(this.record);
                }
            })
        },
        goToHome: function () {
            this.$root.goTo('home')
        }
    },
    created: function () {
        this.getData()
        this.$root.current = null
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;

    &::before {
        display: block;
        content: "";
    }

    .embed-responsive-item,
    embed,
    iframe,
    object,
    video {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    &.embed-responsive-16by9 {
        &::before {
            padding-top: percentage(9 / 16);
        }
    }
}

.record-single {
    // display: flex;
    // flex-direction: column;

    &__breadcrumbs {
        margin-bottom: $spacer;
    }

    &__breadcrumb {
        text-transform: capitalize;
    }

    &__image {
        min-height: 100px;

        .el-image {
            width: 100%;
        }
    }

    &__options {
        margin-bottom: $spacer * 2 * 1.618;
    }
}
</style>

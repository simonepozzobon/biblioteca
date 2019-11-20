<template>
<div class="pb-24 px-8">
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
    <div class="w-full mt-4 overflow-hidden rounded-lg shadow-lg">
        <iframe
            v-if="record.video && record.video.url"
            :src="record.video.url | setUri"
            allowfullscreen
        >
        </iframe>
        <img
            v-else
            :src="record.thumb.slide_img | setPath"
            class="w-full"
        >
    </div>
    <div class="mt-10">
        <ui-title title="Dettagli" />
        <div class="mt-2">
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
    </div>
    <div class="mt-10">
        <ui-title title="Descrizione" />
        <div class="mt-2">
            <p class="leading-relaxed">
                {{ record.description }}
            </p>
        </div>
    </div>
    <div>
        <pre>
        {{ record }}
        </pre>
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

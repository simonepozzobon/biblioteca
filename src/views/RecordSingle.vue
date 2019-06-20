<template>
<div class="record-single">
    <el-breadcrumb
        separator="/"
        class="record-single__breadcrumbs"
    >
        <el-breadcrumb-item class="record-single__breadcrumb">
            <el-link @click="goToHome">
                Home
            </el-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item class="record-single__breadcrumb">
            {{ title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
    <el-row
        :gutter="20"
        justify="center"
    >
        <el-col :span="24">
            <div class="record-single__image">
                <div
                    class="embed-responsive embed-responsive-16by9"
                    v-if="record.video && record.video.url"
                >
                    <iframe
                        class="embed-responsive-item"
                        :src="record.video.url | setUri"
                        allowfullscreen
                    >
                    </iframe>
                </div>
                <el-image
                    v-else-if="record.thumb"
                    :src="record.thumb.slide_img | setPath"
                    fit="cover"
                />
                <el-image
                    v-else
                    :src="archivePlaceholderImg"
                />

            </div>
        </el-col>
    </el-row>
    <el-row
        :gutter="20"
        justify="center"
    >
        <el-col :span="18">
            <div class="record-single__options">
                <ui-title title="Opzioni" />
                <ui-tags
                    class="record-single__tags"
                    :record="record"
                />
            </div>
            <div class="record-single__options">
                <ui-title title="Descrizione" />
                {{ record.description }}
            </div>
        </el-col>
        <el-col :span="4">
            <ui-title title="Dettagli" />
            <span v-if="record.country">{{ record.country.name }}, </span>
            <span v-if="record.year">{{ record.year }}, </span>
            <span v-if="record.duration">{{ record.duration }}'</span>
        </el-col>
    </el-row>
</div>
</template>

<script>
import {
    UiTags,
    UiTitle
}
from '../ui'
export default {
    name: 'RecordSingle',
    components: {
        UiTags,
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
<template>
<el-row
    class="ui-single-film"
    align="top"
    justify="space-between"
    :gutter="20"
>
    <el-col :span="4">
        <div
            class="image-container"
            @click="goToRecord"
        >
            <el-image
                fit="cover"
                :src="record.thumb.landscape | setPath"
                v-if="record.thumb"
            />
            <ui-archive-placeholder v-else />
            <div class="image-container__overlay">
                <ui-play-button v-if="record.streaming" />
                <ui-archive-button v-else />
            </div>
        </div>

    </el-col>
    <el-col :span="20">
        <div class="ui-single-film__title">
            <el-link
                :underline="false"
                type="primary"
                @click="goToRecord"
            >
                <h1>{{ record.title }}</h1>
            </el-link>
        </div>
        <ui-tags
            :record="record"
            class="ui-single-film__tags"
        />
        <div class="ui-single-film__details">
            <small>
                <span v-if="record.country">{{ record.country.name }}, </span>
                <span v-if="record.year">{{ record.year }} </span>
                <span v-if="record.duration">{{ record.duration }}'</span>
            </small>
        </div>
        <div class="ui-single-film__description">
            {{ shortDescription }}
        </div>
    </el-col>
</el-row>
</template>

<script>
import UiArchiveButton from './UiArchiveButton.vue'
import UiArchivePlaceholder from './UiArchivePlaceholder.vue'
import UiPlayButton from './UiPlayButton.vue'
import UiTags from './UiTags.vue'

export default {
    name: 'UiSingleFilm',
    components: {
        UiArchiveButton,
        UiArchivePlaceholder,
        UiPlayButton,
        UiTags,
    },
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
            let n = 130
            if (this.record.description.length > 130) {
                return this.record.description.substr(0, n - 1) + '...'
            }

            return this.record.description
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
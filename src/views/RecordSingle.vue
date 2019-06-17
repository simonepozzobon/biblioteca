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
                <el-image
                    v-if="record.thumb && this.type != 'streaming'"
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
                <ui-title title="Dettagli" />
                bla bla bla
            </div>
            <div class="record-single__options">
                <ui-title title="Descrizione" />
                {{ record.description }}
            </div>
        </el-col>
        <el-col :span="4">sidebar</el-col>
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
        }
    },
    methods: {
        getData: function () {
            let url = 'catalogo/' + this.$route.params.id
            this.$http.get(url).then(response => {
                if (response.data.success) {
                    this.record = response.data.archive
                    console.log(this.type);
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
        .el-image {
            width: 100%;
        }
    }

    &__options {
        margin-bottom: $spacer * 2 * 1.618;
    }
}
</style>
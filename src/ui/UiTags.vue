<template>
<div class="ui-single-film__labels film-tag">
    <el-tag
        type="primary"
        size="mini"
        class="film-tag__single"
        v-if="record.streaming"
    >
        Streaming
    </el-tag>
    <el-tag
        type="success"
        size="mini"
        class="film-tag__single"
        v-if="record.local_view"
    >
        Prenotabile
    </el-tag>
    <el-tag
        type="info"
        size="mini"
        class="film-tag__single"
        v-if="record.pay_per_view"
    >
        Visione a Pagamento
    </el-tag>
    <el-tag
        type="warning"
        size="mini"
        class="film-tag__single"
        v-if="record.license"
    >
        Licenziabile
    </el-tag>
</div>
</template>

<script>
export default {
    name: 'UiTags',
    props: {
        record: {
            type: Object,
            default: function () {
                return {}
            },
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.film-tag {
    margin-bottom: $spacer / 4;

    &__single {
        margin-right: $spacer / 2;
    }
}
</style>
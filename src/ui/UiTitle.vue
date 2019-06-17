<template>
<component
    :is="tag"
    class="ui-title"
>
    {{ title }}
</component>
</template>

<script>
export default {
    name: 'UiTitle',
    props: {
        title: {
            type: String,
            default: 'titolo',
        },
        tag: {
            type: String,
            default: 'h4'
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.ui-title {
    position: relative;
    text-transform: uppercase;
    color: $gray-light;
    padding-bottom: $spacer / 2;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid $gray-lighter;
    }
}
</style>
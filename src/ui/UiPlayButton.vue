<template lang="html">
    <svg
        width="48px"
        height="48px"
        viewBox="0 0 72 72"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="ui-play-button">
        <defs>
            <circle id="ui-play-button" cx="20" cy="20" r="20"></circle>
            <filter x="-60.0%" y="-60.0%" width="220.0%" height="220.0%" filterUnits="objectBoundingBox" id="filter-ui-play-button">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(16.000000, 16.000000)">
                <g fill-rule="nonzero">
                    <use fill="white" fill-opacity="1" filter="url(#filter-ui-play-button)" xlink:href="#ui-play-button"></use>
                    <use class="ui-play-button__circle" xlink:href="#ui-play-button"></use>
                </g>
                <path
                    class="ui-play-button__icon"
                    d="M28.7521762,20.3195806 L14.5969089,27.927661 C14.2664772,28.1029149 14,27.9482791 14,27.5874623 L14,12.4125377 C14,12.0517209 14.2664772,11.8970851 14.5969089,12.072339 L28.7521762,19.6804194 C29.0826079,19.8556733 29.0826079,20.1443267 28.7521762,20.3195806 Z"
                    />
            </g>
        </g>
    </svg>
</template>

<script>
export default {
    name: 'UiPlayButton',
    mounted: function () {

    }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.ui-play-button {
    cursor: pointer;

    &__icon {
        fill: $white;
        transition: $transition-base;
    }

    &__circle {
        fill: $gray-light;
        transition: $transition-base;
    }

    &:hover &__icon {
        fill: $white;
        transition: $transition-base;
    }

    &:hover &__circle {
        fill: $red;
        transition: $transition-base;
    }
}
</style>

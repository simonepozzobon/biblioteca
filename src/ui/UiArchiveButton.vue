<template lang="html">
    <svg
        width="48px"
        height="48px"
        viewBox="0 0 72 72"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="ui-archive-button">
        <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
        <title>archive</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <path d="M49.1466667,29.3333333 L49.1466667,24.8533333 L44.6666667,24.8533333 L44.6666667,29.3333333 L49.1466667,29.3333333 Z M49.1466667,38.1866667 L49.1466667,33.8133333 L44.6666667,33.8133333 L44.6666667,38.1866667 L49.1466667,38.1866667 Z M49.1466667,47.1466667 L49.1466667,42.6666667 L44.6666667,42.6666667 L44.6666667,47.1466667 L49.1466667,47.1466667 Z M26.96,29.3333333 L26.96,24.8533333 L22.48,24.8533333 L22.48,29.3333333 L26.96,29.3333333 Z M26.96,38.1866667 L26.96,33.8133333 L22.48,33.8133333 L22.48,38.1866667 L26.96,38.1866667 Z M26.96,47.1466667 L26.96,42.6666667 L22.48,42.6666667 L22.48,47.1466667 L26.96,47.1466667 Z M49.1466667,16 L53.6266667,16 L53.6266667,56 L49.1466667,56 L49.1466667,51.52 L44.6666667,51.52 L44.6666667,56 L26.96,56 L26.96,51.52 L22.48,51.52 L22.48,56 L18,56 L18,16 L22.48,16 L22.48,20.48 L26.96,20.48 L26.96,16 L44.6666667,16 L44.6666667,20.48 L49.1466667,20.48 L49.1466667,16 Z" id="path-1"></path>
            <filter x="-67.4%" y="-60.0%" width="234.7%" height="220.0%" filterUnits="objectBoundingBox" id="filter-2">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
        </defs>
        <g id="archive" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="tape" fill-rule="nonzero">
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                <use class="ui-archive-button__circle" fill="#E9E9E9" xlink:href="#path-1"></use>
            </g>
        </g>
    </svg>
</template>

<script>
export default {
    name: 'UiArchiveButton',
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.ui-archive-button {
    cursor: pointer;

    &__circle {
        fill: $gray-light;
        transition: $transition-base;
    }

    &:hover &__circle {
        fill: $red;
        transition: $transition-base;
    }
}
</style>

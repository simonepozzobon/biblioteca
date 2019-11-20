<template>
<div>
    <h1 class="mt-3 text-2xl uppercase text-gr-orange font-bold">
        {{ item.name }}
    </h1>
    <swiper :options="options">
        <swiper-slide
            v-for="record in item.records"
            :key="`${item.id}-${record.id}`"
        >
            <div class="my-4 mr-8 flex flex-col relative">
                <div class="overflow-hidden rounded-lg shadow-lg">
                    <img
                        :src="record.thumb.landscape | setPath"
                        alt=""
                    >
                </div>
                <div class="absolute w-full bottom-0 opacity-96 cursor-pointer">
                    <div class="gr-dark p-4 rounded-lg">
                        <h2 class="capitalize font-semibold text-light tracking-wide hover:text-orange">
                            {{ record.title | shortTitle }}
                        </h2>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
import {
    swiper,
    swiperSlide
}
from 'vue-awesome-swiper'

export default {
    name: 'UiSmallFeaturedSlider',
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        item: {
            type: Object,
            default: function () {
                return {}
            },
        },
    },
    data: function () {
        return {
            options: {
                slidesPerView: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    }
                }
            }
        }
    },
    filters: {
        setPath: function (path) {
            let url = '/storage' + path.replace('/public', '')
            return process.env.VUE_APP_BASE + url
        },
        shortTitle: function (string) {
            let n = 20
            if (string.length > 20) {
                return string.substr(0, n - 1) + '...'
            }
            return string
        }
    },
}
</script>

<style lang="scss">
.swiper-container {
    width: 100%;
    list-style: none;
    z-index: 1;
}

.swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    transform: translate3d(0px, 0, 0);
}

.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
}

.swiper-pagination {
    z-index: 10;

    .swiper-pagination-bullet + .swiper-pagination-bullet {
        margin-left: 8px;
    }
}

.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    @apply bg-gray-400;
    opacity: 1;
    transition: background-color 0.2s ease-in-out;

    &:focus {
        outline: none;
    }
}

.swiper-pagination-bullet-active {
    @apply bg-red-500;
    transition: background-color 0.2s ease-in-out;
}

/* IE10 Windows Phone 8 Fixes */
.swiper-container-wp8-horizontal,
.swiper-container-wp8-horizontal > .swiper-wrapper {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
}
.swiper-container-wp8-vertical,
.swiper-container-wp8-vertical > .swiper-wrapper {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
}
</style>

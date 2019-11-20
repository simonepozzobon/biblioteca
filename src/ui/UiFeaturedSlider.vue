<template>
<div>
    <h1 class="mt-3 text-4xl uppercase text-gr-orange font-bold">
        {{ title }}
    </h1>
    <swiper :options="options">
        <swiper-slide
            v-for="(item, i) in this.$root.featuredThemes"
            :key="i"
        >
            <div class="my-4 mr-8 flex flex-col relative cursor-pointer">
                <div class="overflow-hidden rounded-lg shadow-lg">
                    <img
                        :src="item.thumb.portrait | setPath"
                        alt=""
                    >
                </div>
                <div
                    class="absolute w-full bottom-0 opacity-96"
                    @click.prevent.stop="goToRecord(item)"
                >
                    <div class="gr-dark p-4 rounded-lg">
                        <h2 class="mt-1 inline-block text-xs text-orange">
                            {{ item.themes[0].name }}
                        </h2>
                        <h3 class="mt-1 block capitalize font-semibold text-light tracking-wide hover:text-orange">
                            {{ item.title | shortTitle }}
                        </h3>
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
        title: {
            type: String,
            default: null,
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
    methods: {
        goToRecord: function (item) {
            this.$root.goToWithParams('record-single', {
                id: item.id
            })
        },
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
</style>

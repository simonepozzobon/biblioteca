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
                        <h2
                            class="capitalize font-semibold text-light tracking-wide hover:text-orange"
                            @click.prevent.stop="goToRecord(record)"
                        >
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

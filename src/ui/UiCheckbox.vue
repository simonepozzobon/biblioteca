<template>
<div class="flex flex-row items-center">
    <div
        class="border border-gray-600 w-8 h-8 rounded-lg flex justify-center items-center cursor-pointer"
        @click.prevent="toggle"
    >
        <transition name="fade">
            <div v-if="selected">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="check"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="w-4 text-orange"
                >
                    <path
                        d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                        class="fill-current"
                    ></path>
                </svg>
            </div>
        </transition>
    </div>
    <div class="ml-4 font-bold text-dark tracking-wide">
        {{label}}
    </div>
</div>
</template>

<script>
export default {
    name: 'UiCheckbox',
    props: {
        label: {
            type: String,
            default: null,
        },
    },
    data: function () {
        return {
            selected: true,
        }
    },
    methods: {
        toggle: function () {
            this.selected = !this.selected
        },
    },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}
/* .fade-leave-active below version 2.1.8 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

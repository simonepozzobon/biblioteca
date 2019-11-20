<template>
<div class="flex flex-row min-h-screen">
    <div class="w-64 gr-dark px-6 py-4 shadow-md items-center flex-col min-h-screen">
        <div
            class="font-semibold tracking-wide text-gr-light pointer mt-8"
            @click.prevent="$root.goTo('home')"
        >
            Biblioteca di Morando
        </div>
        <div class="mt-6 relative">
            <input
                type="text"
                placeholder="Cerca..."
                class="border border-light bg-transparent rounded-lg px-3 py-2 placeholder-light text-light outline-none"
            >
            <div class="absolute top-0 right-0 mt-3 mr-3">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-5 text-light"
                >
                    <path
                        d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                        class="fill-current"
                    ></path>
                </svg>
            </div>
        </div>
        <ul
            class="mt-6 menu"
            ref="menu"
        >
            <li
                id="menu-home"
                class="block flex items-center text-light"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="home"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    class="w-6"
                >
                    <path
                        d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"
                        class="fill-current"
                    ></path>
                </svg>
                <a
                    href="#"
                    @click="$root.goTo('home')"
                    class="ml-3 text-lg"
                >
                    Home
                </a>
            </li>
            <li
                id="menu-ultimi"
                class="block flex items-center text-light mt-3"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="clock"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-6"
                >
                    <path
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        class="fill-current"
                    ></path>
                </svg>
                <a
                    href="#"
                    @click="$root.goTo('search')"
                    class="ml-3 text-lg"
                >
                    Ultimi Arrivi
                </a>
            </li>
            <li class="block flex items-center text-light mt-3">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="star"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    class="w-6"
                >
                    <path
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z"
                        class="fill-current"
                    ></path>
                </svg>
                <a
                    href="#"
                    @click="$root.goTo('search')"
                    class="ml-3 text-lg"
                >
                    Preferiti
                </a>
            </li>
            <li
                id="menu-search"
                class="block flex items-center text-light mt-3"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-6"
                >
                    <path
                        d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                        class="fill-current"
                    ></path>
                </svg>
                <a
                    href="#"
                    @click="$root.goTo('search')"
                    class="ml-3 text-lg"
                >
                    Ricerca
                </a>
            </li>
        </ul>

        <div class="flex items-center absolute mb-4 bottom-0">
            <div class="w-10 h-10 gr-orange flex justify-center items-center rounded-full shadow-lg">
                <div class="text-white uppercase font-bold tracking-widest">
                    {{ this.initial }}
                </div>
            </div>
            <div class="ml-4 text-light tracking-wide capitalize">
                {{ this.name }}
            </div>
        </div>
    </div>
    <div class="w-full p-8 bg-gray-100 max-h-screen overflow-y-scroll">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainTemplate',
    data: function () {
        return {
            logged: false,
            name: null
        }
    },
    computed: {
        initial: function () {
            if (this.name) {
                return this.name.substring(0, 2).toUpperCase()
            }
            return null
        },
    },
    watch: {
        '$route.params': function () {
            this.getUser()
        },
        '$root.current': function () {
            this.setActive()
        }
    },
    methods: {
        setActive: function () {
            let menu = this.$refs.menu
            if (menu) {
                let items = menu.getElementsByClassName('menu-active')

                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('menu-active')
                }

                let current = this.$root.current
                if (current != null) {
                    let item = document.getElementById(`menu-${current}`)
                    item.classList.add('menu-active')
                }
            }
        },
        getUser: function () {
            if (this.$store.get('user')) {
                this.logged = true
                this.name = this.$store.get('user').name
            }
            else {
                this.logged = false
            }

            this.setActive()
        },
        logout: function () {
            this.$http.get('auth/logout').then(() => {
                this.$store.set('user', null)
                this.$store.set('token', null)
                delete this.$http.defaults.headers.common.Authorization

                this.name = null
                this.$root.goTo('login')
            })
        }
    },
    created: function () {
        this.getUser()
    },
    mounted: function () {
        this.$nextTick(() => {
            this.setActive()
        })
    }
}
</script>

<style lang="scss">
.menu-active {
    @apply text-orange;
}
</style>

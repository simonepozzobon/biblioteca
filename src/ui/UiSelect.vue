<template>
<div class="flex flex-col">
    <label
        :for="name"
        class="uppercase tracking-wider font-bold text-gr-dark"
    >
        {{ label }}:
    </label>
    <div class="relative">
        <select
            :name="name"
            class="block appearance-none border border-gray-600 bg-transparent rounded-lg px-3 py-2 outline-none w-full"
        >
            <option
                value=""
                selected
            >
                {{ placeholder }}
            </option>
            <option
                v-for="option in options"
                :key="option.id"
                :value="option.id"
            >
                {{ option.name }}
            </option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'UiSelect',
    props: {
        name: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: null,
        },
        options: {
            type: Array,
            default: function () {
                return []
            },
        },
    },
}
</script>
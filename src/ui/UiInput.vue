<template>
<div class="flex flex-col">
    <label
        :for="name"
        class="uppercase tracking-wider font-bold text-gr-dark"
    >{{ label }}:</label>
    <input
        type="text"
        :name="name"
        :placeholder="`${placeholder}...`"
        class="border border-gray-600 bg-transparent rounded-lg px-3 py-2 placeholder-gray-500 mt-1 outline-none text-dark"
    >
</div>
</template>

<script>
export default {
    name: 'UiInput',
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
    },
}
</script>

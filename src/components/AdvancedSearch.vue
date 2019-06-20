<template>
<el-row>
    <el-col>
        <h2>Ricerca Avanzata</h2>

    </el-col>
</el-row>
</template>

<script>
export default {
    name: 'AdvancedSearch',
    props: {
        advanced: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
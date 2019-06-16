<template>
<el-row
    type="flex"
    justify="center"
>
    <el-col
        :span="6"
        class="form"
    >
        <h2 class="form__title">Login</h2>
        <el-input
            class="form__input"
            placeholder="Email"
            v-model="email"
            clearable
        />
        <el-input
            class="form__input"
            placeholder="Password"
            v-model="password"
            show-password
        />
        <el-button
            type="primary"
            @click="attemptLogin"
        >
            Entra
        </el-button>
    </el-col>
</el-row>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style lang="scss">
</style>
<script setup>

</script>

<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #content>
            <router-view></router-view>
        </template>
        <template #footer>
            <Footer></Footer>
        </template>
    </Layout>
</template>

<style lang="scss" scoped></style>

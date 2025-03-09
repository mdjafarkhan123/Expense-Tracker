<script setup></script>

<template>
    <div class="container">
        <div class="content">
            <h1>We Build Scalable, High-Performance Web Applications</h1>
            <router-link to="/app" class="btn btn--primary"
                >Use applicaton</router-link
            >
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    .content {
        h1 {
            text-align: center;
        }
        display: flex;
        min-height: 50vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 20px;
    }
}
</style>

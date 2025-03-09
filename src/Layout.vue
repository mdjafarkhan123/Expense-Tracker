<script setup></script>

<template>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot name="content"></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</template>

<style lang="scss" scoped></style>

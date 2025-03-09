<script setup>
defineProps({
    amount: Number,
});
const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
});
</script>

<template>
    <div class="hero">
        <div class="hero__time">{{ date }}</div>
        <p>Your current balance</p>
        <h1 class="hero__balance">
            {{ amount < 0 ? "You are debt" : `$${amount}` }}
        </h1>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    background-color: var(--color-primary);
    color: var(--color-white);
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px 20px 100px 20px;
    gap: 10px;

    p {
        margin-top: 30px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    &__time {
        color: var(--color-border);
    }
}
</style>

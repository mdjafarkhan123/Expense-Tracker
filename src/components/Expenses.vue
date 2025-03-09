<script setup>
defineProps({
    income: {
        type: Number,
        default: 0,
    },

    expense: {
        type: Number,
        default: 0,
    },
});
</script>

<template>
    <div class="calculation">
        <div class="calculation__status calculation__status--income">
            <div class="icon">
                <i class="ri-arrow-right-up-long-line"></i>
            </div>
            <div class="text">Income</div>
            <div class="money">${{ income }}</div>
        </div>
        <div class="calculation__status calculation__status--expense">
            <div class="icon">
                <i class="ri-arrow-right-down-long-line"></i>
            </div>
            <div class="text">Expense</div>
            <div class="money">${{ expense }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.calculation {
    background-color: var(--color-white);
    padding: 20px;
    width: min(95%, 350px);
    margin-inline: auto;
    transform: translateY(-50%);
    box-shadow: 0 0 20px 0 rgba(21, 32, 77, 0.149);
    border-radius: 10px;
    &__status {
        display: flex;
        align-items: center;
        gap: 10px;
        .money {
            font-weight: 600;
            font-size: 18px;
            color: var(--color-heading);
        }

        .icon {
            font-size: 25px;
            color: var(--color-text);
        }
        .text {
            flex-grow: 1;
        }

        &--income {
            .money {
                color: var(--color-success);
            }
            .icon {
                color: var(--color-success);
            }
        }
        &--expense {
            .money {
                color: var(--color-error);
            }
            .icon {
                color: var(--color-error);
            }
        }
    }
}
</style>

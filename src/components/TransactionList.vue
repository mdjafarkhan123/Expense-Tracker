<script setup>
import { inject, defineEmits } from "vue";
const transactionHistory = inject("transactions");
const emit = defineEmits(["deleteItem"]);
function handleDelete(id) {
    emit("deleteItem", id);
}
</script>

<template>
    <div class="transaction">
        <h3 class="transaction__title">Recent transactions:</h3>

        <ul class="transaction__list">
            <li
                class="transaction__list-item"
                v-for="item in transactionHistory"
                :key="item.id"
            >
                <div class="description">
                    {{ item.description }}
                    <span class="time">{{ item.date }}</span>
                </div>
                <span
                    :class="{
                        amount: true,
                        'amount--income': item.category === 'income',
                        'amount--expense': item.category === 'expense',
                    }"
                >
                    ${{ item.amount }}
                </span>

                <button class="delete-icon" @click="handleDelete(item.id)">
                    <i class="ri-delete-bin-line"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.transaction {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;
    gap: 20px;
    margin-top: -50px;

    &__title {
        color: var(--color-subheading);
    }

    &__list {
        width: 100%;
        display: flex;
        flex-flow: column;

        max-height: 300px;
        overflow-y: auto;

        &-item {
            display: flex;
            align-items: center;
            gap: 20px;
            padding-block: 10px;
            &:not(:last-child) {
                border-bottom: 1px solid var(--color-border);
            }

            .description {
                flex-grow: 1;
                .time {
                    display: block;
                    font-size: 13px;
                    color: rgb(124, 124, 124);
                }
            }

            .delete-icon {
                color: var(--color-error);
            }
        }
    }

    .amount--expense {
        color: var(--color-error);
    }

    .amount--income {
        color: var(--color-success);
    }
}
</style>

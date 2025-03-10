<script setup>
import { ref, computed, provide, watch, onMounted } from "vue";

const transactions = ref([
    {
        id: 1,
        date: "Feb 19, 2024",
        description: "Freelance Web Development",
        amount: 1200,
        category: "income",
        details:
            "I have hired a senior front end web developer and a backend web developer to build my website.",
    },
    {
        id: 2,
        date: "March 12, 2025",
        description: "Grocery Shopping",
        amount: 150,
        category: "expense",
        details:
            "I went to Savar city center. Bought a lot of item like a pair of shoes, ate some food on resturant and so on",
    },
]);

watch(
    transactions,
    () => {
        localStorage.setItem(
            "transactionHistory",
            JSON.stringify(transactions.value)
        );
    },
    { deep: true }
);

const currentBalance = computed(() => {
    return transactions.value.reduce((acc, value) => {
        if (value.category == "income") {
            return acc + value.amount;
        } else {
            return acc - value.amount;
        }
    }, 0);
});

const totalIncome = computed(() => {
    return transactions.value.reduce((total, item) => {
        return item.category == "income" ? total + item.amount : total + 0;
    }, 0);
});

const totalExpense = computed(() => {
    return transactions.value.reduce((total, item) => {
        return item.category == "expense" ? total + item.amount : total + 0;
    }, 0);
});
provide("transactions", transactions);
function newTransaction(newItemHistory) {
    transactions.value.push(newItemHistory);
}

function deleteTransaction(id) {
    transactions.value = transactions.value.filter((item) => {
        return item.id !== id;
    });
}

onMounted(() => {
    const savedHistory = localStorage.getItem("transactionHistory");
    if (savedHistory) {
        transactions.value = JSON.parse(savedHistory);
    }
});
</script>

<template>
    <div class="container app-container">
        <Balance :amount="currentBalance" />
        <Expenses :income="totalIncome" :expense="totalExpense" />
        <TransactionList @deleteItem="deleteTransaction" />
        <AddTransaction @newTransaction="newTransaction" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    flex-flow: column;
    max-width: 400px;
    outline: 1px dashed gray;
    margin-inline: auto;
    border-radius: 20px;
    overflow: hidden;
}
</style>

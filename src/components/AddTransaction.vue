<script setup>
import { reactive, defineEmits } from "vue";
const formData = reactive({
    id: "",
    date: "",
    description: "",
    amount: "",
    category: "",
});

const emit = defineEmits(["newTransaction"]);

function handleSubmit() {
    if (!formData.description || !formData.amount || !formData.category) {
        console.log("Fill all the field");
        return;
    }
    const newItemHistory = {
        id: Date.now(),
        description: formData.description,
        amount: formData.amount,
        category: formData.category,
        date: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        }),
    };
    formData.description = "";
    formData.category = "";
    formData.amount = "";
    emit("newTransaction", newItemHistory);
}
</script>

<template>
    <div class="add-new">
        <h3>Add new transaction</h3>
        <form action="" @submit.prevent="handleSubmit">
            <input
                type="text"
                name=""
                id=""
                placeholder="Description"
                v-model="formData.description"
            />
            <input
                type="number"
                name=""
                id=""
                placeholder="Amount"
                v-model="formData.amount"
            />
            <div class="field-group">
                Category:
                <input
                    type="radio"
                    name="category"
                    id="income"
                    value="income"
                    v-model="formData.category"
                />
                <label for="income">Income</label>
                <input
                    type="radio"
                    name="category"
                    id="expense"
                    value="expense"
                    v-model="formData.category"
                />
                <label for="expense">Expense</label>
            </div>
            <button type="submit" class="btn btn--primary">
                Add new trnasaction
            </button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.add-new {
    padding: 0 20px 40px 20px;
    h3 {
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-flow: column;
        gap: 10px;
        & > input {
            width: 100%;
            padding: 10px;
            border-radius: 10px;
        }

        .field-group {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        button {
            border-radius: 10px;
        }
    }
}
</style>

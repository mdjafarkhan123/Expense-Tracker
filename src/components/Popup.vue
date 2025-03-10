<script setup>
import { Teleport, defineEmits } from "vue";
defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },

    data: {
        type: String,
        default: "No data is saved",
    },
});

const emit = defineEmits(["closePopup"]);
function closePopup() {
    emit("closePopup");
}
</script>

<template>
    <Teleport to=".app-container">
        <div class="popup" v-if="isOpen">
            <button class="close" @click="closePopup">
                <i class="ri-close-large-line"></i>
            </button>
            <div class="popup__content">
                {{ data }}
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    background-color: var(--color-white);
    padding: 10px 20px 20px 20px;
    border-radius: 10px;
    box-shadow: 0 0 12px -2px rgba(19, 53, 25, 0.282);

    .close {
        color: var(--color-error);
        float: right;
    }

    &__content {
        content: "";
        clear: both;
        display: table;
    }
}
</style>

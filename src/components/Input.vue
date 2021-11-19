<template>
    <label class="input-wrapper">
        <span class="input">
            <icon v-if="icon" :icon="icon" class="input__icon"/>
            <input v-model="value" :type="type" class="input__value" v-bind="$attrs">
        </span>
    </label>
</template>

<script lang="ts">
import { computed, defineComponent, toRef } from "vue";

export default defineComponent({
    emits: [ 'update:modelValue' ],
    props: {
        modelValue: { default: '' },
        icon: { type: String, default: undefined },
        type: { type: String, default: 'text' },
    },
    setup(props, { emit }) {
        const modelValue = toRef(props, 'modelValue');
        const value = computed({
            get() {
                return modelValue.value
            },
            set(value: any) {
                emit('update:modelValue', value)
            }
        });
        return { value };
    }
})
</script>

<style scoped lang="scss">
.input {

    &-wrapper {
        display: block;
    }

    display: flex;
    align-items: center;
    border: 2px solid $background-darker;
    border-radius: 5px;

    &__icon {
        width: 24px;
        height: 24px;
        vertical-align: center;
        margin-left: 0.5rem;
    }

    &__value {
        border: none;
        padding: 0.8em 0.5rem;
        font-size: 1.1rem;
        background: transparent;
        outline: none;
    }

    &:focus-within {
        border: 2px solid $primary;

        .input__icon {
            color: $primary;
        }
    }

}
</style>
<template>
    <label  class="input">
        <span class="input__wrapper">
            <icon v-if="icon" :icon="icon" class="input__wrapper__icon"/>
            <input v-model="value" :type="type" class="input__wrapper__value" v-bind="$attrs">
        </span>
    </label>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRef } from "vue";

export default defineComponent({
    emits: [ 'update:modelValue' ],
    props: {
        modelValue: { default: '' },
        icon: { type: String, default: undefined },
        required: { type: Boolean, default: false },
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
@import "../assets/scss/variables";

.input {
    display: block;
    position: relative;
}
</style>
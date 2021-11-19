<template>
    <header class="header">
        <NZGMLogo class="header__logo"/>
        <Input icon="">
    </header>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import NZGMLogo from "@/assets/img/logo.svg?inline";
import Input from "@/components/Input.vue";
import { useStore } from "vuex";

export default defineComponent({
    components: { Input, NZGMLogo },
    setup() {
        const { state } = useStore();
        const graphName = toRef();
    }
})
</script>

<style scoped lang="scss">
.header {
    display: flex;

    &__logo {
        height: 100px;
        color: white;
        background: $primary;
        padding: 1em;
    }
}
</style>
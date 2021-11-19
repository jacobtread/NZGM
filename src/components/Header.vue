<template>
    <header class="header">
        <NZGMLogo class="header__logo"/>
        <div class="header__items">
            <Input icon="book" v-model="graphName"/>
            <Menu/>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";
import NZGMLogo from "@/assets/img/logo.svg?inline";
import Input from "@/components/Input.vue";
import { useStore } from "vuex";
import Menu from "@/components/Menu.vue";

export default defineComponent({
    components: { Menu, Input, NZGMLogo },
    setup() {
        const { state } = useStore();
        const graph = state.graph;
        const graphName = toRef(graph, 'title');
        return { graphName }
    }
})
</script>

<style scoped lang="scss">
.header {
    display: flex;
    border-bottom: 2px solid $background-darker;
    padding-bottom: 1rem;

    &__logo {
        color: $text-lighter;
        height: 110px;
        margin-right: 1rem;
        padding: 0.8rem;
    }

    &__items {
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        gap: 0.5em;
        height: 110px;
    }
}
</style>
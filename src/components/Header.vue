<template>
    <header class="header">
        <NZGMLogo class="header__logo"/>
        <div class="header__items">
            <Input icon="book" v-model="graph.title"/>
            <Menu/>
        </div>
        <div class="header__settings-wrapper">
            <div class="header__settings">
                <div class="header__settings__item">
                    <label>Graph Size</label>
                    <select id="graphSize" class="select" v-model="graph.size">
                        <option value="0">Auto</option>
                        <option value="1">High Res</option>
                        <option value="2">Standard</option>
                        <option value="3">Small</option>
                        <option value="4">Short</option>
                    </select>
                </div>
                <div class="header__settings__item">
                    <label>Graph Type</label>
                    <select id="graphSize" class="select" v-model="graph.type">
                        <option value="dot-plot">Dot Plot (& Box & Whisker)</option>
                    </select>
                </div>
            </div>
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
        return { graph }
    }
})
</script>

<style scoped lang="scss">
.header {
    display: flex;
    border-bottom: 2px solid $background-darker;
    //padding-bottom: 1rem;

    &__logo {
        height: 90px;
        margin-right: 1rem;
        padding: 0.8rem;
    }

    &__items {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        gap: 0.25em;
        padding: 0.5rem 0.25rem;
    }

    &__settings {
        display: flex;
        flex-flow: row;
        gap: 1rem;
        padding: 1rem;

        &-wrapper {
            display: flex;
            flex: auto;
            justify-content: flex-end;
        }

        &__item {
            display: flex;
            flex-flow: column;
            gap: 0.7rem;
        }
    }
}

</style>
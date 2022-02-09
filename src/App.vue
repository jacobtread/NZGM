<script setup lang="ts">
import "./assets/global.scss"
import Header from "./components/header/Header.vue";
import HResizable from "./components/HResizable.vue";
import { useDataStore } from "./stores/data";
import DataTable from "./components/DataTable.vue";
import VResizable from "./components/VResizable.vue";
import Graph from "./components/Graph.vue";

const dataStore = useDataStore()
dataStore.loadCSV('/example.csv')

</script>

<template>
    <Header/>
    <HResizable style="width: 100%; flex: auto;">
        <template #first>
            <VResizable style="width: 100%; height: 100%;">
                <template #first>
                    <DataTable/>
                </template>
                <template #second>
                    <h2>Ho</h2>
                </template>
            </VResizable>
        </template>
        <template #second>
            <Graph/>
        </template>
    </HResizable>
</template>

<style>

</style>

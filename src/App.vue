<template>
    <Header/>
    <ResizableArea style="width: 100%; flex: auto;">
        <template #first>
            <DataTable/>
        </template>
        <template #second>
            <Graph/>
        </template>
    </ResizableArea>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

import "@/assets/scss/global.scss";
import ResizableArea from "@/components/ResizableArea.vue";
import DataTable from "@/components/DataTable.vue";
import Graph from "@/components/Graph.vue";

export default defineComponent({
    components: { Graph, DataTable, ResizableArea, Header },
});
</script>
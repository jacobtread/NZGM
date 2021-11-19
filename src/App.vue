<template>
    <Header/>
    <ResizableArea style="width: 100%; height: 100%"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

import "@/assets/scss/global.scss";
import ResizableArea from "@/components/ResizableArea.vue";

export default defineComponent({
    components: { ResizableArea, Header },
});
</script>
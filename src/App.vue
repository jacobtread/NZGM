<template>
  <Header />
  <main>
    <ResizableGrid>
      <template #left>
        <ContentTable />
      </template>
      <template #right>
        <Graph />
      </template>
    </ResizableGrid>
    <Loader :show="loading.show" :message="loading.message"/>
    <Toaster />
  </main>
  <div class="resize-area"></div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import ContentTable from "@/components/ContentTable.vue";
import Graph from "@/components/Graph.vue";
import ResizableGrid from "@/components/ResizableGrid.vue";
import Loader from "@/components/Loader.vue";
import Toaster from "@/components/Toaster.vue";
import store, { LoadingData } from "@/store";

@Options({
  components: {
    Header,
    ContentTable,
    Graph,
    ResizableGrid,
    Loader,
    Toaster,
  },
})
export default class App extends Vue {
  get loading(): LoadingData {
    return store.state.loading;
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/global.scss";
</style>

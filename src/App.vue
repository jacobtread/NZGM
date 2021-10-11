<template>
  <Header />
  <main>
    <Resizable>
      <ContentTable />
    </Resizable>
    <Graph />
    <Loader :show="loading.show" />
    <Toaster />
  </main>
  <div class="resize-area"></div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import ContentTable from "@/components/ContentTable.vue";
import Graph from "@/components/Graph.vue";
import Resizable from "@/components/Resizable.vue";
import Loader from "@/components/Loader.vue";
import Toaster from "@/components/Toaster.vue";
import store, { LoadingData } from "@/store";

@Options({
  components: {
    Header,
    ContentTable,
    Graph,
    Resizable,
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

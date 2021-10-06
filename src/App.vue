<template>
  <div class="content">
    <Header />
    <main>
      <Resizable>
        <ContentTable v-model:cols="cols" v-model:rows="rows" />
      </Resizable>
      <div class="graph-wrapper">
        <Graph />
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import ContentTable from "./components/ContentTable.vue";
import Graph from "./components/Graph.vue";
import Resizable from "./components/Resizable.vue";

@Options({
  components: {
    Header,
    ContentTable,
    Graph,
    Resizable,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "./assets/scss/global.scss";
@import "./assets/scss/global.scss";

.content {
  height: 100%;
}

main {
  display: flex;
  flex-flow: row;
  height: calc(100% - 90px);
}

.graph-wrapper {
  flex: auto;
}
</style>

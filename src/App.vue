<template>
  <div>
    <Header />
    <main>
      <div>
        <ContentTable v-model:cols="cols" v-model:rows="rows"/>
      </div>
      <div></div>
    </main>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import ContentTable from "./components/ContentTable.vue";
import store from "./store";

@Options({
  components: {
    Header,
    ContentTable,
  },
})
export default class App extends Vue {
 
}
</script>
<style lang="scss">
@import "./assets/scss/global.scss";
</style>

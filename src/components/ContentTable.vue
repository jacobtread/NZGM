<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(_, index) in cols" :key="index">
            <input type="text" v-model="cols[index]" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(_, index) in cols" :key="index">
            <input type="text" v-model="row[index]" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { Vue } from "vue-class-component";

export type RowValue = number | string | boolean;

export default class ContentTable extends Vue {
  get cols(): string[] {
    return store.state.cols;
  }
  get rows(): RowValue[][] {
    return store.state.rows;
  }
}
</script>
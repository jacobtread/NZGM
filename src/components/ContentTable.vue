<template>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th v-for="(_, index) in cols" :key="index">
            <input type="text" v-model="cols[index]" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index" @click="select(row)">
          <td v-for="(_, index) in cols" :key="index">
            <input type="text" v-model="row[index]" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { RowData, State } from "@/store";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: mapState<State>({
    rows: (state: State) => state.rows,
    cols: (state: State) => state.cols,
  }),
})
export default class ContentTable extends Vue {
  select(row: RowData[]): void {
    console.log(row);
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.content {
  width: 100%;
  height: 100%;
  overflow: auto;

  table {
    width: 100%;
    min-width: 700px;
    border-collapse: collapse;

    tr th,
    tr td {
      input {
        border: none;
        padding: 0.5em;
        width: 100%;
        border-radius: 0;
        background-color: transparent;
      }
    }
    thead {
      background-color: darken($primary, 5);
      th {
        input {
          color: white;
          font-weight: bold;
          text-align: center;
        }

        &:nth-of-type(1) input {
          text-align: left;
        }
      }
    }

    tbody {
      tr {
        border: 1px solid $light-gray;

        &:nth-child(odd) {
          background-color: lighten($light-gray, 5);
        }

        &:hover {
          background-color: $light-gray;
        }

        td {
          input {
            text-align: center;
          }

          &:nth-of-type(1) input {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
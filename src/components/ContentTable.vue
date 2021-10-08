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
        <tr v-for="(_, rindex) in rows" :key="rindex" @click="select(row)">
          <td v-for="(_, index) in cols" :key="index">
            <input
              :data-col="index"
              :data-row="rindex"
              type="text"
              v-model="rows[rindex][index]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import store, { RowData } from "@/store";
import { isNumeric as _numeric } from "@/tools";
import { Vue } from "vue-class-component";
export default class ContentTable extends Vue {
  displayedRows = 50;
  lastScrollPoint = 0;

  get rows(): RowData[][] {
    const rows = store.state.rows;
    if (rows.length > this.displayedRows) {
      return rows.slice(0, this.displayedRows);
    } else {
      return rows;
    }
  }

  set rows(value: RowData[][]) {
    store.state.rows = value;
  }

  get cols(): string[] {
    return store.state.cols;
  }

  set cols(value: string[]) {
    store.state.cols = value;
  }

  select(row: RowData[]): void {
    console.log(row);
  }

  mounted(): void {
    this.$el.onscroll = () => {
      var sh = this.$el.scrollHeight;
      var st = this.$el.scrollTop;
      var ht = this.$el.offsetHeight;
      if (ht == 0 || st >= sh - ht) {
        this.displayedRows += 10;
      }
    };
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
    border-collapse: collapse;
    min-width: 400px;

    tr th,
    tr td {
      position: relative;
      input {
        border: none;
        padding: 0.5em;
        width: 100%;
        border-radius: 0;
        background-color: transparent;
      }
    }
    thead {
      th {
        background-color: darken($primary, 5);
        position: sticky;
        top: 0;
        z-index: 1;

        input {
          width: 100%;
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
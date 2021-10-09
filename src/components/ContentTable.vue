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
        <tr
          :class="{ selected: selected.row == rowIndex }"
          v-for="(_, rowIndex) in rows"
          :key="rowIndex"
          @click.self="select(rowIndex, -1)"
        >
          <td
            v-for="(_, colIndex) in cols"
            :key="colIndex"
            :class="{ selected: selected.col == colIndex }"
            @click="select(rowIndex, colIndex)"
          >
            <input
              :data-col="colIndex"
              :data-row="rowIndex"
              type="text"
              v-model="rows[rowIndex][colIndex]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import store, { RowData, SelectedData } from "@/store";
import { Vue } from "vue-class-component";
export default class ContentTable extends Vue {
  displayedRows = 50;
  lastScrollPoint = 0;

  get rows(): RowData[][] {
    const rows = store.state.data.rows;
    if (rows.length > this.displayedRows) {
      return rows.slice(0, this.displayedRows);
    } else {
      return rows;
    }
  }

  set rows(value: RowData[][]) {
    store.state.data.rows = value;
  }

  get selected(): SelectedData {
    return store.state.data.selected;
  }

  get cols(): string[] {
    return store.state.data.cols;
  }

  set cols(value: string[]) {
    store.state.data.cols = value;
  }

  select(rowIndex: number, colIndex: number): void {
    store.state.data.selected = {
      col: colIndex,
      row: rowIndex,
    };
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
    font-size: 0.9em;

    tr th,
    tr td {
      position: relative;
      text-align: center;
      input {
        border: none;
        padding: 0.5em;
        border-radius: 0;
        background-color: transparent;
        width: 100%;
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
      tr.selected {
        background-color: darken($primary, 5) !important;

        td {
          color: white !important;
        }
      }
    }
  }
}
</style>
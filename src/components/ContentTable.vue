<template>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th>
            <p>id</p>
          </th>
          <th
            v-for="(_, index) in cols"
            :key="index"
            @click="select(-1, index)"
            :class="{ selected: selected.col == index }"
          >
            <input
              class="col-input"
              type="text"
              v-model="cols[index]"
              :data-col="index"
              v-if="editColumnIndex == index"
              @blur="editColumn(-1)"
            />
            <p @dblclick="editColumn(index)">{{ cols[index] }}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="{ selected: selected.row == rowIndex }"
          v-for="(_, rowIndex) in rows"
          :key="rowIndex"
          @click.self="select(rowIndex, -1)"
          :data-row="rowIndex"
        >
          <td><p>{{rowIndex + 1}}</p></td>
          <td
            v-for="(_, colIndex) in cols"
            :key="colIndex"
            :class="{ selected: selected.col == colIndex }"
            @click="select(rowIndex, colIndex)"
          >
            <input
              class="row-input"
              :data-col="colIndex"
              :data-row="rowIndex"
              type="text"
              v-model="rows[rowIndex][colIndex]"
              v-if="editRowIndex == rowIndex && editRowColumnIndex == colIndex"
              @blur="editRow(-1, -1)"
            />
            <p @dblclick="editRow(rowIndex, colIndex)">
              {{ rows[rowIndex][colIndex] }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import store, { RowData, SelectedData } from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
  watch: {
    dMoveTo() {
      this.scrollToRow(store.state.data.moveTo);
    },
  },
})
export default class ContentTable extends Vue {
  displayedRows = 50;
  lastScrollPoint = 0;

  editColumnIndex = -1;
  editRowIndex = -1;
  editRowColumnIndex = -1;

  editColumn(index: number): void {
    this.editColumnIndex = index;
    this.editRowIndex = -1;
    this.editRowColumnIndex = -1;
    setTimeout(() => {
      const element: HTMLElement | null = document.querySelector(
        `.col-input[data-col="${this.editColumnIndex}"]`
      );
      if (!element) return;
      element.focus();
    }, 15);
  }

  editRow(index: number, column: number): void {
    this.editRowIndex = index;
    this.editRowColumnIndex = column;
    this.editColumnIndex = -1;
    setTimeout(() => {
      const element: HTMLElement | null = document.querySelector(
        `.row-input[data-col="${this.editRowColumnIndex}"][data-row="${this.editRowIndex}"]`
      );
      if (!element) return;
      element.focus();
    }, 15);
  }

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

  get dMoveTo(): number {
    return store.state.data.moveTo;
  }

  scrollToRow(row: number): void {
    if (row == -1) return;
    if (row > this.displayedRows) {
      this.displayedRows = row + 5;
    }
    store.state.data.selected.row = row;
    setTimeout(() => {
      const element: HTMLElement | null = document.querySelector(
        `tr[data-row="${row}"]`
      );
      if (element == null) return;
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
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
}

table {
  width: 100%;
  min-width: 400px;

  border-collapse: collapse;

  th {
    position: sticky;
    top: 0;
    z-index: 1;

    background-color: darken($primary, 5);

    p {
      font-weight: bold;
      font-size: 0.9em;
      padding: 0.5em;
      color: white;
      text-align: center;
      min-height: 2em;
    }

    &:nth-child(1) p {
      text-align: left;
    }

    &.selected {
      background-color: darken($primary, 15);
    }
  }

  tbody {
    width: 100%;
    tr {
      border-top: 1px solid $light-gray;
      border-bottom: 1px solid $light-gray;

      &:nth-child(odd) {
        background-color: lighten($light-gray, 5);

        .selected {
          background-color: darken($light-gray, 5);
        }
      }

      td {
        position: relative;
        p {
          font-size: 0.8em;
          padding: 0.5em;
          text-align: center;
          min-height: 2em;
        }

        &.selected {
          background-color: $light-gray;
        }

        &:nth-child(1) p {
          text-align: left;
        }
      }

      &.selected {
        background-color: darken($light-gray, 15);
        .selected {
          background-color: darken($light-gray, 15);
        }
      }
    }
  }
}

.col-input,
.row-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}
</style>
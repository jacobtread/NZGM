<template>
  <header class="header">
    <img
      src="../assets/img/logo-white.svg"
      alt="NZGM"
      title="NZGrapherModern"
    />
    <div class="header__content">
      <div class="graph-name">
        <input
          class="graph-name__input"
          type="text"
          placeholder="Graph Name"
          v-model.lazy="title"
        />
      </div>
      <div class="toolbar">
        <div
          class="toolbar__menu"
          v-for="(item, index) in toolbar"
          :key="index"
          @mouseenter="!item.action && expand(item)"
          @mouseleave="closeAll()"
        >
          <button class="toolbar__menu__button" @click="action(item)">
            {{ item.name }}
          </button>
          <transition name="menu">
            <div class="toolbar__menu__content" v-if="item.expanded">
              <template v-for="(child, index) in item.children" :key="index">
                <button
                  v-if="child.name"
                  class="toolbar__menu__content__button"
                  @click="action(child)"
                >
                  <i
                    class="material-icons toolbar__menu__content__button__icon"
                    v-if="child.icon"
                    >{{ child.icon }}</i
                  >
                  {{ child.name }}
                </button>
                <span class="toolbar__menu__content__separator" v-else />
              </template>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="header__controls">
      <div class="select">
        <label class="select__label">Graph Type</label>
        <select class="select__input" name="" v-model="graphType">
          <option :value="index" :key="index" v-for="(graph, index) in graphs">
            {{ graph.name }}
          </option>
        </select>
      </div>
    </div>
  </header>
  <Dialog v-bind:open="pickURLDialog" @close="pickURLDialog = false">
    <h1>Enter URL</h1>
    <p>
      The provided URL must be a direct/raw link to a <span>.csv</span> file
    </p>
    <label class="input">
      <span class="input__name">URL</span>
      <input
        class="input__value"
        type="url"
        placeholder="https://example.com/example.csv"
        v-model="importURL"
      />
    </label>
    <button class="button" @click="importFromURL">Import</button>
  </Dialog>
</template>

<script lang="ts">
import store from "@/store";
import { Options, Vue } from "vue-class-component";
import graphList from "@/graph/list";
import Dialog from "@/components/Dialog.vue";
import {
  hideLoader,
  importCSVFromURL,
  importFromCSV,
  importFromFile,
  showLoader,
} from "@/tools";
interface ToolbarItem {
  icon?: string;
  name?: string;
  group?: boolean;
  action?(): void;
  children?: ToolbarItem[];
  expanded?: boolean;
}

@Options({
  components: { Dialog },
})
export default class Header extends Vue {
  pickURLDialog = false;
  importURL = "";

  importFromURL(): void {
    var regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (this.importURL.length < 1) return alert("No URL provided!");
    if (!regex.test(this.importURL)) return alert("Invalid url provided");
    this.pickURLDialog = false;
    importCSVFromURL(this.importURL)
      .then(() => {
        this.importURL = "";
        const rows = store.state.data.rows;
        alert(`Imported ${rows.length}row(s)`);
      })
      .catch(() => alert("Failed to import csv"));
  }

  expanded = false;

  graphs = graphList;

  set graphType(value: string) {
    store.state.graph.type = value;
  }
  get graphType(): string {
    return store.state.graph.type;
  }

  set title(value: string) {
    store.state.graph.title = value;
  }

  get title(): string {
    return store.state.graph.title;
  }

  toolbar: ToolbarItem[] = [
    {
      name: "Data",
      children: [
        {
          icon: "file_upload",
          name: "Open File",
          action: (): void => {
            importFromFile();
          },
        },
        {
          icon: "content_paste",
          name: "Import from clipboard",
          action: (): void => {
            if ("navigator" in window) {
              showLoader("Loading Clipboard Contents");
              navigator.clipboard
                .readText()
                .then((text) => {
                  hideLoader();
                  importFromCSV(text);
                })
                .catch((err) => {
                  hideLoader();
                  alert("Unable to read contents from clipboard: " + err);
                });
            }
          },
        },
        { icon: "table_chart", name: "Paste Table (Legacy)" },
        {
          icon: "link",
          name: "Import from URL",
          action: (): void => {
            this.pickURLDialog = true;
          },
        },
        { icon: "highlight_alt", name: "Select & Copy Data Table" },
        { icon: "file_download", name: "Download Data" },
        { icon: "save_alt", name: "Save Session" },
      ],
    },
    {
      name: "Edit",
      children: [
        { name: "Remove Row" },
        { name: "Remove Specific Row" },
        { name: "Remove Last Row" },
        {},
        { name: "Remove Column" },
        { name: "Remove Specific Column" },
        { name: "Remove Last Column" },
      ],
    },
    {
      name: "Insert",
      children: [
        {
          name: "Insert Row",
          action(): void {
            store.state.data.rows.push(new Array(store.state.data.cols.length));
          },
        },
        {
          name: "Insert Column",
          action(): void {
            store.state.data.cols.push("");
          },
        },
      ],
    },
  ];

  expand(item: ToolbarItem): void {
    item.expanded = true;
    this.expanded = true;
  }

  closeAll(): void {
    this.expanded = false;
    for (const other of this.toolbar) {
      other.expanded = false;
    }
  }

  action(item: ToolbarItem): void {
    if (item.action) {
      item.action();
      this.closeAll();
    }
  }
}
</script>
<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.header {
  display: flex;
  border-bottom: 1px solid rgb(216, 216, 216);
  height: 90px;
  z-index: 99;

  img {
    height: 90px;
    align-self: center;
    background: $primary;
    padding: 1em;
  }

  &__content {
    display: flex;
    flex-flow: column;
    padding: 0.5em;
  }

  &__controls {
    flex: auto;
    justify-content: flex-end;
    display: flex;
    flex-flow: row;
    padding: 0.5em;
  }
}

.graph-name {
  flex: auto;

  &__input {
    display: inline-block;
    padding: 0.7em 0.5em;
    border: 2px solid transparent;

    &:focus {
      outline: 2px solid $primary;
      border-color: transparent;
    }
  }

  &:hover &__input {
    border: 2px solid #ececec;
  }
}

.toolbar {
  display: flex;
  flex-flow: row;
  align-items: flex-end;

  &__menu {
    position: relative;
    margin-right: 1em;

    &__button {
      padding: 0.35em 0.5em;
      border: none;
      background: transparent;
      color: #444;

      &:hover {
        background: $light-gray;
      }
    }

    &__content {
      position: absolute;
      left: 0;
      top: 100%;
      min-width: 300px;
      padding: 0.5em;
      background: white;
      z-index: 100;
      border: 1px solid $light-gray;

      &__separator {
        height: 1px;
        background: $light-gray;
        display: block;
        margin: 0.5em 1em;
      }

      &__button {
        display: block;
        width: 100%;
        text-align: left;
        padding: 0.5em 1em;
        background: transparent;
        border: none;
        color: #444;
        cursor: pointer;

        &:hover {
          background: $light-gray;
        }

        &__icon {
          color: #777;
          opacity: 0.5;
          vertical-align: text-bottom;
          margin-right: 0.5em;
        }
      }
    }
  }
}

.menu-leave-active,
.menu-enter-active {
  transition: all 0.25s;
  opacity: 1;
  transform: translateY(0);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>

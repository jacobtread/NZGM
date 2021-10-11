<template>
  <div class="controls">
    <div class="controls__box">
      <div class="select">
        <label class="select__label">X Axis</label>
        <select class="select__input" name="" v-model="graphData.xAxis">
          <option value="-1">None</option>
          <option
            :value="index"
            v-for="(col, index) in contentData.cols"
            :key="index"
          >
            {{ col }}
          </option>
        </select>
      </div>
      <div class="select">
        <label class="select__label">Y Axis</label>
        <select class="select__input" name="" v-model="graphData.yAxis">
          <option value="-1">None</option>
          <option
            :value="index"
            v-for="(col, index) in contentData.cols"
            :key="index"
          >
            {{ col }}
          </option>
        </select>
      </div>
    </div>
    <div class="controls__box">
      <div class="select">
        <label class="select__label">Z Axis</label>
        <select class="select__input" name="" v-model="graphData.zAxis">
          <option value="-1">None</option>
          <option
            :value="index"
            v-for="(col, index) in contentData.cols"
            :key="index"
          >
            {{ col }}
          </option>
        </select>
      </div>
      <div class="select">
        <label class="select__label">Size</label>
        <select
          class="select__input"
          name=""
          v-model="graphData.size"
          @change="this.$emit('resize')"
        >
          <option value="0">Auto</option>
          <option value="1">Auto - High Res</option>
          <option value="2">Standard</option>
          <option value="3">Small</option>
          <option value="4">Short</option>
        </select>
      </div>
    </div>
    <div class="controls__box--long">
      <label class="controls__box--long__title">Settings</label>
      <div class="controls__box--long__content">
        <template v-for="(setting, index) in graphType.settings" :key="index">
          <label class="checkbox" v-if="setting.type == 'toggle'">
            <span class="checkbox__mark"></span>
            <input
              class="checkbox__input"
              type="checkbox"
              name=""
              v-model="graphData.settings.values[setting.key]"
            />
            <span class="checkbox__text">{{ setting.name }}</span>
          </label>
          <label class="slider" for="" v-if="setting.type == 'slider'">
            <span class="slider__name"
              >{{ setting.name }}
              <span class="slider__value">{{
                graphData.settings.values[setting.key]
              }}</span></span
            >
            <span class="slider__wrapper">
              <span class="slider__clamp">{{ setting.min }}</span>
              <input
                class="slider__input"
                type="range"
                name=""
                id=""
                :min="setting.min"
                :max="setting.max"
                v-model="graphData.settings.values[setting.key]"
              />
              <span class="slider__clamp">{{ setting.max }}</span>
            </span>
          </label>
          <label class="input" for="" v-if="setting.type == 'number'">
            <span class="input__name">{{ setting.name }} </span>
            <input
              type="number"
              name=""
              id=""
              v-model="graphData.settings.values[setting.key]"
            />
          </label>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { addDefaultSettings } from "@/graph";
import store, { ContentData, GraphData } from "@/store";
import graphTypes from "@/graph/list";
import { GraphTypeData } from "@/graph/types";

@Options({
  props: ["resizeGraph"],
  watch: {
    graphData: {
      handler() {
        this.setupSettings();
      },
      deep: true,
    },
  },
})
export default class GraphControls extends Vue {
  width = 0;
  height = 0;

  mounted(): void {
    this.setupSettings();
  }

  setupSettings(): void {
    addDefaultSettings(this.graphType.settings);
  }

  get graphData(): GraphData {
    return store.state.graph;
  }

  get graphType(): GraphTypeData {
    return graphTypes[this.graphData.type];
  }

  get size(): number {
    return store.state.graph.size;
  }

  set size(value: number) {
    store.state.graph.size = value;
  }

  get contentData(): ContentData {
    return store.state.data;
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.controls {
  display: flex;
  flex-flow: row;
  background-color: white;
  position: relative;
  align-items: center;
  justify-content: space-between;
}

.controls__box {
  margin-right: 1em;

  &--long {
    flex: auto;
    display: flex;
    flex-flow: column;

    &__title {
      display: block;
      padding: 0.5em 0;
      text-align: left;
      margin-left: 0.25em;
    }

    &__content {
      overflow-y: auto;
      border: 2px solid $light-gray;
      padding: 0.5em;
      display: flex;
      flex-flow: column;
      max-height: 7em;
    }
  }
}
</style>
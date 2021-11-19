<template>
  <div>
    <button class="controls-min button--icon" @click="toggleControls">
      <i class="material-icons">{{
        controls ? "expand_more" : "expand_less"
      }}</i>
    </button>
    <div class="controls" v-if="controls">
      <div class="controls__box controls__box--axies">
        <div class="select" v-if="graphType.axisNames[0]">
          <label class="select__label"
            >
            {{ graphType.axisNames[0] }}
            </label
          >
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
        <div class="select" v-if="graphType.axisNames[1]">
          <label class="select__label"
            >
            {{ graphType.axisNames[1] }}
            </label
          >
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
        <div class="select" v-if="graphType.axisNames[2]">
          <label class="select__label">
            {{ graphType.axisNames[2] }} </label
          >
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
                <span class="slider__value">
                  {{ graphData.settings.values[setting.key] }}
                </span>
              </span>
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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store, { ContentData, GraphData } from "@/store";
import graphTypes from "@/graph/list";
import { GraphTypeData } from "@/graph/types";

@Options({
  props: ["resizeGraph"],
  emits: ["resize"],
})
export default class GraphControls extends Vue {
  width = 0;
  height = 0;
  controls = true;

  toggleControls(): void {
    this.controls = !this.controls;
    this.$nextTick(function () {
      this.$emit("resize");
    });
  }

  get graphData(): GraphData {
    return store.state.graph;
  }

  set graphData(value: GraphData) {
    store.state.graph = value;
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
  flex-flow: column;
  background-color: white;
  position: relative;
  align-items: top;
  justify-content: space-between;
}

.controls-min {
  width: 100%;
  padding: 0.1em;
}

.axis-label {
  color: #363d44;
  font-weight: bold;
  font-size: 0.7em;
}

.controls__box {
  &--axies {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1em;
  }

  &--long {
    flex: auto;
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
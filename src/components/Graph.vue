<template>
  <div class="graph-wrapper" id="graphWrapper">
    <div class="buttons">
      <button class="button" @click="download">
        <i class="material-icons">download</i>
      </button>
      <button class="button" @click="resizeGraph">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <div
      class="canvas-wrapper"
      id="canvasWrapper"
      :class="{ scaled: graphValue.scaleFactor == 5 }"
    >
      <img id="graph" src="" alt="" usemap="#canvas-map" />
      <canvas id="graphCanvas" usemap="#canvas-map" />
      <map name="canvas-map" id="canvasMap"></map>
    </div>
    <div class="controls">
      <div class="controls__box">
        <div class="select">
          <label class="select__label">X Axis</label>
          <select class="select__input" name="" v-model="xAxis">
            <option value="-1">None</option>
            <option
              :value="index"
              v-for="(col, index) in data.cols"
              :key="index"
            >
              {{ col }}
            </option>
          </select>
        </div>
        <div class="select">
          <label class="select__label">Y Axis</label>
          <select class="select__input" name="" v-model="yAxis">
            <option value="-1">None</option>
            <option
              :value="index"
              v-for="(col, index) in data.cols"
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
          <select class="select__input" name="" v-model="zAxis">
            <option value="-1">None</option>
            <option
              :value="index"
              v-for="(col, index) in data.cols"
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
            v-model="size"
            @change="resizeGraph"
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
          <template
            v-for="(setting, index) in graphTypeData.settings"
            :key="index"
          >
            <label class="checkbox" v-if="setting.type == 'toggle'">
              <span class="checkbox__mark"></span>
              <input
                class="checkbox__input"
                type="checkbox"
                name=""
                v-model="graphValue.settings.values[setting.key]"
              />
              <span class="checkbox__text">{{ setting.name }}</span>
            </label>
            <label class="slider" for="" v-if="setting.type == 'slider'">
              <span class="slider__name"
                >{{ setting.name }}
                <span class="slider__value">{{
                  graphValue.settings.values[setting.key]
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
                  v-model="graphValue.settings.values[setting.key]"
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
                v-model="graphValue.settings.values[setting.key]"
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
import { mapState } from "vuex";

import store, { GraphData, State } from "@/store";
import { hideLoader, showLoader } from "@/tools";

import { addDefaultSettings } from "@/graph";
import { GraphTypeData } from "@/graph/types";
import graphs from "@/graph/list";
import { watermark } from "@/graph";

@Options({
  computed: mapState<State>({
    data: (state: State) => state.data,
    title: (state: State) => state.graph.title,
  }),
  watch: {
    data: {
      handler() {
        this.renderGraph();
      },
      deep: true,
    },
    graph: {
      handler() {
        this.setupSettings();
      },
      deep: true,
    },
    graphValue: {
      handler() {
        this.renderGraph();
      },
      deep: true,
    },
  },
})
export default class Graph extends Vue {
  width = 0;
  height = 0;

  mounted(): void {
    this.resizeGraph();
    this.setupSettings();
  }

  setupSettings(): void {
    const graphType = this.graphType;
    const graph = graphs[graphType];
    addDefaultSettings(graph.settings);
  }

  resizeGraph(): void {
    const graphWrapper: HTMLElement = document.getElementById(
      "canvasWrapper"
    ) as HTMLElement;
    this.graphValue.scaleFactor = 1;
    if (this.size == 0) {
      // Auto
      this.width = graphWrapper.offsetWidth;
      this.height = graphWrapper.offsetHeight;
    } else if (this.size == 1) {
      // Auto - HighRes
      console.log(graphWrapper.offsetWidth, graphWrapper.offsetHeight);
      this.width = graphWrapper.offsetWidth * 5;
      this.height = graphWrapper.offsetHeight * 5;
      this.graphValue.scaleFactor = 5;
    } else if (this.size == 2) {
      // Standard
      this.width = 800;
      this.height = 600;
    } else if (this.size == 3) {
      // Small
      this.width = 500;
      this.height = 400;
    } else if (this.size == 4) {
      // Short
      this.width = 800;
      this.height = 300;
    }
    this.renderGraph();
  }

  renderGraph(): void {
    const graphCanvas: HTMLCanvasElement = document.getElementById(
      "graphCanvas"
    ) as HTMLCanvasElement;
    const graphImg: HTMLImageElement = document.getElementById(
      "graph"
    ) as HTMLImageElement;
    this.resetMap();
    const ctx: CanvasRenderingContext2D = graphCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    const canvas = ctx.canvas;
    canvas.width = this.width;
    canvas.height = this.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = "#ffffff";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();

    const graphType = this.graphType;
    const graph = graphs[graphType];

    graph.func(ctx);

    watermark(ctx, ctx.canvas.width, ctx.canvas.height);

    const data = canvas.toDataURL();
    graphImg.src = data;
  }

  resetMap(): void {
    const map: HTMLMapElement = document.getElementById(
      "canvasMap"
    ) as HTMLMapElement;
    map.innerHTML = "";
  }

  get graphTypeData(): GraphTypeData {
    return graphs[this.graphType];
  }

  download(): void {
    const graphCanvas: HTMLCanvasElement = document.getElementById(
      "graphCanvas"
    ) as HTMLCanvasElement;
    const fileName = "graph.png";
    showLoader("Downloading Image");
    graphCanvas.toBlob((data) => {
      if (window.navigator.msSaveOrOpenBlob)
        // IE10+
        window.navigator.msSaveOrOpenBlob(data, fileName);
      else {
        // Others
        var a = document.createElement("a"),
          url = URL.createObjectURL(data);
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 0);
      }
      hideLoader();
    });
  }

  get size(): number {
    return store.state.graph.size;
  }

  set size(value: number) {
    store.state.graph.size = value;
  }

  get xAxis(): number {
    return store.state.graph.xAxis;
  }

  set xAxis(value: number) {
    store.state.graph.xAxis = value;
  }

  get yAxis(): number {
    return store.state.graph.yAxis;
  }

  set yAxis(value: number) {
    store.state.graph.yAxis = value;
  }
  get zAxis(): number {
    return store.state.graph.zAxis;
  }

  set zAxis(value: number) {
    store.state.graph.zAxis = value;
  }

  get graphType(): string {
    return store.state.graph.type;
  }

  get graphValue(): GraphData {
    return store.state.graph;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.graph-wrapper {
  flex: auto;
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: auto;
}

.buttons {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .button {
    padding: 0.45em 0.55em;
    color: gray;
    background-color: $light-gray;
    border: none;
    cursor: pointer;
  }
}

.controls {
  flex: 0 0 auto;
  display: flex;
  flex-flow: row;
  padding: 1em;
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

.canvas-wrapper {
  flex: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  &.scaled {
    display: block;
    #graph {
      flex: auto;
      width: 100%;
      height: 100%;
    }
  }
}

#graphCanvas {
  position: absolute;
  background-color: black;

  display: hidden;
  visibility: hidden;
}
</style>
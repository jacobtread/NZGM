<template>
  <div class="graph-wrapper">
    <button class="refresh-button" @click="resizeGraph">
      <i class="material-icons">refresh</i>
    </button>
    <div class="canvas-wrapper" id="canvasWrapper">
      <canvas id="graphCanvas" usesmap="canvas-map" />
      <map name="canvas-map" id="canvasMap"></map>
    </div>
    <div class="controls">
      <div class="controls__axis">
        <div class="select">
          <label class="select__label">X Axis</label>
          <select class="select__input" name="" v-model="xAxis">
            <option value="-1">None</option>
            <option :value="index" v-for="(col, index) in cols" :key="index">
              {{ col }}
            </option>
          </select>
        </div>
        <div class="select">
          <label class="select__label">Y Axis</label>
          <select class="select__input" name="" v-model="yAxis">
            <option value="-1">None</option>
            <option :value="index" v-for="(col, index) in cols" :key="index">
              {{ col }}
            </option>
          </select>
        </div>
        <div class="select">
          <label class="select__label">Z Axis</label>
          <select class="select__input" name="" v-model="zAxis">
            <option value="-1">None</option>
            <option :value="index" v-for="(col, index) in cols" :key="index">
              {{ col }}
            </option>
          </select>
        </div>
      </div>
      <div class="controls__size">
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
    </div>
  </div>
</template>

<script lang="ts">
import { createDotPlot } from "@/graph";
import store, { State } from "@/store";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
@Options({
  computed: mapState<State>({
    rows: (state: State) => state.rows,
    cols: (state: State) => state.cols,
    title: (state: State) => state.graph.title,
  }),
  watch: {
    title() {
      this.renderGraph();
    },
    xAxis() {
      this.renderGraph();
    },
    yAxis() {
      this.renderGraph();
    },
    zAxis() {
      this.renderGraph();
    },
    size() {
      this.renderGraph();
    },
    rows: {
      handler() {
        this.renderGraph();
      },
      deep: true,
    },
    cols: {
      handler() {
        this.renderGraph();
      },
      deep: true,
    },
  },
})
export default class Graph extends Vue {
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

  mounted(): void {
    this.resizeGraph();
  }

  resizeGraph(): void {
    const graphCanvas: HTMLCanvasElement = document.getElementById(
      "graphCanvas"
    ) as HTMLCanvasElement;
    store.state.graph.scaleFactor = 1;
    if (this.size == 0) {
      graphCanvas.style.width = "100%";
      graphCanvas.style.height = "100%";
    } else if (this.size == 1) {
      graphCanvas.style.width = "500%";
      graphCanvas.style.height = "500%";
      store.state.graph.scaleFactor = 5;
    } else if (this.size == 2) {
      graphCanvas.style.width = "800px";
      graphCanvas.style.height = "600px";
    } else if (this.size == 3) {
      graphCanvas.style.width = "500px";
      graphCanvas.style.height = "400px";
    } else if (this.size == 4) {
      graphCanvas.style.width = "800px";
      graphCanvas.style.height = "300px";
    }
    graphCanvas.width = graphCanvas.offsetWidth;
    graphCanvas.height = graphCanvas.offsetHeight;

    this.renderGraph();
  }
  resetMap(): void {
    const map: HTMLMapElement = document.getElementById(
      "canvasMap"
    ) as HTMLMapElement;
    map.innerHTML = "";
  }

  renderGraph(): void {
    this.resetMap();
    const wrapper: HTMLElement = document.getElementById(
      "canvasWrapper"
    ) as HTMLElement;
    const graphCanvas: HTMLCanvasElement = document.getElementById(
      "graphCanvas"
    ) as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = graphCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    const canvas = ctx.canvas;
    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = "#ffffff";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createDotPlot(ctx);
    const data = canvas.toDataURL();
    wrapper.style.backgroundImage = 'url("' + data + '")';
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
}

.refresh-button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.45em 0.55em;
  color: gray;
  background-color: $light-gray;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.canvas-wrapper {
  flex: auto;
  overflow: hidden;
  position: relative;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.controls {
  display: flex;
  flex-flow: row;
  padding: 1em;
  background-color: white;
}

.controls__axis {
  margin-right: 1em;
}

#canvasMap {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
}

#graphCanvas {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  aspect-ratio: auto 944 / 777;
  display: hidden;
  visibility: hidden;
}
</style>
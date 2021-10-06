<template>
  <div class="graph-wrapper">
    <div class="canvas-wrapper" id="canvasWrapper">
      <canvas id="graphCanvas" />
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
import { dotPlot, graphs } from "@/graph";
import store, { State } from "@/store";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
@Options({
  computed: mapState<State>({
    rows: (state: State) => state.rows,
    cols: (state: State) => state.cols,
    xAxis: (state: State) => state.graph.xAxis,
    yAxis: (state: State) => state.graph.yAxis,
  }),
})
export default class Graph extends Vue {
  get size(): number {
    return store.state.graph.size;
  }

  set size(value: number) {
    store.state.graph.size = value;
  }

  mounted(): void {
    this.resizeGraph();
  }

  getContext(): CanvasRenderingContext2D {
    const graphCanvas: HTMLCanvasElement = document.getElementById(
      "graphCanvas"
    ) as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = graphCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    return context;
  }

  resizeGraph() {
    const graphCanvas: HTMLElement = document.getElementById(
      "graphCanvas"
    ) as HTMLElement;
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
    const context = this.getContext();
    this.renderGraph(context);
  }

  renderGraph(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    dotPlot(ctx);
  }
}
</script>

<style lang="scss" scoped>
.graph-wrapper {
  flex: auto;
  display: flex;
  flex-flow: column;
  height: 100%;
  margin: 0;
  padding: 0;
}

.canvas-wrapper {
  flex: auto;
  overflow: hidden;
  position: relative;
}

.controls {
  display: flex;
  flex-flow: row;
  padding: 1em;
  background-color: white;
}

#graphCanvas {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
}
</style>
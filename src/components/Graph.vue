<template>
  <div class="graph-wrapper">
    <div class="canvas-wrapper">
      <canvas id="graphCanvas"/>
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
    </div>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
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
  mounted(): void {
    const graphCanvas: HTMLCanvasElement = document.getElementById(
      "graphCanvas"
    ) as HTMLCanvasElement;
    if (!graphCanvas) return;
    const context: CanvasRenderingContext2D | null =
      graphCanvas.getContext("2d");
    if (!context) return;
    // const bounds = graphCanvas.getBoundingClientRect();
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
}

.controls {
  display: flex;
  flex-flow: row;
  padding: 1em;
}

#graphCanvas {
  width: 100%;
  height: 100%;
  background-color: black;
  flex: a;
}
</style>
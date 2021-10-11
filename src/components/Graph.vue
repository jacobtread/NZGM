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
      :class="{ scaled: graph.scaleFactor == 5 }"
    >
      <img id="graph" src="" alt="" usemap="#canvas-map" />
      <canvas id="graphCanvas" usemap="#canvas-map" />
      <map name="canvas-map" id="canvasMap"></map>
    </div>
    <GraphControls @resize="resizeGraph" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import store, { ContentData, GraphData } from "@/store";
import { hideLoader, showLoader } from "@/tools";

import { watermark } from "@/graph";
import graphTypes from "@/graph/list";

import GraphControls from "@/components/GraphControls.vue";

@Options({
  components: {
    GraphControls,
  },
  watch: {
    contentData: {
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
  }

  resizeGraph(): void {
    const graphWrapper: HTMLElement = document.getElementById(
      "canvasWrapper"
    ) as HTMLElement;
    this.graph.scaleFactor = 1;
    if (this.size == 0) {
      // Auto
      this.width = graphWrapper.offsetWidth;
      this.height = graphWrapper.offsetHeight;
    } else if (this.size == 1) {
      // Auto - HighRes
      console.log(graphWrapper.offsetWidth, graphWrapper.offsetHeight);
      this.width = graphWrapper.offsetWidth * 5;
      this.height = graphWrapper.offsetHeight * 5;
      this.graph.scaleFactor = 5;
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

    const graph = graphTypes[this.graphType];

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

  get graphType(): string {
    return store.state.graph.type;
  }

  get graph(): GraphData {
    return store.state.graph;
  }

  get contentData(): ContentData {
    return store.state.data;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.graph-wrapper {
  padding: 1em;
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
<template>
  <div id="graphWrapper">
    <div class="buttons">
      <button class="button--icon" @click="download">
        <i class="material-icons">download</i>
      </button>
      <button class="button--icon" @click="resizeGraph">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <div id="canvasWrapper" :class="{ scaled }">
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
import { hideLoader, showLoader, startDownloadBlob, toast } from "@/tools";

import { text, watermark } from "@/graph";
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
  graphWrapper: HTMLElement | undefined;
  graphCanvas: HTMLCanvasElement | undefined;
  graphImg: HTMLImageElement | undefined;
  scaled = false;

  mounted(): void {
    this.graphWrapper = document.getElementById("canvasWrapper") as HTMLElement;
    this.graphCanvas = document.getElementById(
      "graphCanvas"
    ) as HTMLCanvasElement;
    this.graphImg = document.getElementById("graph") as HTMLImageElement;
    this.resizeGraph();
    document.addEventListener("app-resize", (): void => {
      this.resizeGraph();
    });
    document.addEventListener("app-resize-start", (): void => {
      this.showLoadingGraph();
    });
  }

  resizeGraph(): void {
    if (this.graphWrapper == null) return;
    this.graph.scaleFactor = 1;
    if (this.size == 0) {
      // Auto
      this.width = this.graphWrapper.offsetWidth;
      this.height = this.graphWrapper.offsetHeight;
    } else if (this.size == 1) {
      // Auto - HighRes
      this.width = this.graphWrapper.offsetWidth * 5;
      this.height = this.graphWrapper.offsetHeight * 5;
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
    this.scaled = this.graph.scaleFactor == 5;
    this.renderGraph();
  }

  showLoadingGraph(): void {
    if (
      this.graphImg == null ||
      this.graphCanvas == null ||
      this.graphWrapper == null
    ) {
      return;
    }
    this.resetMap();
    const ctx: CanvasRenderingContext2D = this.graphCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    this.scaled = true;
    const canvas = ctx.canvas;
    canvas.width = this.width;
    canvas.height = this.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = "#ffffff";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    text(ctx, "Loading...", 20, this.width / 2, this.height / 2, "center");
    const data = canvas.toDataURL();
    this.graphImg.src = data;
  }

  renderGraph(): void {
    if (this.graphImg == null || this.graphCanvas == null) {
      return;
    }
    const ctx: CanvasRenderingContext2D = this.graphCanvas.getContext(
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
    this.graphImg.src = data;
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
    showLoader("Downloading Image");
    graphCanvas.toBlob((data: Blob | null) => {
      if (!data) {
        toast("Failed to create image download", "error")
      } else {
        startDownloadBlob(data, "graph.png");
        hideLoader();
      }
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

#graphWrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  padding: 1em;
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
}

#canvasWrapper {
  flex: auto;
  display: flex;
  align-items: center;
  overflow: auto;

  #graphCanvas {
    display: none;
  }

  #graph {
    margin: 0 auto;
  }

  &.scaled {
    display: block;
    #graph {
      width: 100%;
    }
  }
}
</style>
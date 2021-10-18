<template>
  <div class="resizable">
    <div class="resizable__content" data-position="left">
      <slot name="left" />
    </div>
    <span class="resizable__handle" @mousedown="startResize"></span>
    <div class="resizable__content" data-position="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { clamp } from "@/tools/math";
import { Vue } from "vue-class-component";

export default class App extends Vue {
  dragging = false;

  startResize(): void {
    this.dragging = true;
    const event = new CustomEvent("app-resize-start", {});
    document.dispatchEvent(event);
  }

  mounted(): void {
    const app: HTMLElement = document.getElementById("app") as HTMLElement;
    const parent: HTMLElement = this.$el;
    const leftChild: HTMLElement | null = parent.querySelector(
      '.resizable__content[data-position="left"]'
    );
    const rightChild: HTMLElement | null = parent.querySelector(
      '.resizable__content[data-position="right"]'
    );
    const handle: HTMLElement = parent.querySelector(
      ".resizable__handle"
    ) as HTMLElement;

    if (leftChild == null && rightChild !== null) {
      rightChild.style.width = "100%";
      handle.style.left = "calc(100% - 10px)";
    } else if (rightChild == null && leftChild !== null) {
      leftChild.style.width = "100%";
      handle.style.left = "calc(100% - 10px)";
    } else if (rightChild != null && leftChild != null) {
      leftChild.style.width = "40%";
      rightChild.style.width = "60%";
      rightChild.style.left = "40%";
      handle.style.left = "calc(40% - 5px)";

      document.onmousemove = (event: MouseEvent): void => {
        if (!this.dragging) return;
        app.classList.add("resizing");
        event = event || window.event;
        let x: number;
        if (event.pageX == null && event.clientX != null) {
          x = event.clientX;
        } else {
          x = event.pageX;
        }
        const leftPercent: number = clamp(
          ((x - parent.offsetLeft) / parent.offsetWidth) * 100,
          5,
          90
        );

        const rightPercent: number = 100 - leftPercent;
        leftChild.style.width = leftPercent + "%";
        rightChild.style.width = rightPercent + "%";
        rightChild.style.left = leftPercent + "%";
        handle.style.left = `calc(${leftPercent}% - 5px)`;
      };
      
      document.onmouseup = () => {
        app.classList.remove("resizing");
        this.dragging = false;
        const event = new CustomEvent("app-resize", {});
        document.dispatchEvent(event);
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.resizable {
  position: relative;
  height: 100%;
  width: 100%;

  &__content {
    position: absolute;
    overflow-x: auto;
    height: 100%;
  }

  &__handle {
    cursor: col-resize;
    position: absolute;
    top: 0;
    left: calc(50% - 5px);
    width: 10px;
    height: 100%;
    background: #ececec;
    z-index: 2;

    &:hover {
      background: #d4d4d4;
    }
  }
}
</style>
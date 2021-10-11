<template>
  <div class="resizable">
    <div class="resizable__content" data-position="left">
      <slot name="left" />
    </div>
    <span class="resizable__handle" @mousedown="dragging = true"></span>
    <div class="resizable__content" data-position="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  dragging = false;

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
      leftChild.style.width = "50%";
      rightChild.style.width = "50%";
      rightChild.style.left = "50%";
      handle.style.left = "calc(50% - 5px)";

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
        const leftPercent: number =
          ((x - parent.offsetLeft) / parent.offsetWidth) * 100;
        const rightPercent: number = 100 - leftPercent;
        leftChild.style.width = leftPercent + "%";
        rightChild.style.width = rightPercent + "%";
        rightChild.style.left = leftPercent + "%";
        handle.style.left = `calc(${leftPercent}% - 5px)`;
      };
      document.onmouseup = () => {
        app.classList.remove("resizing");
        this.dragging = false;
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
    position: fixed;
  }

  &__handle {
    cursor: col-resize;
    position: absolute;
    top: 0;
    left: calc(50% - 5px);
    width: 10px;
    height: 100%;
    background: #ececec;
    z-index: 3;

    &:hover {
      background: #d4d4d4;
    }
  }
}
</style>
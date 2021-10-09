<template>
  <div class="resizable" style="width: 50%">
    <slot />
    <span class="resizable__handle" @mousedown="dragging = true"></span>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  dragging = false;

  mounted(): void {
    const el: HTMLElement = this.$el;
    document.onmousemove = (event: MouseEvent): void => {
      if (!this.dragging) return;
      document.getElementById("app")?.classList.add("resizing");
      event = event || window.event;
      let x: number;
      if (event.pageX == null && event.clientX != null) {
        x = event.clientX;
      } else {
        x = event.pageX;
      }
      const width: number = x - el.offsetLeft;
      el.style.width = width + "px";
    };
    document.onmouseup = () => {
      document.getElementById("app")?.classList.remove("resizing");
      this.dragging = false;
    };
  }
}
</script>

<style lang="scss" scoped>
.resizable {
  position: relative;
  height: 100%;
  min-width: 300px;
  margin-right: 10px;

  &__handle {
    cursor: col-resize;
    position: absolute;
    right: -10px;
    top: 0;
    width: 10px;
    height: 100%;
    background: #ececec;
    z-index: 99;

    &:hover {
      background: #d4d4d4;
    }
  }
}
</style>
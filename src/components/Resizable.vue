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
      event = event || window.event;
      let x: number;
      if (event.pageX == null && event.clientX != null) {
        let eventDoc: Document = document;
        let doc: HTMLElement = eventDoc.documentElement;
        let body: HTMLElement = eventDoc.body;

        x =
          event.clientX +
          ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
          ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      } else {
        x = event.pageX;
      }
      const width: number = x - el.offsetLeft;
      el.style.width = width + "px";
    };
    document.onmouseup = () => (this.dragging = false);
  }
}
</script>

<style lang="scss" scoped>
.resizable {
  position: relative;
  height: 100%;
  min-width: 300px;

  &__handle {
    cursor: e-resize;
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
  }
}
</style>
<template>
  <transition name="dialog-wrapper">
    <div class="dialog-wrapper" v-if="open" @click.self="closeDialog">
      <transition name="dialog">
        <div class="dialog">
          <slot />
          <div class="buttons">
            <slot name="buttons" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({ props: ["open"] })
export default class Dialog extends Vue {
  closeDialog(): void {
    this.$emit("close");
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.dialog-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 7;
}

.dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5em;
  max-width: 450px;
  background: #ececec;
  border-radius: 0.25em;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1.5em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  border: 2px solid $light-gray;

  &:deep(h1) {
    font-size: 1.25em;
  }

  &:deep(p) {
    display: block;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  &:deep(.button) {
    display: inline-block !important;
  }
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-gap: 1em;

  :deep(button) {
    padding: 1em 0.5em;
    background: $primary;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }

}

.dialog-leave-active,
.dialog-enter-active {
  transition: all 0.25s;
  opacity: 1;
  transform: translateY(0);
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.dialog-wrapper-leave-active,
.dialog-wrapper-enter-active {
  transition: opacity 0.25s;
  opacity: 1;
}

.dialog-wrapper-enter-from,
.dialog-wrapper-leave-to {
  opacity: 0;
}
</style>

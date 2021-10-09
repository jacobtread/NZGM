<template>
  <div class="wrapper">
    <div
      class="toast"
      v-for="(toast, index) in toasts"
      :key="index"
      :data-type="toast.type"
    >
      {{ toast.text }}
    </div>
  </div>
</template>

<script lang="ts">
import store, { Toast } from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
  watch: {
    toasts: {
      handler() {
        this.createTimeouts();
      },
      deep: true,
    },
  },
})
export default class Loader extends Vue {
  get toasts(): Toast[] {
    return store.state.toasts;
  }
  set toasts(value: Toast[]) {
    store.state.toasts = value;
  }

  createTimeouts(): void {
    for (const toast of this.toasts) {
      if (!toast.timeout) {
        toast.timeout = setTimeout(() => {
          this.toasts = this.toasts.filter((t) => t.id != toast.id);
        }, toast.duration);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  position: absolute;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 8;
}

.toast {
  color: white;
  background-color: rgba(17, 17, 17, 0.75);
  padding: 1em 2em;
  animation: toast-in 0.2s;
  border-radius: 2em;
  opacity: 1;
  margin-top: 1em;

  &[data-type="error"] {
    animation: toast-error 0.5s ease 0s 1 normal forwards;
  }
}

@keyframes toast-in {
  0% {
    transform: translateY(-15px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes toast-error {
  0% {
    transform: translateY(-15px);
    opacity: 0;
  }
  25%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  30%,
  70% {
    transform: translateY(0) translateX(-10px);
  }
  40%,
  80% {
    background-color: rgba(150, 17, 17, 0.75);
    transform: translateY(0) translateX(-25px);
    opacity: 1;
  }
  50% {
    transform: translateY(0) translateX(10px);
  }
  60% {
    background-color: rgba(150, 17, 17, 0.75);
    transform: translateY(0) translateX(25px);
    opacity: 1;
  }
}
</style>
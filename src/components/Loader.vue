<template>
  <div class="loader-wrapper" v-if="show">
    <div class="loader">
      <img
        class="loader__icon"
        src="@/assets/img/logo-white.svg"
        alt="NZGM"
        title="NZGrapherModern"
      />
      <p class="loader__message">{{ message }}</p>
      <div class="loader__ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["show"],
})
export default class Loader extends Vue {
  get message(): string {
    return store.state.loading.message;
  }
}
</script>

<style lang="scss" scoped>
.loader-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
}

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  &__icon {
    width: 100%;
    max-width: 200px;
    display: block;
    margin: 0 auto;
  }

  &__ellipsis {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #fff;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
      &:nth-child(1) {
        left: 8px;
        animation: loader-1 0.6s infinite;
      }
      &:nth-child(2) {
        left: 8px;
        animation: loader-2 0.6s infinite;
      }
      &:nth-child(3) {
        left: 32px;
        animation: loader-2 0.6s infinite;
      }
      &:nth-child(4) {
        left: 56px;
        animation: loader-3 0.6s infinite;
      }
    }
  }
  &__message {
    margin-top: 2em;
    color: white;
    font-size: 1.25em;
    font-weight: bold;
    animation: loader-text 1.5s infinite;
  }
}

@keyframes loader-text {
  50% {
    opacity: 0.7;
  }
  0%,
  100% {
    opacity: 1;
  }
}

@keyframes loader-1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes loader-2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

@keyframes loader-3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

</style>
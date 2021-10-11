<template>
  <Dialog :open="open" class="about-dialog">
    <div class="heading">
      <img
        src="@/assets/img/logo-white.svg"
        alt="NZGM"
        title="NZGrapherModern"
        width="148"
        height="90"
      />
    </div>
    <div class="content">
      <h2>What is NZGM</h2>
      <p>
        <b>NZGM</b> <span>NZGrapher Modern</span>) is a graphing tool designed
        to out perform and improve upon
        <a
          href="https://github.com/mathsnz/NZGrapher/"
          target="_blank"
          rel="noopener"
          >NZGrapher</a
        >
        using more modern technologies and taking a serverless aproach.
      </p>
      <div class="features">
        <div>
          <i class="material-icons">dns</i>
          <h3>Serverless Aproach</h3>
          <p>
            This application does not require a backend server to run so it can
            be installed and run completely offline. The only time a server is
            present in this app is for distributing the source files.
          </p>
        </div>
        <div>
          <i class="material-icons">cloud</i>
          <h3>Mordern Techologies</h3>
          <p>
            <b>NZGM</b> is using modern techologies such as
            <a href="https://v3.vuejs.org/" target="_blank" rel="noopener"
              >VueJS</a
            >
            and
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener"
              >TypeScript</a
            >
            these allow the app to be well put together and prevent errors while
            also encourages faster development times.
          </p>
        </div>
      </div>
      <p>
        This project is created and maintained by <b>Jacob Read</b> (Jacobtread)
        you can view my github here.
        <a
          class="github-button"
          href="https://github.com/jacobtread/"
          target="_blank"
          rel="noopener"
          ><img src="@/assets/img/github.svg" alt="GitHub Logo" />GitHub</a
        >
        or at
        <a href="https://github.com/jacobtread/" target="_blank" rel="noopener"
          >https://github.com/jacobtread/</a
        >
        and you can view the source code for this app at
        <a
          href="https://github.com/jacobtread/NZGM"
          target="_blank"
          rel="noopener"
          >https://github.com/jacobtread/NZGM</a
        >
      </p>

      <button class="start-button" @click="hideAbout">Start Using</button>
      <label class="checkbox">
        <span class="checkbox__mark"></span>
        <input
          class="checkbox__input"
          type="checkbox"
          name=""
          v-model="hideNext"
        />
        <span class="checkbox__text">Dont show this dialog again.</span>
      </label>
    </div>
  </Dialog>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import storage from "@/storage";

import Dialog from "@/components/Dialog.vue";

@Options({
  components: { Dialog },
})
export default class About extends Vue {
  _open = true;
  hideNext = false;

  get open(): boolean {
    const showAbout: boolean = storage.bool("show-about", true);
    if (!showAbout) {
      return false;
    }
    return this._open;
  }

  hideAbout(): void {
    storage.set("show-about", !this.hideNext);
    this._open = false;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.about-dialog {
  :deep(.dialog) {
    padding: 0;
    border: none;
    max-width: 800px;
  }
}

.heading {
  background: $primary;
  padding: 1em 0;
}

.content {
  padding: 2em;
}

.github-button {
  display: inline-block;
  color: #333333;
  text-decoration: none;
  text-align: left;

  img {
    margin-right: 0.5em;
    vertical-align: text-bottom;
    height: 1.25em;
  }
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin-top: 1em;

  h3 {
    margin-bottom: 0.25em;
  }

  i {
    font-size: 2.25em;
  }
  p {
    font-size: 0.9em;
  }
}

p {
  max-width: 650px;
  margin: 1em auto;
}

a {
  color: $primary;
}

.start-button {
  display: block;
  background: $primary;
  border: none;
  width: 100%;
  max-width: 300px;
  padding: 1em;
  margin: 1em auto;
  font-weight: bold;
  color: white;
}
</style>
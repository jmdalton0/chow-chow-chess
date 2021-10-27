<template>
  <header>
    <h1>Chow Chow Chess</h1>
    <img src="./assets/chow-chow.jpg" alt="chow chow" />
  </header>

  <nav>
    <control icon="plus" @click="state = 'colorSelect'"></control>
    <control icon="chevron-left"></control>
    <control icon="chevron-right"></control>
    <control icon="cog"></control>
  </nav>

  <main>

    <section v-show="state === 'colorSelect'">
      <color-choice color="white" @click="chooseColor"></color-choice>
      <color-choice color="black" @click="chooseColor"></color-choice>
    </section>

    <section id="board" v-show="state === 'play'">
      <board></board>
    </section>

  </main>

  <footer>
    <h6>
      <a
        href="https://github.com/jmdalton0/chow-chow-chess"
        >GitHub</a
      >
    </h6>
    <h6>Created by <a href="">Jesse Dalton</a></h6>
    <h6>
      Photo by
      <a
        href="https://unsplash.com/@alxndr_london?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Alexander London</a
      >
      on
      <a
        href="https://unsplash.com/s/photos/chow-chow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Unsplash</a
      >
    </h6>
  </footer>
</template>

<script>
import Control from "./components/Control.vue";
import Board from "./components/Board.vue";
import ColorChoice from "./components/ColorChoice.vue";

export default {
  components: { Control, Board, ColorChoice },
  name: "App",
  data() {
    return {
      state: 'colorSelect',
      prevState: 'colorSelect',
      color: '',
    };
  },
  methods: {
    chooseColor(color) {
      this.color = color;
      this.state = 'play';
    }
  }
};
</script>

<style>
:root {
  --text: #205060;
  --square-white: #b0b5bf;
  --square-black: #80858f;
  --white: #e0e5ef;
  --black: #50555f;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  color: var(--text);
  width: 45rem;
  margin: auto;
  padding: 0 1rem;
}

header {
  display: flex;
  text-align: start;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 1rem 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  border-radius: 1rem;
  overflow: hidden;
}

main {
  height: 45rem;
}

section {
  border: 0.5rem solid var(--text);
  border-radius: 1rem;
  overflow: hidden;
}

footer {
  text-align: center;
  margin: 1rem 0;
}

h1 {
  font-size: 3.8em;
  line-height: 50px;
}

h6 {
  font-size: 0.8em;
  font-weight: normal;
  margin-bottom: 0.3rem;
}

a {
  text-decoration: none;
  color: var(--text);
  transition-duration: 0.2s;
}

a:hover {
  opacity: 0.5;
}

img {
  align-self: flex-end;
  margin-left: 0.5rem;
  width: 8rem;
  border-radius: 1rem;
}

#board {
  height: 45rem;
  box-sizing: border-box;
}
</style>

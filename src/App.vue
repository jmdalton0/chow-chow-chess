<template>
  <header>
    <h1>Chow Chow Chess</h1>
    <img src="./assets/chow-chow.jpg" alt="chow chow" />
  </header>

  <nav>
    <action icon="plus" @click="state = 'colorSelect'"></action>
    <action icon="chevron-left"></action>
    <action icon="chevron-right"></action>
    <action icon="cog"></action>
  </nav>

  <main>
    <transition name="slide">
      <section v-if="state === 'colorSelect'">
        <player-choice color="w" @choice="choosePlayer"></player-choice>
        <player-choice color="b" @choice="choosePlayer"></player-choice>
      </section>
    </transition>

    <transition name="slide">
      <section id="board" v-if="state === 'play'">
        <board :player="player"></board>
      </section>
    </transition>
  </main>

  <footer>
    <h6>
      <a href="https://github.com/jmdalton0/chow-chow-chess">GitHub</a>
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
import Action from "./components/Action.vue";
import Board from "./components/Board.vue";
import PlayerChoice from "./components/PlayerChoice.vue";

export default {
  components: { Action, Board, PlayerChoice },
  name: "App",
  data() {
    return {
      state: "colorSelect",
      prevState: "colorSelect",
      player: null,
    };
  },
  methods: {
    choosePlayer(player) {
      this.player = player;
      this.state = "play";
    },
  },
};
</script>

<style>
:root {
  --text: #205060;
  --square-white: #90959f;
  --square-black: #70757f;
  --square-grey: #80858f;
  --white: #f0f5ff;
  --black: #40454f;
  --app-width: 45rem;
  --slide-distance: 55rem;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  color: var(--text);
  width: var(--app-width);
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
  position: relative;
  width: 100%;
  height: var(--app-width);
}

section {
  display: flex;
  position: absolute;
  width: 100%;
  border: 0.5rem solid var(--text);
  border-radius: 1rem;
  box-sizing: border-box;
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(var(--slide-distance));
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(calc(-1 * var(--slide-distance)));
}

#board {
  height: 45rem;
  box-sizing: border-box;
}
</style>

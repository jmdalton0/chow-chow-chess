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

    <section v-if="state === 'colorSelect'">
      <player-choice color="white" @choice="choosePlayer"></player-choice>
      <player-choice color="black" @choice="choosePlayer"></player-choice>
    </section>

    <section id="board" v-if="state === 'play'">
      <board :player="player"></board>
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
import Action from "./components/Action.vue";
import Board from "./components/Board.vue";
import PlayerChoice from "./components/PlayerChoice.vue";

export default {
  components: { Action, Board, PlayerChoice },
  name: "App",
  data() {
    return {
      state: 'colorSelect',
      prevState: 'colorSelect',
      player: null
    };
  },
  methods: {
    choosePlayer(player) {
      this.player = player;
      this.state = 'play';
    }
  }
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

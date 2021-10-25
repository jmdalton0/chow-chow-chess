<template>
  <header>
    <h1>Chow Chow Chess</h1>
    <img id="header-img" src="./assets/chow-chow.jpg" alt="chow chow" />
  </header>

  <section>
    <h2>{{ message }}</h2>
    <button
      @click="reset"
      @mouseover="resetHover = true"
      @mouseleave="resetHover = false"
    >
      <font-awesome-icon icon="play"></font-awesome-icon>
    </button>

    <button
      @click="toggleSettings"
      @mouseover="settingsHover = true"
      @mouseleave="settingsHover = false"
    >
      <font-awesome-icon icon="cog"></font-awesome-icon>
    </button>
  </section>

  <section v-if="state === 'settings'">
    <h2>Engine Time in Seconds</h2>
    <button @click="saveSettings">save</button>
  </section>

  <section v-if="state === 'colorSelect'">
    <div class="row">
      <div class="square square-b" @click="chooseColor('w')">
      </div>
      <div class="square square-w" @click="chooseColor('b')">
      </div>
    </div>
  </section>

  <section v-if="state === 'play'">
    <div class="row" v-for="i in SIZE" :key="i">
      <div
        class="square"
        :class="(squareColor(i, j), isChosen(i, j) ? 'chosen' : '')"
        v-for="j in SIZE"
        :key="j"
        @click="squareClick(i, j)"
      >
        <i :class="piece(i, j)"></i>
      </div>
    </div>
  </section>

  <footer>
    <h6><a href="">GitHub</a></h6>
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
export default {
  name: "App",
  data() {
    return {
      SIZE: 8,
      state: "colorSelect",
      prevState: "colorSelect",
      resetHover: false,
      settingsHover: false,
      playerColor: null,
      board: [],
      chosenPiece: null,
    };
  },
  methods: {
    reset() {
      this.state = "colorSelect";
    },
    chooseColor(color) {
      this.playerColor = color;
      let blanks = new Array(this.SIZE * 4).fill("ee");
      let wPawns = new Array(this.SIZE).fill("wp");
      let bPawns = new Array(this.SIZE).fill("bp");
      let wPieces = ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"];
      let bPieces = ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"];
      this.board = bPieces
        .concat(bPawns)
        .concat(blanks)
        .concat(wPawns)
        .concat(wPieces);
      if (this.playerColor === "b") {
        this.board = this.board.reverse();
      }
      this.state = "play";
    },
    toggleSettings() {
      if (this.state === "settings") {
        this.state = this.prevState;
      } else {
        this.prevState = this.state;
        this.state = "settings";
      }
    },
    saveSettings() {
      this.state = "colorSelect";
    },
    squareColor(i, j) {
      if ((i % 2) + (j % 2) === 1) {
        return "square-b";
      } else {
        return "square-w";
      }
    },
    piece(i, j) {
      let piece = this.board[(i - 1) * this.SIZE + (j - 1)];
      let pieceColor = piece.charAt(0);
      if (pieceColor === "w") {
        pieceColor = "piece-w";
      } else if (pieceColor === "b") {
        pieceColor = "piece-b";
      } else {
        pieceColor = "";
      }
      let pieceType = piece.charAt(1);
      if (pieceType === "p") {
        pieceType = "fa fa-chess-pawn fa-4x";
      } else if (pieceType === "r") {
        pieceType = "fa fa-chess-rook fa-4x";
      } else if (pieceType === "n") {
        pieceType = "fa fa-chess-knight fa-4x";
      } else if (pieceType === "b") {
        pieceType = "fa fa-chess-bishop fa-4x";
      } else if (pieceType === "q") {
        pieceType = "fa fa-chess-queen fa-4x";
      } else if (pieceType === "k") {
        pieceType = "fa fa-chess-king fa-4x";
      } else {
        pieceType = "";
      }
      return pieceType.concat(" ", pieceColor);
    },
    squareClick(i, j) {
      if (this.chosenPiece === null) {
        this.chosenPiece = (i - 1) * this.SIZE + (j - 1);
      } else {
        this.chosenPiece = null;
      }
    },
    isChosen(i, j) {
      return this.chosenPiece === (i - 1) * this.SIZE + (j - 1);
    },
  },
  computed: {
    message() {
      if (this.resetHover === true) {
        return "Restart";
      } else if (this.settingsHover === true) {
        return "Settings";
      } else {
        return "";
      }
    },
  },
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
}

h1 {
  font-size: 4em;
  line-height: 50px;
}

h6 {
  font-size: 0.9em;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

a:hover,
button:hover,
.square:hover {
  opacity: 0.5;
}

a {
  text-decoration: none;
  color: var(--text);
}

button {
  margin-left: 1rem;
  color: var(--text);
  text-decoration: none;
  background: transparent;
  border: none;
}

button:hover {
  opacity: 0.5;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: start;
  margin: 1rem 0;
}

footer {
  text-align: center;
  margin: 3rem 0;
}

section {
  border: 1rem solid var(--text);
  border-radius: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5em;
  height: 5.5em;
}

.square-w {
  background: var(--square-white);
}

.square-b {
  background: var(--square-black);
}

.piece-w {
  color: var(--white);
}

.piece-b {
  color: var(--black);
}

.chosen {
  opacity: 0.5;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
}

#header-img {
  align-self: flex-end;
  width: 8rem;
  border-radius: 1rem;
}

#controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin: 0 0 1rem 0;
  padding: 0 1rem;
}
</style>

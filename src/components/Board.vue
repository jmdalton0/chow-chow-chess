<template>
  <div class="board">
    <div v-for="i in 8" :key="i" class="row">
      <button
        v-for="j in 8"
        :key="j"
        class="square"
        :class="squareColor(i, j)"
        @click="handleSquareClick(i, j)"
      >
        <piece
          :piece="getPiece(i, j)"
        ></piece>
      </button>
    </div>
  </div>
</template>

<script>
import Piece from "./Piece.vue";
import BoardController from "/src/controllers/BoardController.js";

export default {
  components: { Piece },
  name: "Board",
  data() {
    return {
      board: [],
      chosen: null,
    };
  },
  props: {
    player: {
      type: String,
      required: true,
      validate: function (v) {
        return v === "black" || v === "white";
      },
    },
  },
  methods: {
    squareColor(i, j) {
      let classList = "";
      if (this.chosen === this.index(i, j)) {
        classList = "chosen";
      }
      if ((i % 2) + (j % 2) === 1) {
        return classList.concat(" square-b");
      } else {
        return classList.concat(" square-w");
      }
    },
    index(i, j) {
      return (i - 1) * 8 + (j - 1);
    },
    getPiece(i, j) {
      return this.board[this.index(i, j)];
    },
    handleSquareClick(i, j) {
      if (this.chosen) {
        this.board[this.index(i, j)] = this.board[this.chosen];
        this.board[this.chosen] = 'ee';
        this.chosen = null;
      } else {
        this.chosen = this.index(i, j);
      }
    },
  },
  created() {
    this.board = BoardController.generateBoard(this.player);
  },
};
</script>

<style scoped>
.board {
  height: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 12.5%;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5%;
  border: none;
  transition-duration: 0.2s;
}

.square:hover {
  background: var(--square-grey);
}

.square:active {
  opacity: 0.8;
}

.square-w {
  background: var(--square-white);
}

.square-b {
  background: var(--square-black);
}

.chosen {
  background: var(--square-grey);
}
</style>

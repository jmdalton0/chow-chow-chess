<template>
  <div class="board">
    <div v-for="(row, i) in board" :key="row" class="row">
      <div v-for="(col, j) in row" :key="col" class="col" :class="color(i, j)">
        <div
          class="square"
          :class="{ selected: isSelected(i, j), illegal: isIllegal(i, j) }"
          @click="selectSquare(i, j)"
        >
          <piece :color="board[i][j].color" :type="board[i][j].type"></piece>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import BoardController from "/src/controllers/BoardController.js";
import Piece from "./Piece.vue";

export default {
  components: { Piece },
  name: "Board",
  data() {
    return {
      board: [],
      state: "select",
      selected: [],
      illegal: []
    };
  },
  props: {
    player: {
      type: String,
      required: true,
      validate: function (v) {
        return v === "w" || v === "b";
      },
    },
  },
  methods: {
    color(i, j) {
      if (i % 2 ^ j % 2) {
        return "col-b";
      } else {
        return "col-w";
      }
    },
    isSelected(i, j) {
      return this.selected[0] === i && this.selected[1] === j;
    },
    isIllegal(i, j) {
      return this.illegal[0] === i && this.illegal[1] === j;
    },
    selectSquare(i, j) {
      if (this.state === "select") {
        this.select(i, j);
      } else {
        this.move(i, j);
      }
    },
    select(i, j) {
      if (this.board[i][j].color === this.player) {
        this.selected = [i, j];
        this.state = "move";
      }
    },
    move(i, j) {
      if (this.board[i][j].color === this.player) {
        this.selected = [i, j];
      } else {
        let vector = BoardController.validate(this.board, this.selected, [i,j]);
        if (vector === false) {
          this.illegal = [i, j];
        } else {
          this.movePiece(i, j, vector);
        }
      }
    },
    movePiece(i, j, vector) {
      let u = this.selected[0];
      let v = this.selected[1];
      this.board[u][v].move = vector;
      this.board[i][j] = this.board[u][v];
      this.board[u][v] = { color: "e", type: "e" };
      this.selected = [];
      this.state = "select";
    },
  },
  created() {
    this.board = BoardController.generateBoard(this.player);
  },
};
</script>

<style scoped>
.board {
  width: 100%;
  height: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 12.5%;
}

.col {
  width: 12.5%;
  border: none;
}

.col-w {
  background: var(--square-white);
}

.col-b {
  background: var(--square-black);
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.square:hover {
  background: var(--square-grey);
}

.square:active {
  opacity: 0.8;
}

.selected {
  background: var(--square-grey);
}

.illegal {
  animation-name: blink;
  animation-duration: 0.08s;
  animation-iteration-count: 4;
  animation-direction: alternate;
}

@keyframes blink {
  from {
    background: var(--square-grey);
  }
  to {
    background: #F0736B;
  }
}
</style>

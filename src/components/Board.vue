<template>
  <div class="board">
    <div v-for="i in 8" :key="i" class="row">
      <div v-for="j in 8" :key="j">
        <div class="square" :class="squareColor(row, square)">
          <p>{{ square }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [],
      chosenPiece: null,
    };
  },
  methods: {
    squareColor(i, j) {
      if ((i % 2) + (j % 2) === 1) {
        return "square-b";
      } else {
        return "square-w";
      }
    },
    /*
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
	*/
  },
};
</script>

<style>
.board {
  height: 100%;
}

.row {
  display: flex;
  flex-direction: row;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5%;
  height: 12.5%;
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
</style>

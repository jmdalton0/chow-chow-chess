<template>
  <font-awesome-icon
    :class="color"
    :icon="pieceIcon"
    size="4x"
  ></font-awesome-icon>
</template>

<script>
export default {
  name: "Piece",
  props: {
    color: {
      type: String,
      required: true,
      validate: function (v) {
        return v === "w" || v === "b" || v === "e";
      },
    },
    piece: {
      type: String,
      required: true,
      validate: function (v) {
        return (
          v === "p" ||
          v === "r" ||
          v === "n" ||
          v === "b" ||
          v === "q" ||
          v === "k" ||
          v === "e"
        );
      },
    },
  },
  computed: {
    pieceIcon() {
      if (this.piece === "p") {
        return "chess-pawn";
      } else if (this.piece === "r") {
        return "chess-rook";
      } else if (this.piece === "n") {
        return "chess-knight";
      } else if (this.piece === "b") {
        return "chess-bishop";
      } else if (this.piece === "q") {
        return "chess-queen";
      } else if (this.piece === "k") {
        return "chess-king";
      } else {
        return "exclamation";
      }
    },
  },
};
</script>

<style>
.w {
  color: var(--white);
}

.b {
  color: var(--black);
}

.e {
  display: none;
}
</style>
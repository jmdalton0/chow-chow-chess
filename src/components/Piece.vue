<template>
  <font-awesome-icon
    :class="color"
    :icon="icon"
    size="4x"
  ></font-awesome-icon>
</template>

<script>
export default {
  name: "Piece",
  props: {
    piece: {
      type: String,
      required: true,
    },
  },
  computed: {
    color() {
      return this.piece.charAt(0);
    },
    type() {
      return this.piece.charAt(1);
    },
    icon() {
      if (this.type === "p") {
        return "chess-pawn";
      } else if (this.type === "r") {
        return "chess-rook";
      } else if (this.type === "n") {
        return "chess-knight";
      } else if (this.type === "b") {
        return "chess-bishop";
      } else if (this.type === "q") {
        return "chess-queen";
      } else if (this.type === "k") {
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
  color: red;
}
</style>
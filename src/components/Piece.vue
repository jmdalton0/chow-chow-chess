<template>
    <div v-if="type !== 'e'">
      <font-awesome-icon
        :class="color"
        :icon="icon"
        size="4x"
      ></font-awesome-icon>
    </div>
</template>

<script>
export default {
  name: "Piece",
  props: {
    color: {
      type: String,
      required: true,
      validate: function (v) {
        return v === "w" || v === "b";
      },
    },
    type: {
      type: String,
      required: true,
    },
    vector: {
      type: String,
      required: false,
    },
  },
  computed: {
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

<style scoped>
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
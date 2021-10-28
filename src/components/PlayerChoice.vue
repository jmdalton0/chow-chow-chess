<template>
  <button :class="color" @click="choosePlayer">
    <font-awesome-icon
      :icon="['fas', 'chess-pawn']"
      size="4x"
    ></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: "ColorChoice",
  props: {
    color: {
      type: String,
      required: true,
      validator: function (v) {
        return v === "white" || v === "black";
      },
    },
  },
  methods: {
    choosePlayer() {
      this.$emit("choice", this.color);
    },
  },
};
</script>

<style scoped>
button {
  width: 50%;
  padding: 2rem 0;
  border: none;
  transition-duration: 0.2s;
}

button:hover {
  background: var(--square-grey);
}

button:active {
  opacity: 0.8;
}

.white {
  color: var(--white);
  background: var(--square-black);
}

.black {
  color: var(--black);
  background: var(--square-white);
}
</style>
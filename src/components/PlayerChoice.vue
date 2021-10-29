<template>
  <div :class="color" @click="choosePlayer">
    <font-awesome-icon
      :icon="['fas', 'chess-pawn']"
      size="4x"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "ColorChoice",
  props: {
    color: {
      type: String,
      required: true,
      validator: function (v) {
        return v === "w" || v === "b";
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
div {
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 2rem 0;
  border: none;
  transition-duration: 0.2s;
}

div:hover {
  background: var(--square-grey);
}

div:active {
  opacity: 0.8;
}

.w {
  color: var(--white);
  background: var(--square-black);
}

.b {
  color: var(--black);
  background: var(--square-white);
}
</style>
<template>
  <button :class="color" @click="emit">
    <font-awesome-icon
      :icon="['fas', 'chess-pawn']"
      size="4x"
    ></font-awesome-icon>
  </button>
</template>

<script>
export default {
  methods: {
    emit() {
      this.$emit('click', this.color);
    }
  },
  props: ['color']
};
</script>

<style>
button {
  width: 50%;
  padding: 2rem 0;
  border: none;
  transition-duration: 0.2s;
}

button:hover {
  opacity: 0.5;
}

button:active {
  opacity: 0.7;
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
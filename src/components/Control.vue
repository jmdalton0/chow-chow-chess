<template>
  <button @click="handle">
    <font-awesome-icon :icon="['fas', icon]" size="2x"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  props: ["icon"],
  methods: {
    handle() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button {
  width: 25%;
  padding: 1rem 0;
  color: var(--white);
  background: var(--black);
  border: none;
  transition-duration: 0.2s;
}

button:hover {
  opacity: 0.5;
}

button:active {
  opacity: 0.7;
}
</style>

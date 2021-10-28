<template>
  <button @click="handle">
    <font-awesome-icon :icon="['fas', icon]" size="2x"></font-awesome-icon>
  </button>
</template>

<script>
export default {
  name: "Action",
  methods: {
    handle() {
      this.$emit("click");
    },
  },
  props: ["icon"],
};
</script>

<style scoped>
button {
  width: 25%;
  padding: 1rem 0;
  color: var(--white);
  background: var(--text);
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

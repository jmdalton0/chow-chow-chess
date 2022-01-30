<template>
	<button @click="$emit('update:modelValue', true)" :class="type">
		<font-awesome-icon :icon="['fas', icon]" size="3x"></font-awesome-icon>
	</button>
</template>

<script>
export default {
	name: 'Option',
	props: {
		modelValue: {
			type: Boolean,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
		type: {
			type: String,
		},
	},
};
</script>

<style scoped>
button {
	width: 100%;
	padding: 1rem;
	color: var(--white);
	background: var(--text);
	border: none;
	transition-duration: 0.2s;
}

button:hover {
	background-color: var(--text-hover);
}

button:active {
	background-color: var(--text-active);
}

.white {
	color: var(--white);
	background: var(--square-black);
}

.black {
	color: var(--black);
	background: var(--square-white);
}

.white:hover, .black:hover {
	background: var(--square-grey);
	opacity: 1;
}

.white:active, .black:active {
	opacity: 0.9;
}

</style>


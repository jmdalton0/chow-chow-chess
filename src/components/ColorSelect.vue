<template>
	<Option v-model="white" icon="chess-pawn" type="white"/>
	<Option v-model="black" icon="chess-pawn" type="black"/>
</template>

<script>
import Option from "./Option.vue";

export default {
	name: "ColorSelect",
	components: { Option },
	data() {
		return {
			white: false,
			black: false,
		}
	},
	props: {
		modelValue: {
			type: String,
			required: true,
		},
	},
	watch: {
		white() {
			this.$emit('update:modelValue', 'w');
		},
		black() {
			this.$emit('update:modelValue', 'b');
		},
	}
};
</script>


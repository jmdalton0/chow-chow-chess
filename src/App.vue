<template>
	<header>
		<h1>Chow Chow Chess</h1>
		<img src="./assets/chow-chow.jpg" alt="chow chow" />
	</header>

	<nav>
		<transition name="slide">
			<section v-if="promote === false">
				<Option v-model="start" icon="plus"/>
				<Option v-model="back" icon="chevron-left"/>
				<Option v-model="next" icon="chevron-right"/>
				<Option v-model="settings" icon="cog"/>
			</section>

			<section v-else>
				<Option v-model="queen" icon="chess-queen"/>
				<Option v-model="rook" icon="chess-rook"/>
				<Option v-model="bishop" icon="chess-bishop"/>
				<Option v-model="knight" icon="chess-knight"/>
			</section>
		</transition>
	</nav>

	<main>
		<transition name="slide">
			<section v-if="state === 'start'" id="color-select">
				<ColorSelect
					v-model="color"
				></ColorSelect>
			</section>

			<section v-else-if="state === 'play'" id="board">
				<Board
					:color="color"
					:promotion="promotion"
					@promote="promote = true"
				></Board>
			</section>
			
			<section v-else id="settings">
				<Settings></Settings>
			</section>
		</transition>
	</main>

	<footer>
		<h6><a href="https://github.com/jmdalton0/chow-chow-chess">GitHub</a></h6>
		<h6>Created by <a href="https://jmd0.xyz">Jesse Dalton</a></h6>
		<h6>Photo by
			<a href="https://unsplash.com/@alxndr_london?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
				Alexander London
			</a>
			on
			<a href="https://unsplash.com/s/photos/chow-chow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
				Unsplash
			</a>
		</h6>
	</footer>
</template>

<script>
import Option from './components/Option.vue';
import ColorSelect from './components/ColorSelect.vue';
import Board from './components/Board.vue';
import Settings from './components/Settings.vue';

export default {
	name: 'App',
	components: { Option, ColorSelect, Board, Settings },
	data() {
		return {
			state: 'start',
			color: '',
			promotion: '',
			promote: false,
			start: false,
			back: false,
			next: false,
			settings: false,
			queen: false,
			rook: false,
			bishop: false,
			knight: false,
		}
	},
	watch: {
		start() {
			this.color = '';
			this.state = 'start';
			this.start = false;
		},
		color() {
			this.state = 'play';
		},
		settings() {
			this.state = 'settings';
			this.settings = false;
		},
		queen() {
			this.promotion = 'q';
			this.queen = false;
			this.promote = false;
		},
		rook() {
			this.promotion = 'r';
			this.rook = false;
			this.promote = false;
		},
		bishop() {
			this.promotion = 'b';
			this.bishop = false;
			this.promote = false;
		},
		knight() {
			this.promotion = 'n';
			this.knight = false;
			this.promote = false;
		},
	},
};
</script>

<style>

:root {
	--app-dim: 50rem;
	--text: #205060;
	--text-hover: #407080;
	--text-active: #306070;
	--white: #f0f5ff;
	--black: #40454f;
	--square-white: #90959f;
	--square-black: #70757f;
	--square-grey: #80858f;
}

* {
	margin: 0;
	padding: 0;
}

body {
	font-family: Helvetica, sans-serif;
	font-size: 14px;
	color: var(--text);
	display: flex;
	justify-content: center;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin: 1rem 0;
}

nav {
	position: relative;
	height: 6rem;
}

main {
	position: relative;
	height: 52rem;
}

section {
	display: flex;
	position: absolute;
	width: 100%;
	margin: 1rem 0;
	background-color: var(--text);
	border: 0.5rem solid var(--text);
	border-radius: 1rem;
	box-sizing: border-box;
	overflow: hidden;
}

footer {
	text-align: center;
	margin: 2rem 0;
}

h1 {
	font-size: 4em;
}

h6 {
	font-size: 0.9em;
	font-weight: normal;
	line-height: 1.5em;
}

a {
  text-decoration: none;
  color: var(--text);
  transition-duration: 0.1s;
}

a:hover {
  opacity: 0.5;
}

img {
  width: 8rem;
  border-radius: 1rem;
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}

.slide-enter-from {
	transform: translateX(120%);
	opacity: 0;
}

.slide-leave-to {
	transform: translateX(-120%);
	opacity: 0;
}

#app {
	width: var(--app-dim);
}

</style>


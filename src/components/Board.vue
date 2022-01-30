<template>
	<div class="board">
		<div v-for="(row, i) in board" :key="row" class="row">
			<div v-for="(col, j) in row" :key="col" class="col" :class="getColor(i, j)">
				<div
					class="square"
					:class="{ selected: isSelected(i, j), illegal: isIllegal(i, j) }"
					@click="selectSquare(i, j)">
					<piece :color="board[i][j].color" :type="board[i][j].type"></piece>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped>
import Piece from './Piece.vue';
import { generateBoard, validateMove } from '../util/board.js';

export default {
	components: { Piece },
	name: 'Board',
	data() {
		return {
			board: [],
			state: "select",
			selected: [],
			illegal: [],
			promInd: [],
		};
	},
	props: {
		color: {
			type: String,
			required: true,
			validate: function (v) {
				return v === "white" || v === "black";
			},
		},
		promotion: {
			type: String,
			validate: function(v) {
				return v === 'q' || v === 'r' || v === 'b' || v === 'n';
			}
		},
	},
	watch: {
		promotion(v) {
			this.board[this.promInd[0]][this.promInd[1]].type = v;
			this.state = 'select';
		}
	},
	methods: {
		getColor(i, j) {
			if (i % 2 ^ j % 2) {
				return "col-b";
			} else {
				return "col-w";
			}
		},
		isSelected(i, j) {
			return this.selected[0] === i && this.selected[1] === j;
		},
		isIllegal(i, j) {
			return this.illegal[0] === i && this.illegal[1] === j;
		},
		selectSquare(i, j) {
			this.illegal = [];
			if (this.state === "select") {
				this.select(i, j);
			} else {
				this.move(i, j);
			}
		},
		select(i, j) {
			if (this.board[i][j].color === this.color) {
				this.selected = [i, j];
				this.state = 'move';
			}
		},
		move(i, j) {
			if (this.board[i][j].color === this.color) {
				this.selected = [i, j];
			} else {
				let vector = validateMove(this.board, this.selected, [i, j]);
				if (vector === false) {
					this.illegal = [i, j];
					this.selected = [];
					this.state = 'select';
				} else if (vector === 'promote') {
					this.$emit('promote');
					this.movePiece(i, j, vector);
					this.state = 'promoting';
					this.promInd = [i, j];
				} else {
					this.movePiece(i, j, vector);
				}
			}
		},
		movePiece(i, j, vector) {
			let u = this.selected[0];
			let v = this.selected[1];
			this.board[u][v].move = vector;
			this.board[i][j] = this.board[u][v];
			this.board[u][v] = { color: "e", type: "e" };
			this.selected = [];
			this.state = "select";
		},
	},
	created() {
		this.board = generateBoard(this.color);
	},
};
</script>

<style scoped>
.board {
	width: 100%;
	height: var(--app-dim);
}

.row {
	display: flex;
	height: 12.5%;
}

.col {
	width: 12.5%;
}

.col-w {
	background: var(--square-white);
}

.col-b {
	background: var(--square-black);
}

.square {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.square:hover {
	background: var(--square-grey);
}

.square:active {
	opacity: 0.8;
}

.selected {
	background: var(--square-grey);
}

.illegal {
	animation-name: blink;
	animation-duration: 0.08s;
	animation-iteration-count: 4;
	animation-direction: alternate;
}

@keyframes blink {
	from {
		background: var(--square-grey);
	}
	to {
		background: #F0736B;
	}
}
</style>

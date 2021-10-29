export default class BoardController {
	static generateBoard(player) {
		let board = [];
		let pieces = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
		board.push([]);
		for (const piece of pieces) {
			board[0].push({ color: 'b', type: piece });
		}
		board.push([])
		for (let i = 0; i < 8; i++) {
			board[1].push({ color: 'b', type: 'p' });
		}
		for (let i = 0; i < 4; i++) {
			board.push([]);
			for (let j = 0; j < 8; j++) {
				board[i + 2].push({ color: 'e', type: 'e' });
			}
		}
		board.push([])
		for (let i = 0; i < 8; i++) {
			board[6].push({ color: 'w', type: 'p' });
		}
		board.push([])
		for (const piece of pieces) {
			board[7].push({ color: 'w', type: piece });
		}
		if (player === 'b') {
			board = board.reverse();
		}
		return board;
	}

	static validate(board, from, to) {
		console.log(board, from, to);
		return false;
	}
}
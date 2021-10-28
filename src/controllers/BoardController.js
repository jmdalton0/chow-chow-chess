export default class BoardController {
	static generateBoard(player) {
		let empty = new Array(8).fill('ee');
		let wPawns = new Array(8).fill('wp');
		let bPawns = new Array(8).fill('bp');
		let wPieces = ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'];
		let bPieces = ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'];
		let board = wPieces
			.concat(wPawns)
			.concat(empty)
			.concat(empty)
			.concat(empty)
			.concat(empty)
			.concat(bPawns)
			.concat(bPieces);
		if (player === 'white') {
			board = board.reverse();
		}
		return board;
	}
}
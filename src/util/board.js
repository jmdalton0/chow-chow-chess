function generateBoard(player) {
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

function getColor(board, pos) {
	return board[pos[0]][pos[1]].color;
}

function getPiece(board, pos) {
	return board[pos[0]][pos[1]].type;
}

function isLegalHorizMove(board, from, to) {
	if (from[0] !== to[0]) {
		return false;
	}
	let start = Math.min(from[1], to[1]);
	let end = Math.max(from[1], to[1]);
	for (let i = start + 1; i < end; i++) {
		if (getPiece(board, [from[0], i]) !== 'e') {
			return false;
		}
	}
	return true;
}

function isLegalVertMove(board, from, to) {
	if (from[1] !== to[1]) {
		return false;
	}
	let start = Math.min(from[0], to[0]);
	let end = Math.max(from[0], to[0]);
	for (let i = start + 1; i < end; i++) {
		if (getPiece(board, [i, from[1]]) !== 'e') {
			return false;
		}
	}
	return true;
}

function isLegalDiagMove(board, from, to) {
	let startY = from[0];
	let startX = from[1];
	let endY = to[0];
	let endX = to[1];
	if (Math.abs(startY - endY) !== Math.abs(startX - endX)) {
		return false;
	}

	let yDir = 1;
	let xDir = 1;
	console.log('start', startY, startX);
	console.log('end', endY, endX);
	if (startY > endY) {
		yDir = -1;
	}
	if (startX > endX) {
		xDir = -1;
	}
	console.log('dirs', yDir, xDir);
	for (let i = 1; i < Math.abs(endY - startY); i++) {
		console.log('i=', i);
		if (getPiece(board, [startY + (i * yDir), startX + (i * xDir)]) !== 'e') {
			return false;
		}
	}
	return true;
}

function isLegalPawnMove(board, from, to) {
	let isLegal = false;
	if (getColor(board, to) === "e") {
		if ((from[0] === 6 && isLegalVertMove(board, from, to) && from[0] - to[0] === 2) ||
			(isLegalVertMove(board, from, to) && from[0] - to[0] === 1)) {
			isLegal = true;
		}
	} else {
		if (from[0] - to[0] === 1 && Math.abs(from[1] - to[1]) === 1) {
			isLegal = true;
		}
	}
	if (isLegal && to[0] === 0) {
		return "promotion";
	}
	return isLegal;
}

function isLegalRookMove(board, from, to) {
	return isLegalHorizMove(board, from, to) || isLegalVertMove(board, from, to);
}

function isLegalKnightMove(from, to) {
	return (Math.abs(from[0] - to[0]) === 2 &&
		Math.abs(from[1] - to[1]) === 1) ||
		(Math.abs(from[0] - to[0]) === 1 &&
			Math.abs(from[1] - to[1]) === 2);
}

function isLegalBishopMove(board, from, to) {
	return isLegalDiagMove(board, from, to);
}

function isLegalQueenMove(board, from, to) {
	return isLegalRookMove(board, from, to) || isLegalBishopMove(board, from, to);
}

function isLegalKingMove(from, to) {
	if (from[0] === to[0] && Math.abs(from[1] - to[1]) === 2) {
		return false;
	}
	return Math.abs(from[0] - to[0]) < 2 && Math.abs(from[1] - to[1]) < 2;
}

function isLegalPieceMove(board, from, to) {
	let piece = getPiece(board, from).charAt(0);
	if (piece === 'p') {
		return isLegalPawnMove(board, from, to);
	} else if (piece === 'r') {
		return isLegalRookMove(board, from, to);
	} else if (piece === 'n') {
		return isLegalKnightMove(from, to);
	} else if (piece === 'b') {
		return isLegalBishopMove(board, from, to);
	} else if (piece === 'q') {
		return isLegalQueenMove(board, from, to);
	} else if (piece === 'k') {
		return isLegalKingMove(from, to);
	} else {
		return false;
	}
}

function validateMove(board, from, to) {
	return isLegalPieceMove(board, from, to);
}

export { generateBoard, validateMove };

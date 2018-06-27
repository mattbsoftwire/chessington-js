import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getMovesToSquares(board, [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
            [1, 1],
            [-1, -1],
            [-1, 1],
            [1, -1]
        ])
    }
}

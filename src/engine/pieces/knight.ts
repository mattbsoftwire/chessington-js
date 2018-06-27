import Piece from './piece';
import Board from "../../../dist/engine/board";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        return this.getMovesToSquares(board, [
            [2,1],
            [1,2],
            [-2,1],
            [1,-2],
            [-2, -1],
            [-1, -2],
            [2, -1],
            [-1, 2]
        ])
    }
}

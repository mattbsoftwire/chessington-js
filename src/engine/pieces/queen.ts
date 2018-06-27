import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return this.getMovesInDirections(board,[[0, 1], [0, -1], [1, 0], [-1, 0],[1, 1], [1, -1], [-1, 1], [-1, -1]])
    }
}

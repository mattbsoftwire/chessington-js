import Piece from './piece';
import Board from '../board';
import Square from '../square';
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board: Board): Square[] {
        return this.getMovesInDirections(board,[[0, 1], [0, -1], [1, 0], [-1, 0]])
    }
}

import Piece from './piece';
import Board from '../board';
import Square from '../square';
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board: Board): Square[] {
        return this.getMovesInDirections(board,[[1, 1], [1, -1], [-1, 1], [-1, -1]])
    }
}

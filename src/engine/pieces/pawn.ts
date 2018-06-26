import Piece from './piece';
import Square from '../square';
import Board from "../board";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        if(this.player === Player.WHITE){
            return [Square.translate(currentSquare, 1, 0)]
        } else {
            return [Square.translate(currentSquare, -1, 0)]
        }
    }
}

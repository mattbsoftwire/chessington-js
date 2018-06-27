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
            const moves = [currentSquare.translate(1, 0)]
            if(currentSquare.row === 1){
                moves.push(currentSquare.translate(2, 0))
            }
            return moves
        } else {
            const moves = [currentSquare.translate(-1, 0)]
            if(currentSquare.row === 6){
                moves.push(currentSquare.translate(-2, 0))
            }
            return moves
        }
    }
}

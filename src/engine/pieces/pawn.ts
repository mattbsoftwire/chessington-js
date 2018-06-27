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
            const moves = [Square.translate(currentSquare, 1, 0)]
            if(currentSquare.row === 1){
                moves.push(Square.translate(currentSquare, 2, 0))
            }
            return moves
        } else {
            const moves = [Square.translate(currentSquare, -1, 0)]
            if(currentSquare.row === 6){
                moves.push(Square.translate(currentSquare, -2, 0))
            }
            return moves
        }
    }
}

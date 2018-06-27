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
        const moves: number[][] = [];
        if(this.player === Player.WHITE){
            moves.push([1,0])
            if(currentSquare.row === 1){
                moves.push([2,0])
            }
        } else {
            moves.push([-1, 0])
            if(currentSquare.row === 6){
                moves.push([-2, 0])
            }
        }
        return this.getMovesToSquares(board, moves, false, false)
    }
}

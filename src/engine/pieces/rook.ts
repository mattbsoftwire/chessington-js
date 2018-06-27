import Piece from './piece';
import Board from '../board';
import Square from '../square';
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        const moves: Square[] = [];
        for(let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if(i != currentSquare.col) {
                moves.push(Square.at(currentSquare.row, i));
            }
            if(i != currentSquare.row) {
                moves.push(Square.at(i, currentSquare.col));
            }
        }
        return moves;
    }
}

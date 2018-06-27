import Square from "../square";
import GameSettings from "../gameSettings";
import Board from '../board';

export default class Piece {

    readonly player;

    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board: Board, newSquare: Square): void {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    getMovesInDirections(board: Board, directions: number[][]): Square[] {
        const currentSquare: Square = board.findPiece(this)
        const moves: Square[] = []
        for (let i = 1; i < GameSettings.BOARD_SIZE; i++) {
            for (let direction of directions) {
                const translation: number[] = direction.map(x => x * i)
                const move = currentSquare.translate(translation)
                if (move.isValid()) {
                    moves.push(move)
                }
            }
        }
        return moves
    }

    getMovesToSquares(board: Board, relativePositions: number[][], allowTaking: boolean = true, allowJumping: boolean = true): Square[] {
        const currentSquare: Square = board.findPiece(this)
        const moves: Square[] = []
        for (let position of relativePositions) {
            const move = currentSquare.translate(position)
            if (move.isValid() && (allowTaking || !board.getPiece(move)) && (allowJumping || !this.isJumping(board, move))) {
                moves.push(move)
            }
        }
        return moves
    }

    private isJumping(board: Board, position: Square): boolean {
        const currentSquare: Square = board.findPiece(this)
        for (let square of currentSquare.getSquaresBetween(position)) {
            if (board.getPiece(square)) {
                return true
            }
        }
        return false
    }


}

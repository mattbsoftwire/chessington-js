import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import Piece from "./pieces/piece";

type BoardType = PieceType[][];
type PieceType = (Piece|undefined)
export default class Board {

    currentPlayer: string;
    private readonly board: BoardType;

    constructor(player: string = Player.WHITE) {
        this.currentPlayer = player;
        this.board = this.createBoard();
    }

    createBoard(): BoardType {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square: Square, piece: PieceType): void {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square: Square): PieceType {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind: PieceType): Square {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare: Square, toSquare: Square): void {
        const movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
}

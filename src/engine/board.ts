import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import Piece from "./pieces/piece";

type BoardType = Piece[][];

export default class Board {

    currentPlayer: Player;
    board: BoardType;

    constructor() {
        this.currentPlayer = Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard(): BoardType {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece): void {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square): Piece {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind): Square {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare): void {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
}

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Piece from './piece';
import Square from '../square';
import GameSettings from "../gameSettings";
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(player) {
        return _super.call(this, player) || this;
    }
    Rook.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        var moves = [];
        for (var i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i != currentSquare.col) {
                moves.push(Square.at(currentSquare.row, i));
            }
            if (i != currentSquare.row) {
                moves.push(Square.at(i, currentSquare.col));
            }
        }
        return moves;
    };
    return Rook;
}(Piece));
export default Rook;
//# sourceMappingURL=rook.js.map
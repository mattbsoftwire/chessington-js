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
import Player from "../player";
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(player) {
        return _super.call(this, player) || this;
    }
    Pawn.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        if (this.player === Player.WHITE) {
            var moves = [Square.translate(currentSquare, 1, 0)];
            if (currentSquare.row === 1) {
                moves.push(Square.translate(currentSquare, 2, 0));
            }
            return moves;
        }
        else {
            var moves = [Square.translate(currentSquare, -1, 0)];
            if (currentSquare.row === 6) {
                moves.push(Square.translate(currentSquare, -2, 0));
            }
            return moves;
        }
    };
    return Pawn;
}(Piece));
export default Pawn;
//# sourceMappingURL=pawn.js.map
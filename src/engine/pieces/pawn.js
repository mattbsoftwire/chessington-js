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
import Player from "../player";
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(player) {
        return _super.call(this, player) || this;
    }
    Pawn.prototype.getAvailableMoves = function (board) {
        var currentSquare = board.findPiece(this);
        var moves = [];
        if (this.player === Player.WHITE) {
            moves.push([1, 0]);
            if (currentSquare.row === 1) {
                moves.push([2, 0]);
            }
        }
        else {
            moves.push([-1, 0]);
            if (currentSquare.row === 6) {
                moves.push([-2, 0]);
            }
        }
        return this.getMovesToSquares(board, moves, false, false);
    };
    return Pawn;
}(Piece));
export default Pawn;
//# sourceMappingURL=pawn.js.map
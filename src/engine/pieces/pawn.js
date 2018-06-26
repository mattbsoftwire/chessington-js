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
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(player) {
        return _super.call(this, player) || this;
    }
    Pawn.prototype.getAvailableMoves = function (board) {
        return [];
    };
    return Pawn;
}(Piece));
export default Pawn;
//# sourceMappingURL=pawn.js.map
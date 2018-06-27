import GameSettings from "../gameSettings";
var Piece = /** @class */ (function () {
    function Piece(player) {
        this.player = player;
    }
    Piece.prototype.getAvailableMoves = function (board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    };
    Piece.prototype.moveTo = function (board, newSquare) {
        var currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    };
    Piece.prototype.getMovesInDirections = function (board, directions) {
        var currentSquare = board.findPiece(this);
        var moves = [];
        var _loop_1 = function (i) {
            for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
                var direction = directions_1[_i];
                var translation = direction.map(function (x) { return x * i; });
                var move = currentSquare.translate(translation[0], translation[1]);
                if (move.isValid()) {
                    moves.push(move);
                }
            }
        };
        for (var i = 1; i < GameSettings.BOARD_SIZE; i++) {
            _loop_1(i);
        }
        return moves;
    };
    return Piece;
}());
export default Piece;
//# sourceMappingURL=piece.js.map
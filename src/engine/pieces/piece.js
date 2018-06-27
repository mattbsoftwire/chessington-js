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
                var move = currentSquare.translate(translation);
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
    Piece.prototype.getMovesToSquares = function (board, relativePositions, allowTaking, allowJumping) {
        if (allowTaking === void 0) { allowTaking = true; }
        if (allowJumping === void 0) { allowJumping = true; }
        var currentSquare = board.findPiece(this);
        var moves = [];
        for (var _i = 0, relativePositions_1 = relativePositions; _i < relativePositions_1.length; _i++) {
            var position = relativePositions_1[_i];
            var move = currentSquare.translate(position);
            if (move.isValid() && (allowTaking || !board.getPiece(move)) && (allowJumping || !this.isJumping(board, move))) {
                moves.push(move);
            }
        }
        return moves;
    };
    Piece.prototype.isJumping = function (board, position) {
        var currentSquare = board.findPiece(this);
        for (var _i = 0, _a = currentSquare.getSquaresBetween(position); _i < _a.length; _i++) {
            var square = _a[_i];
            if (board.getPiece(square)) {
                return true;
            }
        }
        return false;
    };
    return Piece;
}());
export default Piece;
//# sourceMappingURL=piece.js.map
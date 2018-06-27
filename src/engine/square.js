import GameSettings from "./gameSettings";
var Square = /** @class */ (function () {
    function Square(row, col) {
        this.row = row;
        this.col = col;
    }
    Square.at = function (row, col) {
        return new Square(row, col);
    };
    Square.prototype.getSquaresBetween = function (other) {
        var diffs = [other.row - this.row, other.col - this.col];
        var direction = diffs.map(function (x) {
            if (x != 0) {
                return x / Math.abs(x);
            }
            return 0;
        });
        var checkSquare = this.translate(direction);
        var res = [];
        while (!checkSquare.equals(other)) {
            res.push(checkSquare);
            checkSquare = checkSquare.translate(direction);
        }
        return res;
    };
    Square.prototype.translate = function (translation) {
        return Square.at(this.row + translation[0], this.col + translation[1]);
    };
    Square.prototype.isValid = function () {
        return this.row >= 0 && this.row < GameSettings.BOARD_SIZE && this.col >= 0 && this.col < GameSettings.BOARD_SIZE;
    };
    Square.prototype.equals = function (otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    };
    Square.prototype.toString = function () {
        return "Row " + this.row + ", Col " + this.col;
    };
    return Square;
}());
export default Square;
//# sourceMappingURL=square.js.map
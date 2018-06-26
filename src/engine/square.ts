export default class Square {

    readonly row: number;
    readonly col: number;

    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col): Square {
        return new Square(row, col);
    }

    equals(otherSquare): boolean {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString(): string {
        return `Row ${this.row}, Col ${this.col}`;
    }
}

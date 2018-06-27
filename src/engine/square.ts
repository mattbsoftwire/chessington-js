import GameSettings from "./gameSettings";

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

    getSquaresBetween(other: Square): Square[] {
        const diffs = [other.row - this.row, other.col - this.col]
        const direction = diffs.map(x => {
            if(x != 0){
                return x/Math.abs(x)
            }
            return 0
        })
        let checkSquare = this.translate(direction)
        const res: Square[] = []
        while(!checkSquare.equals(other)) {
            res.push(checkSquare)
            checkSquare = checkSquare.translate(direction)
        }
        return res
    }


    translate(translation: number[]): Square {
        return Square.at(this.row + translation[0], this.col + translation[1]);
    }

    isValid(): boolean {
        return this.row >= 0 && this.row < GameSettings.BOARD_SIZE && this.col >= 0 && this.col < GameSettings.BOARD_SIZE
    }

    equals(otherSquare): boolean {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString(): string {
        return `Row ${this.row}, Col ${this.col}`;
    }
}

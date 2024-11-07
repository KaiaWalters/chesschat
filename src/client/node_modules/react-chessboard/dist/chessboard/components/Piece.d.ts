import { Coords, Piece as Pc, Square } from "../types";
type PieceProps = {
    isPremovedPiece?: boolean;
    piece: Pc;
    square: Square;
    squares: {
        [square in Square]?: Coords;
    };
};
export declare function Piece({ isPremovedPiece, piece, square, squares, }: PieceProps): import("react/jsx-runtime").JSX.Element;
export {};

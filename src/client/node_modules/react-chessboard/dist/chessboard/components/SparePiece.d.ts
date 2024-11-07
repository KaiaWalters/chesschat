import { CustomPieceFn, Piece as Pc } from "../types";
type PieceProps = {
    piece: Pc;
    width: number;
    customPieceJSX?: CustomPieceFn;
    dndId: string;
};
export declare const SparePiece: ({ piece, width, customPieceJSX, dndId, }: PieceProps) => import("react/jsx-runtime").JSX.Element;
export {};

/// <reference types="react" />
import { ChessboardProps } from "./types";
export type ClearPremoves = {
    clearPremoves: (clearLastPieceColour?: boolean) => void;
};
export { SparePiece } from "./components/SparePiece";
export { ChessboardDnDProvider } from "./components/DnDRoot";
export declare const Chessboard: import("react").ForwardRefExoticComponent<Omit<ChessboardProps, "ref"> & import("react").RefAttributes<ClearPremoves>>;

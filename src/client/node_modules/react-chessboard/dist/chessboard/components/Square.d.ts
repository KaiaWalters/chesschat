import { ReactNode } from "react";
import { Coords, Square as Sq } from "../types";
type SquareProps = {
    children: ReactNode;
    setSquares: React.Dispatch<React.SetStateAction<{
        [square in Sq]?: Coords;
    }>>;
    square: Sq;
    squareColor: "white" | "black";
    squareHasPremove: boolean;
};
export declare function Square({ square, squareColor, setSquares, squareHasPremove, children, }: SquareProps): import("react/jsx-runtime").JSX.Element;
export {};

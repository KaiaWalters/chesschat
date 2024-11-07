import { BoardOrientation, BoardPosition, Square } from "./types";
/**
 * Retrieves the coordinates at the centre of the requested square, relative to the top left of the board (0, 0).
 */
export declare function getRelativeCoords(boardOrientation: BoardOrientation, boardWidth: number, square: Square): {
    x: number;
    y: number;
};
/**
 * Returns whether the passed position is different from the start position.
 */
export declare function isDifferentFromStart(newPosition: BoardPosition): boolean;
/**
 * Returns what pieces have been added and what pieces have been removed between board positions.
 */
export declare function getPositionDifferences(currentPosition: BoardPosition, newPosition: BoardPosition): {
    added: BoardPosition;
    removed: BoardPosition;
};
/**
 * Converts a fen string or existing position object to a position object.
 */
export declare function convertPositionToObject(position: string | BoardPosition): BoardPosition;

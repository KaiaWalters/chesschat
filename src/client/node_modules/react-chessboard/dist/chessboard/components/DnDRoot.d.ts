import { ReactNode, FC } from "react";
import { BackendFactory } from "dnd-core";
import { ChessboardDnDProviderProps } from "../types";
type ChessboardDnDRootProps = {
    customDndBackend?: BackendFactory;
    customDndBackendOptions: unknown;
    children: ReactNode;
};
export declare const ChessboardDnDProvider: FC<ChessboardDnDProviderProps>;
export declare const ChessboardDnDRoot: FC<ChessboardDnDRootProps>;
export {};

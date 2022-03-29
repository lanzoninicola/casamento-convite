import * as React from "react";

export interface HistoryContextData {
  chapter: number;
  intro: boolean;
}

export const HistoryContext = React.createContext<HistoryContextData | null>(
  null
);

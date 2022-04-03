import { RevelationModel } from "../model/revelation.model";

export type RevelationId = string;

export interface RevelationCollectionResponse {
  ok: boolean;
  payload?: RevelationModel[];
  error?: any;
}

export interface RevelationResponse {
  ok: boolean;
  payload?: RevelationModel | null;
  error?: any;
}

export interface RevelationAdditionSuccessResponse {
  ok: true;
  payload: RevelationId;
}

export interface RevelationSuccessResponse {
  ok: true;
}

export interface RevelationErrorResponse {
  ok: false;
  error: any;
}

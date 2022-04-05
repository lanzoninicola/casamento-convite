import { ErroModel } from "../model/error.model";

export interface ErrorCollectionResponse {
  ok: boolean;
  payload: ErroModel[];
}

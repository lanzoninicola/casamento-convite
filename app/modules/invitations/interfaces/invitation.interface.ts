import { InvitationModel } from "../models/invitation.model";

export type InvitationId = string;
export type MealPreference = "carne" | "vegetariano" | "vegano" | "indiferente";

export interface InvitationCollectionResponse {
  ok: boolean;
  payload?: InvitationModel[];
  error?: any;
}

export interface InvitationResponse {
  ok: boolean;
  payload?: InvitationModel | null;
  error?: any;
}

export interface InvitationAdditionSuccessResponse {
  ok: true;
  payload: InvitationId;
}

export interface InvitationSuccessResponse {
  ok: true;
}

export interface InvitationErrorResponse {
  ok: false;
  error: any;
}

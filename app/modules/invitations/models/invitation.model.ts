export interface InvitationModel {
  guestName: string;
  willAttend: boolean;
  guests: number;
  mealPreference: string;
}

export interface InvitationFormResponse {
  ok: boolean;
  payload?: any;
  error?: any;
}

export interface InvitationModelOnUpdate {
  guestName?: string;
  willAttend?: boolean;
  guests?: number;
  mealPreference?: string;
}

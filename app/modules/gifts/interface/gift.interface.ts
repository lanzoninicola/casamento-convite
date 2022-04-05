import GiftModel from "../models/gift.model";

export type GiftCashType = "pix" | "envelope" | null;

export interface GiftCollectionResponse {
  ok: boolean;
  payload: GiftModel[];
}

export interface GiftFormData {
  formGuestName: FormDataEntryValue | null;
  formGiftType: FormDataEntryValue | null;
}

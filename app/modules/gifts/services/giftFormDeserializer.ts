import { GiftCashType, GiftFormData } from "../interface/gift.interface";
import GiftModel from "../models/gift.model";

export default class GiftFormDeserializer {
  deserialize(formData: GiftFormData): GiftModel {
    const { formGuestName, formGiftType } = formData;

    const guestName = this._convertToString(formGuestName);
    const giftType = this._gifTypeToString(formGiftType);

    return {
      guestName,
      type: giftType,
    };
  }

  private _gifTypeToString(giftType: FormDataEntryValue | null): GiftCashType {
    switch (giftType) {
      case "pix":
        return "pix";
      case "envelope":
        return "envelope";
      default:
        return null;
    }
  }

  private _convertToString(formItem: FormDataEntryValue | null): string | null {
    if (formItem === null) {
      return null;
    }

    const data = String(formItem).trim();

    return data;
  }
}

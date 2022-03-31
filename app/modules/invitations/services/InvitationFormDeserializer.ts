import InvitationFormData from "../interfaces/InvitationFormData";
import { InvitationModel } from "../models/invitation.model";

export default class InvitationFormDeserializer {
  deserialize(formData: InvitationFormData): InvitationModel {
    const { formGuestName, formWillAttend, formGuests, formMealPreference } =
      formData;

    return {
      guestName: this._guestName(formGuestName),
      willAttend: this._willAttend(formWillAttend),
      guests: this._guests(formGuests),
      mealPreference: this._mealPreference(formMealPreference),
    };
  }

  private _guestName(formGuestName: FormDataEntryValue | null): string {
    if (formGuestName === null) {
      return "";
    }

    const guestName = String(formGuestName).trim();

    return guestName;
  }

  private _willAttend(formWillAttend: FormDataEntryValue | null): boolean {
    if (formWillAttend === null) {
      return false;
    }

    if (formWillAttend === "true") {
      return true;
    }

    return false;
  }

  private _guests(formGuests: FormDataEntryValue | null): number {
    if (formGuests === null) {
      return 0;
    }
    const guests = Number(formGuests);

    return guests;
  }

  private _mealPreference(
    formMealPreference: FormDataEntryValue | null
  ): string {
    if (formMealPreference === null) {
      return "";
    }
    const mealPreference = String(formMealPreference).trim();

    return mealPreference;
  }
}

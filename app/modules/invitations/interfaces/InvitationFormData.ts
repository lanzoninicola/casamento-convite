export type InvitationFormDataLocalStorageKey = "INVITATION_FORM_DATA";

export default interface InvitationFormData {
  formGuestName: FormDataEntryValue | null;
  formWillAttend: FormDataEntryValue | null;
  formGuests: FormDataEntryValue | null;
  formMealPreference: FormDataEntryValue | null;
}

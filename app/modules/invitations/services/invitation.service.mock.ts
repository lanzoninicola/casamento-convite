import { InvitationCollectionResponse } from "../interfaces/invitation.interface";
import { InvitationModel } from "../models/invitation.model";

export default class InvitationMockService {
  getAll(): Promise<InvitationCollectionResponse> {
    return new Promise((resolve) => {
      const data = MOCK_INVITATIONS;

      resolve({
        ok: true,
        payload: data,
      });
    });
  }
}

const MOCK_INVITATIONS: InvitationModel[] = [
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 1,
    mealPreference: "carne",
  },
  {
    guestName: "Pele Josue do Santos",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 0,
    mealPreference: "",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "Nicola",
    willAttend: false,
    guests: 0,
    mealPreference: "",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 0,
    mealPreference: "",
  },
  {
    guestName: "fdaf",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },

  {
    guestName: "Nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "nicola",
    willAttend: true,
    guests: 1,
    mealPreference: "carne",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "Mara",
    willAttend: true,
    guests: 2,
    mealPreference: "vegetariano",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "vegetariano",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "Nicola",
    willAttend: false,
    guests: 0,
    mealPreference: "",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 1,
    mealPreference: "vegetariano",
  },
  {
    guestName: "Nicola",
    willAttend: false,
    guests: 0,
    mealPreference: "",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
  {
    guestName: "Nicola",
    willAttend: true,
    guests: 2,
    mealPreference: "carne",
  },
];

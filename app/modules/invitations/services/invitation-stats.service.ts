import { MealPreference } from "../interfaces/invitation.interface";
import { InvitationModel } from "../models/invitation.model";

export default class InvitationStatsService {
  constructor() {}

  getTotalsInvitations(invitations: InvitationModel[]) {
    return invitations.length;
  }

  getTotalGuests(invitations: InvitationModel[]) {
    const totalGuests = invitations.reduce((acc, curr: InvitationModel) => {
      if (curr.willAttend) {
        if (curr.guests) {
          return acc + curr.guests;
        }
      }
      return acc;
    }, 0);

    return totalGuests;
  }

  getTotalByMealPreference(
    invitations: InvitationModel[],
    mealPreference: MealPreference
  ) {
    const totalMealPreference = invitations
      .filter((invitation) => invitation.willAttend)
      .reduce((acc, curr: InvitationModel) => {
        if (curr.mealPreference === mealPreference) {
          const guests = curr.guests ? curr.guests : 0;
          return acc + guests;
        }
        return acc;
      }, 0);

    return totalMealPreference;
  }

  getWillAttend(invitations: InvitationModel[]) {
    const willAttend = invitations.filter(
      (invitation) => invitation.willAttend
    );
    return willAttend;
  }

  getWillNotAttend(invitations: InvitationModel[]) {
    const willNotAttend = invitations.filter(
      (invitation) => !invitation.willAttend
    );
    return willNotAttend;
  }
}

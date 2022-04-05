import { FirestoreCRUDService } from "~/lib/firebase/firestore.interfaces";
import { InvitationCollectionResponse } from "../interfaces/invitation.interface";
import {
  InvitationModel,
  InvitationModelOnUpdate,
} from "../models/invitation.model";
import InvitationMockService from "./invitation.service.mock";

const FIRESTORE_COLLECTION_NAME = "invitations";

export default class Invitation {
  private collectionName = FIRESTORE_COLLECTION_NAME;

  constructor(private firestoreService: FirestoreCRUDService) {}

  async add(invitation: InvitationModel) {
    const response = await this.firestoreService.add(
      this.collectionName,
      invitation
    );

    return response;
  }

  async getAll(): Promise<InvitationCollectionResponse> {
    if (process.env.NODE_ENV === "development") {
      const mockService = new InvitationMockService();
      const mockResult = await mockService.getAll();
      return mockResult;
    }

    const response = await this.firestoreService.getAll(this.collectionName);

    const { ok, payload } = response;

    let invitationsData: InvitationModel[] = [];

    if (payload)
      invitationsData = payload.map((invitation) => {
        const { guestName, willAttend, guests, mealPreference } = invitation;

        return {
          guestName,
          willAttend,
          guests,
          mealPreference,
        };
      });

    return {
      ok,
      payload: invitationsData,
    };
  }

  async getById(invitationId: string) {
    const response = await this.firestoreService.getById(
      this.collectionName,
      invitationId
    );

    return response;
  }

  async update(invitationId: string, invitation: InvitationModelOnUpdate) {
    const response = await this.firestoreService.update(
      this.collectionName,
      invitationId,
      invitation
    );

    return response;
  }

  async delete(invitationId: string) {
    const response = await this.firestoreService.delete(
      this.collectionName,
      invitationId
    );

    return response;
  }

  async deleteAll() {
    const response = await this.firestoreService.deleteAll(this.collectionName);

    return response;
  }
}

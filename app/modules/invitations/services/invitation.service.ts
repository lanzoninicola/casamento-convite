import { FirestoreCRUDService } from "~/lib/firebase/firestore.interfaces";
import {
  InvitationModel,
  InvitationModelOnUpdate,
} from "../models/invitation.model";

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

  async getAll() {
    const response = await this.firestoreService.getAll(this.collectionName);

    return response;
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
}

import { FirestoreCRUDService } from "~/lib/firebase/firestore.interfaces";
import { GiftCollectionResponse } from "../interface/gift.interface";

import GiftModel from "../models/gift.model";

const FIRESTORE_COLLECTION_NAME = "gifts";

export default class GiftDatabaseService {
  private collectionName = FIRESTORE_COLLECTION_NAME;

  constructor(private firestoreService: FirestoreCRUDService) {}

  async add(gift: GiftModel) {
    const response = await this.firestoreService.add(this.collectionName, gift);

    return response;
  }

  async getAll(): Promise<GiftCollectionResponse> {
    const response = await this.firestoreService.getAll(this.collectionName);

    const { ok, payload } = response;

    let giftsData: GiftModel[] = [];

    if (payload)
      giftsData = payload.map((gift) => {
        const { guestName, type } = gift;

        return {
          guestName,
          type,
        };
      });

    return {
      ok,
      payload: giftsData,
    };
  }

  async delete(giftId: string) {
    const response = await this.firestoreService.delete(
      this.collectionName,
      giftId
    );

    return response;
  }

  async deleteAll() {
    const response = await this.firestoreService.deleteAll(this.collectionName);

    return response;
  }
}

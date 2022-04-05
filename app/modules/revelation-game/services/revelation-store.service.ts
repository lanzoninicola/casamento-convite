import { FirestoreCRUDService } from "~/lib/firebase/firestore.interfaces";
import { RevelationCollectionResponse } from "../interfaces/revelation.interface";
import { RevelationModel } from "../model/revelation.model";

const FIRESTORE_COLLECTION_NAME = "revelations";

export default class RevelationStoreService {
  private collectionName = FIRESTORE_COLLECTION_NAME;

  constructor(private firestoreService: FirestoreCRUDService) {}

  async add(revelation: RevelationModel) {
    const response = await this.firestoreService.add(
      this.collectionName,
      revelation
    );

    return response;
  }

  async getAll(): Promise<RevelationCollectionResponse> {
    const response = await this.firestoreService.getAll(this.collectionName);

    const { ok, payload } = response;

    let revelationsData: RevelationModel[] = [];

    if (payload)
      revelationsData = payload.map((revelation) => {
        const { name, babySex } = revelation;

        return {
          name,
          babySex,
        };
      });

    return {
      ok,
      payload: revelationsData,
    };
  }

  async delete(revelationId: string) {
    const response = await this.firestoreService.delete(
      this.collectionName,
      revelationId
    );

    return response;
  }

  async deleteAll() {
    const response = await this.firestoreService.deleteAll(this.collectionName);

    return response;
  }
}

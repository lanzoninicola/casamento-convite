import { FirestoreCRUDService } from "~/lib/firebase/firestore.interfaces";
import { ErrorCollectionResponse } from "../interfaces/error.interface";

import { ErroModel } from "../model/error.model";

const FIRESTORE_COLLECTION_NAME = "errors";

export default class ErrorDatabaseService {
  private collectionName = FIRESTORE_COLLECTION_NAME;

  constructor(private firestoreService: FirestoreCRUDService) {}

  async add(error: ErroModel) {
    const response = await this.firestoreService.add(
      this.collectionName,
      error
    );

    return response;
  }

  async getAll(): Promise<ErrorCollectionResponse> {
    const response = await this.firestoreService.getAll(this.collectionName);

    const { ok, payload } = response;

    let errorData: ErroModel[] = [];

    if (ok && payload)
      errorData = payload.map((error) => {
        return {
          message: error.message,
          stack: error.stack ? error.stack : null,
        };
      });

    return {
      ok,
      payload: errorData,
    };
  }

  async delete(errorId: string) {
    const response = await this.firestoreService.delete(
      this.collectionName,
      errorId
    );

    return response;
  }

  async deleteAll() {
    const response = await this.firestoreService.deleteAll(this.collectionName);

    return response;
  }
}

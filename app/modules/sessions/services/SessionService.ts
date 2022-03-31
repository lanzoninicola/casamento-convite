import {
  FirestoreCRUDService,
  FirestoreDocumentResponse,
} from "~/lib/firebase/firestore.interfaces";

const FIRESTORE_COLLECTION_NAME = "sessions";

export default class SessionService {
  private collectionName = FIRESTORE_COLLECTION_NAME;
  private mockedDocumentId = "SAFDAjkdjd8992k";

  constructor(private firestoreService: FirestoreCRUDService) {}

  async add(session: any) {
    if (process.env.NODE_ENV === "development") {
      const mockResponse = await this._mockAdd();
      return mockResponse;
    }

    const response = await this.firestoreService.add(
      this.collectionName,
      session
    );

    return response;
  }

  private _mockAdd(): Promise<FirestoreDocumentResponse> {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        payload: this.mockedDocumentId,
      });
    });
  }

  async getAll() {
    const response = await this.firestoreService.getAll(this.collectionName);

    return response;
  }

  async getById(sessionId: string) {
    if (process.env.NODE_ENV === "development") {
      const mockResponse = await this._mockGetById();
      return mockResponse;
    }

    const response = await this.firestoreService.getById(
      this.collectionName,
      sessionId
    );

    return response;
  }

  private _mockGetById(): Promise<FirestoreDocumentResponse> {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        payload: this.mockedDocumentId,
      });
    });
  }

  async update(sessionId: string, sessionData: any) {
    const response = await this.firestoreService.update(
      this.collectionName,
      sessionId,
      sessionData
    );

    return response;
  }

  async delete(sessionId: string) {
    const response = await this.firestoreService.delete(
      this.collectionName,
      sessionId
    );

    return response;
  }

  async deleteAll() {
    const response = await this.firestoreService.deleteAll(this.collectionName);

    return response;
  }
}

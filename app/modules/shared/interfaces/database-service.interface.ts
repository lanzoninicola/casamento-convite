import { FirestoreDocumentId } from "~/lib/firebase/firestore.interfaces";

export interface DatabaseRecord<T> {}

export interface DatabaseCollectionResponse {
  ok: boolean;
  payload?: FirestoreDocument[];
  error?: any;
}

export interface FirestoreDocumentResponse {
  ok: boolean;
  payload?: FirestoreDocument | null;
  error?: any;
}

export interface FirestoreAdditionSuccessResponse {
  ok: true;
  payload: FirestoreDocumentId;
}

export interface FirestoreSuccessResponse {
  ok: true;
}

export interface FirestoreErrorResponse {
  ok: false;
  error: any;
}

export interface DatabaseService {
  getAll(): Promise<DatabaseCollectionResponse>;
  getById(documentId: FirestoreDocumentId): Promise<FirestoreDocumentResponse>;
  add(data: {
    [key: string]: any;
  }): Promise<FirestoreAdditionSuccessResponse | FirestoreErrorResponse>;
  update(
    documentId: FirestoreDocumentId,
    updatedData: any
  ): Promise<FirestoreSuccessResponse | FirestoreErrorResponse>;
  delete(
    documentId: FirestoreDocumentId
  ): Promise<FirestoreSuccessResponse | FirestoreErrorResponse>;
  deleteAll(): Promise<FirestoreDocumentResponse>;
}

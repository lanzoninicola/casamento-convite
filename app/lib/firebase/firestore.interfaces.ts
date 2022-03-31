export type FirestoreDocumentId = string;
export type FirestoreDocument = {};

export interface FirestoreCollectionResponse {
  ok: boolean;
  payload?: {
    [key: FirestoreDocumentId]: FirestoreDocument;
  };
  error?: any;
}

export interface FirestoreDocumentResponse {
  ok: boolean;
  payload?: FirestoreDocument | FirestoreDocumentId | null;
  error?: any;
}

export interface FirestoreCRUDService {
  getAll(collectionName: string): Promise<FirestoreCollectionResponse>;
  getById(
    collectionName: string,
    documentId: string
  ): Promise<FirestoreDocumentResponse>;
  add(
    collectionName: string,
    data: { [key: string]: any }
  ): Promise<FirestoreDocumentResponse>;
  update(
    collectionName: string,
    documentId: string,
    updatedData: any
  ): Promise<FirestoreDocumentResponse>;
  delete(
    collectionName: string,
    documentId: string
  ): Promise<FirestoreDocumentResponse>;
  deleteAll(collectionName: string): Promise<FirestoreDocumentResponse>;
}

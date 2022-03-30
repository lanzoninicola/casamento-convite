import {
  Firestore,
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  FirestoreCollectionResponse,
  FirestoreCRUDService,
  FirestoreDocumentResponse,
} from "./firestore.interfaces";

export default class FirestoreService implements FirestoreCRUDService {
  constructor(private db: Firestore) {}

  async getAll(collectionName: string): Promise<FirestoreCollectionResponse> {
    let result = {};

    const querySnapshot = await getDocs(collection(this.db, collectionName));
    querySnapshot.forEach((doc) => {
      result = { ...result, [doc.id]: doc.data() };
    });

    return {
      ok: true,
      payload: result,
    };
  }

  async getById(
    collectionName: string,
    documentId: string
  ): Promise<FirestoreDocumentResponse> {
    const docRef = doc(this.db, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ok: true,
        payload: docSnap.data(),
      };
    } else {
      return {
        ok: false,
        payload: null,
      };
    }
  }

  async add(
    collectionName: string,
    data: { [key: string]: any }
  ): Promise<FirestoreDocumentResponse> {
    try {
      const docRef = await addDoc(collection(this.db, collectionName), data);
      return {
        ok: true,
        payload: docRef.id,
      };
    } catch (e) {
      return {
        ok: false,
        payload: null,
        error: e,
      };
    }
  }

  async delete(
    collectionName: string,
    documentId: string
  ): Promise<FirestoreDocumentResponse> {
    try {
      await deleteDoc(doc(this.db, collectionName, documentId));
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}

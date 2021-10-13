import { doc, deleteDoc, getFirestore } from "firebase/firestore";

export default async (collectionName, documentID) => {
    const db = getFirestore();
    await deleteDoc(doc(db, collectionName, documentID));
}
import { getFirestore, updateDoc, doc } from 'firebase/firestore'
const updateDocument = async (collectionName, docId, data) => {
    const db = getFirestore();
    const documentReference = doc(db, collectionName, docId);
    console.log(documentReference);
    await updateDoc(documentReference, data)
        .then(() => {
            console.log("Updated Successfully");
        }).catch((err) => {
            console.log(err);
        });
}

export default updateDocument;
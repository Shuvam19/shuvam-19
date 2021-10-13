import { addDoc, getFirestore, collection } from "firebase/firestore";

const addToFirestore = async (collectionName, projectInfo) => {
    const db = getFirestore();
    try {
        const docRef = await addDoc(
            collection(db, collectionName),
            projectInfo
        );
        console.log("Document written with ID: ", docRef.id);
    } catch (err) {
        console.error("Error adding document: ", err);
    }
}

export default addToFirestore;
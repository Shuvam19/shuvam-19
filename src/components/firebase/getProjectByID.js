import { doc, getDoc, getFirestore } from "firebase/firestore";
const getProject = async (id) => {
    const db = getFirestore()
    const docSnap = await getDoc(doc(db, "all-projects", id));
    return docSnap.data();
}

export default getProject;
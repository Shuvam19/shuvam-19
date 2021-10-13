import { collection, getDocs, getFirestore } from "firebase/firestore";
import store from "../../../store";

const getExperience = async () => {
    const db = getFirestore();
    const listOfExperience = [];
    const querySnapShots = await getDocs(collection(db, "experience"));
    querySnapShots.forEach((doc) => {
        listOfExperience.push({
            id: doc.id,
            data: doc.data(),
        });
    });
    store.commit('setExperience', listOfExperience);
}

export default getExperience;
import { collection, getDocs, getFirestore } from "firebase/firestore";
import store from "../../store";
const getProjects = async () => {
    const db = getFirestore();
    const listOfProject = [];
    const querySnapShots = await getDocs(collection(db, "favourite-projects"));
    querySnapShots.forEach((doc) => {
      listOfProject.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    store.commit('setFavouriteProjects',listOfProject);
}

export default getProjects;
import { collection, getDocs, getFirestore } from "firebase/firestore";
import store from "../../../store";

const getProjects = async () => {
  const db = getFirestore();
  const listOfProject = [];
  const querySnapShots = await getDocs(collection(db, "all-projects"));
  querySnapShots.forEach((doc) => {
    listOfProject.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  store.commit('setAllProjects', listOfProject);
}

export default getProjects;
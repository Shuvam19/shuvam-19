import { collection, getDocs, getFirestore } from "firebase/firestore";

const getProjects = async () => {
    const db = getFirestore()
    const listOfProject = [];
    const querySnapShots = await getDocs(collection(db, "all-projects"));
    querySnapShots.forEach((doc) => {
      listOfProject.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    return listOfProject;
}

export default getProjects;
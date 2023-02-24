import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

const writeToDB = async (goal) => {
  const docRef = await addDoc(collection(firestore, "goals"), goal);
  console.log(docRef.id);
};

export { writeToDB };

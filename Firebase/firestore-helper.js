import { async } from "@firebase/util";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

const writeToDB = async (goal) => {
  const docRef = await addDoc(collection(firestore, "goals"), goal);
  //   console.log(docRef.id);
};

const deleteFromDB = async (id) => {
  try {
    await deleteDoc(doc(firestore, "goals", id));
  } catch (error) {
    console.log(error);
  }
};

export { writeToDB, deleteFromDB };

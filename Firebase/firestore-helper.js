import { async } from "@firebase/util";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";
import { auth } from "./firebase-setup";

const writeToDB = async (goal) => {
  try {
    const docRef = await addDoc(collection(firestore, "goals"), {
      ...goal,
      user: auth.currentUser.uid,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteFromDB = async (id) => {
  try {
    await deleteDoc(doc(firestore, "goals", id));
  } catch (error) {
    console.log(error);
  }
};

export { writeToDB, deleteFromDB };

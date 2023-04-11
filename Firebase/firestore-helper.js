import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { ref } from "firebase/storage";
import { firestore } from "./firebase-setup";
import { auth } from "./firebase-setup";

const writeToDB = async (goal) => {
  try {
    const docRef = await addDoc(collection(firestore, "goals"), {
      ...goal,
      user: auth.currentUser.uid,
    });
    console.log();
  } catch (err) {
    console.log(err);
  }
};

const saveUserData = async (data) => {
  try {
    await setDoc(doc(firestore, "users", auth.currentUser.uid), data, {
      merge: true,
    });
  } catch (err) {
    console.log("save user location error", err);
  }
};
const deleteFromDB = async (id) => {
  try {
    await deleteDoc(doc(firestore, "goals", id));
  } catch (error) {
    console.log(error);
  }
};

const getUserLocation = async () => {
  try {
    const docSnap = await getDoc(doc(firestore, "users", auth.currentUser.uid));

    // console.log("docSnap", docSnap);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log("fetch location error", error);
  }
};

export { writeToDB, deleteFromDB, saveUserData, getUserLocation };

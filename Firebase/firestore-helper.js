import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
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

const saveUserLocation = async (location) => {
  try {
    await setDoc(doc(firestore, "users", auth.currentUser.uid), location);
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
    const snapShot = await getDoc(
      ref(firestore, "users", auth.currentUser.uid)
    );
    return snapShot.data;
  } catch (error) {
    console.log("get location error", error);
  }
};

export { writeToDB, deleteFromDB, saveUserLocation, getUserLocation };

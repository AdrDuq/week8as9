import { db } from "../firebase";
import {
collection,
addDoc,
doc,
deleteDoc,
} from "firebase/firestore";
const addNote = async ({ userId, title, description, status }) => {
try {
await addDoc(collection(db, "note"), {
user: userId,
title: title,
description: description,
createdAt: new Date().getTime(),
});
} catch (err) {}
};
const deleteNote = async (docId) => {
try {
const noteRef = doc(db, "note", docId);
await deleteDoc(noteRef);
} catch (err) {
console.log(err);
}
};
export { addNote, deleteNote };
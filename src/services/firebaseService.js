// import { firestore } from "../services/firebase";
// import {
//     collection,
//     query,
//     where,
//     getDocs,
//     doc,
//     setDoc,
//     getDoc,
// } from "firebase/firestore";

// // fechas
// const date = new Date();
// const year = date.getFullYear();
// const month = date.toLocaleString("en-EN", {
//     month: "long",
// });
// const weekday = date.toLocaleString("en-US", { weekday: "long" });
// const todayDate = `${date.getFullYear()}-${
//     date.getMonth() + 1
// }-${date.getDate()}`;

// export const getUserData = async (userId) => {
//     const userDocRef = doc(firestore, "datos", userId);
//     const docSnapshot = await getDoc(userDocRef);
//     return docSnapshot.data();
// };

// export const createYearData = async (userId) => {
//     const userDocRef = doc(firestore, "datos", userId);
//     const newYearData = {
//         year: year,
//         idCollection: userId,
//         months: [
//             {
//                 id: month,
//                 days: [
//                     {
//                         date: todayDate,
//                         day: weekday,
//                         normal_hours: 9.5,
//                         extra_hours: 0,
//                     },
//                 ],
//             },
//         ],
//     };
//     await setDoc(userDocRef, { data: newYearData });
//     return newYearData;
// };

// export const updateYearData = async (userId, updatedData) => {
//     const userDocRef = doc(firestore, "datos", userId);
//     await setDoc(userDocRef, { data: updatedData }, { merge: true });
// };

// export const updateDataByUserIdAndDate = async (userId, date, updatedData) => {
//     const q = query(
//         collection(firestore, "datos"),
//         where("idCollection", "==", userId),
//         where("date", "==", date)
//     );

//     const querySnapshot = await getDocs(q);

//     if (!querySnapshot.empty) {
//         const docRef = doc(firestore, "datos", querySnapshot.docs[0].id);

//         try {
//             await setDoc(docRef, updatedData, { merge: true });
//             console.log("Documento actualizado con éxito.");
//         } catch (error) {
//             console.error("Error al actualizar el documento:", error);
//         }
//     } else {
//         console.log("No se encontraron documentos para actualizar.");
//     }
// };



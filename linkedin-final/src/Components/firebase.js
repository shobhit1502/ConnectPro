import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDVuGb5DAVJMW8og-tmc0iOJyRMgkqrayo",
//     authDomain: "linkedin-clone-2-e900a.firebaseapp.com",
//     projectId: "linkedin-clone-2-e900a",
//     storageBucket: "linkedin-clone-2-e900a.appspot.com",
//     messagingSenderId: "432937306360",
//     appId: "1:432937306360:web:c6f1d71fdab26ecc9f130d"
// };

const firebaseConfig = {
    apiKey: "AIzaSyB_NIxtJZeIaKfkibkvbxY7_H-W0zI_HDo",
    authDomain: "linkedinclone-c392b.firebaseapp.com",
    projectId: "linkedinclone-c392b",
    storageBucket: "linkedinclone-c392b.appspot.com",
    messagingSenderId: "742805076145",
    appId: "1:742805076145:web:cc59d6a82b7dcf05100a90",
    measurementId: "G-4H5XET67DX"
  };


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

export { db, auth };

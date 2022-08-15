import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { db, storage } from "./firebase-config";


export const addMuroData = async (post) => {
    
    return await setDoc(doc(db, "post", post.usuario), post);
}

export const getMuroData = async (post) => {

    const {docs} = await getDocs(collection(db, "post"))
    const snap =  docs.map(doc => doc.data())
    
    // Ordenamiento alfabeticamente de la lista de empleados
    snap.sort((a, b) => {
        return a.nombre < b.nombre ? -1 : 1
    })

    return snap
}
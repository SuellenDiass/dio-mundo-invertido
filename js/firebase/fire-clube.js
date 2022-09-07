/***agrupar as funções */
/***funçao sera utilizada no botão */
/***a versao tem que ser a mesma do app.js */
/**salva no banco de dados */

import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from './app.js'

// salva um objeto no banco de dados do firestore

export async function subscribeToFireClub(subscribe) {
    const db = getFirestore(app)
    const fireClubeCollection = collection(db, 'fire-clube')
    const docRef = await addDoc(fireClubeCollection, subscribe)
    return docRef.id
}



















 
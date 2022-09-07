/***copiar do banco de dados criado no firebase, valido por 30 dias, e deletar script type */
/**inserir type="module"   no html na import javaScript  para funcionar*/
/***estrutura base para utilizar todas as ferramentas do firebase* */


   //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAY3V5VFj9iNfkYxMrRPFoyVAp5-q0tUM",
    authDomain: "mundo-invertido-8ba88.firebaseapp.com",
    projectId: "mundo-invertido-8ba88",
    storageBucket: "mundo-invertido-8ba88.appspot.com",
    messagingSenderId: "838646174006",
    appId: "1:838646174006:web:ed3b7bb54c7feb6cde6397"
  };

   //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app


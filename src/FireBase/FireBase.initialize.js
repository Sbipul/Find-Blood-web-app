import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

const initAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initAuthentication;
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";

    const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

const registerData = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)

}

const loginData = (email, password) => {
return signInWithEmailAndPassword(auth, email, password)
}


useEffect(() => {

    const userAll = onAuthStateChanged(auth, (user) => {
        setUser(user)
        console.log(user)
  
    })
    return () => userAll;

}, [])

const provider = new GoogleAuthProvider()

const googleReg = () =>{

    return signInWithPopup(auth, provider)
}


const logouter = () => {


    return signOut(auth)
}


    const info = {
        user,
        registerData,
        loginData,
        googleReg,
        logouter


    }

    return (
        <AuthContext.Provider value={info}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
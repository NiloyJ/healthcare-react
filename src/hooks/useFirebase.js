import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init'
initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    // const facebookProvider = new FacebookAuthProvider();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .finally(() => setIsLoading(false))
    }

    // const handleFacebookSignIn = () =>{
    //     signInWithPopup(auth, facebookProvider)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(result.user)
    //     })
    // }

    useEffect( () =>{
       const unsusbcribed =  onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsusbcribed;
    }, [])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() =>{ 

        })
        .finally(() => setIsLoading(false))
    }

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
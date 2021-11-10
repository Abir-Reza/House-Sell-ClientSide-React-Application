import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword,onAuthStateChanged, updateProfile, signOut} from "firebase/auth";


import initializeAuthentication from '../FireBase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError,setAuthError] = useState(''); 

    const auth = getAuth();

    const registerUser = (email,password,name,history) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
       
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);

        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

        history.replace('/');
    
        })
        .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message); 
            
          })
          .finally(()=> setIsLoading(false));
    }


    const loginUser = (email,password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            // const errorCode = error.code;
            setAuthError(error.message); 
            
          })
        .finally(()=> setIsLoading(false));
    }

        //observe user state
        useEffect( ()=> {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user);
                } 
                else {
                    setUser({});
                }
                setIsLoading(false);
              });
    
              return () => unsubscribe;
        },[])

        
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }
    return{
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        // signInWithGoogle,
        logOut
    }
};

export default useFirebase;
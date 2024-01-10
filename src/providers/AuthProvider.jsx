
import  {  createContext,  useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import userAxiosPublic from '../hooks/userAxiosPublic';

const auth = getAuth(app);
export const AuthContext=createContext(null)
const AuthProvider=({children})=>{

  const [user ,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  const googleProvider=new GoogleAuthProvider();
  const axiosPublic=userAxiosPublic()

  const createuser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile =(name,photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
    
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
      console.log('user',currentUser)
      if(currentUser){
        const userInfo={email:currentUser.email}
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
          }
        })
      }
      else{
        // do something
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    })
    return () =>{
      return unsubscribe
    }
  },[])
  const authInfo={
    user,
    loading,
    createuser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;